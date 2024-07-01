<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { TapestryInterface, TapestryClient } from '@dscvr-one/tapestry-client-sdk'
import SwapForm from './components/SwapForm.vue'

const user = ref<TapestryInterface.Handshake.User>()
const content = ref<TapestryInterface.Handshake.Content>()
const tapestryClient = ref<TapestryClient>()

const startHandshake = async () => {
  if (!tapestryClient.value) return
  const response = await tapestryClient.value.ready()
  // TODO: validate response.trustedBytes
  if (response) {
    user.value = response.untrusted.user
    content.value = response.untrusted.content
  }
}

const openTransactionLink = (signedTx: string) => {
  if (!tapestryClient.value) return
  const url = `https://solana.fm/tx/${signedTx}`
  tapestryClient.value.openLink(url)
}

onMounted(async () => {
  tapestryClient.value = new TapestryClient()
  await startHandshake()
})
</script>

<template>
  <p v-if="!tapestryClient?.isReady" :style="{ 'text-align': 'center' }">Loading...</p>
  <div v-if="user">
    <h1 v-if="user">Welcome {{ user.username }}</h1>
    <swap-form
      v-if="tapestryClient"
      :tapestryClient="tapestryClient"
      @success="openTransactionLink"
    />
  </div>
  <div v-else>You must be logged in to swap</div>
</template>
