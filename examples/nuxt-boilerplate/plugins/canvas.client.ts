import { Buffer } from 'node:buffer';
import SolanaWallets from 'solana-wallets-vue';
import { CanvasClient } from '@dscvr-one/canvas-client-sdk';
import { registerCanvasWallet } from '@dscvr-one/canvas-wallet-adapter';

globalThis.Buffer = globalThis.Buffer || Buffer;

export default defineNuxtPlugin(async (nuxtApp) => {
  nuxtApp.vueApp.use(SolanaWallets);

  const canvasClient = new CanvasClient();

  const initResponse = await canvasClient?.ready();

  if (canvasClient) {
    const resizeObserver = new ResizeObserver(() => canvasClient?.resize());
    resizeObserver.observe(document.body);
    registerCanvasWallet(canvasClient);
  }

  return {
    provide: {
      canvasClient,
      canvasUser: initResponse?.untrusted.user,
      canvasContent: initResponse?.untrusted.content,
    },
  };
});
