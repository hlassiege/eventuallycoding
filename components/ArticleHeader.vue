<template>
    <div>
        <h1 class="text-4xl text-gray-700 font-extrabold text-center mb-3">
            {{ article.title }}
        </h1>
        <p class="text-slate-500 text-center mb-1">
            <span v-if="article.alternates">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 inline-block"
                    viewBox="0 0 512 512"
                >
                    <path
                        d="M266.3 48.3L232.5 73.6c-5.4 4-8.5 10.4-8.5 17.1v9.1c0 6.8 5.5 12.3 12.3 12.3c2.4 0 4.8-.7 6.8-2.1l41.8-27.9c2-1.3 4.4-2.1 6.8-2.1h1c6.2 0 11.3 5.1 11.3 11.3c0 3-1.2 5.9-3.3 8l-19.9 19.9c-5.8 5.8-12.9 10.2-20.7 12.8l-26.5 8.8c-5.8 1.9-9.6 7.3-9.6 13.4c0 3.7-1.5 7.3-4.1 10l-17.9 17.9c-6.4 6.4-9.9 15-9.9 24v4.3c0 16.4 13.6 29.7 29.9 29.7c11 0 21.2-6.2 26.1-16l4-8.1c2.4-4.8 7.4-7.9 12.8-7.9c4.5 0 8.7 2.1 11.4 5.7l16.3 21.7c2.1 2.9 5.5 4.5 9.1 4.5c8.4 0 13.9-8.9 10.1-16.4l-1.1-2.3c-3.5-7 0-15.5 7.5-18l21.2-7.1c7.6-2.5 12.7-9.6 12.7-17.6c0-10.3 8.3-18.6 18.6-18.6H400c8.8 0 16 7.2 16 16s-7.2 16-16 16H379.3c-7.2 0-14.2 2.9-19.3 8l-4.7 4.7c-2.1 2.1-3.3 5-3.3 8c0 6.2 5.1 11.3 11.3 11.3h11.3c6 0 11.8 2.4 16 6.6l6.5 6.5c1.8 1.8 2.8 4.3 2.8 6.8s-1 5-2.8 6.8l-7.5 7.5C386 262 384 266.9 384 272s2 10 5.7 13.7L408 304c10.2 10.2 24.1 16 38.6 16H454c6.5-20.2 10-41.7 10-64c0-111.4-87.6-202.4-197.7-207.7zm172 307.9c-3.7-2.6-8.2-4.1-13-4.1c-6 0-11.8-2.4-16-6.6L396 332c-7.7-7.7-18-12-28.9-12c-9.7 0-19.2-3.5-26.6-9.8L314 287.4c-11.6-9.9-26.4-15.4-41.6-15.4H251.4c-12.6 0-25 3.7-35.5 10.7L188.5 301c-17.8 11.9-28.5 31.9-28.5 53.3v3.2c0 17 6.7 33.3 18.7 45.3l16 16c8.5 8.5 20 13.3 32 13.3H248c13.3 0 24 10.7 24 24c0 2.5 .4 5 1.1 7.3c71.3-5.8 132.5-47.6 165.2-107.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM187.3 100.7c-6.2-6.2-16.4-6.2-22.6 0l-32 32c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l32-32c6.2-6.2 6.2-16.4 0-22.6z"
                    />
                </svg>
                <small class="ml-3"> Also available in </small>
                <NuxtLink
                    v-for="alternate in article.alternates"
                    :key="Object.keys(alternate)[0]"
                    class="uppercase ml-1 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                    :to="alternate[Object.keys(alternate)[0]]"
                    >{{ Object.keys(alternate)[0] }}</NuxtLink
                >
            </span>
        </p>

        <div class="grid grid-cols-3 text-center sm:w-full md:w-1/2 mx-auto">
            <div>
                <p class="text-center font-bold my-4 text-slate-500 text-xs">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 inline-block"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                    </svg>
                    {{ useFormatDate(article.date) }}
                </p>
            </div>
            <div>
                <p class="text-center font-bold my-4 text-slate-500 text-xs">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 inline-block"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    {{ article.readingTime.text }}
                </p>
            </div>
            <div class="flex items-center font-medium sm:mx-3 justify-center">
                <NuxtImg
                    :src="siteMetadata.author_image"
                    loading="lazy"
                    alt=""
                    class="mr-3 w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800"
                />
                <div>
                    <div class="font-bold text-slate-500 text-xs">
                        {{ siteMetadata.author }}
                    </div>
                    <a
                        target="_blank"
                        :href="siteMetadata.twitter + siteMetadata.twitter_user"
                        class="font-bold text-sky-500 text-xs hover:text-sky-600"
                    >
                        @{{ siteMetadata.twitter_user }}
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import SiteMetaData from "~/data/siteMetaData";

defineProps<{
    article: any;
    siteMetadata: typeof SiteMetaData;
}>();
</script>
