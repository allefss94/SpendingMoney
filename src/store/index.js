import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    totalMoney: 1000000000,
    products: [
      {
        id: 1,
        title: 'Big Mac',
        price: 10,
        quantity: 0,
        img: 'https://neal.fun/spend/images/big-mac.jpg',
      },
      {
        id: 2,
        title: 'PlayStation',
        price: 3000,
        quantity: 0,
        img: 'https://neal.fun/spend/images/gaming-console.jpg',
      },
      {
        id: 3,
        title: 'Airpods',
        price: 900,
        quantity: 0,
        img: 'https://neal.fun/spend/images/airpods.jpg',
      },
      {
        id: 4,
        title: 'Bicicleta',
        price: 1200,
        quantity: 0,
        img: 'https://neal.fun/spend/images/bike.jpg',
      },
      {
        id: 5,
        title: 'Gatinho',
        price: 1500,
        quantity: 0,
        img: 'https://neal.fun/spend/images/kitten.jpg',
      },
      {
        id: 6,
        title: 'Doguinho',
        price: 1800,
        quantity: 0,
        img: 'https://neal.fun/spend/images/puppy.jpg',
      },
      {
        id: 7,
        title: 'Jet-ski',
        price: 35000,
        quantity: 0,
        img: 'https://neal.fun/spend/images/jet-ski.jpg',
      },
      {
        id: 8,
        title: 'Bola de Basquete',
        price: 80,
        quantity: 0,
        img: 'https://neal.fun/spend/images/nba-team.jpg',
      },
      {
        id: 9,
        title: 'Assinatura Netflix',
        price: 320,
        quantity: 0,
        img: 'https://neal.fun/spend/images/year-of-netflix.jpg',
      },
    ],
    cart: [],
  },
  getters: {
    totalMoney(state) {
      let total = state.cart
        .map((p) => p.quantity * p.price)
        .reduce((total, atual) => total + atual, 0);
      let finalValue = state.totalMoney - total;
      return finalValue.toFixed(2);
    },
    totalCart(state) {
      let total = state.cart
        .map((p) => p.quantity * p.price)
        .reduce((total, atual) => total + atual, 0);
      return total.toFixed(2);
    },
    allProducts(state) {
      return state.products;
    },
    allCart(state) {
      return state.cart;
    },
  },
  mutations: {
    increment(state, payload) {
      const itemIndex = state.cart.findIndex((item) => item.id === payload.id);
      

      itemIndex >= 0
        ? (state.cart[itemIndex].quantity = payload.quantity)
        : state.cart.push(payload);
    },
    decrement(state, payload) {
      const itemIndex = state.cart.findIndex((item) => item.id === payload.id);
      

      if (itemIndex >= 0) {
        state.cart[itemIndex].quantity = payload.quantity;
        if (state.cart[itemIndex].quantity === 0) {
          state.cart.splice(itemIndex, 1);
        }
      }
    },
  },
  actions: {},
  modules: {},
});
