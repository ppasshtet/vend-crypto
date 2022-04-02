import Web3 from 'web3'
import { ref } from 'vue'
import { UseWeb3ReturnInterface, isUserConnectType } from '@/types/web3' 

const isUserConnected: isUserConnectType = ref(false)

const getWeb3Provider = () : Web3 => {
  const web3 = new Web3(Web3.givenProvider);
  return web3
}

const enableMetamaskWallet = async (): Promise<boolean> => {
  const adaptedWindow: any = window //eslint-disable-line
  if (!adaptedWindow.ethereum) return false
  if (!adaptedWindow.ethereum.isMetaMask) return false

  try {
    adaptedWindow.web3 = getWeb3Provider();
    await adaptedWindow.ethereum.enable();
    isUserConnected.value = true
  } catch (error) {
    return false
  }

  return true
}

export default function useWeb3(): UseWeb3ReturnInterface {
  return {
    isUserConnected,
    getWeb3Provider,
    enableMetamaskWallet
  }
}
