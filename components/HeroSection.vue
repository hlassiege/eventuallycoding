<template>
    <section class="hero-banner">
        <img src="lofi.svg" class="hero-banner-img" />
        <slot name="content"> </slot>
    </section>
</template>
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

.hero-banner {
    height: 50vh;
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.hero-banner-img {
    width: 100%;
    height: 100%;
    filter: blur(3px);
    object-fit: cover;
    object-position: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
}
</style>
