export const useFormatDateToIso = (date: string | number): string => {
    return new Date(date).toISOString();
};

export const useFormatDate = (date: string | number): string => {
    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    return new Date(date).toLocaleDateString("en", options);
};
