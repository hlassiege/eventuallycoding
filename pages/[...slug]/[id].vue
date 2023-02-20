<template>
    <div>
        <keep-alive>
            <HeroSection>
                <template #content>
                    <div class="absolute top-96 w-96 -translate-y-20">
                        <img
                            :src="'/images/covers/' + article.cover"
                            :alt="article.title"
                            class="object-cover"
                        />
                    </div>
                </template>
            </HeroSection>
        </keep-alive>
        <div class="px-4 mx-auto sm:px-6 xl:max-w-7xl xl:px-0 mt-10">
            <h1 class="text-4xl text-gray-700 font-extrabold text-center mb-5">
                {{ article.title }}
            </h1>
            <p class="text-slate-400 text-center mb-5">
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

            <div
                class="grid grid-cols-3 text-center sm:w-full md:w-1/2 mx-auto"
            >
                <div>
                    <p
                        class="text-center font-bold my-5 text-slate-400 text-xs"
                    >
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
                        {{ formatDate(article.date) }}
                    </p>
                </div>
                <div>
                    <p
                        class="text-center font-bold my-5 text-slate-400 text-xs"
                    >
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
                <div
                    class="flex items-center font-medium sm:mx-3 justify-center"
                >
                    <img
                        :src="siteMetadata.author_image"
                        loading="lazy"
                        alt=""
                        class="mr-3 w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800"
                    />
                    <div>
                        <div class="font-bold text-slate-400 text-xs">
                            {{ siteMetadata.author }}
                        </div>
                        <a
                            target="_blank"
                            :href="
                                siteMetadata.twitter + siteMetadata.twitter_user
                            "
                            class="font-bold text-sky-400 text-xs hover:text-sky-600"
                        >
                            @{{ siteMetadata.twitter_user }}
                        </a>
                    </div>
                </div>
            </div>
            <div class="sm:w-full md:w-1/2 mx-auto">
                <p class="mt-2 text-xs my-3 flex flex-wrap -m-1 justify-center">
                    <a
                        v-for="tag in article.tags"
                        :key="tag"
                        :href="'/blog?tag=' + tag"
                        class="m-1 leading-loose text-slate-400 border border-current lowercase px-2 rounded font-medium"
                        >#{{ tag }}</a
                    >
                </p>
            </div>

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

            <div
                class="grid place-items-center font-proxima text-sm md:text-xl font-medium min-w-full mx-auto mb-6"
            >
                <p class="mb-2">Did you like this blog post?</p>
                <p>
                    <a
                        href="https://www.buymeacoffee.com/hlassiege"
                        target="_blank"
                        ><img
                            src="https://cdn.buymeacoffee.com/buttons/v2/default-red.png"
                            alt="Buy Me A Coffee"
                            style="
                                height: 60px !important;
                                width: 217px !important;
                            "
                    /></a>
                </p>
            </div>

            <hr class="mb-8" />

            <div>
                <span> Share on : </span>
                <div class="mt-4">
                    <a
                        :href="
                            'https://facebook.com/sharer/sharer.php?u=' +
                            postLink
                        "
                        target="_blank"
                        rel="noopener"
                        aria-label=""
                    >
                        <button
                            type="button"
                            class="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-3 py-3 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2"
                        >
                            <svg
                                class="w-6 h-6"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fab"
                                data-icon="facebook-f"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 320 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"
                                ></path>
                            </svg>
                        </button>
                    </a>

                    <a
                        :href="
                            'https://twitter.com/share?url=' +
                            postLink +
                            '&text=' +
                            article.title +
                            '&via=' +
                            siteMetadata.twitter_user
                        "
                        target="_blank"
                        title="Share on Twitter"
                        rel="noopener noreferrer"
                    >
                        <button
                            type="button"
                            class="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-3 py-3 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2"
                        >
                            <svg
                                class="w-6 h-6"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fab"
                                data-icon="twitter"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z"
                                ></path>
                            </svg>
                        </button>
                    </a>
                </div>
            </div>

            <div id="hyvor-talk-view"></div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { NuxtLink, HeroSection } from "#components";
import siteMetaInfo from "../../data/siteMetaData";

class SlugParams {
    language?: String;
    year: String;
    month: String;
    day?: String;

    constructor(
        language?: String,
        year?: String,
        month?: String,
        day?: String
    ) {
        this.language = language;
        this.year = year ?? "";
        this.month = month ?? "";
        this.day = day;
    }
}

const route = useRoute();
const siteMetadata = ref(siteMetaInfo);

function formatDate(date: string) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString("en", options);
}

function formatDatetoIso(date: string) {
    return new Date(date).toISOString();
}

function extractSlugParams(slug: string | string[]): SlugParams {
    let language, year, month, day;
    if (slug.length === 4) {
        language = slug[0];
        year = slug[1];
        month = slug[2];
        day = slug[3];
    } else if (slug.length === 3) {
        if (slug[0] === "en") {
            language = slug[0];
            year = slug[1];
            month = slug[2];
        } else {
            year = slug[0];
            month = slug[1];
            day = slug[2];
        }
    } else if (slug.length === 2) {
        year = slug[0];
        month = slug[1];
    }

    return new SlugParams(language, year, month, day);
}

const slugParams = extractSlugParams(route.params.slug);

let pathMatch: string;

if (slugParams.language) {
    pathMatch =
        "/articles/" +
        slugParams.language +
        "/" +
        slugParams.year +
        "/" +
        slugParams.month +
        "/" +
        (slugParams.day ? slugParams.day + "/" : "") +
        route.params.id;
} else {
    pathMatch =
        "/articles/" +
        slugParams.year +
        "/" +
        slugParams.month +
        "/" +
        (slugParams.day ? slugParams.day + "/" : "") +
        route.params.id;
}

const { data: article } = await useAsyncData(pathMatch, async () => {
    const article = await queryContent("articles")
        .where({ _path: pathMatch })
        .findOne();
    return article;
});

onMounted(() => {
    const hyvorScript = document.createElement("script");
    hyvorScript.src = "//talk.hyvor.com/web-api/embed.js";
    hyvorScript.async = true;
    hyvorScript.type = "text/javascript";

    const hyvorConfig = document.createElement("script");
    hyvorConfig.type = "text/javascript";
    hyvorConfig.innerHTML = `
        var HYVOR_TALK_WEBSITE = 7045;
        var HYVOR_TALK_CONFIG = {
            url: false,
            id: ${article.value?.id}
        };
    `;

    document.head.appendChild(hyvorScript);
    document.head.appendChild(hyvorConfig);

    let containTwitterScript = false;
    const nuxtContentElement = document.getElementById("nuxtContent");
    if (nuxtContentElement) {
        nuxtContentElement.querySelectorAll("p").forEach((block) => {
            const isYoutubeVideo = block.textContent.match(
                /^https:\/\/www\.youtube\.com\/watch\?(v=[0-9a-zA-Z_]*)$/
            );
            if (isYoutubeVideo) {
                isYoutubeVideo.forEach((match) => {
                    const regExpMatchArray = match.match(/v=(.*)$/);
                    const videoId = regExpMatchArray[1];
                    const container = document.createElement("div");
                    container.setAttribute("class", "w-1/2 ml-auto mr-auto");
                    const iframe = document.createElement("iframe");
                    iframe.setAttribute(
                        "src",
                        `https://www.youtube-nocookie.com/embed/${videoId}`
                    );
                    iframe.setAttribute("frameborder", "0");
                    iframe.setAttribute("allowfullscreen", "allowfullscreen");
                    iframe.setAttribute("width", "560");
                    iframe.setAttribute("height", "315");
                    block.innerHTML = "";
                    container.appendChild(iframe);
                    block.appendChild(container);
                });
            }
            const isTweet = block.textContent.match(
                /^https:\/\/twitter\.com\/[0-9a-zA-Z_]*\/status\/([0-9a-zA-Z]*)$/
            );
            if (isTweet) {
                isTweet.forEach((match) => {
                    const tweetId = match;
                    const container = document.createElement("div");
                    container.setAttribute("class", "w-1/2 ml-auto mr-auto");
                    const blockQuote = document.createElement("blockquote");
                    blockQuote.setAttribute("class", "twitter-tweet");
                    const link = document.createElement("a");
                    link.setAttribute(
                        "href",
                        `https://twitter.com/x/status/${tweetId}`
                    );
                    block.innerHTML = "";
                    blockQuote.appendChild(link);
                    container.appendChild(blockQuote);
                    block.appendChild(container);
                    if (!containTwitterScript) {
                        const script = document.createElement("script");
                        script.setAttribute(
                            "src",
                            "https://platform.twitter.com/widgets.js"
                        );
                        script.setAttribute("charset", "utf-8");
                        script.setAttribute("async", "async");
                        script.setAttribute("defer", "defer");
                        document.body.appendChild(script);
                        containTwitterScript = true;
                    }
                });
            }
        });
    }
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
            content: formatDatetoIso(article.value?.date),
        },
        {
            name: "article:article:modified_time",
            content: formatDatetoIso(article.value?.date),
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
