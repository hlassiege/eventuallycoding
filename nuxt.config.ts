import { defineNuxtConfig } from "nuxt/config";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            htmlAttrs: {
                lang: "en",
            },
            script: [
                {
                    src: "https://digianalytics.fr/pixel/73jqBv5FmFIZiWt2",
                    defer: true,
                    type: "text/javascript",
                },
            ],
        },
    },

    css: ["@/assets/css/main.css", "@/assets/scss/main.scss"],
    modules: ["@nuxt/content", "@nuxtjs/tailwindcss", "@nuxt/image-edge"],
    content: {
        markdown: {
            remarkPlugins: ["remark-reading-time"],
        },
    },

    nitro: {
        prerender: {
            routes: ["/sitemap.xml", "/rss.xml"],
        },
    },
});
