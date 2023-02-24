<template>
    <div class="flex">
        <ul>
            <li v-for="item in toc" :key="item.title">
                <NuxtLink v-if="item.link" :to="item.link">
                    {{ item.title }}
                </NuxtLink>
                <span v-else class="text-slate-300">
                    {{ item.title }}
                </span>
                <ol>
                    <li
                        v-for="subitem in item.subsections"
                        :key="subitem.title"
                    >
                        <NuxtLink v-if="subitem.link" :to="subitem.link">
                            {{ subitem.title }}
                        </NuxtLink>
                        <span v-else class="text-slate-300">
                            {{ subitem.title }}
                        </span>
                        <ul>
                            <li
                                v-for="subsubitem in subitem.subsections"
                                :key="subsubitem.title"
                            >
                                <NuxtLink
                                    v-if="subsubitem.link"
                                    :to="subsubitem.link"
                                >
                                    {{ subsubitem.title }}
                                </NuxtLink>
                                <span v-else class="text-slate-300">
                                    {{ subsubitem.title }}
                                </span>
                            </li>
                        </ul>
                    </li>
                </ol>
            </li>
        </ul>
    </div>
</template>
<script setup lang="ts">
import books from "~/data/books";

const props = defineProps({
    language: {
        type: String,
        default: "en",
    },
    book: {
        type: String,
        default: "impactfulSoftwareEngineering",
    },
});

const toc = computed(() => {
    if (Object.hasOwn(books, props.book)) {
        return books[props.book][props.language] || [];
    }
    return [];
});
</script>
<style scoped lang="scss">
ul {
    padding-left: 0;
    list-style: none;
    li {
        margin-bottom: 2rem;
    }
}
ol {
    padding-left: 0;
    li {
        margin-bottom: 0.5rem;
    }
}
li {
    margin-bottom: 0.5rem;
    margin-left: 1.5rem;
}
a {
    color: inherit;
    text-decoration: none;
    border-bottom: 1px dashed #bbb;
    padding-bottom: 3px;
}
</style>
