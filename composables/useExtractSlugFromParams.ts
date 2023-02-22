class SlugParams {
    language?: String;
    year: String;
    month: String;
    day?: String;

    constructor(
        language?: String,
        year?: String,
        month?: String,
        day?: String
    ) {
        this.language = language;
        this.year = year ?? "";
        this.month = month ?? "";
        this.day = day;
    }
}

function extractSlugParams(slug: string | string[]): SlugParams {
    let language, year, month, day;
    if (slug.length === 4) {
        language = slug[0];
        year = slug[1];
        month = slug[2];
        day = slug[3];
    } else if (slug.length === 3) {
        if (slug[0] === "en") {
            language = slug[0];
            year = slug[1];
            month = slug[2];
        } else {
            year = slug[0];
            month = slug[1];
            day = slug[2];
        }
    } else if (slug.length === 2) {
        year = slug[0];
        month = slug[1];
    }

    return new SlugParams(language, year, month, day);
}
export const useExtractSlugFromParams = (
    slug: string | string[],
    id: string | string[]
): string => {
    const slugParams = extractSlugParams(slug);

    let pathMatch: string;

    if (slugParams.language) {
        pathMatch =
            "/articles/" +
            slugParams.language +
            "/" +
            slugParams.year +
            "/" +
            slugParams.month +
            "/" +
            (slugParams.day ? slugParams.day + "/" : "") +
            id;
    } else {
        pathMatch =
            "/articles/" +
            slugParams.year +
            "/" +
            slugParams.month +
            "/" +
            (slugParams.day ? slugParams.day + "/" : "") +
            id;
    }
    return pathMatch;
};
