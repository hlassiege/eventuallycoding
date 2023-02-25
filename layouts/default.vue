<template>
    <section class="w-full pb-12 antialiased">
        <div class="mx-auto max-w-8xl">
            <TheHeader />
            <slot />
            <TheFooter />
        </div>
    </section>
</template>

<script setup lang="ts">
import TheHeader from "../components/TheHeader.vue";
import TheFooter from "../components/TheFooter.vue";
</script>

<style></style>
