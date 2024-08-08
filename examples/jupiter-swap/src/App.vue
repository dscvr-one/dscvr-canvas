<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { CanvasInterface } from '@dscvr-one/canvas-client-sdk';
import { registerCanvasSolanaWallet } from '@dscvr-one/canvas-solana-adapter';
import { useWallet } from 'solana-wallets-vue';
import { jupiterRpcEndpoint } from './api/jupiter';
import { validateHostMessage } from './api/dscvr';
import { canvasClient } from './canvas-client';

const resizeObserver = new ResizeObserver(() => canvasClient.resize());
const isReady = ref(false);
const jupiterPlaceholderRef = ref<HTMLDivElement>();
const user = ref<CanvasInterface.Lifecycle.User>();
const content = ref<CanvasInterface.Lifecycle.Content>();

const { wallets } = useWallet();

const installedWallets = computed(() => wallets.value.filter((w) => w.readyState === 'Installed'));

const initJupiterWidget = () => {
  if (!jupiterPlaceholderRef.value) return;
  window.Jupiter.init({
    displayMode: 'integrated',
    integratedTargetId: 'jupiter-widget',
    endpoint: jupiterRpcEndpoint,
    autoConnect: false,
    // passthroughWalletContextState: getWalletContext(),
    onFormUpdate: () => canvasClient.resize(),
    onScreenUpdate: () => canvasClient.resize()
    // Do this to avoid showing their own discovery process
    // enableWalletPassthrough: true,
    // onRequestConnectWallet: async () => {
    //   if (!canvasClient) {
    //     throw new Error('Canvas client is not initialized');
    //   }
    //   const solanaWallet = wallets.value.find((w) => w.adapter.name === 'Dscvr Canvas Wallet');
    //   await solanaWallet?.adapter.connect();
    // }
  });
};

const start = async () => {
  if (!canvasClient) return;
  const response = await canvasClient.ready();
  isReady.value = canvasClient.isReady;
  const isValidResponse = await validateHostMessage(response);
  if (!isValidResponse) return;
  if (response) {
    response.trustedBytes;
    user.value = response.untrusted.user;
    content.value = response.untrusted.content;
  }
  initJupiterWidget();
  canvasClient.resize();
};

onMounted(() => {
  resizeObserver.observe(document.body);
  registerCanvasSolanaWallet(canvasClient);
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
  <p>Installed Wallets:</p>
  <ul class="flex flex-col gap-4">
    <li v-for="w in installedWallets" :key="w.adapter.name">
      {{ w.adapter.name }}
    </li>
  </ul>
  <p v-if="!isReady" class="text-center">Loading...</p>
  <div ref="jupiterPlaceholderRef" id="jupiter-widget" />
</template>
