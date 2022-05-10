<template>
  <div class="card-lateral mb-4 bg-white border border-gray-200 border-b-2 border-b-slate-400
  hover:drop-shadow-xl hover:border-gray-300 transition-all hover:-translate-y-1 flex flex-row">
    <a class="w-1/4" :href="postLink">
      <img class="object-cover w-56 h-56" :src="'/images/' + img" :alt="postTitle"/>
    </a>
    <div class="p-3 w-3/4 my-auto">
      <div class="text-xs text-slate-400 left-2">
        {{ formatDate(postDate) }}
      </div>
      <h5 class="text-lg font-bold ">
        <a class="overflow-hidden " :href="postLink">
          {{ postTitle }}
        </a>
      </h5>

      <p class="mt-2 text-[12px] my-3 flex flex-wrap -m-1 ">
        <span v-for="tag in tags" :key="tag"
              class="m-1 leading-loose text-slate-400 border border-current lowercase px-2 rounded font-medium">#{{
            tag
          }}</span>
      </p>
    </div>


  </div>
</template>
<script>
export default {
  name: 'BlogCardHorizontal',
  props: ["title", "description", "date", "slug", "path", "img", "tags"],
  data() {
    return {
      postTitle: this.title,
      postDescription: this.description,
      postSlug: this.slug,
      postDate: this.date,
      postLink: this.path.replace("articles/", ""),
    };
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
<style lang="scss" scoped>
.card-lateral {
  &:hover {
    img {
      @apply transition-all duration-300 ease-in-out skew-x-6;
    }
  }
}
</style>
