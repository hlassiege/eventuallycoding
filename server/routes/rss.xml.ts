import { serverQueryContent } from '#content/server'
import { Feed } from "feed";

export default defineEventHandler(async (event) => {
    const docs = await serverQueryContent(event).sort({date: -1}).find();

    const now = new Date();

    const feed = new Feed({
        title: "Eventually coding",
        description: "Speaking about the stuff I do, product, efficiency, tech stack and more.",
        id: "https://eventuallycoding.com",
        link: "https://eventuallycoding.com",
        favicon: "https://eventuallycoding.com/favicon.ico",
        copyright: `All rights reserved ${now.getFullYear()}, Eventually coding`,
        generator: "https://github.com/jpmonette/feed",
    });
    docs.forEach(post => {
        if (post._path !== '/resources/resources') {
            const path = post._path?.replace('/articles', '');

            feed.addItem({
                title: post.title ?? '-',
                id: 'https://eventuallycoding.com' + path,
                link: 'https://eventuallycoding.com' + path,
                description: post.description,
                date: new Date(post.date),
                // image: post.img
            });
        }
    });

    event.res.setHeader('content-type', 'text/xml')
    return feed.rss2();
})
