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
    </div>


  </div>
</template>

<script>

import siteMetaInfo from "@/data/sitemetainfo";
import * as THREE from "three";

export default {
  data() {
    return {
      siteMetaInfo: siteMetaInfo,
      siteMetadata: siteMetaInfo,

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
  async asyncData({$content, params}) {
    const article = await $content("resources")
      .where({ title: 'Ressources' })
      .fetch();
    return {
      article: article[0],
    };
  },
  head() {
    return {
    title: "Ressources | " + siteMetaInfo.title,
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Voici une liste de ressources assez variés que j'utilise fréquement ou qui m'ont influencé.",
      },
      { hid: "og:description", name: "og:description", content: "Voici une liste de ressources assez variés que j'utilise fréquement ou qui m'ont influencé." },
      { hid: "og:type", name: "og:type", content: "article" },
      { hid: "og:title", name: "og:title", content: this.article.title },
      { hid: "og:url", name: "og:url", content: "https://eventuallycoding.com/resources" },
      { hid: "og:image", name: "og:image", content: 'https://eventuallycoding.com' + '/images/covers/'+ this.article.cover },
      { name: "og:image:alt", content: this.article.title },
      { name: "twitter:text:title", content: this.article.title },
      { name: "twitter:image", content: 'https://eventuallycoding.com' + '/images/covers/'+ this.article.cover },
      { name: "twitter:card", content: 'summary'  },

    ],
    link: [
      { rel: "canonical", href: "https://eventuallycoding.com/resources" },
    ],
    };
  },
};
</script>

<style lang="scss" scoped>
.clip-ellipse {
  clip-path: ellipse(60% 100% at 50% 0%);
  @apply bg-white;
  height: 100px;
  width: 100%;

}

</style>
