<template>
  <div>
    <van-nav-bar
        title="公共聊天室"
        left-text="返回"
        right-text="功能"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
    />
    <van-popup v-model="show" position="right"  :style="{ width: '30%',height: '100%' }" ></van-popup>
  </div>
</template>

<script>
import Vue from 'vue';
import { NavBar,Popup,Toast } from 'vant';
Vue.use(NavBar);
Vue.use(Popup);
export default {
  name: "ChatHead",
  data(){
    return{
      show:false,
      list:[],                   //功能列表
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push({path:'/'});
    },
    onClickRight() {
      this.show=true;
    },
    send() {
      Toast('发送消息')
    },
  }

}
</script>

<style scoped>

</style>
