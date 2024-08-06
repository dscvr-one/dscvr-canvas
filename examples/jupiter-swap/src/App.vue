<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { CanvasInterface } from '@dscvr-one/canvas-client-sdk';
import { CanvasSolanaClient } from '@dscvr-one/canvas-solana-client-sdk';
import type {
  Adapter,
  MessageSignerWalletAdapter,
  SignerWalletAdapter,
  WalletContextState
} from '@jup-ag/wallet-adapter';
import { jupiterRpcEndpoint } from './api/jupiter';
import { validateHostMessage } from './api/dscvr';

let canvasSolanaClient: CanvasSolanaClient | undefined;
const resizeObserver = new ResizeObserver(() => canvasSolanaClient?.canvasClient.resize());
const isReady = ref(false);
const jupiterPlaceholderRef = ref<HTMLDivElement>();
const user = ref<CanvasInterface.Lifecycle.User>();
const content = ref<CanvasInterface.Lifecycle.Content>();

const initJupiterWidget = () => {
  if (!jupiterPlaceholderRef.value || !canvasSolanaClient) return;
  window.Jupiter.init({
    displayMode: 'integrated',
    integratedTargetId: 'jupiter-widget',
    endpoint: jupiterRpcEndpoint,
    enableWalletPassthrough: true,
    onFormUpdate: () => canvasSolanaClient?.canvasClient.resize(),
    onScreenUpdate: () => canvasSolanaClient?.canvasClient.resize(),
    onRequestConnectWallet: async () => {
      if (!canvasSolanaClient) {
        throw new Error('Canvas client is not initialized');
      }
      const adapter = await canvasSolanaClient.connectWallet();
      syncProps(adapter);
      adapter.on('disconnect', () => {
        syncProps(adapter);
      });
    }
  });
};

const syncProps = (adapter: Adapter) => {
  const passthroughWalletContextState: WalletContextState = {
    publicKey: adapter.publicKey,
    autoConnect: false,
    disconnecting: false,
    connected: adapter.connected,
    wallet: {
      readyState: adapter.readyState,
      adapter
    },
    wallets: [],
    connecting: false,
    select: () => {
      throw new Error('Not implemented');
    },
    connect: () => {
      throw new Error('Not implemented');
    },
    disconnect: () => adapter.disconnect(),
    sendTransaction: (...params) => adapter.sendTransaction(...params),
    signTransaction: (...params) => (adapter as SignerWalletAdapter).signTransaction(...params),
    signAllTransactions: (...params) =>
      (adapter as SignerWalletAdapter).signAllTransactions(...params),
    signMessage: (...params) => (adapter as MessageSignerWalletAdapter).signMessage(...params),
    signIn: () => {
      throw new Error('Not implemented');
    }
  };
  window.Jupiter.syncProps({ passthroughWalletContextState });
};

const start = async () => {
  if (!canvasSolanaClient) return;
  const response = await canvasSolanaClient.canvasClient.ready();
  isReady.value = canvasSolanaClient.canvasClient.isReady;
  const isValidResponse = await validateHostMessage(response);
  if (!isValidResponse) return;
  if (response) {
    response.trustedBytes;
    user.value = response.untrusted.user;
    content.value = response.untrusted.content;
  }
  initJupiterWidget();
  canvasSolanaClient?.canvasClient.resize();
};

onMounted(() => {
  resizeObserver.observe(document.body);
  canvasSolanaClient = new CanvasSolanaClient();
  start();
});

onUnmounted(() => {
  resizeObserver?.disconnect();
  if (canvasSolanaClient) {
    canvasSolanaClient.destroy();
  }
});
</script>

<template>
  <p v-if="!isReady" class="text-center">Loading...</p>
  <div ref="jupiterPlaceholderRef" id="jupiter-widget" />
</template>
