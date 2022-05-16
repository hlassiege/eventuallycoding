<template>
  <div>
    <keep-alive>
    <HeroSection>
      <template v-slot:content>
        <div class="p-5 text-white rounded ">
          <div class="md:block flex justify-center items-center">
            <nuxt-img
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
      </template>
    </HeroSection>
    </keep-alive>

    <div class="dark:bg-gray-900 mt-12">
      <div class="w-3/4 md:flex mx-auto dark:bg-gray-900">
        <div class="px-8">
          <AuthorIntro></AuthorIntro>

          <hr class="mt-20">
          <!--        <Expertise></Expertise>-->
          <TimeLine/>

          <hr class="mt-20">

          <div class="mt-20">
            <div class="text-center mb-16 ">
              <h2 class="text-2xl underline  decoration-red-400 decoration-4 underline-offset-8 ">Evènements passés</h2>
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
                <tr v-for="event in events" :key="event" class="hover:bg-slate-300 transition-colors">
                  <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">{{ event.event }}</td>
                  <td class="px-4 py-2 text-gray-700 whitespace-nowrap">
                    <nuxt-link :to="event.link" class="text-blue-500 hover:text-blue-700">{{ event.title }}</nuxt-link>
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

<script>

import siteMetaInfo from "@/data/sitemetainfo";
import HeroSection from "@/pages/HeroSection";
import events from "@/data/events";

export default {
  components: {HeroSection},
  data() {
    return {
      siteMetaInfo: siteMetaInfo,
      events: events
    };
  },
  async asyncData({$content, params, route}) {
    const articles = await $content("articles", {deep: true}, params.slug)
      .only([
        "title",
        "description",
        "img",
        "slug",
        "tag",
        "author",
        "date",
        "draft",
        "path",
      ])
      .sortBy("date", "desc")
      .fetch();

    return {
      articles,
    };
  },
  head: {
    title: "A propos de l'auteur | " + siteMetaInfo.title,
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Je m’appelle Hugo. Je suis développeur Web Backend et actuellement CTO et co-fondateur de Malt",
      },
      { hid: "og:description", name: "og:description", content: "Je m’appelle Hugo. Je suis développeur Web Backend et actuellement CTO et co-fondateur de Malt" },
      { hid: "og:type", name: "og:type", content: "article" },
      { hid: "og:title", name: "og:title", content: "A propos de l'auteur" },
      { hid: "og:url", name: "og:url", content: "https://eventuallycoding.com/about" },
      { hid: "og:image", name: "og:image", content: 'https://eventuallycoding.com' + siteMetaInfo.author_image },
      { name: "twitter:text:title", content: "A propos de l'auteur" },
      { name: "twitter:image", content: 'https://eventuallycoding.com' +  siteMetaInfo.author_image  },
      { name: "twitter:card", content: 'summary'  },

    ],
    link: [
      { rel: "canonical", href: "https://eventuallycoding.com/about" },
    ],
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
