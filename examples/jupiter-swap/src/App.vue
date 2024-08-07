<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { CanvasClient, CanvasInterface } from '@dscvr-one/canvas-client-sdk';
import { CanvasSolanaAdapter, installCanvasSolanaAdapter } from '@dscvr-one/canvas-solana-adapter';
import type {
  Adapter,
  MessageSignerWalletAdapter,
  SignerWalletAdapter,
  WalletContextState
} from '@jup-ag/wallet-adapter';
import { jupiterRpcEndpoint } from './api/jupiter';
import { validateHostMessage } from './api/dscvr';

let canvasSolanaAdapter: CanvasSolanaAdapter | undefined;
let canvasClient: CanvasClient | undefined;
const resizeObserver = new ResizeObserver(() => canvasClient?.resize());
const isReady = ref(false);
const jupiterPlaceholderRef = ref<HTMLDivElement>();
const user = ref<CanvasInterface.Lifecycle.User>();
const content = ref<CanvasInterface.Lifecycle.Content>();

const initJupiterWidget = () => {
  if (!jupiterPlaceholderRef.value || !canvasClient || !canvasSolanaAdapter) return;
  window.Jupiter.init({
    displayMode: 'integrated',
    integratedTargetId: 'jupiter-widget',
    endpoint: jupiterRpcEndpoint,
    // passthroughWalletContextState: getWalletContext(),
    onFormUpdate: () => canvasClient?.resize(),
    onScreenUpdate: () => canvasClient?.resize(),
    // Do this to avoid showing their own discovery process
    enableWalletPassthrough: true,
    onRequestConnectWallet: async () => {
      if (!canvasClient || !canvasSolanaAdapter) {
        throw new Error('Canvas client is not initialized');
      }
      await canvasSolanaAdapter.connect();
      window.Jupiter.syncProps({ passthroughWalletContextState: getWalletContext() });
    }
  });

  canvasSolanaAdapter.on('disconnect', () => {
    window.Jupiter.syncProps({ passthroughWalletContextState: getWalletContext() });
  });
};

const getWalletContext = (): WalletContextState | undefined => {
  if (!canvasSolanaAdapter) return;
  console.log('getWalletContext', canvasSolanaAdapter);
  const adapter: Adapter = canvasSolanaAdapter;
  return {
    publicKey: adapter.publicKey,
    autoConnect: false,
    disconnecting: false,
    connected: adapter.connected,
    wallet: {
      readyState: adapter.readyState,
      adapter
    },
    wallets: [
      {
        adapter,
        readyState: adapter.readyState
      }
    ],
    connecting: false,
    select: () => {},
    connect: () => adapter.connect(),
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
  canvasSolanaAdapter = installCanvasSolanaAdapter(canvasClient);
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
