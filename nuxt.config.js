const createSitemapRoutes = async () => {
  let routes = [];
  const { $content } = require('@nuxt/content')
  const articles = await $content('articles', {deep: true}).fetch();
  for (const post of articles) {
    routes.push(`${post.path.replace("articles/", "")}`);
  }
  return routes;
}

export default {

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxt-blog",
    htmlAttrs: {
      lang: "fr",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Speaking about the stuff I do, product, efficiency, tech stack and more." },
      { name: "format-detection", content: "telephone=no" },
      { hid: "og:type", name: "og:type", content: "website" },
      { hid: "og:title", name: "og:title", content: "Eventually coding" },
      { hid: "og:description", name: "og:description", content: "Speaking about the stuff I do, product, efficiency, tech stack and more." },
      { hid: "og:url", name: "og:url", content: "https://eventuallycoding.com/" },
      { name: "og:site_name", content: "Eventually coding" },
      { name: "og:locale", content: "fr_FR" },
      { name: "twitter:creator", content: "@hugolassiege" },
      { name: "twitter:site", content: "@hugolassiege" },
   ],
    link: [
      { rel: "alternate", type: "application/rss+xml", href: "https://eventuallycoding.com/feed/" },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }

    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css", "@/assets/scss/main.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxt/postcss8", "@nuxt/image"],
  vite: {
    /* options for vite */
    // ssr: true // enable unstable server-side rendering for development (false by default)
    // experimentWarning: false // hide experimental warning message (disabled by default for tests)
    vue: {
      /* options for vite-plugin-vue2 */
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxt/content", "@nuxtjs/svg", "@nuxt/image", '@nuxtjs/redirect-module',
    // '@nuxtjs/feed',
    '@nuxtjs/sitemap'],
  sitemap: {
    hostname: 'https://eventuallycoding.com',
    gzip: true,
    routes: createSitemapRoutes
  },
  // feed () {
  //   const baseUrlArticles = 'https://eventuallycoding.com/';
  //   const baseLinkFeedArticles = '/feed/'
  //   const feedFormats = {
  //     rss: { type: 'rss2', file: 'rss.xml' },
  //     json: { type: 'json1', file: 'feed.json' },
  //   }
  //   const { $content } = require('@nuxt/content')
  //
  //   const createFeedArticles = async function (feed) {
  //     feed.options = {
  //       title: 'EventuallyCoding',
  //       description: "Speaking about the stuff I do, product, efficiency, tech stack and more.",
  //       link: baseUrlArticles,
  //     }
  //     const articles = await $content('articles', {deep: true}).sortBy("date", 'desc').fetch()
  //
  //     articles.forEach((article) => {
  //       const url = `${baseUrlArticles}/${article.path.replace("articles/", "")}`
  //
  //       feed.addItem({
  //         title: article.title,
  //         id: url,
  //         link: url,
  //         date: new Date(article.date),
  //         description: article.content,
  //         content: article.content,
  //         author: 'Hugo Lassiège',
  //       })
  //     })
  //   }
  //
  //   return Object.values(feedFormats).map(({ file, type }) => ({
  //     path: `${baseUrlArticles}${baseLinkFeedArticles}/${file}`,
  //     type: type,
  //     create: createFeedArticles,
  //   }))
  // },
  redirect: [
    {
      from: '(?!^\/$|^\/[?].*$)(.*\/[?](.*)$|.*\/$)',
      to: (from, req) => {
        const base = req._parsedUrl.pathname.replace(/\/$/, '');
        const search = req._parsedUrl.search;
        return base + (search != null ? search : '');
      }
    }
  ],
  svg: {
    vueSvgLoader: {
      // vue-svg-loader options
    },
    svgSpriteLoader: {
      // svg-sprite-loader options
    },
    fileLoader: {
      // file-loader options
    },
  },

  content: {
    liveEdit: false,
    markdown: {
      prism: {
        theme: "prism-themes/themes/prism-dracula.css",
      },
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      "three"
    ],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    }

  },
};
