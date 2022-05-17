<template>
  <div v-if="isFiltered" class="mb-4 bg-white border border-gray-200 min-h-[400px] border-b-2 border-b-slate-400
  hover:drop-shadow-xl hover:border-gray-300 transition-all hover:-translate-y-1">
    <nuxt-link class="overflow-hidden " :to="postLink">
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
    </nuxt-link>
      <div class="p-3">
        <div class="text-xs text-slate-400 left-2">
          {{ formatDate(postDate)}}
        </div>
        <h5 class="text-lg font-bold ">
          <nuxt-link class="overflow-hidden " :to="postLink">
          {{ postTitle }}
          </nuxt-link>
        </h5>

        <p class="mt-2 text-[12px] my-3 flex flex-wrap -m-1 ">
          <a @click.prevent="$emit('changeCurrentTag', tag)" :href="'/blog?tag='+tag" v-for="tag in tags" :key="tag" class="m-1 leading-loose text-slate-400 border border-current lowercase px-2 rounded font-medium">#{{tag}}</a>
        </p>
      </div>



  </div>
</template>
<script>
export default {
  name: 'BlogCard',
  props: ["title", "description", "date", "slug", "path", "img", "tags", "currentTag"],
  emits: ['changeCurrentTag'],
  data() {
    return {
      postTitle: this.title,
      postDescription: this.description,
      postSlug: this.slug,
      postDate: this.date,
      postLink: this.path.replace("articles/", ""),
    };
  },
  computed: {
    isFiltered() {
      return !this.currentTag || (this.tags && this.tags.includes(this.currentTag));
    },
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString("fr", {
        weekday: 'short', year: 'numeric', month: 'short',
        day: 'numeric'
      });
    },
  },
}
</script>
