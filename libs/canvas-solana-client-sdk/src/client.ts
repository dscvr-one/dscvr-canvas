import type { Adapter } from '@solana/wallet-adapter-base';
import { CanvasClient } from '@dscvr-one/canvas-client-sdk';
import { CanvasSolanaAdapter } from './adapter';

export class CanvasSolanaClient {
  canvasClient: CanvasClient;

  constructor(_canvasClient?: CanvasClient) {
    this.canvasClient = _canvasClient ?? new CanvasClient();
  }

  destroy() {
    this.canvasClient.destroy();
  }

  async connectWallet(): Promise<Adapter> {
    // TODO: 'solana:101'?
    const connectionResponse =
      await this.canvasClient.connectWallet('solana:101');

    if (!connectionResponse.untrusted.success) {
      throw new Error('Failed to connect wallet');
    }
    return new CanvasSolanaAdapter(this.canvasClient, {
      name: connectionResponse.untrusted.walletName,
      icon: connectionResponse.untrusted.walletIcon,
      url: connectionResponse.untrusted.walletUrl,
      supportedTransactionVersions:
        connectionResponse.untrusted.walletSupportedTransactionVersions,
      address: connectionResponse.untrusted.address,
    });
  }
}
