<template>
  <section class="flex items-center justify-center h-128 bg-transparent">
    <canvas id="c" class="-z-10 absolute w-full h-128 block"></canvas>

    <div class="clip-ellipse absolute top-124  rotate-180">
    </div>

    <slot name="content">
    </slot>

  </section>
</template>
<script>
import heroThree from "@/plugins/hero-three";

export default {
  name: 'HeroSection',
  mounted() {
    heroThree();
  }
}
</script>
<style>
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}

.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}

.nuxt-content p {
  margin-bottom: 20px;
}

.clip-ellipse {
  clip-path: ellipse(60% 100% at 50% 0%);
  @apply bg-white;
  height: 100px;
  width: 100%;

}

</style>
