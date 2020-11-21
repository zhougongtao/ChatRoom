<template>
  <div class="touzimessage">
    <span class="userimg" :style="{'background-color':color}">我</span>
    <img class="touzi" :src="imgpath"/>
  </div>
</template>

<script>
export default {
  name: "MyMessage",
  data () {
    return {
    }
  },
  props:["imgpath","color"]
}
</script>

<style scoped>
.touzimessage {
  padding: 5px 5px 15px 5px;
  position: relative;
  overflow: hidden;
}
.userimg{
  position: relative;
  bottom: 60px;
  left: calc(100% - 50px);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #905;
  height:50px;
  width: 50px;
  border-radius: 50%;
  font-weight: bolder;
}
.touzi{
  height: 100px;
  width: 100px;
  position: relative;
  left: 40%;
}
</style>



