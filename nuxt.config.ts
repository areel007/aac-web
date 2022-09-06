import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
  ],
  css: [
    '@/assets/css/main.css',
  ],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
   buildModules: [
    '@nuxtjs/google-fonts'
  ],
  
});