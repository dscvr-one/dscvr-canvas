<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { CanvasInterface, CanvasClient } from '@dscvr-one/canvas-client-sdk';
import type { WalletContextState } from '@jup-ag/wallet-adapter';
import { jupiterRpcEndpoint } from './api/jupiter';
import { validateHostMessage } from './api/dscvr';

let canvasClient: CanvasClient | undefined;
// TODO: with the adapter approach this is not necessary
const chainId = 'solana:101';
const resizeObserver = new ResizeObserver(() => canvasClient?.resize());
const isReady = ref(false);
const jupiterPlaceholderRef = ref<HTMLDivElement>();
const user = ref<CanvasInterface.Lifecycle.User>();
const content = ref<CanvasInterface.Lifecycle.Content>();

const initJupiterWidget = () => {
  if (!jupiterPlaceholderRef.value || !canvasClient) return;
  window.Jupiter.init({
    displayMode: 'integrated',
    integratedTargetId: 'jupiter-widget',
    endpoint: jupiterRpcEndpoint,
    enableWalletPassthrough: true,
    onFormUpdate: () => canvasClient?.resize(),
    onScreenUpdate: () => canvasClient?.resize(),
    onRequestConnectWallet: async () => {
      if (!canvasClient) {
        throw new Error('Canvas client is not initialized');
      }
      const response = await canvasClient.connectWallet(chainId);
      if (!response?.untrusted.success) {
        throw new Error('Failed to connect wallet');
      }
      const adapter = canvasClient.getWalletAdapter(response);
      console.log('adapter', adapter);
      if (!adapter) {
        throw new Error('Failed to get wallet adapter');
      }
      const passthroughWalletContextState = {
        publicKey: adapter.publicKey,
        connected: true,
        wallet: {
          adapter
        }
      } as WalletContextState;
      window.Jupiter.syncProps({ passthroughWalletContextState });
    }
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
  canvasClient?.resize();
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
  <p v-if="!isReady" class="text-center">Loading...</p>
  <div ref="jupiterPlaceholderRef" id="jupiter-widget" />
</template>
