<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { CanvasInterface, CanvasClient } from '@dscvr-one/canvas-client-sdk';
import UserInfo from './components/UserInfo.vue';
import ContentInfo from './components/ContentInfo.vue';
import ContentReaction from './components/ContentReaction.vue';
import { validateHostMessage } from './api/dscvr';

const copyToClipboardOriginalMessage = 'Copy username to clipboard';
let canvasClient: CanvasClient | undefined;
const isReady = ref(false);
const user = ref<CanvasInterface.Lifecycle.User>();
const content = ref<CanvasInterface.Lifecycle.Content>();
const currentReaction = ref<string>();
const copyToClipboardLabel = ref(copyToClipboardOriginalMessage);
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
  canvasClient.onContentReaction((reaction) => {
    if (!validateHostMessage(reaction)) return;
    if (reaction.untrusted.status === 'cleared') {
      currentReaction.value = '';
    } else {
      currentReaction.value = reaction.untrusted.reaction;
    }
  });
};

const openUserProfile = () => {
  if (!canvasClient || !user.value) return;
  const url = `https://dscvr.one/u/${user.value.username}`;
  canvasClient.openLink(url);
};

const createNewPost = () => {
  if (!canvasClient || !user.value) return;
  const html = `<h1>New canvas post!</h1><p>New post using your canvas app by <b>${user.value.username}</b></p>`;
  canvasClient.createPost(html);
};

const setBodyHeight = (height: number) => {
  window.document.body.style.height = height ? `${height}px` : '';
};

const copyUsername = async () => {
  if (!canvasClient || !user.value) return;
  await canvasClient.copyToClipboard(user.value.username);
  copyToClipboardLabel.value = 'Copied!';
  setTimeout(() => {
    copyToClipboardLabel.value = copyToClipboardOriginalMessage;
  }, 2000);
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
      <content-reaction :reaction="currentReaction" />
      <button
        class="text-white font-bold py-2 px-4 rounded bg-blue-500 hover:bg-blue-400 hover:border-blue-500"
        @click="createNewPost"
      >
        Create new post
      </button>
      <button
        class="text-white font-bold py-2 px-4 rounded bg-purple-500 hover:bg-purple-400 hover:border-purple-500"
        @click="copyUsername"
      >
        <transition>
          <span :key="copyToClipboardLabel">{{ copyToClipboardLabel }}</span>
        </transition>
      </button>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <button
          v-for="height in [1000, 1500, 0]"
          :key="height"
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
