import { registerWallet } from '@wallet-standard/wallet';
import type { CanvasClient } from '@dscvr-one/canvas-client-sdk';
import { CanvasWallet } from './wallet';

export const registerCanvasWallet = (canvasClient: CanvasClient) => {
  const wallet = new CanvasWallet(canvasClient);
  registerWallet(wallet);
  return wallet;
};
