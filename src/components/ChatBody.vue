<template>
  <div class="chatbody">

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
export default {
  name: "ChatBody",
  data () {
    return {
      CHAT
    }
  },
  ready(){
    if (!localStorage.getItem('name')) {
      this.$router.go('/login')
    }
    this.visit()
  },
  components:{

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
