<template>
  <div class="item">
    <img :src="product.img" alt="image" class="item__img" />
    <h2 class="item__title">{{product.title}}</h2>
    <span class="item__price">R${{product.price}}</span>
    <div class="item__footer">
      <button type="button" class="item__footer__button button--red" @click="decrement">Vender</button>
      <input
        type="number"
        min="0"
        v-model="product.quantity"
        class="item__footer__input"
        @keydown.enter="increment"
      />
      <button type="button" class="item__footer__button button--green" @click="increment">Comprar</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
  methods: {
    increment() {
      this.product.quantity++;
      this.$store.commit("increment", this.product);
    },
    decrement() {
      this.product.quantity > 0 ? this.product.quantity-- : null;
      this.$store.commit("decrement", this.product);
    }
  }
};
</script>

<style src="./style.scss" lang="scss" scoped>
</style>