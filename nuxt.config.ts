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
                    src: "https://api.pirsch.io/pirsch.js",
                    id: "pirschjs",
                    defer: true,
                    "data-code": "h0iQydru2I8bInEwhCLefaxGV5SryP06",
                    type: "text/javascript",
                },
            ],
        },
    },

    css: ["@/assets/css/main.css", "@/assets/scss/main.scss"],
    modules: ["@nuxt/content", "@nuxtjs/tailwindcss", "@nuxt/image"],
    image: {
        format: ["webp"],
    },
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
