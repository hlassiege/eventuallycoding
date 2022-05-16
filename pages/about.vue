<template>
  <div>
    <section class="flex items-center justify-center h-128 bg-transparent">
      <canvas id="c" class="-z-10 absolute w-full h-128 block"></canvas>

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

      <div class="clip-ellipse absolute top-124  rotate-180">
      </div>

    </section>


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
import heroThree from "@/plugins/hero-three"

export default {
  data() {
    return {
      siteMetaInfo: siteMetaInfo,
      events: [
        {
          event: "Devoxx France",
          title: "Développ(eur|euse) Senior avec 6 ans d’expérience, et après ?",
          location: "Paris",
          date: "26/04/2022",
          link: "https://www.youtube.com/watch?v=X5MYKj1C2qM",
        },
        {
          event: "Codeurs en Seine, French Tech Normandy, NWS et LeVillageByCA",
          title: "Que veulent les devs à l’ère post covid",
          location: "Rouen",
          date: "24/11/2021",
          link: "https://youtu.be/igs5RjxnYJ4?t=3104",
        },
        {
          event: "Podcast tout se transforme",
          title: "Freelances : vers une hybridation du travail ?",
          location: "Lyon",
          date: "18/02/2021",
          link: "https://toutsetransforme.fr/le-podcast",
        },
        {
          event: "Silicon.fr",
          title: "Administrer et superviser son infrastructure IT dans un monde multicloud",
          location: "Paris",
          date: "04/02/2021",
          link: "https://www.silicon-events.fr/journee-du-cloud/session/a6e8a4b1-a13f-eb11-b9ee-000d3a20ef5e",
        },
        {
          event: "France is AI",
          title: "Getting smarter on talent acquisition",
          location: "Online",
          date: "16/11/2020",
          link: "https://www.youtube.com/watch?v=3Dyfpv3fnAc&t=20045s",
        },
        {
          event: "Podcast Tech Rocks",
          title: "Paroles de Tech Leaders",
          location: "Online",
          date: "05/10/2020",
          link: "https://podcast.ausha.co/tech-rocks/hugo-lassiege-malt-1-1-s02ep17",
        },
        {
          event: "Le Podcast Tech - Lilian",
          title: "CTO de Malt : comment tout a commencé…",
          location: "Online",
          date: "11/05/2020",
          link: "https://shows.acast.com/les-podcasts-de-lilian/episodes/cto-de-malt-comment-tout-a-commence",
        },
        {
          event: "Meetup Tech.Rocks",
          title: "Comment manager en remote ? Le replay",
          location: "Online",
          date: "19/04/2020",
          link: "https://www.tech.rocks/blog/meetup-tech-rocks-comment-manager-en-remote-le-replay",
        },
        {
          event: "Mixit",
          title: "Table-ronde – « Entrepreneuriat : comment se lancer dans l’aventure ? ",
          location: "Lyon",
          date: "24/05/2019",
          link: "https://mixitconf.org/2019/table-ronde-entrepreneuriat-comment-se-lancer-dans-l-aventure-",
        },
        {
          event: "Elasticsearch Barcelona Meetup",
          title: "Elasticsearch at Malt ",
          location: "Barcelona",
          date: "25/04/2019",
          link: "https://twitter.com/louisemarliere/status/1121487046948917248?lang=fr",
        },
        {
          event: "Elasticsearch Paris Meetup",
          title: "Elasticsearch at Malt ",
          location: "Paris",
          date: "22/01/2019",
          link: "https://www.elastic.co/fr/videos/the-different-use-cases-of-elasticsearch-at-malt",
        },
        {
          event: "Human Talks",
          title: "FROM 0 TO 1 : ÉVOLUTION D’UNE STACK TECHNIQUE SUR 5 ANS",
          location: "Lyon",
          date: "09/05/2017",
          link: "https://humantalks.com/talks/1068-from-0-to-1-evolution-d-une-stack-technique-sur-5",
        },
        {
          event: "Human Talks",
          title: "Demain, tous freelances ?",
          location: "Lyon",
          date: "10/09/2013",
          link: "https://humantalks.com/talks/243-tous-freelances",
        },
        {
          event: "Human Talks",
          title: "Epic fail",
          location: "Lyon",
          date: "08/10/2014",
          link: "https://humantalks.com/talks/256-epic-fail",
        },
        {
          event: "Human Talks",
          title: "Déployez votre application Spring-boot avec Ansible",
          location: "Lyon",
          date: "10/02/2014",
          link: "https://humantalks.com/talks/576-deployez-votre-application-spring-boot-avec-ansibl",
        },
        {
          event: "Devoxx",
          title: "BOF – Les NoSSII",
          location: "Paris",
          date: "28/03/2013",
          link: "https://blog.ninja-squad.com/2013/03/22/nossii-devoxx-france/",
        },
        {
          event: "Devoxx",
          title: "Quickie – localizeyourapps",
          location: "Paris",
          date: "13/05/2012",
          link: "https://fr.slideshare.net/hlassiege/localizeyourapps-devoxx2012",
        },
      ],
    };
  },
  mounted() {
    heroThree();
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
