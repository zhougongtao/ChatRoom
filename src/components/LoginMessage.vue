<template>
  <div class="loginmsg">
    <div class="msg">
      {{msg}}
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginMessage",
  data(){
    return {
    }
  },
  props:['msg']   //外界输入的参数
}
</script>

<style scoped>
.loginmsg {
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.msg{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.05);
  border-radius: 10px;
  min-width: 40%;
  color: #999;
  font-size: 12px;
  padding: 3px;
}

</style>
