<template>
  <div class="products">
    <ProductItem v-for="product in allProducts" :key="product.id" :product="product" />
  </div>
</template>

<script>
import ProductItem from "@/components/ProductItem/ProductItem.vue";
import { mapGetters } from "vuex";
export default {
  components: { ProductItem },
  computed: mapGetters(["allProducts"])
};
</script>

<style src="./style.scss" lang="scss" scoped>
</style>