<template>
  <footer class="lg:mt-52 border-t border-t-2">
    <div class="flex flex-col items-center mt-16">
      <div class="flex mb-3 space-x-4">
        <a
          target="_self"
          :href="siteMetadata.rss"
          class="text-sm text-gray-500 transition hover:text-gray-600"
        >
          <img class="transition-transform hover:scale-110 w-8 h-8" src="~assets/icon/rss.svg"/>
        </a>
        <a
          class="text-sm text-gray-500 transition hover:text-gray-600"
          target="_blank"
          rel="nofollow noopener noreferrer"
          :href="siteMetadata.github"
          ><span class="sr-only">github</span>
          <img class="transition-transform hover:scale-110 w-8 h-8" src="~assets/icon/github_new.svg" /> </a
        ><a
          class="text-sm text-gray-500 transition hover:text-gray-600"
          target="_blank"
          rel="noopener noreferrer"
          :href="siteMetadata.linkedin"
          ><span class="sr-only">Linkedin</span>
          <img class="transition-transform hover:scale-110 w-8 h-8" src="~assets/icon/linkeding.svg" /> </a
        >
        <a
          target="_blank" rel="nofollow noopener noreferrer"
          :href="siteMetadata.twitter + siteMetadata.twitter_user"
          class="text-sm text-gray-500 transition hover:text-gray-600"
        >
          <img class="transition-transform hover:scale-110 w-8 h-8" src="~assets/icon/twitter.svg"/>
        </a>

      </div>
      <div class="flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
        <div>Copyright © {{ new Date().getFullYear() }}</div>
        <div>•</div>
        {{ siteMetadata.title }} - {{ siteMetadata.slogan }}
      </div>
      <div class="text-sm text-gray-500">Credits to www.freepik.com -
        <a href='https://www.freepik.com/vectors/citizen'>Citizen vector created by freepik - </a>
        <a href='https://www.freepik.com/vectors/css'>Css vector created by vectorjuice</a>
      </div>
    </div>
  </footer>
</template>

<script>
import siteMetaInfo from "@/data/sitemetainfo";
export default {
  data() {
    return {
      siteMetadata: siteMetaInfo,
    };
  },
};
</script>
