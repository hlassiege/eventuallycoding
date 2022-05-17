<template>
  <div class="card-lateral mb-4 bg-white border border-gray-200 border-b-2 border-b-slate-400
  hover:drop-shadow-xl hover:border-gray-300 transition-all hover:-translate-y-1 flex flex-row">
    <nuxt-link class="w-1/4" :to="postLink">
      <img class="object-cover w-56 h-56" :src="'/images/' + img" :alt="postTitle"/>
    </nuxt-link>
    <div class="p-3 w-3/4 my-auto">
      <div class="text-xs text-slate-400 left-2">
        {{ formatDate(postDate) }}
      </div>
      <h5 class="text-lg font-bold ">
        <nuxt-link class="overflow-hidden " :to="postLink">
          {{ postTitle }}
        </nuxt-link>
      </h5>

      <p class="mt-2 text-[12px] my-3 flex flex-wrap -m-1 ">
        <a v-for="tag in tags" :key="tag" :href="'/blog?tag='+tag"
              class="m-1 leading-loose text-slate-400 border border-current lowercase px-2 rounded font-medium">
          #{{ tag }}
        </a>
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
