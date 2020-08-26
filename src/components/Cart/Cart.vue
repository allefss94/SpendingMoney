<template>
  <transition name="fade">
    <div class="cart" v-if="totalCart > 1">
      <h3 class="cart__title">Suas compras</h3>
      <table class="cart__table">
        <tbody>
          <tr class="cart__table__item" v-for="item in allCart" :key="item.id">
            <td class="item--title-space">{{item.title}}</td>
            <td>x{{item.quantity}}</td>
            <td class="item--text-green">R${{item.quantity * item.price}}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr class="cart__table__footer item--border-top">
            <td class="item--text">TOTAL</td>
            <td class="item--text-green">R${{totalCart.replace('.', ',')}}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["allCart", "totalCart"])
  }
};
</script>

<style src="./style.scss" lang="scss" scoped>
</style>