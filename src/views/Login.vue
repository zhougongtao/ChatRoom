<template>
  <div class="login">
    <img src="../assets/message.png" height="100px" width="100px">
    <br/>
    <h2>请输入您的名字</h2>
    <br/>
    <input @keyup.enter="getName" v-model.trim="name" type="text"/>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      name: ""
    }
  },
  methods: {
    getName() {
      if (this.name === '') {
        return;
      }
      this.$store.commit('changeName', this.name); //公共数据
      localStorage.name = this.name;     //本地存储
      this.$router.push({path:'/chatroom'});
    }
  }
}
</script>

<style scoped>
.login {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 65%;
}

h2 {
  letter-spacing: 1px;
}

input {
  width: 300px;
  padding: 5px 10px;
  margin-top: 10px;
  color: black;
  text-align: center;
  font-size: 2rem;
  letter-spacing: 2px;
}
</style>
