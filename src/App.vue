<template>
  <div id="app">
    <header class="banner">
      <h1 class="banner__title">Desafio Front-end Jr.</h1>
    </header>
    <main class="container">
      <Profile />
      <PanelCash />
      <Products />
      <Cart />
    </main>
    <footer class="banner">
      <h1 class="banner__title title--align-center">Feito com muita dedicação por Allef Sousa</h1>
    </footer>
  </div>
</template>

<script>
import Profile from "@/components/Profile/Profile.vue";
import PanelCash from "@/components/PanelCash/PanelCash.vue";
import Products from "@/components/Products/Products.vue";
import Cart from "@/components/Cart/Cart.vue";
export default {
  name: "App",
  components: { Profile, PanelCash, Products, Cart }
};
</script>

<style src="./style.scss" lang="scss" scoped>
</style>
