<template>
    <footer class="lg:mt-40 border-t border-t-2">
        <div
            class="max-w-6xl mx-auto grid grid-cols-1 gap-4"
            :class="newsletterEnabled ? 'md:grid-cols-2' : 'md:grid-cols-1'"
        >
            <div class="flex flex-col items-center mt-16">
                <div class="flex mb-3 space-x-4">
                    <a
                        aria-label="Open RSS feed"
                        target="_self"
                        :href="siteMetadata.rss"
                        class="text-sm text-gray-500 transition hover:text-gray-600"
                    >
                        <img
                            alt="Icon for RSS feed"
                            class="transition-transform hover:scale-110 w-8 h-8"
                            src="~assets/icon/rss.svg"
                        />
                    </a>
                    <a
                        aria-label="Open Youtube profile"
                        class="text-sm text-gray-500 transition hover:text-gray-600"
                        target="_blank"
                        rel="me"
                        :href="siteMetadata.youtube"
                        ><span class="sr-only">Youtube</span>
                        <img
                            alt="Icon for Youtube"
                            class="transition-transform hover:scale-110 w-8 h-8"
                            src="~assets/icon/youtube.svg"
                        />
                    </a>
                    <a
                        aria-label="Open Mastodon profile"
                        class="text-sm text-gray-500 transition hover:text-gray-600"
                        target="_blank"
                        rel="me"
                        :href="siteMetadata.mastodon"
                        ><span class="sr-only">Mastodon</span>
                        <img
                            alt="Icon for Mastodon"
                            class="transition-transform hover:scale-110 w-8 h-8"
                            src="~assets/icon/mastodon.svg"
                        />
                    </a>
                    <a
                        aria-label="Open github profile"
                        class="text-sm text-gray-500 transition hover:text-gray-600"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        :href="siteMetadata.github"
                        ><span class="sr-only">github</span>
                        <img
                            alt="Icon for Github"
                            class="transition-transform hover:scale-110 w-8 h-8"
                            src="~assets/icon/github_new.svg"
                        /> </a
                    ><a
                        aria-label="Open linkedin profile"
                        class="text-sm text-gray-500 transition hover:text-gray-600"
                        target="_blank"
                        rel="noopener noreferrer"
                        :href="siteMetadata.linkedin"
                        ><span class="sr-only">Linkedin</span>
                        <img
                            alt="Icon for Linkedin"
                            class="transition-transform hover:scale-110 w-8 h-8"
                            src="~assets/icon/linkeding.svg"
                        />
                    </a>
                    <a
                        aria-label="Open twitter profile"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        :href="siteMetadata.twitter + siteMetadata.twitter_user"
                        class="text-sm text-gray-500 transition hover:text-gray-600"
                    >
                        <img
                            alt="Icon for Twitter"
                            class="transition-transform hover:scale-110 w-8 h-8"
                            src="~assets/icon/twitter.svg"
                        />
                    </a>
                </div>
                <div
                    class="flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400"
                >
                    <div>Copyright © {{ new Date().getFullYear() }}</div>
                    <div>•</div>
                    {{ siteMetadata.title }} - {{ siteMetadata.slogan }}
                </div>
            </div>
            <Newsletter />
        </div>
    </footer>
</template>

<script setup lang="ts">
import { ref } from "vue";
import siteMetaInfo from "@/data/siteMetaData";

const siteMetadata = ref(siteMetaInfo);
const config = useRuntimeConfig();
const newsletterEnabled = config.public.newsletter.enabled;
</script>
