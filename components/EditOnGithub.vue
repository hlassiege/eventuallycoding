<template>
    <div
        class="mt-10 text-slate-600 font-extrabold text-sm font-medium min-w-full mx-auto mb-2"
    >
        <NuxtLink
            target="_blank"
            :to="siteMetadata.githubContentUrlInRepo + path + '.md'"
            >Edit on Github
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3 w-3 inline-block text-slate-600 -mt-1"
                viewBox="0 0 512 512"
            >
                <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                    d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
                /></svg
        ></NuxtLink>
    </div>
</template>
<script setup lang="ts">
import siteMetaInfo from "../data/siteMetaData";

const siteMetadata = ref(siteMetaInfo);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{
    path: string;
}>();
</script>
