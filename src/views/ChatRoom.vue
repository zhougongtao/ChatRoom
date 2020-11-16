<template>
  <div class="chatting">
    <!--    顶部导航条     -->
    <chat-head></chat-head>

    <!--    消息显示区域  -->
    <chat-body></chat-body>

    <!--    底部输入区域  -->
    <chat-submit></chat-submit>
  </div>
</template>

<script>
import ChatHead from "@/components/ChatHead";
import ChatBody from "@/components/ChatBody";
import ChatSubmit from "@/components/ChatSubmit";

export default {
  name: "ChatRoom",
  components: {
    ChatHead,
    ChatBody,
    ChatSubmit,
  },
  methods: {
  },
}
</script>

<style scoped>
  .chatting {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
  }

</style>

