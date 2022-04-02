<template>
  <div class="home">
    <UserInfo></UserInfo>
    <ConnectButton />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import ConnectButton from '@/components/ConnectButton.vue'
import UserInfo from '@/components/UserInfo.vue'

export default defineComponent({
  components: {
    ConnectButton,
    UserInfo
  }
});
</script>

<style lang="scss">
  .home {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 24px;
    justify-content: center;
    align-items: center;
    background-color: #0E0E28;
  }
</style>
