import React from 'react'
import Web3 from 'web3'
import { approveAbi, approveContractAddress } from './approveContract'
let isItConnected = false

const networks = {
  bsc: {
    chainId: `0x${Number(97).toString(16)}`,
    chainName: 'Binance smart chain',
    nativeCurrency: {
      name: 'BSC',
      symbol: 'BNB',
      decimals: 18,
    },
    rpcUrls: [
      'https://bsc-dataseed1.binance.org',
      'https://bsc-dataseed2.binance.org',
      'https://bsc-dataseed3.binance.org',
      'https://bsc-dataseed4.binance.org',
      'https://bsc-dataseed1.defibit.io',
      'https://bsc-dataseed2.defibit.io',
      'https://bsc-dataseed3.defibit.io',
      'https://bsc-dataseed4.defibit.io',
      'https://bsc-dataseed1.ninicoin.io',
      'https://bsc-dataseed2.ninicoin.io',
      'https://bsc-dataseed3.ninicoin.io',
      'https://bsc-dataseed4.ninicoin.io',
      'wss://bsc-ws-node.nariox.org',
    ],
    blockExplorerUrls: ['https://bscscan.com'],
  },
}
const changeNetwork = async ({ networkName }) => {
  try {
    if (!window.ethereum) throw new Error('No crypto wallet found')
    await window.ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [
        {
          ...networks[networkName],
        },
      ],
    })
  } catch (err) {
    console.log('not found')
  }
}
const handleNetworkSwitch = async (networkName) => {
  await changeNetwork({ networkName })
}
let accounts
const getAccounts = async () => {
  const web3 = window.web3
  try {
    accounts = await web3.eth.getAccounts()
    return accounts
  } catch (error) {
    console.log('Error while fetching acounts: ', error)
    return null
  }
}
export const disconnectWallet = async () => {
  await window.ethereum.request({
    method: 'eth_requestAccounts',
    params: [{ eth_accounts: {} }],
  })
  console.log('disconnect')
}
export const loadWeb3 = async () => {
  try {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
      await window.web3.eth.getChainId((err, netId) => {
        // console.log("networkId==>", netId);
        switch (netId.toString()) {
          case '56':
            isItConnected = true
            break
          default:
            handleNetworkSwitch('bsc')
            isItConnected = false
        }
      })
      if (isItConnected == true) {
        let accounts = await getAccounts()
        return accounts[0]
      } else {
        let res = 'Wrong Network'
        return res
      }
    } else {
      let res = 'No Wallet'
      return res
    }
  } catch (error) {
    let res = 'No Wallet'
    return res
  }
}
export function approveRemoveLiquidity(amount, address, account) {
  try {
    loadWeb3()
    console.log('accounts', accounts)
    const web3 = window.web3
    console.log('web3', web3)
    console.log('amount', amount)
    console.log('amount', address)
    let contractOf = new web3.eth.Contract(approveAbi, address)
    console.log('contractOf', contractOf)
    contractOf.methods.approve('0x45DB4D02d3353148337Cf682c45a5CBAf07CB99e', amount).send({ from: account })
  } catch (error) {
    console.log('error', error)
  }
}
