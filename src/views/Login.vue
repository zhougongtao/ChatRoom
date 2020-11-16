<template>
  <div class="login">
    <img src="../assets/message.png" height="100px" width="100px">
    <h2>请输入您的名字</h2>
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
      alert("登陆成功")
      if (this.name === '') {
        return;
      }
      this.$store.commit('changeName', this.name);
      localStorage.name = this.name;
      this.$router.push('Chatting');
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
  height: 100%;
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
