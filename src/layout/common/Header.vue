<template>
  <header class="flex justify-between items-center py-4 px-6 bg-white border-b-4 border-indigo-600">
    <div class="flex items-center">
      <button @click="burgerClicked" class="text-gray-500 focus:outline-none lg:hidden">
        <i class="fas fa-bars"></i>
      </button>
      <div class="relative mx-4 lg:mx-0">
        <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
          <i class="fas fa-search text-gray-700"></i>
        </span>
        <input class="form-input w-32 sm:w-64 rounded-md pl-10 pr-4 focus:border-indigo-600" type="text" placeholder="搜索" />
      </div>
    </div>
    <div class="flex items-center">
      <button class="flex mx-4 text-gray-600 focus:outline-none">
        <i class="far fa-bell text-2xl"></i>
      </button>
      <div class="relative">
        <button @click="dropdownOpen = !dropdownOpen" class="relative z-10 block h-8 w-8 rounded-full overflow-hidden shadow focus:outline-none">
          <i class="far fa-user text-2xl text-teal-400"></i>
          <!-- <img class="h-full w-full object-cover" src="0" alt="Your avatar" /> -->
        </button>
        <div v-show="dropdownOpen" @click="dropdownOpen = false" class="fixed inset-0 h-full w-full z-10"></div>
        <div v-show="dropdownOpen" class="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
          <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">Profile</a>
          <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">Products</a>
          <router-link to="/" class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">Log out</router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup(_, { emit }) {
    const dropdownOpen = ref(false);

    const burgerClicked = () => {
      emit('burgerClicked');
    };

    return {
      burgerClicked,
      dropdownOpen,
    };
  },
});
</script>
