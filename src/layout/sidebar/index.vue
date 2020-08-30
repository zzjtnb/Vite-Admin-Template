<template>
  <aside class="flex flex-col md:flex-row">
    <div class="bg-gray-900 shadow-lg h-16 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-48">
      <div class="md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
        <ul class="list-reset flex flex-row md:flex-col py-0 md:py-3 px-1 md:px-2 text-center md:text-left">
          <li class="mr-3 flex-1" v-for="(item,index) in this.$store.state.menu.aside">
            <router-link v-if="item.path" class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-500" :to="item.path">
              <i :class="item.icon" class="fas pr-0 md:pr-3"></i>

              <span class="pb-1 text-gray-600 md:pb-0 text-xs md:text-base block md:inline-block">{{item.title}}</span>
            </router-link>

            <div v-else class="block py-1 md:py-3 pl-1 align-middle no-underline text-white border-b-2 hover:border-purple-500 border-gray-800 relative">
              <div @click="dropdownOpen = !dropdownOpen">
                <i :class="item.icon" class="fas pr-0 md:pr-3"></i>

                <span class="pb-1 text-gray-600 md:pb-0 text-xs md:text-base block md:inline-block">{{item.title}}</span>
                <i class="hidden fa fa-angle-down pl-5 md:inline"></i>
                <ul v-show="dropdownOpen">
                  <li v-for="item in item.children">
                    <router-link class="block px-4 py-2 text-sm hover:bg-indigo-600 hover:text-white" :to="item.path">
                      <i :class="item.icon" class="fas pr-0 md:pr-3"></i>
                      {{item.title}}
                    </router-link>
                  </li>
                </ul>
              </div>
              <!-- <div v-show="dropdownOpen" @click="dropdownOpen = false" class="fixed inset-0 h-full w-full z-10"></div> -->
              <!-- <div v-show="dropdownOpen" class="absolute left-0 mt-2 py-2 w-20 bg-white rounded-md shadow-xl z-20">
                <router-link class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white" v-for="item in item.children" :to="item.path">{{item.title}}</router-link>
              </div>-->
            </div>
          </li>
        </ul>
      </div>
    </div>
    <Main />
  </aside>
</template>

<script>
import { mapState } from 'vuex'
import Main from '../main/index.vue'
export default {
  data() {
    return {
      dropdownOpen:false
    }
  },
  mounted() {

  },
  methods: {

  },
  components: {
    Main,
  },
}
</script>

<style scoped lang='scss'>

</style>
