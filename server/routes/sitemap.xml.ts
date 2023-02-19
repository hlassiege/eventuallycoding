import { serverQueryContent } from "#content/server";
import { SitemapStream, streamToPromise } from "sitemap";
export default defineEventHandler(async (event) => {
    const docs = await serverQueryContent(event).find();
    const sitemap = new SitemapStream({
        hostname: "https://eventuallycoding.com",
    });
    for (const doc of docs) {
        if (doc._path !== "/resources/resources") {
            sitemap.write({
                url: doc._path?.replace("/articles", ""),
            });
        }
    }
    sitemap.write({
        url: "/resources",
    });
    sitemap.end();
    return streamToPromise(sitemap);
});
