import { registerWallet } from '@wallet-standard/wallet';
import type { CanvasClient } from '@dscvr-one/canvas-client-sdk';
import { CanvasSolanaAdapter } from './adapter';
import { StandardWalletAdapter } from '@solana/wallet-standard-wallet-adapter-base';
import type { WalletAdapterCompatibleStandardWallet } from '@solana/wallet-adapter-base';

export const installCanvasSolanaAdapter = (canvasClient: CanvasClient) => {
  const adapter = new CanvasSolanaAdapter(canvasClient);
  return adapter;
  // const wallet: WalletAdapterCompatibleStandardWallet = {
  //   adapter,
  //   readyState: adapter.readyState,
  // };
  // wallet.features.StandardEvents
  // const adapter = new StandardWalletAdapter({ wallet });
  // registerWallet(wallet);
  // return adapter;
};
