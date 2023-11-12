<template>
    <div
        v-if="isDisplayed"
        class="mb-4 bg-white border border-gray-200 min-h-[400px] border-b-2 border-b-slate-400 hover:drop-shadow-xl hover:border-gray-300 transition-all hover:-translate-y-1"
    >
        <NuxtLink class="overflow-hidden" :to="postLink">
            <NuxtImg
                v-if="img"
                class="object-cover w-full h-52"
                :src="'/images' + img"
                loading="lazy"
                format="webp"
                alt="Blog post cover"
            />
            <NuxtImg
                v-else
                class="object-contain w-full h-52"
                src="/images/post-anonymous.jpg"
                loading="lazy"
                format="webp"
                alt="Blog post cover"
            />
        </NuxtLink>
        <div class="p-3">
            <div class="text-xs text-slate-400 left-2">
                {{ formatDate(postDate) }}
            </div>
            <h5 class="text-lg font-bold">
                <NuxtLink class="overflow-hidden" :to="postLink">
                    {{ postTitle }}
                </NuxtLink>
            </h5>

            <p class="mt-2 text-[12px] my-3 flex flex-wrap -m-1">
                <a
                    v-for="tag in tags"
                    :key="tag"
                    :href="'/blog?tag=' + tag"
                    :aria-label="`More about ${tag}`"
                    class="m-1 leading-loose text-slate-400 border border-current lowercase px-2 rounded font-medium"
                    @click.prevent="$emit('changeCurrentTag', tag)"
                    >#{{ tag }}</a
                >
            </p>
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: false,
    },
    path: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: false,
    },
    lang: {
        type: String,
        required: false,
        default: "fr",
    },
    tags: {
        type: Array,
        required: false,
    },
    currentTag: {
        type: String,
        required: false,
    },
    currentLang: {
        type: String,
        required: false,
        default: "fr",
    },
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const emit = defineEmits(["changeCurrentTag"]);

function formatDate(date: string) {
    return new Date(date).toLocaleDateString("fr", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
    });
}

const isDisplayed = computed(() => {
    const tagsIncludeCurrentTag =
        !props.currentTag || props.tags?.includes(props.currentTag);
    const langEqualsToCurrentLang = props.currentLang === props.lang;
    return tagsIncludeCurrentTag && langEqualsToCurrentLang;
});

const postTitle = ref(props.title);
const postDate = ref(props.date);
const postLink = ref(props.path.replace("articles/", ""));
</script>
