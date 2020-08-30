<template>
  <router-view />
</template>

<script>

import { menuHeader, menuAside } from "./menu";
export default {
  data() {
    return {};
  },
  created() {
    // // 设置顶栏菜单
    this.$store.commit('headerSet', menuHeader)
    // // 设置侧边栏菜单
    this.$store.commit('asideSet', menuAside)
  },
  mounted() {

  },
  methods: {

  },
  components: {},
};
</script>

<style lang="scss">
// @import url('https://use.fontawesome.com/releases/v5.14.0/css/all.css');
@import url('https://cdn.bootcdn.net/ajax/libs/font-awesome/5.14.0/css/all.css');
</style>
