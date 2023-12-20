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
                                <div class="text-left">
                                    <p
                                        class="name rounded-xl font-bold p-2 tracking-wider"
                                    >
                                        <span
                                            class="font-extrabold text-2xl font-bruno"
                                            >Speaking</span
                                        >
                                    </p>
                                    <div class="mb-6 text-white w-full mx-auto">
                                        <p
                                            class="mt-8 mb-4 md:text-xl text-base font-mark"
                                        >
                                            These are conferences or podcasts I
                                            have spoken at.
                                            <br />
                                            I love to talk and share.
                                            <br />
                                            You can also find me on
                                            <a
                                                class="underline"
                                                href="https://www.youtube.com/channel/UC9QDQZnqFVd7xX0XxZvXtjw"
                                                >Youtube</a
                                            >
                                        </p>
                                    </div>
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
                    <div
                        class="mt-20 lg:w-3/4 w-full mx-auto lg:px-4 px-0 mb-10"
                    >
                        <div
                            class="overflow-hidden overflow-x-auto border border-gray-100 rounded"
                        >
                            <table
                                class="min-w-full text-sm divide-y divide-gray-200"
                            >
                                <thead>
                                    <tr class="bg-gray-50">
                                        <th
                                            class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap"
                                        >
                                            Event
                                        </th>
                                        <th
                                            class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap"
                                        >
                                            Title
                                        </th>
                                        <th
                                            class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap"
                                        >
                                            Location
                                        </th>
                                        <th
                                            class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap"
                                        >
                                            Date
                                        </th>
                                    </tr>
                                </thead>

                                <tbody class="divide-y divide-gray-100">
                                    <tr
                                        v-for="event in events"
                                        :key="event.date + event.title"
                                        class="hover:bg-slate-300 transition-colors"
                                    >
                                        <td
                                            class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap"
                                        >
                                            {{ event.event }}
                                        </td>
                                        <td
                                            class="px-4 py-2 text-gray-700 whitespace-nowrap"
                                        >
                                            <a
                                                :href="event.link"
                                                class="text-blue-500 hover:text-blue-700"
                                                >{{ event.title }}</a
                                            >
                                        </td>
                                        <td
                                            class="px-4 py-2 text-gray-700 whitespace-nowrap"
                                        >
                                            {{ event.location }}
                                        </td>
                                        <td
                                            class="px-4 py-2 text-gray-700 whitespace-nowrap"
                                        >
                                            {{ event.date }}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import HeroSection from "../components/HeroSection.vue";
import siteMetaInfo from "../data/siteMetaData";
import events from "../data/events";

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
    background: rgb(125 227 196 / 16%);
    color: #53cfd4;
}
</style>
