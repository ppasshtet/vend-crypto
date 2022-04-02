import Web3 from 'web3'
import { Ref } from 'vue'

export type isUserConnectType = Ref<boolean>
export interface UserAccountInterface {
  address: Ref<string>
}


export interface UseWeb3ReturnInterface {
  isUserConnected: isUserConnectType,
  getWeb3Provider: () => Web3,
  enableMetamaskWallet: () => Promise<boolean>
}

export interface UseUserAccountInterface {
  user: UserAccountInterface,
  setDefaultAddressOnChange: () => void
}
