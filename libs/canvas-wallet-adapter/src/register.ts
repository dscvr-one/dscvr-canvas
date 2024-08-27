import { getWallets } from '@wallet-standard/core';
import { registerWallet } from '@wallet-standard/wallet';
import type { CanvasClient } from '@dscvr-one/canvas-client-sdk';
import { CANVAS_WALLET_NAME, CanvasWallet } from './wallet';

export const registerCanvasWallet = (canvasClient: CanvasClient) => {
  const { get } = getWallets();
  const wallets = get();
  const exists = wallets.find((wallet) => wallet.name === CANVAS_WALLET_NAME);
  if (exists) {
    // Since the user could potentially instantiate the canvas client more than once
    // we need to update the canvas client in the wallet
    // A common scenario is React testing environment that calls hooks twice.
    (exists as CanvasWallet).setCanvasClient(canvasClient);
    return exists;
  }

  const wallet = new CanvasWallet(canvasClient);
  registerWallet(wallet);
  return wallet;
};
