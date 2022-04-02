<template>
  <div>
    <!-- <div v-if="!isUserConnected">
      Please connect your MetaMask wallet. To do it press the button bottom
    </div> -->
    <div 
      class="connect-button" 
      :class="{'connect-button--connected': isUserConnected}"
      @click="!isUserConnected ? enableMetamaskWallet() : ''" 
    >
      {{!isUserConnected ? 'Connect' : 'Connected'}}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'

import useWeb3 from '@/composables/useWeb3'

export default defineComponent({
  setup() {
    const { enableMetamaskWallet, isUserConnected } = useWeb3()

    onMounted(() => {
      const proxy = (window as any).ethereum
      
      setTimeout(() => {
        if (proxy.selectedAddress) {
          enableMetamaskWallet()
        }
      }, 100)
    })

    return {
      isUserConnected,
      enableMetamaskWallet
    }
  },
})
</script>

<style lang="scss" scoped>
  .connect-button {
    width: 256px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    font-family: sans-serif;
    font-size: 16px;
    color: white;
    background-color: #EF87DE;
    cursor: pointer;
    transition: all 0.3s ease;
    user-select: none;

    &:hover {
      background-color: rgba(#EF87DE, 0.8);
    }
    &:active {
      background-color: rgba(#EF87DE, 0.7);
    }

    &--connected {
      background-color: orange;
      cursor: default;
      &:hover {
        background-color: orange;
      }
      &:active {
        background-color: orange;
      }
    }
  }
</style>