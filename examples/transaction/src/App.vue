<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { CanvasInterface, CanvasClient } from '@dscvr-one/canvas-client-sdk';
import TransactionForm from './components/TransactionForm.vue';
import { validateHostMessage } from './api/dscvr';

let canvasClient: CanvasClient | undefined;
const isReady = ref(false);
const user = ref<CanvasInterface.Lifecycle.User>();
const content = ref<CanvasInterface.Lifecycle.Content>();

const start = async () => {
  if (!canvasClient) return;
  const response = await canvasClient.ready();
  isReady.value = canvasClient.isReady;

  const isValidResponse = await validateHostMessage(response);
  if (!isValidResponse) return;

  if (response) {
    user.value = response.untrusted.user;
    content.value = response.untrusted.content;
  }
};

onMounted(() => {
  canvasClient = new CanvasClient();
  start();
});

onUnmounted(() => {
  if (canvasClient) {
    canvasClient.destroy();
  }
});
</script>

<template>
  <p v-if="!isReady" class="text-center">Loading...</p>
  <transaction-form v-else-if="canvasClient" :canvas-client="canvasClient" />
</template>
