<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import * as bs58 from 'bs58';
import { PublicKey } from '@solana/web3.js';
import { CanvasInterface, CanvasClient } from '@dscvr-one/canvas-client-sdk';
import type { WalletContextState } from '@jup-ag/wallet-adapter';
import { createTXFromInstructions, jupiterRpcEndpoint } from './api/jupiter';
import { validateHostMessage } from './api/dscvr';

const chainId = 'solana:101';
let canvasClient: CanvasClient | undefined;
const isReady = ref(false);
const jupiterPlaceholderRef = ref<HTMLDivElement>();
const user = ref<CanvasInterface.Lifecycle.User>();
const content = ref<CanvasInterface.Lifecycle.Content>();

const initJupiterWidget = () => {
  if (!jupiterPlaceholderRef.value || !canvasClient) return;
  let currentWalletPublicKey: PublicKey | undefined = undefined;
  window.Jupiter.init({
    displayMode: 'integrated',
    integratedTargetId: 'jupiter-widget',
    endpoint: jupiterRpcEndpoint,
    enableWalletPassthrough: true,
    onRequestConnectWallet: async () => {
      const response = await canvasClient?.connectWallet(chainId);
      if (!response?.untrusted.success) {
        throw new Error('Failed to connect wallet');
      }
      currentWalletPublicKey = new PublicKey(response.untrusted.address);
      const passthroughWalletContextState = {
        publicKey: currentWalletPublicKey,
        connected: true,
        wallet: {
          adapter: {
            name: response.untrusted.walletName,
            icon: response.untrusted.walletIcon,
            publicKey: currentWalletPublicKey
          }
        }
      } as WalletContextState;
      window.Jupiter.syncProps({ passthroughWalletContextState });
    },
    onRequestIxCallback: async (payload) => {
      if (!currentWalletPublicKey) {
        console.error('no wallet currentWalletPublicKey is selected');
        return;
      }
      const versionedTransaction = await createTXFromInstructions(currentWalletPublicKey, payload);
      const unsignedTx = bs58.encode(versionedTransaction.serialize());

      const signedTx = await canvasClient!.signAndSendTransaction({
        chainId,
        unsignedTx
      });
      if (!signedTx.untrusted.success) {
        payload.onSubmitWithIx({
          error: new Error('User cancelled transaction signing.')
        });
        return;
      }
      payload.onSubmitWithIx({
        txid: signedTx.untrusted.signedTx,
        inputAddress: payload.meta.sourceAddress,
        outputAddress: payload.meta.destinationAddress,
        inputAmount: Number(payload.meta.quoteResponseMeta.quoteResponse.inAmount[0]),
        outputAmount: Number(payload.meta.quoteResponseMeta.quoteResponse.outAmount[0])
      });
    },
    onSuccess: (payload) => {}
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
  <p v-if="!isReady" :style="{ 'text-align': 'center' }">Loading...</p>
  <div ref="jupiterPlaceholderRef" id="jupiter-widget" />
</template>
