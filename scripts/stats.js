const fs = require("fs");
const { parse } = require("csv-parse");

const parserWordpress = parse({
    delimiter: ",",
    relax_quotes: true,
});

const pageViews = [];

function readCsvArchive(
    arrayOfPageViews,
    filename,
    indexOfViewsInCsvLine,
    indexOfUrlInCsvLine = 0,
    relaxQuotes = false
) {
    const parser = parse({
        delimiter: ",",
        relax_quotes: relaxQuotes,
    });

    const pipe = fs.createReadStream(filename).pipe(parser);

    pipe.on("data", (line) => {
        let url = line[indexOfUrlInCsvLine]
            .split("#")[0]
            .split("?")[0]
            .replace(/\/$/, "")
            .replace(/\/en\//, "")
            .replace(/\/amp$/, "")
            .replace(/\/comment-page-1$/, "")
            .replace(/\/%C2%A0%C2%A0$/, "")
            .replace(/%E2%80%A6/g, "");

        url = new URL(url, "http://dummy.com").pathname;

        // ignore images
        if (
            !url.endsWith(".png") &&
            !url.endsWith(".jpg") &&
            !url.endsWith(".gif")
        ) {
            const views = parseInt(line[indexOfViewsInCsvLine]);
            // Recherche de l'objet pageView correspondant à l'URL dans le tableau pageViews
            const index = arrayOfPageViews.findIndex((pv) => pv.url === url);

            if (index >= 0) {
                // Si l'URL existe déjà dans le tableau pageViews, on additionne les chiffres
                arrayOfPageViews[index].views += views;
            } else {
                // Sinon, on ajoute un nouvel objet pageView dans le tableau
                const pageView = {
                    url,
                    views,
                };
                arrayOfPageViews.push(pageView);
            }
        }
    });

    return new Promise((resolve, reject) => {
        pipe.on("end", () => {
            resolve(arrayOfPageViews);
        });
        pipe.on("error", (err) => {
            reject(err);
        });
    });
}

function readPirschArchive(pageViews) {
    return readCsvArchive(
        pageViews,
        "./archive/pirsch-2023-10-01-2023-12-20.csv",
        3,
        0,
        true
    );
}

function readDigiAnalyticsArchive(pageViews) {
    return readCsvArchive(pageViews, "./archive/pageviews.csv", 1);
}

function readJetPackArchive(pageViews) {
    return readCsvArchive(
        pageViews,
        "./archive/jetpack-stats-wordpress.csv",
        1,
        2,
        true
    );
}

readDigiAnalyticsArchive(pageViews)
    .then((views) => readJetPackArchive(views))
    .then((views) => readPirschArchive(views))
    .then((views) => {
        views.sort((a, b) => b.views - a.views);

        if (fs.existsSync("./archive/pageviews.json")) {
            fs.rmSync("./archive/pageviews.json");
        }

        fs.writeFileSync(
            "./archive/pageviews.json",
            JSON.stringify(views, null, 2)
        );
    });
