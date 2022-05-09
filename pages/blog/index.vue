<template>
  <div class="flex flex-col items-start sm:flex-row pt-12 bg-slate-100">
    <aside class="hidden px-6 py-6 space-y-8 sm:block w-[200px]" aria-label="Sidebar">
      <div class="">
        <div>
          <h3 class="text-lg font-medium text-gray-700">
            Tags :
          </h3>
        </div>
        <div class="w-full">
          <div class="flex flex-wrap -mx-2">
            <div class="px-1 mt-2" v-for="tag in allTags" :key="tag">
              <button tabindex="-1"
                      class="flex items-stretch text-sm transition duration-150 ease-out border border-gray-700 outline-none group lg:hover:border-gray-400">
                <div class="flex px-3 py-1 text-left text-slate-600">
                  {{ tag }}
                </div>
              </button>
            </div>

          </div>
        </div>
      </div>
    </aside>
    <div class="pt-16 grid xl:grid-cols-5 lg:grid-cols-3 gap-x-3 md:grid-cols-2 sm:grid-cols-1 items-stretch m-3">

      <BlogCard v-for="article in articles"
                :key="article.title"
                :title="article.title"
                :img="article.img"
                :description="article.description"
                :date="article.date"
                :slug="article.slug"
                :tags="article.tags"
                :path="article.path"
      />
    </div>
  </div>
</template>

<script>
import siteMetaInfo from "@/data/sitemetainfo";

export default {
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
      ])
      .sortBy("date", "desc");
    if (route.query.search) {
      looker = looker.search(route.query.search);
    }

    const articles = await looker.fetch();

    return {
      articles, allTags
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

<style></style>
