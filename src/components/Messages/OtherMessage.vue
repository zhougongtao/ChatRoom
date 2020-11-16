<template>
  <div class="othermessage">
    <span class="userimg" :style="{'background-color':color}">{{ name }}</span>
    <span class="username">{{name}}</span>
    <div class="usermsg">{{msg}}</div>
  </div>
</template>

<script>
export default {
  name: "OtherMessage",
  data() {
    return {
    }
  },
  ready() {
    this.$el.scrollIntoView()
  },
  props: ["msg", "name", "color"]
}
</script>

<style scoped>
.othermessage {
  /*background-color: #666;*/
  padding: 5px 5px 0 5px;
  position: relative;
}

.userimg {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #905;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  font-weight: bolder;
}

.username {
  /*background-color: #fff;*/
  position: absolute;
  font-size: 14px;
  padding: 2px;
  margin: 0 10px;
  color: #999;
}

.usermsg {
  /*display: inline-flex;*/
  background-color: #fff;
  padding: 10px;
  position: relative;
  left: 60px;
  top: -20px;
  border-radius: 6px;
  max-width: calc(100% - 180px);
  font-size: 16px;
}
.usermsg:before {
  content: '';
  display: inline-block;
  height: 0;
  width: 0;
  border-right: solid 10px #fff;
  border-top: solid 6px transparent;
  border-bottom: solid 6px transparent;
  position: absolute;
  top: 5px;
  left: -8px;
}

</style>



