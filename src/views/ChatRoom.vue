<template>
  <div class="chatting">

    <chat-head></chat-head>
    <chat-body></chat-body>
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

