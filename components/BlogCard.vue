<template>
  <div v-if="isFiltered" class="mb-4 bg-white border border-gray-200 min-h-[400px] border-b-2 border-b-slate-400
  hover:drop-shadow-xl hover:border-gray-300 transition-all hover:-translate-y-1">
    <NuxtLink class="overflow-hidden " :to="postLink">
      <img
        v-if="img"
        class="object-cover w-full h-52"
        :src="'/images/' + img"
        alt=""
      />
      <img
        v-else
        class="object-contain w-full h-52"
        src="/images/post-anonymous.jpg"
        alt=""
      />
    </NuxtLink>
      <div class="p-3">
        <div class="text-xs text-slate-400 left-2">
          {{ formatDate(postDate)}}
        </div>
        <h5 class="text-lg font-bold ">
          <NuxtLink class="overflow-hidden " :to="postLink">
          {{ postTitle }}
          </NuxtLink>
        </h5>

        <p class="mt-2 text-[12px] my-3 flex flex-wrap -m-1 ">
          <a @click.prevent="$emit('changeCurrentTag', tag)" :href="'/blog?tag='+tag" v-for="tag in tags" :key="tag" class="m-1 leading-loose text-slate-400 border border-current lowercase px-2 rounded font-medium">#{{tag}}</a>
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
    tags: {
        type: Array,
        required: false,
    },
    currentTag: {
        type: String,
        required: false,
    },
    });

const emit = defineEmits(['changeCurrentTag']);

function formatDate(date) {
    return new Date(date).toLocaleDateString("fr", {
        weekday: 'short', year: 'numeric', month: 'short',
        day: 'numeric'
    })
}

const isFiltered = computed(() => {
    return !props.currentTag || (props.tags && props.tags.includes(props.currentTag));
});

const postTitle = ref(props.title);
const postDate = ref(props.date);
const postLink = ref(props.path.replace("articles/", ""));

</script>

