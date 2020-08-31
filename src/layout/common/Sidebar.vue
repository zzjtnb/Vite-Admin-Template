<template>
  <div :class=" sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'" class="fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0">
    <div class="flex items-center justify-center mt-8">
      <div class="flex items-center">
        <!--
         <i class="fas fa-smile-beam fa-2x pr-2 text-white"></i>
        <span class="text-white text-2xl mx-2 font-semibold">争逐</span>
         -->
        <img src="/images/logo/logo_light.png" class="h-9">

      </div>
    </div>
    <nav class="mt-10">
      <ul>
        <li v-for="(item,index) in frameInRoutes">
          <router-link :class="[$route.path === item.path ? activeClass : inactiveClass]" :to="item.path" class="flex items-center mt-4 py-2 px-6 border-l-4" v-if="!item.children">
            <i :class="item.icon" class="fas pr-0 md:pr-3"></i>
            <span class="shanzheng mx-4">{{item.name}}</span>
          </router-link>
          <div :class="[$route.path.indexOf(item.path)>-1 ? activeClass : inactiveClass]" @click.native="dropdown = !dropdown" class="mt-4 py-2 px-6 border-l-4" v-else>
            <div>
              <i :class="item.icon" class="fas pr-0 md:pr-3"></i>
              <span class="shanzheng mx-4">{{item.name}}</span>
              <i class="fa fa-angle-down pl-5"></i>
            </div>
            <div v-show="dropdown " class="text-center">
              <router-link :class="[$route.path === item.path ? activeClass : inactiveClass]" :to="item.path" class="m-2 block" v-for="item in item.children">
                <i :class="item.meta.icon" class="fas pr-0 md:pr-3"></i>
                <span class="shanzheng"> {{item.name}}</span>
              </router-link>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import {defineComponent,ref} from 'vue';
import {frameInRoutes} from '../../router/routes'
export default defineComponent({
  props: {
    sidebarOpen: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const activeClass = 'bg-gray-600 bg-opacity-25 text-gray-100 border-gray-100';
    const inactiveClass = 'border-gray-900 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100';
    const dropdown = ref(false)
    return {
      activeClass,
      inactiveClass,
      dropdown,
      frameInRoutes,
    };
  },
});
</script>
