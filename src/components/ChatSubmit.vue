<template>
  <div class="chatsubmit">
    <input class="message" type="text" name="" @keyup.enter="send(msg)" v-model="msg">
    <span class="submit"  @click="send(msg)">发送</span>
  </div>
</template>

<script>
import CHAT from '@/API/client'
export default {
  name: "ChatSubmit",
  data () {
    return {
      msg:''
    }
  },
  ready(){
    CHAT.init()
    console.log(CHAT,'ww')
  },
  methods:{
    send(msg){
      console.log(msg)
      // CHAT.submit(msg)
      // this.msg=''
      // console.log(CHAT)
    }
  }
}
</script>

<style scoped>
.chatsubmit{
  background-color: #f1f1f1;
  height: 40px;
  flex-shrink: 0;
  display: flex;
  padding: 5px 10px;
  justify-content: space-between;
  border-top: solid 1px rgba(0,0,0,0.1);

}
.message{
  height: 100%;
  width: 80%;
  border-radius: 10px;
  outline: none;
  border:none;
  box-sizing: border-box;
  padding: 5px;
}
.submit{
  display: flex;
  background-color: rgba(0,0,0,0.1);
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 18%;
  border-radius: 10px;
  outline: none;
}
</style>
