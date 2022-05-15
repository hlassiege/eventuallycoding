<template>
  <div>
    <section class="flex items-center justify-center h-128 bg-transparent">
      <canvas id="c" class="-z-10 absolute w-full h-128 block"></canvas>

      <div class="clip-ellipse absolute top-124  rotate-180">
      </div>

      <img
        :src="'/images/covers/'+article.cover"
        :alt="article.title"
        class="absolute top-96 w-96 -translate-y-32"
      />

    </section>
  <div class="px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0 mt-10">
    <p class="text-center font-bold my-5 text-indigo-500">
      {{ formatDate(article.date) }}
    </p>
    <h1 class="text-4xl text-gray-700 font-extrabold mb-10 text-center">
      {{ article.title }}
    </h1>
    <div class="flex items-center font-medium mt-6 sm:mx-3 justify-center">
      <nuxt-img
        :src="siteMetadata.author_image"
        loading="lazy"
        alt=""
        class="mr-3 w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800"
      />
      <div>
        <div class="text-slate-900 dark:text-slate-200">
          {{ siteMetadata.author }}
        </div>
        <a
          target="_blank"
          :href="siteMetadata.twitter + siteMetadata.twitter_user"
          class="text-sky-500 hover:text-sky-600 dark:text-sky-400"
        >
          @{{ siteMetadata.twitter_user }}
        </a>
      </div>
    </div>
    <img
      class="mx-auto w-4/5 my-10 rounded-md drop-shadow-sm"
      :src="article.image"
    />

    <nuxt-content class="prose  min-w-full p-10 mx-auto" :document="article" />

    <hr class="mb-12">

    <div>

      <span>
      Partager sur :
      </span>
      <div class="mt-4">

        <a :href="'https://facebook.com/sharer/sharer.php?u='+ siteMetadata.siteUrl +  article.slug" target="_blank" rel="noopener" aria-label="">
          <button type="button" class="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-3 py-3 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
            <svg class="w-6 h-6" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"></path></svg>
          </button>
        </a>

        <a :href="'https://twitter.com/intent/tweet?url=' + siteMetadata.siteUrl +  article.slug + '&text=' + article.title +'&via='+ siteMetadata.twitter_user" target="_blank" title="Share on Twitter" rel="noopener noreferrer">
        <button type="button" class="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-3 py-3 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2">
          <svg class="w-6 h-6" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z"></path></svg>
        </button>
        </a>





      </div>
    </div>


    <div id="hyvor-talk-view"></div>
    <script type="text/javascript">
      var HYVOR_TALK_WEBSITE = 7045;
      var HYVOR_TALK_CONFIG = {
        url: false,
        id: window.location.pathname + '/'
      };
    </script>
    <script async type="text/javascript" src="//talk.hyvor.com/web-api/embed.js"></script>
  </div>



  </div>
</template>
<script>
import Prism from "~/plugins/prism";
import siteMetaInfo from "@/data/sitemetainfo";
import * as THREE from "three";
export default {
  data() {
    return {
      title: 0,
      siteMetadata: siteMetaInfo,
    };
  },
  async asyncData({ $content, params}) {
    const article = await $content("articles", params.pathMatch, { deep: true }).fetch();
    return {
      article: article,
    };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
  mounted() {
    Prism.highlightAll();
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
          map: loader.load("/sp1.png"),
          transparent: true,
          color: "#0e6594"
        }),
        new THREE.PointsMaterial({
          size: 0.075,
          map: loader.load("/sp2.png"),
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
  head() {
    return {
      title: this.article.title + " | " + siteMetaInfo.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.article.description,
        },
        { hid: "og:description", name: "og:description", content: this.article.description },
        { hid: "og:type", name: "og:type", content: "article" },
        { hid: "og:title", name: "og:title", content: this.article.title },
        { hid: "og:url", name: "og:url", content: "https://eventuallycoding.com" + this.article.path.replace('/article', '') },
        { hid: "og:image", name: "og:image", content: 'https://eventuallycoding.com' + '/images/covers/'+ this.article.cover },
        { name: "og:image:alt", content: this.article.title },
        { name: "twitter:text:title", content: this.article.title },
        { name: "twitter:image", content: 'https://eventuallycoding.com' + '/images/covers/'+ this.article.cover },
        { name: "twitter:card", content: 'summary'  },
        { name: "article:published_time", content: this.article.createdAt  },
        { name: "article:article:modified_time", content: this.article.updatedAt  },
        { name: "article:article:tag", content: this.article.tags ? this.article.tags.toString() : "" },

      ],
      link: [
        { rel: "canonical", href: "https://eventuallycoding.com" + this.article.path.replace('/article', '') },
      ],
    };
  },
};
</script>
<style>
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.nuxt-content p {
  margin-bottom: 20px;
}
.clip-ellipse {
  clip-path: ellipse(60% 100% at 50% 0%);
  @apply bg-white;
  height: 100px;
  width: 100%;

}

</style>
