<template>
    <div>
        <keep-alive>
            <HeroSection>
                <template #content>
                    <div class="flex flex-col items-center justify-center">
                        <div class="p-3 text-white rounded">
                            <div class="flex items-center">
                                <NuxtImg
                                    :src="siteMetaInfo.author_image"
                                    loading="lazy"
                                    alt="me"
                                    class="shadow-xl md:h-50 md:w-50 h-40 w-40 rounded-full hover:shadow-amber-700 hover:-translate-y-1 hover:shadow-2xl transition-all mr-10"
                                />
                                <div class="text-left text-white">
                                    <p
                                        class="name rounded-xl font-bold p-2 tracking-wider"
                                    >
                                        <span class="text-2xl">Hi, I'm </span>
                                        <span class="font-extrabold text-2xl">{{
                                            siteMetaInfo.author
                                        }}</span>
                                    </p>
                                    <AuthorIntro></AuthorIntro>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </HeroSection>
        </keep-alive>
        <div class="mt-10">
            <div class="">
                <div class="px-8">
                    <section
                        class="mt-20 w-5/6 lg:w-3/4 md:w-4/5 mx-auto lg:px-4 px-0"
                    >
                        <div
                            class="font-montserrat font-medium text-4xl mb-10 text-slate-800 mt-20 flex justify-between items-center"
                        >
                            <h2>
                                Last blog posts
                                <small>({{ currentLang }})</small>
                            </h2>
                            <div class="text-sm">
                                <span class="ml-3 text-gray-500"
                                    >Switch to

                                    <NuxtLink
                                        class="underline decoration-red-400 decoration-4 underline-offset-8 text-sm text-gray-500"
                                        to="/"
                                        :external="true"
                                        >English</NuxtLink
                                    >
                                </span>
                            </div>
                        </div>

                        <div
                            class="pt-4 grid lg:grid-cols-3 gap-x-8 md:grid-cols-2 sm:grid-cols-1 items-stretch m-3"
                        >
                            <BlogCard
                                v-for="article in articles"
                                :key="article.title"
                                :title="article.title"
                                :img="'/' + article.cover"
                                :description="article.description"
                                :current-lang="currentLang"
                                :lang="article.language"
                                :date="article.date"
                                :tags="article.tags"
                                :path="article._path"
                            />

                            <div class="text-center mt-16 lg:hidden block">
                                <NuxtLink
                                    class="relative inline-block group focus:outline-none focus:ring"
                                    to="/blog"
                                    aria-label="Read more blog posts"
                                >
                                    <span
                                        class="absolute inset-0 transition-transform translate-x-1.5 translate-y-1.5 bg-pink-300 group-hover:translate-y-0 group-hover:translate-x-0"
                                    ></span>

                                    <span
                                        class="relative inline-block px-8 py-3 text-sm font-bold tracking-widest text-black uppercase border-2 border-current group-active:text-opacity-75"
                                    >
                                        Read more blog posts
                                    </span>
                                </NuxtLink>
                            </div>
                        </div>

                        <div class="text-center mt-10 lg:block hidden">
                            <NuxtLink
                                class="relative inline-block group focus:outline-none focus:ring"
                                to="/blog"
                                aria-label="Read more blog posts"
                            >
                                <span
                                    class="absolute inset-0 transition-transform translate-x-1.5 translate-y-1.5 bg-pink-300 group-hover:translate-y-0 group-hover:translate-x-0"
                                ></span>

                                <span
                                    class="relative inline-block px-8 py-3 text-sm font-bold tracking-widest text-black uppercase border-2 border-current group-active:text-opacity-75"
                                >
                                    Read more blog posts
                                </span>
                            </NuxtLink>
                        </div>
                    </section>

                    <hr class="mt-20 lg:w-3/4 w-full mx-auto" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { BlogCard, HeroSection } from "#components";
import siteMetaInfo from "../../data/siteMetaData";
const currentLang = ref<string>("fr");
const { data: articles } = await useAsyncData("indexarticles", () =>
    queryContent("articles")
        .only([
            "listed",
            "title",
            "description",
            "img",
            "slug",
            "tags",
            "language",
            "author",
            "date",
            "_path",
            "cover",
        ])
        .where({ language: { $ne: "en" }, listed: { $ne: false } })
        .limit(6)
        .sort({ date: -1 })
        .find()
);

useHead({
    title: siteMetaInfo.title,
    meta: [
        {
            hid: "description",
            name: "description",
            content: siteMetaInfo.description,
        },
        {
            hid: "og:description",
            name: "og:description",
            content: siteMetaInfo.description,
        },
        { hid: "og:type", name: "og:type", content: "article" },
        { hid: "og:title", name: "og:title", content: "A propos de l'auteur" },
        {
            hid: "og:url",
            name: "og:url",
            content: "https://eventuallycoding.com",
        },
        { name: "twitter:text:title", content: "A propos de l'auteur" },
        { name: "twitter:card", content: "summary" },
    ],
});
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
.name {
    background: rgb(119 24 24 / 16%);
    color: #c27070;
}
</style>
