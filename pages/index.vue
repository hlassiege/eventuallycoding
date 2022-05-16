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

    <section class="mt-20 w-5/6 lg:w-3/4 md:w-4/5 mx-auto px-4">
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
import BlogCard from "@/components/BlogCard";
import BlogCardHorizontal from "@/components/BlogCardHorizontal";
import heroThree from "@/plugins/hero-three"

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
    heroThree();
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
      {
        hid: "description",
        name: "description",
        content: siteMetaInfo.description,
      },
    ],
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
