<template>
  <div>
    <keep-alive>
    <HeroSection>
      <template v-slot:content>
        <img
          :src="'/images/covers/'+article.cover"
          :alt="article.title"
          class="absolute top-96 w-96 -translate-y-32"
        />
      </template>
    </HeroSection>
    </keep-alive>

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
import HeroSection from "@/components/HeroSection";

export default {
  components: {HeroSection},
  data() {
    return {
      siteMetaInfo: siteMetaInfo,
      siteMetadata: siteMetaInfo,

    };
  },

  async asyncData({$content}) {
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
