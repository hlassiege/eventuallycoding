<template>
    <div>
        <keep-alive>
            <BlogSectionHeader :current-lang="currentLang" />
        </keep-alive>
        <div class="flex flex-col items-start sm:flex-row pt-12">
            <BlogFilterBar :current-tag="currentTag" />
            <div>
                <BlogContentLanguageSwitcher
                    lang-switch="EN"
                    url-switch="/blog"
                />

                <div
                    class="pt-16 grid xl:grid-cols-5 lg:grid-cols-3 gap-x-3 md:grid-cols-2 sm:grid-cols-1 items-stretch m-3"
                >
                    <BlogCard
                        v-for="article in articles"
                        :key="article.title"
                        :current-lang="currentLang"
                        :current-tag="currentTag"
                        :title="article.title"
                        :img="'/covers/' + article.cover"
                        :description="article.description"
                        :lang="article.language"
                        :date="article.date"
                        :tags="article.tags"
                        :path="article._path"
                        @change-current-tag="(tag) => (currentTag = tag)"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { BlogSectionHeader, BlogFilterBar } from "#components";
import siteMetaInfo from "../../../data/siteMetaData";
const route = useRoute();
const currentTag = ref<string>(
    Array.isArray(route.query.tag)
        ? (route.query.tag[0] as string)
        : route.query.tag || ""
);
const currentLang = ref<string>("fr");

const { data: articles } = await useAsyncData("articleList", () => {
    const articles = queryContent("articles")
        .only([
            "title",
            "listed",
            "description",
            "language",
            "img",
            "slug",
            "tags",
            "author",
            "date",
            "draft",
            "_path",
            "cover",
        ])
        .where({ language: { $ne: "en" }, listed: { $ne: false } })
        .sort({ date: -1 })
        .find();
    return articles;
});

useHead({
    title: siteMetaInfo.title,
    meta: [
        {
            hid: "description",
            name: "description",
            content: siteMetaInfo.description,
        },
        { name: "robots", content: "noindex" },
    ],
});
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
