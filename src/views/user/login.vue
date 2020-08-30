<template>
<div @click="onSubmit">登录</div>
</template>

<script>
import {
  login
} from '../../api/user';
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {
    onSubmit() {
      console.log(1);
      let data = {
        email: "admin@zzjtnb.com",
        password: "zzjtnb"
      }
      login(data).then(res => {
          console.log(res);
        })
        .catch(response => {

        });
    },
  },
  components: {},
};
</script>

<style scoped lang='scss'>
</style>
