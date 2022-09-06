<script setup>
  import { ref, onMounted } from 'vue';

const props = defineProps({
  menu: {
    type: [Object],
  },
  isMobileMenuOut: {
    type: Boolean,
  },
});

const scrollPosition = ref(null)

const updateScroll = () => {
      const header = document.querySelector('header')
      if (scrollPosition.value < window.scrollY) {
        header.classList.add('going-up')
      } else {
        header.classList.remove('going-up')
      }
      scrollPosition.value = window.scrollY
    }

onMounted(() => {
  window.addEventListener('scroll', updateScroll)
})
</script>

<template>
  <header class="w-full bg-white fixed z-30 top-0 left-0">
    <div class="container flex justify-between h-full py-4">
      <span>Logo</span>
      <nav
        class="uppercase hidden md:flex items-center gap-4 font-light text-xs"
      >
        <a
          :href="_menu.menuUrl"
          v-for="(_menu, index) in menu"
          :key="index"
          class="text-primary hover:text-secondary-color"
          >{{ _menu.menuName }}</a
        >
      </nav>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-4 h-4 block md:hidden"
        v-if="!isMobileMenuOut"
        @click="$emit('open-mobile-menu')"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </div>
  </header>
</template>

<style scoped>
  header {
    transition: top .5s ease;
  }
.router-link-active {
  color: #faa831;
  font-weight: 500;
}
.going-up {
  top: -95px;
}
</style>
