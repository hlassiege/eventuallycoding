<template>
    <div>
        <keep-alive>
            <HeroSection>
                <template v-slot:content>
                    <img
                        :src="siteMetaInfo.author_image"
                        loading="lazy"
                        alt="me"
                        class="shadow-xl md:h-60 md:w-60 h-40 w-40 rounded-full hover:shadow-amber-700 hover:-translate-y-1 hover:shadow-2xl transition-all mr-10"
                    />
                </template>
            </HeroSection>
        </keep-alive>

        <div class="px-4 mx-auto sm:px-6 xl:px-0 mt-10">
            <TimeLine/>
        </div>


    </div>
</template>

<script setup lang="ts">
import HeroSection from "../components/HeroSection.vue";
import siteMetaInfo from "../data/siteMetaData";

useHead({
    title: "About | " + siteMetaInfo.title,
    meta: [
        {
            hid: "description",
            name: "description",
            content: "About me",
        },
        {
            hid: "og:description",
            name: "og:description",
            content: "About me"
        },
        {hid: "og:type", name: "og:type", content: "article"},
        {hid: "og:title", name: "og:title", content: "About me"},
        {hid: "og:url", name: "og:url", content: "https://eventuallycoding.com/about"},
        {
            hid: "og:image",
            name: "og:image",
            content: siteMetaInfo.author_image
        },
        {name: "og:image:alt", content: siteMetaInfo.author_image},
        {name: "twitter:text:title", content: 'About me'},
        {
            name: "twitter:image",
            content: siteMetaInfo.author_image
        },
        {name: "twitter:card", content: 'summary'},

    ],
    link: [
        {rel: "canonical", href: "https://eventuallycoding.com/about"},
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
