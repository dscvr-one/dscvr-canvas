import { registerWallet } from '@wallet-standard/wallet';
import type { CanvasClient } from '@dscvr-one/canvas-client-sdk';
import { CanvasSolanaWallet } from './wallet';

export const registerCanvasSolanaWallet = (canvasClient: CanvasClient) => {
  const wallet = new CanvasSolanaWallet(canvasClient);
  registerWallet(wallet);
  return wallet;
};
