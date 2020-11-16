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
    <van-popup v-model="show"  closeable position="right"  :style="{ width: '50%',height: '100%' }">
      <ul class="a">
          <li  v-for="(item,key) in list" :key="key">
            <br><br><br>
            <van-button round type="info" style="width:80%;background: rgba(0,0,0,0.1);border-color:rgba(0,0,0,0.1);color:black">
              {{item}}</van-button>
            <br><br><br>
           </li>
      </ul>
    </van-popup>
  </div>
</template>

<script>
import Vue from 'vue';
import { NavBar,Popup,Toast,Button} from 'vant';
Vue.use(NavBar);
Vue.use(Popup);
Vue.use(Button);
export default {
  name: "ChatHead",
  data(){
    return{
      show:false,
      list:['功能1','功能2','功能3'],                   //功能列表
    }
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
  ul.a{list-style-position:inside;
       text-align:center;}
</style>
