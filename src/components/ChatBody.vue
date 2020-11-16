<template>
  <div class="chatbody">
    <login-message :name="temp"></login-message>
    <other-message :name="temp" :msg="temp" :color="temp2"></other-message>
    <other-message :name="temp" :msg="temp" :color="temp2"></other-message>
    <other-message :name="temp" :msg="temp" :color="temp2"></other-message>
    <other-message :name="temp" :msg="temp" :color="temp2"></other-message>
    <other-message :name="temp" :msg="temp" :color="temp2"></other-message>
    <other-message :name="temp" :msg="temp" :color="temp2"></other-message>
    <other-message :name="temp" :msg="temp" :color="temp2"></other-message>
    <other-message :name="temp" :msg="temp" :color="temp2"></other-message>
    <my-message :msg="temp" :color="temp2"></my-message>

<!--    <template v-for="msgObj in CHAT.msgArr">-->
<!--      <template v-if="msgObj.login">-->
<!--        <system-msg :msg="msgObj.user.username"></system-msg>-->
<!--      </template>-->
<!--      <template v-if="!msgObj.login&&!msgObj.logout">-->
<!--        <other-msg v-if="msgObj.userid!=CHAT.userid" :name="msgObj.username" :msg="msgObj.msg" :color="msgObj.color"></other-msg>-->
<!--        <self-msg v-if="msgObj.userid==CHAT.userid" :msg="msgObj.msg" :color="msgObj.color"></self-msg>-->
<!--      </template>-->
<!--    </template>-->

  </div>
</template>


<script>
import CHAT from '../API/client'
import LoginMessage from "@/components/Messages/LoginMessage";
import OtherMessage from "@/components/Messages/OtherMessage";
import MyMessage from "@/components/Messages/MyMessage";
export default {
  name: "ChatBody",
  components: {
    LoginMessage,
    OtherMessage,
    MyMessage
  },
  data () {
    return {
      CHAT,
      temp:"zhougt",
      temp2:"#f1f1f1"
    }
  },
  ready(){
    if (!localStorage.getItem('name')) {
      this.$router.go('/login')
    }
    this.visit()
  },
  methods:{
    visit(){
      let xhr = new XMLHttpRequest();
      xhr.open('POST', 'http://item.redream.cn/statistics/chat/chat_visit.php');
      xhr.send();

      // xhr.onreadystatechange = function(){
      //   if ( xhr.readyState == 4 && xhr.status == 200 ) {
      //     alert(xhr.responseText )
      //   } else {
      //     alert(xhr.statusText )
      //   }
      // }

    }
  }
}
</script>
<style scoped>
html,body, .chatbody{
  background-color: #f6f6f6;
  height: calc(100% - 86px);
  width: 100% ;
  overflow-y: scroll;
}
</style>
