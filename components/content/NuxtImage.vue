<template>
    <div class="flex justify-center items-center">
        <div class="text-center">
            <NuxtImg :src="src" :alt="alt" format="webp" class="mx-auto mb-2" />
            <figcaption v-if="alt" class="text-sm text-slate-500">
                {{ alt }}
            </figcaption>
        </div>
    </div>
</template>
<script setup lang="ts">
defineProps({
    src: {
        type: String,
        required: true,
    },
    alt: {
        type: String,
        required: true,
    },
});
</script>
