<template>
  <div class="panel">
    <transition name="fade" mode="out-in">
      <h1>{{totalMoney.replace('.', ',') }}</h1>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["totalMoney"])
};
</script>

<style src="./style.scss" lang="scss" scoped>
</style>