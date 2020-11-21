<template>
  <div class="othermessage">
    <span class="userimg" :style="{'background-color':color}">{{ name }}</span>
    <div class="usermsg">{{msg}}</div>
  </div>
</template>

<script>
export default {
  name: "OtherMessage",
  data() {
    return {
      touchtime:'',
    }
  },
  props: ["msg", "name", "color"],
  methods:{
}
}
</script>

<style scoped>
.othermessage {
  /*background-color: #666;*/
  padding: 5px 5px 15px 5px;
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


.usermsg {
  display: inline-flex;
  background-color: #fff;
  padding: 10px;
  position: relative;
  left: 10px;
  top: 5px;
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



