<template>
  <div>
    <keep-alive>
      <HeroSection>
        <template v-slot:content>

          <div class="flex flex-col items-center justify-center">

            <div class="p-5 text-white rounded ">
              <div class="lg:text-7xl md:text-5xl text-2xl font-bruno ">
                <span class="dynamic-letters">Eventually Coding</span></div>
            </div>


            <div class="p-3 text-white rounded ">
              <div class="md:block flex justify-center items-center">
                <img
                  :src="siteMetaInfo.author_image"
                  loading="lazy"
                  alt="me"
                  class="shadow-xl md:h-60 md:w-60 h-40 w-40 rounded-full hover:shadow-amber-700 hover:-translate-y-1 hover:shadow-2xl transition-all"
                />
              </div>
              <div class="text-center">
                {{ siteMetaInfo.author }}
              </div>

            </div>
          </div>
        </template>
      </HeroSection>
    </keep-alive>
    <div class="mt-10">
      <div class="">
        <div class="px-8">
          <AuthorIntro></AuthorIntro>

          <hr class="mt-20">

          <section class="mt-20 w-5/6 lg:w-3/4 md:w-4/5 mx-auto lg:px-4 px-0">
            <div class="font-montserrat font-medium text-4xl mb-10 text-slate-800 mt-20">
              <h2>Derniers billets</h2>
            </div>

            <div class="pt-4 grid lg:grid-cols-3 gap-x-8 md:grid-cols-2 sm:grid-cols-1 items-stretch m-3">

              <BlogCard
                        v-for="article in articles"
                        :key="article.title"
                        :title="article.title"
                        :img="'/covers/'+article.cover"
                        :description="article.description"
                        :date="article.date"
                        :tags="article.tags"
                        :path="article._path"
              />

              <div class="text-center mt-16 lg:hidden block">
                <NuxtLink class="relative inline-block group focus:outline-none focus:ring" to="/blog">
                  <span class="absolute inset-0 transition-transform translate-x-1.5 translate-y-1.5 bg-pink-300 group-hover:translate-y-0 group-hover:translate-x-0"></span>

                  <span class="relative inline-block px-8 py-3 text-sm font-bold tracking-widest text-black uppercase border-2 border-current group-active:text-opacity-75">
                    En lire plus
                  </span>
                </NuxtLink>
              </div>
            </div>

            <div class="text-center mt-10 lg:block hidden">
              <NuxtLink class="relative inline-block group focus:outline-none focus:ring" to="/blog">
                <span class="absolute inset-0 transition-transform translate-x-1.5 translate-y-1.5 bg-pink-300 group-hover:translate-y-0 group-hover:translate-x-0"></span>

                <span class="relative inline-block px-8 py-3 text-sm font-bold tracking-widest text-black uppercase border-2 border-current group-active:text-opacity-75">
                    En lire plus
                </span>
              </NuxtLink>
            </div>


          </section>


          <TimeLine/>

          <hr class="mt-20 lg:w-3/4 w-full mx-auto">

          <div class="mt-20 lg:w-3/4 w-full mx-auto lg:px-4 px-0 mb-10">
            <div class="mb-16 ">
              <h2 class="font-montserrat font-medium text-4xl mb-10 text-slate-800 mt-20">Evènements passés</h2>
            </div>


            <div class="overflow-hidden overflow-x-auto border border-gray-100 rounded">
              <table class="min-w-full text-sm divide-y divide-gray-200">
                <thead>
                <tr class="bg-gray-50">
                  <th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">Evènement</th>
                  <th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">Titre</th>
                  <th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">Lieu</th>
                  <th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">Date</th>
                </tr>
                </thead>

                <tbody class="divide-y divide-gray-100">
                <tr v-for="event in events" :key="event.date + event.title" class="hover:bg-slate-300 transition-colors">
                  <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">{{ event.event }}</td>
                  <td class="px-4 py-2 text-gray-700 whitespace-nowrap">
                    <a :href="event.link" class="text-blue-500 hover:text-blue-700">{{ event.title }}</a>
                  </td>
                  <td class="px-4 py-2 text-gray-700 whitespace-nowrap">{{ event.location }}</td>
                  <td class="px-4 py-2 text-gray-700 whitespace-nowrap">{{ event.date }}</td>
                </tr>
                </tbody>
              </table>
            </div>


          </div>
        </div>
      </div>
    </div>





  </div>
</template>
<script setup lang="ts">
import BlogCard from "../components/BlogCard.vue";
import BlogCardHorizontal from "../components/BlogCardHorizontal";
import HeroSection from "../components/HeroSection";
import dynamicLetters from "../sources/dynamic-letters";
import siteMetaInfo from "../data/sitemetainfo";
import events from "../data/events";
import {onMounted} from "../.nuxt/imports";

const { data: articles } = await useAsyncData('indexarticles', () => queryContent('articles')
    .only([
      "title",
      "description",
      "img",
      "slug",
      "tags",
      "author",
      "date",
      "_path",
      "cover"
    ])
    .limit(3)
    .sort({date : -1})
    .find()
)

onMounted(() => {
  dynamicLetters();
});

useHead({
  title: siteMetaInfo.title,
  meta: [
    {
      hid: "description",
      name: "description",
      content: siteMetaInfo.description,
    },
    { hid: "og:description", name: "og:description", content: siteMetaInfo.description },
    { hid: "og:type", name: "og:type", content: "article" },
    { hid: "og:title", name: "og:title", content: "A propos de l'auteur" },
    { hid: "og:url", name: "og:url", content: "https://eventuallycoding.com" },
    // { hid: "og:image", name: "og:image", content: 'https://eventuallycoding.com' + siteMetaInfo.author_image },
    { name: "twitter:text:title", content: "A propos de l'auteur" },
    // { name: "twitter:image", content: 'https://eventuallycoding.com' +  siteMetaInfo.author_image  },
    { name: "twitter:card", content: 'summary'  },

  ],
})

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
