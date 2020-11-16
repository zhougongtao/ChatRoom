<template>
  <div class="chatting">
    <!--    顶部导航条     -->
    <van-nav-bar
        title="公共聊天室"
        left-text="返回"
        right-text="功能"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
    />
    <!--    消息显示区域  -->
    <div class="chatting-content">
      hhh
    </div>


    <!--    底部输入区域  -->
    <div class="chatting-input">
      <input @keyup.enter="send" type="text"/>
      <button @click="send">发送</button>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { NavBar,Popup,Toast } from 'vant';
  Vue.use(NavBar);
  Vue.use(Popup);

  export default {
    name: "ChatRoom",
    methods: {
      onClickLeft() {
        Toast('返回');
      },
      onClickRight() {
        Toast('按钮');
      },
      send() {
        Toast('发送消息')
      },
    },
  }
</script>

<style scoped>
  .chatting {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }

  /* 聊天内容 */
  .chatting-content{
    width: 100%;
    height: 80%;
    background: #42b983;
  }


  /* 输入区域 */
  .chatting-input {
    position: relative;
    display: flex;
    height: 40px;
    width: 100%;
    bottom:0;
  }

  textarea {
    flex: 1;
    resize: none;
    height: 36px;
    font-size: 1.4rem;
  }
  button {
    width: 60px;
    height: 100%;
    background-color:deepskyblue;
    color: white;
    font-size: 16px;
  }
</style>

