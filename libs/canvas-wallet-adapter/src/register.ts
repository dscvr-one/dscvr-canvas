import { getWallets } from '@wallet-standard/core';
import { registerWallet } from '@wallet-standard/wallet';
import type { CanvasClient } from '@dscvr-one/canvas-client-sdk';
import { CanvasWallet } from './wallet';

export const registerCanvasWallet = (canvasClient: CanvasClient) => {
  const { get } = getWallets();
  const wallets = get();
  const exists = wallets.find((wallet) => wallet.name === CanvasWallet.Name);
  if (exists) return exists;

  const wallet = new CanvasWallet(canvasClient);
  registerWallet(wallet);
  return wallet;
};
