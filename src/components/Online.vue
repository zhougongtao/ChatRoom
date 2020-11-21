<template>
  <div class="online">
    <span class="userimg" :style="{'background-color':color}">{{ name }}</span>
  </div>
</template>

<script>
export default {
  name: "Oline",
  data() {
    return {
    }
  },
  props: ["msg", "name", "color"]
}
</script>

<style scoped>
.online {
  /*background-color: #666;*/
  width:100px;
  height:100px;
  float:left;
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
  position: relative;
  top:20%;
  left:20%;
}

.username {
  /*background-color: #fff;*/
  position: absolute;
  font-size: 20px;
  padding: 2px;
  margin: 10px 10px;
  color: #999;
}

.usermsg {
  display: inline-flex;
  background-color: #fff;
  padding: 10px;
  position: relative;
  left: 10px;
  top: 20px;
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



