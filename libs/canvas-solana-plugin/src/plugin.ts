import type { Adapter } from '@solana/wallet-adapter-base';
import { CanvasPlugin, CanvasInterface } from '@dscvr-one/canvas-client-sdk';
import * as CanvasSolanaInterface from '@dscvr-one/canvas-solana-interface';
import { CanvasSolanaAdapter } from './adapter';

export class CanvasSolanaPlugin extends CanvasPlugin<
  CanvasSolanaInterface.ClientMessage,
  CanvasSolanaInterface.HostMessage
> {
  static Name = 'solana';
  constructor() {
    super(CanvasSolanaPlugin.Name);
  }
  onDestroy() {}

  parseHostMessage(
    messageData: CanvasSolanaInterface.HostMessage,
  ): CanvasSolanaInterface.HostMessage | undefined {
    const parsedMessage =
      CanvasSolanaInterface.HostMessageSchema.safeParse(messageData);

    if (!parsedMessage.success) {
      return;
    }

    return parsedMessage.data;
  }

  // TODO: verify this process with Chandra (e.g getAllWallets)
  getWalletAdapter(
    connectionResponse: CanvasInterface.User.ConnectWalletResponseMessage,
  ): Adapter | undefined {
    if (!connectionResponse.untrusted.success) {
      return;
    }
    const sendWalletMessage = (m: CanvasSolanaInterface.ClientMessage) =>
      this.sendMessage(m);
    return new CanvasSolanaAdapter(this.eventBus, sendWalletMessage, {
      name: connectionResponse.untrusted.walletName,
      icon: connectionResponse.untrusted.walletIcon,
      url: connectionResponse.untrusted.walletUrl,
      supportedTransactionVersions:
        connectionResponse.untrusted.walletSupportedTransactionVersions,
      address: connectionResponse.untrusted.address,
    });
  }

  /*
    // TODO: WalletContextState
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
}
