<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { CanvasInterface, CanvasClient } from '@dscvr-one/canvas-client-sdk';
import UserInfo from './components/UserInfo.vue';
import ContentInfo from './components/ContentInfo.vue';
import { validateHostMessage } from './api/dscvr';

let canvasClient: CanvasClient | undefined;
const isReady = ref(false);
const user = ref<CanvasInterface.Lifecycle.User>();
const content = ref<CanvasInterface.Lifecycle.Content>();
const resizeObserver = new ResizeObserver(() => canvasClient?.resize());

const start = async () => {
  if (!canvasClient) return;
  const response = await canvasClient.ready();
  const isValidResponse = await validateHostMessage(response);
  if (!isValidResponse) return;
  isReady.value = canvasClient.isReady;
  if (response) {
    user.value = response.untrusted.user;
    content.value = response.untrusted.content;
  }
};

const openUserProfile = () => {
  if (!canvasClient || !user.value) return;
  const url = `https://dscvr.one/u/${user.value.username}`;
  canvasClient.openLink(url);
};

const setBodyHeight = (height: number) => {
  window.document.body.style.height = height ? `${height}px` : '';
};

onMounted(() => {
  resizeObserver.observe(document.body);
  canvasClient = new CanvasClient();
  start();
});

onUnmounted(() => {
  resizeObserver?.disconnect();
  if (canvasClient) {
    canvasClient.destroy();
  }
});
</script>

<template>
  <div class="flex flex-col gap-6 p-8">
    <p v-if="!isReady" class="text-center">Loading...</p>
    <template v-else>
      <user-info v-if="user" :user="user" @open="openUserProfile" />
      <content-info v-if="content" :content="content" />
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <button
          v-for="height in [1000, 1500, 0]"
          type="submit"
          class="text-white font-bold py-2 px-4 rounded bg-gray-500 hover:bg-gray-400 hover:border-gray-500"
          @click="setBodyHeight(height)"
        >
          {{ height ? `Set height to ${height}px` : 'Reset height' }}
        </button>
      </div>
    </template>
  </div>
</template>
