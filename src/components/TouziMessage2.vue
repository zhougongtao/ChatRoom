<template>
  <div class="othermessage">
    <span class="userimg" :style="{'background-color':color}">{{ name }}</span>
    <img class="touzi" :src="imgpath"/>
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
  props: ["imgpath", "name", "color"],
  methods:{
}
}
</script>

<style scoped>

.othermessage {
  padding: 5px 5px 15px 5px;
  position: relative;
}

.userimg {
  position: relative;
  bottom: 60px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #905;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  font-weight: bolder;
}

.touzi{
  height: 100px;
  width: 100px;
  position: relative;
  left:25px;
}

</style>



