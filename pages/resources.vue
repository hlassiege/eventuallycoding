<template>
    <div>
        <keep-alive>
            <HeroSection>
                <template #content>
                    <div class="flex justify-center items-center">
                        <NuxtImg
                            :src="'/images/' + article.cover"
                            :alt="article.title"
                            width="200"
                        />
                    </div>
                </template>
            </HeroSection>
        </keep-alive>

        <div class="px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
            <h1 class="text-4xl text-gray-600 font-extrabold text-center mt-4">
                {{ article.title }}
            </h1>

            <ContentRenderer
                class="prose min-w-full p-10 mx-auto"
                :value="article"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import HeroSection from "../components/HeroSection";
import siteMetaInfo from "../data/siteMetaData";

const { data: article } = await useAsyncData("resources", () =>
    queryContent("resources").where({ title: "Resources" }).findOne()
);
const siteMetadata = ref(siteMetaInfo);

useHead({
    title: "Resources | " + siteMetaInfo.title,
    meta: [
        {
            hid: "description",
            name: "description",
            content:
                "Here is a list of various resources that I use frequently or that have influenced me",
        },
        {
            hid: "og:description",
            name: "og:description",
            content:
                "Here is a list of various resources that I use frequently or that have influenced me",
        },
        { hid: "og:type", name: "og:type", content: "article" },
        { hid: "og:title", name: "og:title", content: article.value?.title },
        {
            hid: "og:url",
            name: "og:url",
            content: "https://eventuallycoding.com/resources",
        },
        {
            hid: "og:image",
            name: "og:image",
            content:
                "https://eventuallycoding.com" +
                "/images/" +
                article.value?.cover,
        },
        { name: "og:image:alt", content: article.value?.title },
        { name: "twitter:text:title", content: article.value?.title },
        {
            name: "twitter:image",
            content:
                "https://eventuallycoding.com" +
                "/images/" +
                article.value?.cover,
        },
        { name: "twitter:card", content: "summary" },
    ],
    link: [
        { rel: "canonical", href: "https://eventuallycoding.com/resources" },
    ],
});
</script>

<style lang="scss" scoped>
.clip-ellipse {
    clip-path: ellipse(60% 100% at 50% 0%);
    @apply bg-white;
    height: 100px;
    width: 100%;
}
</style>
