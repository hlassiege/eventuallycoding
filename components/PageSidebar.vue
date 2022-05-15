<template>
    <div class="lg:sticky top-0 pt-5 -mt-5">
        <!-- Desktop Sidebar -->
        <div v-if="toc.length > 0" class="toc hidden lg:block">
            <h3 class="border-b-4 pb-3 mb-3 border-gray-200 text-xl">On this page</h3>
            <ul class="pl-0">
                <li v-for="subtitle in toc" :key="subtitle.text" class="py-1" :class="{ 'ml-4': subtitle.depth == 3 }">
                    <a class="hover:text-smalt-blue-700" :class="{ 'text-shark-400': subtitle.depth == 3 }" :href="'#' + subtitle.id">
                        {{ subtitle.text }}
                    </a>
                </li>
            </ul>
        </div>

        <!-- Responsive Sidebar -->
        <div v-if="toc.length > 0" class="text-right mb-12">
            <FilterDropdown v-if="toc.length > 0">
                <template v-slot:title>On this site</template>
                <template v-slot:options>
                    <ul class="p-4">
                        <li v-for="subtitle in toc" :key="subtitle.text" class="py-1" :class="{ 'ml-4': subtitle.depth == 3 }">
                            <a class="hover:text-smalt-blue-700" :class="{ 'text-shark-400': subtitle.depth == 3 }" :href="'#' +subtitle.id">
                                {{ subtitle.text }}
                            </a>
                        </li>
                    </ul>
                </template>
            </FilterDropdown>

        </div>
    </div>
</template>

<script>
    import FilterDropdown from '~/components/Dropdown';

    export default {
        components: {
            FilterDropdown,
        },

        props: {
            toc: {
                type: Array,
                default() {
                    return [];
                },
            },
        },
    };
</script>
