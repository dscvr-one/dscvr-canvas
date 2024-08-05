import type { Adapter } from '@solana/wallet-adapter-base';
import { CanvasSolanaPlugin } from './plugin';
import { CanvasClient, CanvasInterface } from '@dscvr-one/canvas-client-sdk';

export * as CanvasSolanaInterface from '@dscvr-one/canvas-solana-interface';
export { CanvasSolanaPlugin };

declare module '@dscvr-one/canvas-client-sdk' {
  interface CanvasClient {
    getSolanaWalletAdapter(
      connectionResponse: CanvasInterface.User.ConnectWalletResponseMessage,
    ): Adapter | undefined;
  }
}

CanvasClient.prototype.getSolanaWalletAdapter = function (
  connectionResponse: CanvasInterface.User.ConnectWalletResponseMessage,
): Adapter | undefined {
  const solanaPlugin = this.getPlugin<CanvasSolanaPlugin>(
    CanvasSolanaPlugin.Name,
  );
  if (!solanaPlugin) {
    throw new CanvasInterface.PluginAlreadyExistsError(CanvasSolanaPlugin.Name);
  }
  return solanaPlugin.getWalletAdapter(connectionResponse);
};

// TODO: WalletContextState instead?
/* 
wallets[],
getAdapter (name: wallet)


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
  */
