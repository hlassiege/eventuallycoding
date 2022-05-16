<template>
  <div>
    <section class="flex items-center justify-center h-128 bg-transparent">
      <canvas id="c" class="-z-10 absolute w-full h-128 block"></canvas>

      <div class="p-5 text-white rounded ">
        <div class="text-7xl font-bruno ">EventuallyCoding</div>

      </div>

      <div class="clip-ellipse absolute top-124  rotate-180">
      </div>

    </section>
  <div class="flex flex-col items-start sm:flex-row pt-12 bg-slate-100">
    <aside class="hidden px-6 py-6 space-y-8 sm:block w-[200px]" aria-label="Sidebar">
      <div class="">

        <div v-if="currentTag || currentSearch">
          <h3 class="text-lg font-medium text-gray-700">
            Filter:
          </h3>
        </div>

        <a v-if="currentSearch" @click.prevent="removeFilter"
           class="inline-flex items-center mt-8 mb-8 flex px-3 py-1 text-left text-slate-600 flex items-stretch text-sm transition duration-150 ease-out border border-gray-700 outline-none group lg:hover:border-gray-400"
           href="#">
        <span class="text-sm font-medium">
          {{ currentSearch }} &nbsp;
        </span>

          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 my-auto right-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </a>

        <a v-if="currentTag" @click.prevent="removeFilter"
           class="inline-flex items-center mt-8 mb-8 flex px-3 py-1 text-left text-slate-600 flex items-stretch text-sm transition duration-150 ease-out border border-gray-700 outline-none group lg:hover:border-gray-400"
           href="#">
        <span class="text-sm font-medium">
          {{ currentTag }} &nbsp;
        </span>

          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 my-auto right-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </a>



        <div>
          <h3 class="text-lg font-medium text-gray-700">
            Tags :
          </h3>
        </div>
        <div class="w-full">
          <div class="flex flex-wrap -mx-2">

            <a :href="'/blog?tag='+tag" v-for="tag in allTags" :key="tag" >
            <div class="px-1 mt-2" >
              <button tabindex="-1"
                      class="flex items-stretch text-sm transition duration-150 ease-out border border-gray-700 outline-none group lg:hover:border-gray-400">
                <div class="flex px-3 py-1 text-left text-slate-600">
                  #{{ tag }}
                </div>
              </button>
            </div>
            </a>

          </div>
        </div>
      </div>
    </aside>
    <div>
      <div class="font-montserrat font-medium text-center text-4xl text-slate-800 pt-[60px] underline
      decoration-red-400 decoration-4 underline-offset-8 -mt-16">
        Blog
      </div>
    <div class="pt-16 grid xl:grid-cols-5 lg:grid-cols-3 gap-x-3 md:grid-cols-2 sm:grid-cols-1 items-stretch m-3">


      <BlogCard v-for="article in articles"
                :key="article.title"
                :title="article.title"
                :img="'/covers/'+article.cover"
                :description="article.description"
                :date="article.date"
                :slug="article.slug"
                :tags="article.tags"
                :path="article.path"
      />
    </div>
    </div>
  </div>
  </div>
</template>

<script>
import siteMetaInfo from "@/data/sitemetainfo";
import * as THREE from "three";

export default {
  data() {
    return {
      currentTag : this.$route.query.tag,
      currentSearch : this.$route.query.search
    }
  },
  methods: {
    removeFilter() {
      window.location.href = "/blog";
    }
  },

  async asyncData({$content, params, route}) {
    const tags = await $content("articles", {deep: true}, params.slug)
      .only([
        "tags",
      ])
      .fetch();
    let allTags = [];
    tags.forEach(tag => {
      if ("tags" in tag) {
        tag.tags.forEach(tag => {
          if (!allTags.includes(tag)) {
            allTags.push(tag);
          }
        });
      }
    });
    allTags.sort()

    let looker = $content("articles", {deep: true}, params.slug)
      .only([
        "title",
        "description",
        "img",
        "slug",
        "tags",
        "author",
        "date",
        "draft",
        "path",
        "cover"
      ])
      .sortBy("date", "desc");
    if (route.query.search) {
      looker = looker.search(route.query.search);
    }
    if (route.query.tag) {
      looker = looker.where( {tags: { $contains: route.query.tag }} );
    }

    const articles = await looker.fetch();

    return {
      articles, allTags
    };
  },
  head: {
    title: siteMetaInfo.title,
    meta: [
      {
        hid: "description",
        name: "description",
        content: siteMetaInfo.description,
      },
      { name: "robots", content: "noindex" },
    ],
  },
  mounted() {
    const canvas = document.getElementById("c");
    document.addEventListener("DOMContentLoaded", () => {
      canvas.style.opacity = 1;
    });

    const getRandomParticlePos = (particleCount) => {
      const arr = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount; i++) {
        arr[i] = (Math.random() - 0.5) * 10;
      }
      return arr;
    };
    const resizeRendererToDisplaySize = (renderer) => {
      const canvas = renderer.domElement;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const needResize = canvas.width !== width || canvas.height !== height;
      // resize only when necessary
      if (needResize) {
        //3rd parameter `false` to change the internal canvas size
        renderer.setSize(width, height, false);
      }
      return needResize;
    };

// mouse
    let mouseX = 0;
    let mouseY = 0;
    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    const main = () => {
      const canvas = document.getElementById("c");
      const renderer = new THREE.WebGLRenderer({canvas});
      renderer.setClearColor(new THREE.Color("#202b3d"));
      const scene = new THREE.Scene();

      // light source
      const color = 0xffffff;
      const intensity = 1;
      const light = new THREE.DirectionalLight(color, intensity);
      light.position.set(-1, 2, 4);
      scene.add(light);

      // camera
      const fov = 75,
        aspect = 2,
        near = 1.5,
        far = 5;
      const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
      camera.position.z = 2;

      // Geometry
      const geometrys = [new THREE.BufferGeometry(), new THREE.BufferGeometry()];

      geometrys[0].setAttribute(
        "position",
        new THREE.BufferAttribute(getRandomParticlePos(350), 3)
      );
      geometrys[1].setAttribute(
        "position",
        new THREE.BufferAttribute(getRandomParticlePos(1500), 3)
      );

      const loader = new THREE.TextureLoader();

      // material
      const materials = [
        new THREE.PointsMaterial({
          size: 0.05,
          map: loader.load("sp1.png"),
          transparent: true,
          color: "#0e6594"
        }),
        new THREE.PointsMaterial({
          size: 0.075,
          map: loader.load("sp2.png"),
          transparent: true
          // color: "#0000ff"
        })
      ];

      const starsT1 = new THREE.Points(geometrys[0], materials[0]);
      const starsT2 = new THREE.Points(geometrys[1], materials[1]);
      scene.add(starsT1);
      scene.add(starsT2);

      const render = (time) => {
        // time *= 0.001; //in seconds

        if (resizeRendererToDisplaySize(renderer)) {
          const canvas = renderer.domElement;
          // changing the camera aspect to remove the strechy problem
          camera.aspect = canvas.clientWidth / canvas.clientHeight;
          camera.updateProjectionMatrix();
        }

        starsT1.rotation.y = 0.00005 * time;
        starsT1.rotation.x = 0.00005 * time;
        starsT2.rotation.y = 0.00005 * time;
        starsT2.rotation.x = 0.00005 * time;

        // Re-render the scene
        renderer.render(scene, camera);
        // loop
        requestAnimationFrame(render);
      };
      requestAnimationFrame(render);
    };
    main();


  },
};
</script>

<style lang="scss" scoped>
.clip-ellipse {
  clip-path: ellipse(60% 100% at 50% 0%);
  @apply bg-slate-100;
  height: 100px;
  width: 100%;

}

</style>
