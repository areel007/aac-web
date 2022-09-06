<script setup>
const props = defineProps({
  menu: {
    type: [Object],
  },
  isMobileMenuOut: {
    type: Boolean,
  },
});
</script>

<template>
  <div
    class="w-full h-full fixed z-30 -translate-x-full transition-transform"
    :class="{ '-translate-x-0': isMobileMenuOut }"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-5 h-5 absolute right-5 top-5 z-30 text-white"
      v-if="isMobileMenuOut"
      @click="$emit('close-mobile-menu')"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
    <div class="absolute w-full h-full bg-primary-color opacity-80 z-20"></div>
    <nav class="w-10/12 h-full relative z-20 bg-primary-color p-4 flex flex-col gap-4 text-white">
      <a
        v-for="(_menu, index) in menu"
        :key="index"
        :href="_menu.menuUrl"
        @click="$emit('close-mobile-menu')"
        >{{ _menu.menuName }}</a
      >
    </nav>
  </div>
</template>
