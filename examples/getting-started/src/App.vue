<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { TapestryInterface, TapestryClient } from '@dscvr-one/tapestry-client-sdk'
import UserInfo from './components/UserInfo.vue'
import ContentInfo from './components/ContentInfo.vue'

const started = ref(false)
const user = ref<TapestryInterface.Lifecycle.User>()
const content = ref<TapestryInterface.Lifecycle.Content>()
const tapestryClient = ref<TapestryClient>()

const startHandshake = async () => {
  started.value = true
  if (!tapestryClient.value) return
  const response = await tapestryClient.value.ready()
  // TODO: validate response.trustedBytes
  if (response) {
    user.value = response.untrusted.user
    content.value = response.untrusted.content
  }
}

const openLink = () => {
  if (!tapestryClient.value) return
  const url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  tapestryClient.value.openLink(url)
}

onMounted(async () => {
  tapestryClient.value = new TapestryClient()
})
</script>

<template>
  <div>
    <button v-if="!started && !tapestryClient?.isReady" @click="startHandshake">
      Init Handshake
    </button>
    <button v-if="started && tapestryClient?.isReady" @click="openLink">Open external link</button>
    <p v-if="started && !tapestryClient?.isReady" class="text-center">Loading...</p>
    <user-info v-if="user" :user="user" />
    <content-info v-if="content" :content="content" />
  </div>
</template>
