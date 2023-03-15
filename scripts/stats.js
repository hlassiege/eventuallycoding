const fs = require("fs");
const { parse } = require("csv-parse");

const parserWordpress = parse({
    delimiter: ",",
    relax_quotes: true,
});

function readDigiAnalyticsArchive() {
    const parserDigiAnalytics = parse({
        delimiter: ",",
    });
    const pageViews = [];

    const pipe = fs
        .createReadStream("./archive/pageviews.csv")
        .pipe(parserDigiAnalytics);

    pipe.on("data", (line) => {
        const url = line[0]
            .split("?")[0]
            .replace(/\/$/, "")
            .replace(/\/amp$/, "")
            .replace(/\/comment-page-1$/, "")
            .replace(/\/%C2%A0%C2%A0$/, "")
            .replace(/%E2%80%A6$/, "");

        // ignore images
        if (
            !url.endsWith(".png") &&
            !url.endsWith(".jpg") &&
            !url.endsWith(".gif")
        ) {
            const views = parseInt(line[1]);
            // Recherche de l'objet pageView correspondant à l'URL dans le tableau pageViews
            const index = pageViews.findIndex((pv) => pv.url === url);

            if (index >= 0) {
                // Si l'URL existe déjà dans le tableau pageViews, on additionne les chiffres
                pageViews[index].views += views;
            } else {
                // Sinon, on ajoute un nouvel objet pageView dans le tableau
                const pageView = {
                    url,
                    views,
                };
                pageViews.push(pageView);
            }
        }
    });

    return new Promise((resolve, reject) => {
        pipe.on("end", () => {
            pageViews.sort((a, b) => b.views - a.views);

            if (fs.existsSync("./archive/pageviews.json")) {
                fs.rmSync("./archive/pageviews.json");
            }

            fs.writeFileSync(
                "./archive/pageviews.json",
                JSON.stringify(pageViews, null, 2)
            );
            resolve(pageViews);
        });
        pipe.on("error", (err) => {
            reject(err);
        });
    });
}

readDigiAnalyticsArchive().then((pageViews) => {
    const viewsFile = fs.readFileSync("./archive/pageviews.json");
    pageViews = JSON.parse(viewsFile.toString());

    fs.createReadStream("./archive/jetpack-stats-wordpress.csv")
        .pipe(parserWordpress)
        .on("data", (line) => {
            let url = line[2]
                .split("?")[0]
                .replace(/\/$/, "")
                .replace(/\/amp$/, "")
                .replace(/\/comment-page-1$/, "")
                .replace(/\/%C2%A0%C2%A0$/, "");

            url = new URL(url).pathname;

            // ignore images
            if (
                !url.endsWith(".png") &&
                !url.endsWith(".jpg") &&
                !url.endsWith(".gif")
            ) {
                const views = parseInt(line[1]);
                // Recherche de l'objet pageView correspondant à l'URL dans le tableau pageViews
                const index = pageViews.findIndex((pv) => pv.url === url);

                if (index >= 0) {
                    // Si l'URL existe déjà dans le tableau pageViews, on additionne les chiffres
                    pageViews[index].views += views;
                } else {
                    // Sinon, on ajoute un nouvel objet pageView dans le tableau
                    const pageView = {
                        url,
                        views,
                    };
                    pageViews.push(pageView);
                }
            }
        })
        .on("end", () => {
            pageViews.sort((a, b) => b.views - a.views);

            if (fs.existsSync("./archive/pageviews.json")) {
                fs.rmSync("./archive/pageviews.json");
            }

            fs.writeFileSync(
                "./archive/pageviews.json",
                JSON.stringify(pageViews, null, 2)
            );
        });
});
