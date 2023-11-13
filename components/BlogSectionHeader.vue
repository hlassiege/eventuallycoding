<template>
    <HeroSection>
        <template #content>
            <div class="flex flex-col items-center justify-center">
                <div class="p-3 text-white rounded">
                    <div class="flex items-center">
                        <NuxtImg
                            :src="siteMetadata.author_image"
                            loading="lazy"
                            alt="me"
                            class="shadow-xl md:h-50 md:w-50 h-40 w-40 rounded-full hover:shadow-amber-700 hover:-translate-y-1 hover:shadow-2xl transition-all mr-10"
                        />
                        <div class="text-left">
                            <p
                                class="name rounded-xl font-bold p-2 tracking-wider"
                            >
                                <span class="font-extrabold text-2xl font-bruno"
                                    >Writing</span
                                >
                            </p>
                            <div class="mb-6 text-white w-full mx-auto">
                                <p
                                    class="mt-8 mb-4 md:text-xl text-base font-mark"
                                >
                                    Here you can browse my thoughts on different
                                    topics, <br />
                                    mostly on Software Development,
                                    <br />
                                    Entrepreneurship and Startups.<br />
                                </p>
                                <p
                                    class="mt-8 mb-4 md:text-xl text-base font-mark"
                                >
                                    I'm also the author of
                                    <NuxtLink
                                        class="underline"
                                        :to="
                                            (currentLang === 'en'
                                                ? '/en'
                                                : '') +
                                            '/2023/02/impactful-software-engineering'
                                        "
                                        >"Impactful Software
                                        Engineering"</NuxtLink
                                    >
                                    <br />
                                    that you can read for free here.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </HeroSection>
</template>
<script setup lang="ts">
import siteMetadata from "~/data/siteMetaData";

defineProps({
    currentLang: {
        type: String,
        default: "en",
    },
});
</script>
