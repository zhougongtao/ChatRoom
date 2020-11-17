<template>
  <div class="mymessage">
    <span class="userimg" :style="{'background-color':color}">我</span>
    <div class="usermsg">哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</div>
  </div>
</template>

<script>
export default {
  name: "MyMessage",
  data () {
    return {
    }
  },
  ready(){
    this.$el.scrollIntoView()
  },
  props:["msg","color"]
}
</script>

<style scoped>
.mymessage {
  padding: 5px 5px 15px 5px;
  position: relative;
  overflow: hidden;
}
.userimg{
  position: relative;
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
.usermsg {
  background-color: #fff;
  padding: 10px;
  word-break: break-word;
  float: right;
  position: relative;
  left: -60px;
  top: 0;
  border-radius: 6px;
  max-width: calc(100% - 180px);
  font-size: 16px;
}
/*  usermsg 标签的前缀  */
.usermsg:before{
   content:'';
   display: inline-block;
   height: 0;
   width: 0;
   border-left: solid 10px #fff;
   border-top: solid 6px transparent;
   border-bottom : solid 6px transparent;
   position: absolute;
   top:5px;
   left: 100%;
}
</style>



