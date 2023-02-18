<template>
  <div>
    <keep-alive>
      <HeroSection>
          <template v-slot:content>

              <div class="flex flex-col items-center justify-center">
                  <div class="p-3 text-white rounded ">
                      <div class="flex items-center">
                          <img
                              :src="siteMetaInfo.author_image"
                              loading="lazy"
                              alt="me"
                              class="shadow-xl md:h-50 md:w-50 h-40 w-40 rounded-full hover:shadow-amber-700 hover:-translate-y-1 hover:shadow-2xl transition-all mr-10"
                          />
                          <div class="text-left">
                              <p class="name rounded-xl font-bold p-2 tracking-wider">
                                  <span class="font-extrabold text-2xl font-bruno">Writing</span>
                              </p>
                              <div class="mb-6 text-gray-300  w-full mx-auto ">
                                  <p class="mt-8 mb-4 md:text-xl text-base font-mark">
                                      Here you can browse my thoughts on different topics, <br/>
                                      mostly on Software Development, <br/>
                                      Entrepreneurship and Startups.<br/>

                                  </p>
<!--                                  <p class="mt-8 mb-4 md:text-xl text-base font-mark">-->
<!--                                      I'm also the author of "Impactful Software Development" <br/>-->
<!--                                      that you can read for free here.-->
<!--                                  </p>-->
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </template>
      </HeroSection>
    </keep-alive>
    <div class="flex flex-col items-start sm:flex-row pt-12 bg-slate-100">
      <aside class="hidden px-6 py-6 space-y-8 sm:block w-[200px]" aria-label="Sidebar">
        <div class="">

          <div v-if="currentTag">
            <h3 class="text-lg font-medium text-gray-700">
              Filter:
            </h3>
          </div>

          <a v-if="currentTag" @click.prevent="currentTag=''"
             class="inline-flex items-center mt-8 mb-8 flex px-3 py-1 text-left text-slate-600 flex items-stretch text-sm transition duration-150 ease-out border border-gray-700 outline-none group lg:hover:border-gray-400"
             href="#">
            <span class="text-sm font-medium">
              {{ currentTag }} &nbsp;
            </span>

            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 my-auto right-0" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </a>


          <div>
            <h3 class="text-lg font-medium text-gray-700">
              Tags :
            </h3>
          </div>
          <div class="w-full">
            <div class="flex flex-wrap -mx-2">

              <a :href="'/blog?tag='+tag" v-for="tag in allTags" :key="tag" @click.prevent="currentTag=tag">
                <div class="px-1 mt-2">
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

          <BlogCard @changeCurrentTag="(tag) => currentTag = tag"
                    v-for="article in articles"
                    :currentTag="currentTag"
                    :key="article.title"
                    :title="article.title"
                    :img="'/covers/'+article.cover"
                    :description="article.description"
                    :date="article.date"
                    :tags="article.tags"
                    :path="article._path"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import HeroSection from "../../components/HeroSection";
import siteMetaInfo from "../../data/siteMetaData";
const route = useRoute();
const currentTag = ref<string>(route.query.tag || '');

const { data: allTags } = await useAsyncData('blogindex', async () => {
    const tags = await queryContent('articles')
        .only(["tags"])
        .find()

    let allTags: string[] = [];
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

    return allTags;
});

const { data: articles } = await useAsyncData('articleList', () => {
    const articles = queryContent("articles")
        .only([
            "title",
            "description",
            "img",
            "slug",
            "tags",
            "author",
            "date",
            "draft",
            "_path",
            "cover"
        ])
        .sort({"date": -1})
        .find();
    return articles;
});

useHead(
    {
      title: siteMetaInfo.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: siteMetaInfo.description,
        },
        {name: "robots", content: "noindex"},
      ],
    }
)
</script>

<style lang="scss" scoped>
.clip-ellipse {
  clip-path: ellipse(60% 100% at 50% 0%);
  @apply bg-slate-100;
  height: 100px;
  width: 100%;

}
.name {
    background: rgb(125 227 196 / 16%);
    color: #53cfd4;
}

</style>
