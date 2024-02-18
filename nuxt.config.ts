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

    runtimeConfig: {
        public: {
            newsletter: {
                enabled: true,
                form_action:
                    "https://assets.mailerlite.com/jsonp/824357/forms/113155364217685975/subscribe",
            },
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
    vue: {
        compilerOptions: {
            isCustomElement: (tag) => ["hyvor-talk-comments"].includes(tag),
        },
    },
});
