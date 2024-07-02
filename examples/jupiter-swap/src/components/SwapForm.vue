<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { TapestryClient, TapestryInterface } from '@dscvr-one/tapestry-client-sdk'
import * as bs58 from 'bs58'
import { getTokenList, swap } from '../api/jupiter'
import type { Token, TokenType } from '@/api/types'
import { PublicKey } from '@solana/web3.js'

const props = defineProps<{
  tapestryClient: TapestryClient
}>()

const emit = defineEmits<{
  (e: 'success', signedTx: string): void
}>()

const sourceToken = ref<TokenType>()
const targetToken = ref<TokenType>()
const amount = ref<number>()
const tokens = ref<Token[]>([])
const errorMessage = ref<string>()
const success = ref<boolean>()

const createTx = async (response: TapestryInterface.User.ConnectWalletResponseMessage) => {
  // TODO: validate response.trustedBytes
  if (!response.untrusted.success) {
    errorMessage.value = 'Failed to connect wallet'
    return
  }
  if (!sourceToken.value || !targetToken.value || !amount.value) {
    errorMessage.value = 'Please fill out all fields'
    return
  }
  console.log(
    'create-swap-transaction',
    response.untrusted,
    sourceToken.value,
    targetToken.value,
    amount.value
  )

  const userAddressPublicKey = new PublicKey(response.untrusted.address)
  const swapTransaction = await swap(
    userAddressPublicKey,
    sourceToken.value,
    targetToken.value,
    amount.value
  )

  if (!swapTransaction) {
    errorMessage.value = 'Failed to create swap transaction'
    return
  }

  return bs58.encode(swapTransaction.serialize())
}

const sendTransaction = async () => {
  const response = await props.tapestryClient.connectWalletAndSignTransaction(
    'solana:101',
    createTx
  )

  if (!response) {
    errorMessage.value = 'Transaction not executed'
    return
  }

  // TODO: validate response.trustedBytes
  if (response.untrusted.success) {
    success.value = true
    emit('success', response.untrusted.signedTx)
    console.log('Transaction sent successfully', response.untrusted.signedTx)
  } else if (response.untrusted.errorReason === 'user-cancelled') {
    errorMessage.value = 'User cancelled transaction'
  } else {
    errorMessage.value = response?.untrusted.error
  }
}

const clear = () => {
  errorMessage.value = ''
  success.value = false
  sourceToken.value = undefined
  targetToken.value = undefined
  amount.value = undefined
}

const submit = () => {
  errorMessage.value = ''
  success.value = false
  sendTransaction()
}

onMounted(async () => {
  tokens.value = await getTokenList()
})
</script>

<template>
  <div v-if="success" class="flex justify-center items-center">
    <p>Transaction sent successfully</p>
    <button @click="clear">Close</button>
  </div>
  <form class="flex flex-col justify-center items-center gap-4" @submit.prevent="submit">
    <h2>Swap Info</h2>
    <div class="flex justify-center items-center gap-4">
      <div class="flex items-center gap-1">
        <label for="from">From</label>
        <select name="source" v-model="sourceToken">
          <option v-for="token in tokens" :key="token.name" :value="token.type">
            <!-- <img src={token.icon} alt={token.name} width={25} height={25} /> -->
            {{ token.type }} - {{ token.name }}
          </option>
        </select>
      </div>

      <div class="flex items-center gap-1">
        <label for="from">To</label>
        <select name="target" v-model="targetToken">
          <option v-for="token in tokens" :key="token.name" :value="token.type">
            {{ token.type }} - {{ token.name }}
          </option>
        </select>
      </div>
    </div>
    <p v-if="errorMessage" class="text-red-500">{{ errorMessage }}</p>
    <div class="flex items-center gap-1">
      <label>Amount</label>
      <input type="number" name="amount" v-model="amount" step="0.000000001" />
    </div>
    <button type="submit">Swap</button>
  </form>
</template>
