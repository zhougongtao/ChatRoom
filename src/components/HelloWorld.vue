<template>
  <div class="hello">
    <!-- 登陆界面  -->
    <div class="login" v-if="!isLogin">
      <img src="../../static/img/message.png" height="100px" width="100px" >
      <br/>
      <h2 class="login-h2">请输入您的名字</h2>
      <br/>
      <input class="login-input" @keyup.enter="login" v-model.trim="uname" type="text"/>
    </div>
    <!-- 聊天界面 -->

    <div class="chatting" v-else>
      <!-- 导航部分 -->
      <div>
        <van-nav-bar title="公共聊天室"
            left-text="返回"
            right-text="功能"
            left-arrow
            @click-left="onClickLeft"
            @click-right="onClickRight"
        />
        <van-popup v-model="show"  closeable position="right"  :style="{ width: '50%',height: '100%' }">
          <ul style="width:100%;height:100%;list-style-position:inside;text-align:center;">
              <li  v-for="(item,key) in list" :key="key" style="width:100%">
                <br><br><br>
                <van-button round type="info" style="width:80%;background: rgba(0,0,0,0.1);border-color:rgba(0,0,0,0.1);color:black"
                @click="func(key)">
                  {{item}}</van-button>
                <br><br><br>
              </li>
          </ul>
        </van-popup>
      </div>


       <!-- 当前在线人数显示 -->
      <div>
          <van-popup v-model="funcshow" closeable :style="{ width: '80%',height: '80%' }">
            <br><br>
          <h2 align="center">当前在线人数: {{amount}}</h2>
          <br/>
          <div class="onlineshow">
          <template  v-for="item in userList">
            <online :name="item.username" :color="item.color" ></online>
            </template>
            </div>
          </van-popup>
      </div>
      <!-- 戳一戳提示 -->
      <div>
        <van-popup v-model="funcshow2" closeable :style="{ width: '75%',height: '65%' }">
          <div style="width:80%;height:80%;position:relative;left:10%;">
              <h2 align="center" ><br><br><br><br>单击在线好友可以</h2>
              <h2 align="center" ><br><br><br>戳一戳</h2>
          </div>
          </van-popup>
      </div>

      <!-- 消息部署 -->
      <div class="chatbody" id="chatbody">

        <template v-for="item in msgList">
          <!-- 登陆消息 -->
          <template v-if="item.msgType==0">
              <login-message :msg="item.message"></login-message>
          </template>
          <!-- 自己的消息 -->
          <template v-else-if="item.msgType==1 && item.username == uname">
            <my-message :msg="item.message" :color="item.color"></my-message>
          </template>
          <!-- 别人的消息 -->
          <template v-else-if="item.msgType==1 && item.username != uname">
            <other-message :name="item.username" :msg="item.message" :color="item.color" @click.native="point"></other-message>
          </template>
          <!-- 自己的色子 -->
          <template v-else-if="item.msgType==2 && item.username == uname">
            <touzi-message :imgpath="item.imgpath" :color="item.color"></touzi-message>
          </template>
          <!-- 别人的色子 -->
          <template v-else-if="item.msgType==2 && item.username != uname">
            <touzi-message-2 :imgpath="item.imgpath" :color="item.color" :name="item.username" @click.native="point"></touzi-message-2>
          </template>
        </template>
      </div>

      <!-- 提交部分 -->
      <div class="chatsubmit">
        <input class="message" type="text" name="" @keyup.enter="sendMessage" v-model.trim="inputMsg">
        <span class="submit"  @click="sendMessage">发送</span>
      </div>
    </div>
  </div>
</template>




<script>
import LoginMessage from "@/components/LoginMessage";
import OtherMessage from "@/components/OtherMessage";
import MyMessage from "@/components/MyMessage";
import Online from "@/components/Online";
import TouziMessage from "@/components/TouziMessage";
import TouziMessage2 from "@/components/TouziMessage2"

import Vue from 'vue';
import { NavBar,Popup,Toast,Button} from 'vant';

Vue.use(NavBar);
Vue.use(Popup);
Vue.use(Button);

export default {
  name: 'HelloWorld',
  components: {
    LoginMessage,
    OtherMessage,
    MyMessage,
    Online,
    TouziMessage,
    TouziMessage2,
  },
  data () {
    return {
      temp:"zhougt",
      temp2:"#f1f1f1",
      imgpath:"/static/img/01.png",
      imgpath1:"/static/img/02.png",
      imgpath2:"/static/img/03.png",

      msg: '',
      amount: 0,          //聊天室总数人
      uname: '',    //定义用户名
      ucolor:'',    //用户的头像框颜色
      inputMsg: '',
      socket: null,       //定义socket实例
      isLogin: false,
      msgList:[],         //服务端返回的信息列表
      userList:[],
      num: 0,
      pointmsg: '',        //戳一戳消息

      // 功能栏
      show:false,
      funcshow:false,
      funcshow2:false,
      list:['当前在线人数','戳一戳','掷色子'],                   //功能列表
    }
  },
  mounted:function(){
    var vm = this;
    /*建立socket连接，使用websocket协议，端口号是服务器端监听端口号*/
    vm.socket = io('ws://localhost:8081');

    /*登录成功*/
    vm.socket.on('loginSuccess',function(data){
      vm.isLogin = true;
      console.log('登录成功:',data.username)
    })

    /*登录失败*/
    vm.socket.on('loginFail',function(){
      alert('昵称重复')
    })

    /*监听人数*/
    vm.socket.on('amountChange',function(data){
      vm.amount = data
    })

    /*接收消息*/
    vm.socket.on('receiveMessage',function(data){
      console.log('接收到服务端返回：',data)
      vm.msgList.push(data);
      vm.scrollBottom()
    })

    /*戳一戳*/
     vm.socket.on('pointMessage',function(data){
      vm.msgList.push(data);
      vm.scrollBottom()
    })

    /*接受色子消息*/
     vm.socket.on('receivetouzi',function(data){
      vm.msgList.push(data);
      vm.scrollBottom()
    })

    /*当前用户信息*/
    vm.socket.on('UserList',function(data){
      vm.userList=data
    })

  },
  filters:{
    formatDate:function(data){
      var date = data ? new Date(data) : new Date();
      var time = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + (date.getMinutes() < 10 ? ('0' + date.getMinutes()) : date.getMinutes()) + ":" + (date.getSeconds() < 10 ? ('0' + date.getSeconds()) : date.getSeconds());
      return time;
    },
  },
  methods:{
    // 页面默认移动到低端
    scrollBottom () {
      this.$nextTick(() => {
        let msg = document.getElementById('chatbody') // 获取对象
        msg.scrollTop = msg.scrollHeight // 滚动高度
      })
    },


    //用户登录
    login:function(){
      var vm = this;
      if(vm.uname){
        vm.ucolor=vm.createColor();
        vm.socket.emit('login',{username:vm.uname,color:vm.ucolor})   // 服务端发送
      }else{
        alert('请输入昵称')
      }
    },

   // 颜色生成
    createColor(){
      var r=Math.floor(Math.random()*256);
      var g=Math.floor(Math.random()*256);
      var b=Math.floor(Math.random()*256);
      return "rgb("+r+','+g+','+b+")";
      // var c= '#'+Math.floor(Math.random()*0xffffff).toString(16);
      // return c;
    },

    // 发送消息
    sendMessage:function(){
      var vm = this;
      if(vm.inputMsg){
        vm.socket.emit('sendMessage',{username:vm.uname,message:vm.inputMsg,color:vm.ucolor});
        vm.inputMsg = '';
      }
      else{
        alert('请输入……')
      }
    },

    //戳一戳
    point:function(Event){
      var el=Event.target.className;
      var vm=this;
      if(el=='userimg'){
       var text=Event.target.innerText;
      vm.socket.emit('chuo',{username:vm.uname,opname:text});
      console.log(vm.uname,text)
      }
      else{}
    },

    // 导航栏点击
    onClickLeft() {
      this.isLogin=!this.isLogin;
    },
    onClickRight() {
      this.show=true;
    },

    //功能按钮
    func(key){
      var vm=this;
      if(key==0){
        this.funcshow=true;
      }
      if(key==1){
        this.funcshow2=true;
      }
      if(key==2){
        this.show=false;
        var arr=["/dist/static/img/01.png","/dist/static/img/02.png","/dist/static/img/03.png","/dist/static/img/04.png","/dist/static/img/05.png","/dist/static/img/06.png",];
        var n= Math.round(Math.random()*5);
        //var mypath="/dist/static/img/01.png"
        this.socket.emit("touzi",{username:vm.uname,imgpath:arr[n],color:vm.ucolor});
      }
    }

  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
