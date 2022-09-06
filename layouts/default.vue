<script setup>
import { reactive, ref } from "vue";

const menu = reactive([
  {
    menuName: "Home",
    menuUrl: "/#",
  },
  {
    menuName: "About",
    menuUrl: "/#about",
  },
  {
    menuName: "Services",
    menuUrl: "/#services",
  },
  {
    menuName: "Contact Us",
    menuUrl: "/#contact-us",
  },
]);

const isMobileMenuOut = ref(false);

const openMobileMenu = () => (isMobileMenuOut.value = true);
const closeMobileMenu = () => (isMobileMenuOut.value = false);

</script>

<template>
  <div>
    <AppHeader
      :menu="menu"
      :isMobileMenuOut="isMobileMenuOut"
      @open-mobile-menu="openMobileMenu"
    />
    <MobileMenu
      :menu="menu"
      :isMobileMenuOut="isMobileMenuOut"
      @close-mobile-menu="closeMobileMenu"
    />
    <main>
      <slot />
    </main>
  </div>
</template>
