<template>
    <aside
        class="hidden px-6 py-6 space-y-8 sm:block w-[200px]"
        aria-label="Sidebar"
    >
        <div class="">
            <div v-if="currentTag">
                <h3 class="text-lg font-medium text-gray-700">Filter:</h3>
            </div>

            <a
                v-if="currentTag"
                class="inline-flex items-center mt-8 mb-8 flex px-3 py-1 text-left text-slate-600 flex items-stretch text-sm transition duration-150 ease-out border border-gray-700 outline-none group lg:hover:border-gray-400"
                href="#"
            >
                <span class="text-sm font-medium">
                    {{ currentTag }} &nbsp;
                </span>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 my-auto right-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            </a>

            <div>
                <h3 class="text-lg font-medium text-gray-700">
                    Recommended topics :
                </h3>
            </div>
            <div class="w-full">
                <div class="flex flex-wrap -mx-2">
                    <a
                        v-for="tag in allTags"
                        :key="tag"
                        :href="'/blog?tag=' + tag"
                    >
                        <div class="px-1 mt-2">
                            <button
                                tabindex="-1"
                                class="flex items-stretch text-sm transition duration-150 ease-out border border-gray-700 outline-none group lg:hover:border-gray-400"
                            >
                                <div
                                    class="flex px-3 py-1 text-left text-slate-600"
                                >
                                    #{{ tag }}
                                </div>
                            </button>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </aside>
</template>
<script setup lang="ts">
defineProps({
    currentTag: {
        type: String,
        default: "",
    },
});

const allTags = [
    "agile",
    "architecture",
    "backend",
    "engineering",
    "future-of-work",
    "freelance",
    "lateralthoughts",
    "product",
    "startup",
];
</script>
