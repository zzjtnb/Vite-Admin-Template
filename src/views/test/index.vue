<template>
  <div>
    {{this.$store.state.menu}}
    {{frameInRoutes}}
    {{$route}}
  </div>
</template>

<script>
import {frameInRoutes} from '../../router/routes'
export default {
  data () {
    return {
     frameInRoutes
    }
  },
  mounted() {

  },
  methods: {

  },
   components: {

  },
}
</script>

<style scoped lang='scss'>

</style>