<template>
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

</style>
