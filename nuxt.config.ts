import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

  app: {
    head: {
      script: [
        { src: 'https://digianalytics.fr/js/script.js',
          'data-host': "https://digianalytics.fr",
          'data-dnt' : "false", id:"ZwSg9rf6GA", async: true, defer: true, type: "text/javascript"
        },
      ]
    }
  },

  css: ["@/assets/css/main.css", "@/assets/scss/main.scss"],

  modules: ['@nuxt/content'],

  content: {
    // https://content.nuxtjs.org/api/configuration
  },

  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
})
