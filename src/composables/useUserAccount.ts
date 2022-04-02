import { ref, watch } from 'vue'
import { UseUserAccountInterface, UserAccountInterface } from '@/types/web3' 

import useWeb3 from '@/composables/useWeb3'

const user : UserAccountInterface = {
  address: ref('')
}

const setDefaultAddressOnChange = () : void => {
  const { isUserConnected } = useWeb3()

  watch(isUserConnected, (newStatus) => {
    if (!newStatus) return

    user.address.value = (window as any).ethereum.selectedAddress
  })
}

export default function useUserAccount(): UseUserAccountInterface {
  return {
    user,
    setDefaultAddressOnChange
  }
}