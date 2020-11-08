<template>
  <div class="about">
    <h1>This is an about page</h1>
    <van-button type="primary">主要按钮</van-button>
  </div>
</template>

<script>
import Vue from 'vue';
import { Button } from 'vant';
Vue.use(Button);
export default {
  name: 'About',
  components: {
  }
}
</script>
