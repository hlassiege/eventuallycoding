<template>
<div>
  <nav class="bg-slate-50 fixed w-full z-10 top-0">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button type="button"
                  class="inline-flex items-center justify-center p-2 rounded-md text-gray-400
                  hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
          @click="mobileMenuOpen=!mobileMenuOpen">
            <span class="sr-only">Open main menu</span>
            <!--
              Icon when menu is closed.

              Heroicon name: outline/menu

              Menu open: "hidden", Menu closed: "block"
            -->
            <svg class="h-6 w-6" :class="!mobileMenuOpen ? 'block' : 'hidden' " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <!--
              Icon when menu is open.

              Heroicon name: outline/x

              Menu open: "block", Menu closed: "hidden"
            -->
            <svg class="h-6 w-6" :class="mobileMenuOpen ? 'block' : 'hidden' " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex-shrink-0 flex items-center">
            <span class="text-pink-700 text-base font-medium font-bruno text-2xl">
                EventuallyCoding.com
            </span>
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <NuxtLink
                v-for="item in navLinks" :key="item.path"
                :to="item.path"
                class="link  "
              >{{ item.name }}
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

          <form class="hidden mb-0 lg:flex">
            <div class="relative">
              <input class="h-10 pl-3 pr-10 text-sm placeholder-gray-300 border-gray-200 rounded-lg focus:z-10" placeholder="Search..." type="text">

              <button class="absolute inset-y-0 right-0 p-2 mr-px text-gray-600 rounded-r-lg" type="submit">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" fill-rule="evenodd"></path>
                </svg>
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div :class="mobileMenuOpen ? '' : 'hidden'" >
      <div class="px-2 pt-2 pb-3 space-y-1">

        <form class="mb-0 lg:flex">
          <div class="relative">
            <input class="h-10 w-full pl-3 pr-10 text-sm placeholder-gray-300 border-gray-200 rounded-lg focus:z-10" placeholder="Search..." type="text">

            <button class="absolute inset-y-0 right-0 p-2 mr-px text-gray-600 rounded-r-lg" type="submit">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" fill-rule="evenodd"></path>
              </svg>
            </button>
          </div>
        </form>


        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <NuxtLink
          v-for="item in navLinks" :key="item.path"
          :to="item.path"
          class="text-slate-600 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >{{ item.name }}
        </NuxtLink>
      </div>
    </div>
  </nav>

</div>
</template>

<script>
import menu from "../data/menu";

export default {
  name: "TheHeader",
  data() {
    return {
      navLinks: menu,
      mobileMenuOpen: false,
    };
  },
};
</script>

<style lang="scss" scoped>

.link {
  position: relative;
  overflow: hidden;
  text-decoration: none;
  //color: #EC407A;
  @apply block  text-base font-medium px-3;

  &.nuxt-link-exact-active {
    //@apply bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium;
    @apply text-base text-slate-800;

    &::after {
      left: 0;
      bottom: -2px;
      width: 100%;
      height: 100%;
    }
  }

  &::after {
     content: "";
     background: rgba(#EC407A, 0.25);
     position: absolute;
     left: 18px;
     bottom: -6px;
     width: calc(100% - 8px);
     height: calc(100% - 8px);
     z-index: -1;
     transition: 0.35s cubic-bezier(0.25, 0.1, 0, 2.05);
   }

  &:hover:after {
     left: 0;
     bottom: -2px;
     width: 100%;
     height: 100%;
   }
}
</style>
