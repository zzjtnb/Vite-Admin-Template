<template>
  {{layout}}
  <component :is="layout">
    <router-view />
  </component>
</template>

<script lang="ts">

import { defineComponent, ref, computed } from 'vue';
import { useRouter } from 'vue-router';
const defaultLayout = 'default';
import { menuHeader, menuAside } from "./menu";
export default defineComponent({
  setup() {
    const { currentRoute } = useRouter();
    const layout = computed( () => `${currentRoute.value.meta.layout || defaultLayout}-layout` );
    return {
      layout,
    };
  },
});
</script>

<style lang="scss">
// @import url('https://use.fontawesome.com/releases/v5.14.0/css/all.css');
@import url('https://cdn.bootcdn.net/ajax/libs/font-awesome/5.14.0/css/all.css');
</style>
