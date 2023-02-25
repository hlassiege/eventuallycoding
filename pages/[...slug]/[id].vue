<template>
    <div>
        <div class="flex justify-center">
            <img
                :src="'/images/covers/' + article.cover"
                :alt="article.title"
                class="object-cover w-96"
            />
        </div>
        <div class="px-4 mx-auto sm:px-6 xl:max-w-7xl xl:px-0 mt-10">
            <ArticleHeader :article="article" :site-metadata="siteMetadata" />

            <div class="text-left mx-auto">
                <div class="flex flex-wrap lg:flex-row-reverse py-12">
                    <div
                        v-if="article.body.toc.links.length > 0"
                        class="w-full lg:w-1/4 px-5"
                    >
                        <PageSidebar :toc="article.body.toc.links" />
                    </div>

                    <div
                        class="w-full px-5 max-w-none centered-image"
                        :class="
                            article.body.toc.links.length > 0 ? 'lg:w-3/4 ' : ''
                        "
                    >
                        <ContentRenderer
                            id="nuxtContent"
                            class="prose font-proxima text-sm md:text-xl font-medium min-w-full md:p-10 mx-auto"
                            :value="article"
                        />
                    </div>
                </div>
            </div>

            <EditOnGithub :path="article._path" />

            <hr class="mb-8" />

            <SharingButtons
                :title="article.title"
                :twitter_user="siteMetadata.twitter_user"
                :post-link="postLink"
            />

            <div id="hyvor-talk-view"></div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { HeroSection } from "#components";
import siteMetaInfo from "../../data/siteMetaData";
import { useFormatDateToIso } from "~/composables/useFormatDate";
import { useHyvor } from "~/composables/useHyvor";
import { useYoutubeTwitterEnhancer } from "~/composables/useYoutubeTwitterEnhancer";
import { useExtractSlugFromParams } from "~/composables/useExtractSlugFromParams";
import SharingButtons from "~/components/SharingButtons.vue";
import EditOnGithub from "~/components/EditOnGithub.vue";

const route = useRoute();
const siteMetadata = ref(siteMetaInfo);

const pathMatch = useExtractSlugFromParams(route.params.slug, route.params.id);

const { data: article } = await useAsyncData(pathMatch, async () => {
    const article = await queryContent("articles")
        .where({ _path: pathMatch })
        .findOne();
    return article;
});

onMounted(() => {
    useHyvor(article.value?.id);
    useYoutubeTwitterEnhancer("nuxtContent");
});

const postLink = computed(() => {
    return (
        siteMetadata.value.siteUrl +
        article.value?._path.replace("/articles/", "")
    );
});

const alternates =
    article.value?.alternates?.map((alternate: any) => {
        const key = Object.keys(alternate)[0];
        const value = alternate[key];
        return {
            rel: "alternate",
            href: value,
            hreflang: key,
        };
    }) || [];

alternates.push({
    rel: "alternate",
    href: postLink.value,
    hreflang: article.value?.language || "fr",
});

useHead({
    title: article.value?.title + " | " + siteMetaInfo.title,
    htmlAttrs: {
        lang: article.value?.language || "fr",
    },
    meta: [
        {
            hid: "description",
            name: "description",
            content: article.value?.description,
        },
        {
            hid: "og:description",
            name: "og:description",
            content: article.value?.description,
        },
        { hid: "og:type", name: "og:type", content: "article" },
        { hid: "og:title", name: "og:title", content: article.value?.title },
        {
            hid: "og:url",
            name: "og:url",
            content:
                "https://eventuallycoding.com" +
                article.value?._path.replace("/articles", ""),
        },
        {
            hid: "og:image",
            name: "og:image",
            content:
                "https://eventuallycoding.com" +
                "/images/covers/" +
                article.value?.cover,
        },
        { name: "og:image:alt", content: article.value?.title },
        { name: "twitter:text:title", content: article.value?.title },
        {
            name: "twitter:image",
            content:
                "https://eventuallycoding.com" +
                "/images/covers/" +
                article.value?.cover,
        },
        { name: "twitter:card", content: "summary" },
        {
            name: "article:published_time",
            content: useFormatDateToIso(article.value?.date),
        },
        {
            name: "article:article:modified_time",
            content: useFormatDateToIso(article.value?.date),
        },
        {
            name: "article:article:tag",
            content: article.value?.tags ? article.value.tags?.toString() : "",
        },
    ],
    link: [
        {
            rel: "canonical",
            href:
                "https://eventuallycoding.com" +
                article.value?._path.replace("/articles", ""),
        },
        ...alternates,
    ],
});
</script>
<style>
.nuxt-content h2 {
    font-weight: bold;
    font-size: 28px;
}
.nuxt-content h3 {
    font-weight: bold;
    font-size: 22px;
}
.nuxt-content p {
    margin-bottom: 20px;
}
</style>
