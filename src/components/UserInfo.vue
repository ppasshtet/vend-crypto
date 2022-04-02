<template>
  <div v-if="user.address.value" class="user-info">
    <!-- <div class="user-info__title">Your Address: </div> -->
    <div class="user-info__item user-info__address">
      {{ user.address.value }}
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
</style>