<template>
    <div
        class="mt-10 -mb-10 grid place-items-center text-slate-600 text-sm font-medium min-w-full mx-auto mb-6 underline"
    >
        <NuxtLink
            target="_blank"
            :to="siteMetadata.githubContentUrlInRepo + path + '.md'"
            >Edit on Github/Suggest Modification(s)</NuxtLink
        >
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
