<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { CanvasInterface, CanvasClient } from '@dscvr-one/canvas-client-sdk'
import UserInfo from './components/UserInfo.vue'
import ContentInfo from './components/ContentInfo.vue'
import { validateHostMessage } from './api/dscvr'

let canvasClient: CanvasClient | undefined
const isReady = ref(false)
const user = ref<CanvasInterface.Lifecycle.User>()
const content = ref<CanvasInterface.Lifecycle.Content>()

const start = async () => {
  if (!canvasClient) return
  const response = await canvasClient.ready()
  const isValidResponse = await validateHostMessage(response)
  if (!isValidResponse) return
  isReady.value = canvasClient.isReady
  if (response) {
    user.value = response.untrusted.user
    content.value = response.untrusted.content
  }
}

const openUserProfile = () => {
  if (!canvasClient || !user.value) return
  const url = `https://dscvr.one/u/${user.value.username}`
  canvasClient.openLink(url)
}

onMounted(() => {
  canvasClient = new CanvasClient()
  start()
})

onUnmounted(() => {
  if (canvasClient) {
    canvasClient.destroy()
  }
})
</script>

<template>
  <div class="flex flex-col gap-6 p-8">
    <p v-if="!isReady" class="text-center">Loading...</p>
    <template v-else>
      <user-info v-if="user" :user="user" @open="openUserProfile" />
      <content-info v-if="content" :content="content" />
    </template>
  </div>
</template>
