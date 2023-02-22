export const useHyvor = (id: string): void => {
    const hyvorScript = document.createElement("script");
    hyvorScript.src = "//talk.hyvor.com/web-api/embed.js";
    hyvorScript.async = true;
    hyvorScript.type = "text/javascript";

    const hyvorConfig = document.createElement("script");
    hyvorConfig.type = "text/javascript";
    hyvorConfig.innerHTML = `
        var HYVOR_TALK_WEBSITE = 7045;
        var HYVOR_TALK_CONFIG = {
            url: false,
            id: ${id}
        };
    `;

    document.head.appendChild(hyvorScript);
    document.head.appendChild(hyvorConfig);
};
