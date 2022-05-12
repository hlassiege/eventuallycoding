<template>
  <div>
    <section class="flex items-center justify-center h-128 bg-transparent">
      <canvas id="c" class="-z-10 absolute w-full h-128 block"></canvas>

      <div class="p-5 text-white rounded ">
        <div class="text-7xl font-bruno ">Eventually Coding</div>
        <div class="text-center mt-3">A la fin de l'envoi, je code !</div>

      </div>

      <div class="clip-ellipse absolute top-124  rotate-180">
      </div>

    </section>

    <section class="mt-28 w-5/6 lg:w-3/4 md:w-4/5 mx-auto px-4">
      <div class="font-montserrat font-medium text-center text-4xl mb-10 text-slate-800 pt-[60px] pb-[60px] underline  decoration-red-400 decoration-4 underline-offset-8">
        Derniers billets
      </div>

      <div class=" md:w-3/4 lg:w-1/2 mx-auto grid grid-cols-1 gap-4">

        <BlogCardHorizontal v-for="article in articles"
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

    </section>



  </div>
</template>

<script>
import siteMetaInfo from "@/data/sitemetainfo";
import * as THREE from 'three';
import BlogCard from "@/components/BlogCard";
import BlogCardHorizontal from "@/components/BlogCardHorizontal";

export default {
  components: {
    BlogCard,
    BlogCardHorizontal
  },
  data() {
    return {
      siteMetaInfo: siteMetaInfo,
    };
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
      const renderer = new THREE.WebGLRenderer({ canvas });
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

        starsT1.rotation.y = 0.00005 * time ;
        starsT1.rotation.x = 0.00005 * time ;
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
  async asyncData({ $content, params, route }) {
    const articles = await $content("articles", {deep: true}, params.slug)
      .only([
        "title",
        "description",
        "img",
        "slug",
        "tags",
        "author",
        "date",
        "path",
        "cover"
      ])
      .limit(5)
      .sortBy("date", "desc")
      .fetch();

    return {
      articles,
    };
  },
  head: {
    title: siteMetaInfo.title,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: siteMetaInfo.description,
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
};
</script>

<style lang="scss" scoped>

.writing-vertical {
  writing-mode: vertical-rl;
}

#c {
  transition: opacity 1500ms ease-out;
}

.clip-ellipse {
  clip-path: ellipse(60% 100% at 50% 0%);
  @apply bg-white;
  height: 100px;
  width: 100%;

}
</style>
