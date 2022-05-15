<template>
  <section class="w-full pb-12 antialiased">
    <div class="mx-auto max-w-8xl">
      <TheHeader />
      <Nuxt />
      <TheFooter />
    </div>

    <script data-host="https://digianalytics.fr" data-dnt="false" src="https://digianalytics.fr/js/script.js" id="ZwSg9rf6GA" async defer></script>

  </section>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";
import TheFooter from "../components/TheFooter.vue";

export default {
  component: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style></style>
