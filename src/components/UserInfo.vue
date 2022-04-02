<template>
  <div v-if="user.address.value" class="user-info">
    <div class="user-info__title">Wallet successfully connected!</div>
    <div class="user-info__item user-info__address">
      <span>Your address:</span> {{ user.address.value }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import useUserAccount from '@/composables/useUserAccount'

export default defineComponent({
  setup() {
    const { user, setDefaultAddressOnChange } = useUserAccount()
    setDefaultAddressOnChange()

    return {
      user
    }
  },
})
</script>

<style lang="scss" scoped>
  .user-info {
    font-family: sans-serif;
    font-size: 16px;
    color: white;
    text-align: center;
  }

  .user-info__title {
    margin-bottom: 12px;
    color: green;
    font-weight: 500;
    font-size: 24px;
  }

  span {
    font-weight: 700;
  }
</style>