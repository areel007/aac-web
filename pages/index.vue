<script setup>
  useHead({
  title: 'Home',
  // or, instead:
  titleTemplate: (title) => `AAC - ${title}`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'test'
  }
})
</script>

<template>
  <main class="top-14 left-0 relative">
    <AppHero />
    <AboutUs />
    <Services />
  </main>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500&display=swap');

  html {
    scroll-behavior: smooth;
  }

  body {
    width: 100vw;
    height: 100vh;
    background: url(../assets/images/pexels-soumya-ranjan-1098745.jpg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    /* background: rgb(4, 4, 45); */
    font-family: "Sora", sans-serif;
  }
  .router-link-active {
  color: #faa831;
  font-weight: 500;
}

</style>
