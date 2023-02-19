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
    <div class="flex flex-col items-start sm:flex-row pt-12 ">
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
          <div class="font-montserrat font-medium text-center text-4xl text-slate-800 pt-[60px] -mt-16">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block" viewBox="0 0 512 512"><path d="M266.3 48.3L232.5 73.6c-5.4 4-8.5 10.4-8.5 17.1v9.1c0 6.8 5.5 12.3 12.3 12.3c2.4 0 4.8-.7 6.8-2.1l41.8-27.9c2-1.3 4.4-2.1 6.8-2.1h1c6.2 0 11.3 5.1 11.3 11.3c0 3-1.2 5.9-3.3 8l-19.9 19.9c-5.8 5.8-12.9 10.2-20.7 12.8l-26.5 8.8c-5.8 1.9-9.6 7.3-9.6 13.4c0 3.7-1.5 7.3-4.1 10l-17.9 17.9c-6.4 6.4-9.9 15-9.9 24v4.3c0 16.4 13.6 29.7 29.9 29.7c11 0 21.2-6.2 26.1-16l4-8.1c2.4-4.8 7.4-7.9 12.8-7.9c4.5 0 8.7 2.1 11.4 5.7l16.3 21.7c2.1 2.9 5.5 4.5 9.1 4.5c8.4 0 13.9-8.9 10.1-16.4l-1.1-2.3c-3.5-7 0-15.5 7.5-18l21.2-7.1c7.6-2.5 12.7-9.6 12.7-17.6c0-10.3 8.3-18.6 18.6-18.6H400c8.8 0 16 7.2 16 16s-7.2 16-16 16H379.3c-7.2 0-14.2 2.9-19.3 8l-4.7 4.7c-2.1 2.1-3.3 5-3.3 8c0 6.2 5.1 11.3 11.3 11.3h11.3c6 0 11.8 2.4 16 6.6l6.5 6.5c1.8 1.8 2.8 4.3 2.8 6.8s-1 5-2.8 6.8l-7.5 7.5C386 262 384 266.9 384 272s2 10 5.7 13.7L408 304c10.2 10.2 24.1 16 38.6 16H454c6.5-20.2 10-41.7 10-64c0-111.4-87.6-202.4-197.7-207.7zm172 307.9c-3.7-2.6-8.2-4.1-13-4.1c-6 0-11.8-2.4-16-6.6L396 332c-7.7-7.7-18-12-28.9-12c-9.7 0-19.2-3.5-26.6-9.8L314 287.4c-11.6-9.9-26.4-15.4-41.6-15.4H251.4c-12.6 0-25 3.7-35.5 10.7L188.5 301c-17.8 11.9-28.5 31.9-28.5 53.3v3.2c0 17 6.7 33.3 18.7 45.3l16 16c8.5 8.5 20 13.3 32 13.3H248c13.3 0 24 10.7 24 24c0 2.5 .4 5 1.1 7.3c71.3-5.8 132.5-47.6 165.2-107.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM187.3 100.7c-6.2-6.2-16.4-6.2-22.6 0l-32 32c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l32-32c6.2-6.2 6.2-16.4 0-22.6z"/></svg>
              <small class="ml-3 text-gray-500 ">Switch to blog posts in </small>
              <a v-if="currentLang==='fr'" class="underline decoration-red-400 decoration-4 underline-offset-8  text-lg text-gray-500"
                 href="/blog?lang=en"
                 @click.prevent="currentLang='en'">EN</a>
              <a v-if="currentLang==='en'" class="underline decoration-red-400 decoration-4 underline-offset-8  text-lg text-gray-500"
                 href="/blog?lang=fr"
                 @click.prevent="currentLang='fr'">FR</a>

          </div>

<!--        <div class="font-montserrat font-medium text-center text-4xl text-slate-800 pt-[60px] underline-->
<!--      decoration-red-400 decoration-4 underline-offset-8 -mt-16">-->
<!--          Blog-->
<!--        </div>-->
        <div class="pt-16 grid xl:grid-cols-5 lg:grid-cols-3 gap-x-3 md:grid-cols-2 sm:grid-cols-1 items-stretch m-3">

          <BlogCard @changeCurrentTag="(tag) => currentTag = tag"
                    v-for="article in articles"
                    :current-lang="currentLang"
                    :currentTag="currentTag"
                    :key="article.title"
                    :title="article.title"
                    :img="'/covers/'+article.cover"
                    :description="article.description"
                    :lang="article.language"
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
const currentLang = ref<string>(route.query.lang || 'fr');

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
            "language",
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
