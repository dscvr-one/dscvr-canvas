import {
  BaseMessageSignerWalletAdapter,
  WalletDisconnectionError,
  WalletPublicKeyError,
  WalletReadyState,
  WalletSendTransactionError,
  WalletSignMessageError,
  WalletSignTransactionError,
  type SendTransactionOptions,
  type SupportedTransactionVersions,
  type WalletName,
} from '@solana/wallet-adapter-base';
import {
  PublicKey,
  Transaction,
  VersionedTransaction,
  type Connection,
  type TransactionSignature,
} from '@solana/web3.js';
import * as CanvasSolanaInterface from '@dscvr-one/canvas-solana-interface';
import { parseTransaction, serializeTransaction } from './adapter-utils';
import type { CanvasSolanaPlugin } from './plugin';

// TODO: Discovery process for window injection and discover
export class CanvasSolanaAdapter extends BaseMessageSignerWalletAdapter {
  private _supportedTransactionVersions: SupportedTransactionVersions;

  private _name: WalletName;
  private _url: string;
  private _icon: string;
  private _connected: boolean = false;
  private _connecting = false;
  private _readyState: WalletReadyState = WalletReadyState.Installed;
  private _publicKey: PublicKey | null = null;

  constructor(
    private eventBus: CanvasSolanaPlugin['eventBus'],
    private sendCanvasRequest: (
      message: CanvasSolanaInterface.ClientMessage,
    ) => void,
    wallet: CanvasSolanaInterface.Wallet & { address?: string },
  ) {
    super();
    this._name = wallet.name as WalletName;
    this._url = wallet.url;
    this._icon = wallet.icon;
    this._supportedTransactionVersions = wallet.supportedTransactionVersions;
    if (wallet.address) {
      this._publicKey = this.parsePublicKey(wallet.address);
      this._connected = true;
      this.emit('connect', this._publicKey);
    }
  }

  get name() {
    return this._name;
  }

  get url() {
    return this._url;
  }

  get icon() {
    return this._icon;
  }

  get publicKey() {
    return this._publicKey;
  }

  get connected() {
    return this._connected;
  }

  get connecting() {
    return this._connecting;
  }

  get supportedTransactionVersions() {
    return this._supportedTransactionVersions;
  }

  get readyState() {
    return this._readyState;
  }

  async autoConnect(): Promise<void> {
    throw new Error('Cannot auto-connect in this context');
    // return this.connect();
  }

  async connect(): Promise<void> {
    throw new Error('Cannot connect in this context');
    // this.canvasClient.connectWallet // chainId?
    // this._publicKey = this.parsePublicKey(response.untrusted.address);
  }

  async disconnect(): Promise<void> {
    if (this.connected) {
      try {
        const responsePromise =
          this.getHostResponse<CanvasSolanaInterface.DisconnectResponseMessage>(
            'solana-wallet:disconnect-response',
          );
        this.sendCanvasRequest({
          type: 'solana-wallet:disconnect-request',
          payload: {
            name: this._name,
          },
        });
        const response = await responsePromise;
        if (!response.untrusted.success) {
          // TODO: reason?
          throw new Error(response.untrusted.error);
        }
        // TODO: if connect is implemented, call this for other wallets when one is connected
        this._disconnected();
      } catch (error: any) {
        this.emit('error', new WalletDisconnectionError(error?.message, error));
      }
    }

    this.emit('disconnect');
  }

  async sendTransaction<T extends Transaction | VersionedTransaction>(
    transaction: T,
    connection: Connection,
    options: SendTransactionOptions = {},
  ): Promise<TransactionSignature> {
    try {
      const rpcEndpoint = connection.rpcEndpoint;
      const unsignedTx = serializeTransaction(transaction);

      const responsePromise =
        this.getHostResponse<CanvasSolanaInterface.SendTransactionResponseMessage>(
          'solana-wallet:send-transaction-response',
        );
      this.sendCanvasRequest({
        type: 'solana-wallet:send-transaction-request',
        payload: {
          name: this._name,
          rpcEndpoint,
          unsignedTx,
          options,
        },
      });
      const response = await responsePromise;
      if (!response.untrusted.success) {
        // TODO: reason?
        throw new Error(response.untrusted.error);
      }

      return response.untrusted.signedTx;
    } catch (error: any) {
      this.emit('error', error);
      throw new WalletSendTransactionError(error?.message, error);
    }
  }

  async signTransaction<T extends Transaction | VersionedTransaction>(
    transaction: T,
  ): Promise<T> {
    try {
      const unsignedTx = serializeTransaction(transaction);
      const responsePromise =
        this.getHostResponse<CanvasSolanaInterface.SignTransactionResponseMessage>(
          'solana-wallet:sign-transaction-response',
        );
      this.sendCanvasRequest({
        type: 'solana-wallet:sign-transaction-request',
        payload: {
          name: this._name,
          unsignedTx,
        },
      });
      const response = await responsePromise;
      if (!response.untrusted.success) {
        // TODO: reason?
        throw new Error(response.untrusted.error);
      }

      return parseTransaction(response.untrusted.signedTx) as T;
    } catch (error: any) {
      this.emit('error', error);
      throw new WalletSignTransactionError(error?.message, error);
    }
  }

  async signAllTransactions<T extends Transaction | VersionedTransaction>(
    transactions: T[],
  ): Promise<T[]> {
    try {
      const unsignedTxs = transactions.map((t) => serializeTransaction(t));
      const responsePromise =
        this.getHostResponse<CanvasSolanaInterface.SignAllTransactionsResponseMessage>(
          'solana-wallet:sign-all-transactions-response',
        );
      this.sendCanvasRequest({
        type: 'solana-wallet:sign-all-transactions-request',
        payload: {
          name: this._name,
          unsignedTxs,
        },
      });
      const response = await responsePromise;

      if (!response.untrusted.success) {
        // TODO: reason?
        throw new Error(response.untrusted.error);
      }

      return response.untrusted.signedTxs.map(parseTransaction) as T[];
    } catch (error: any) {
      this.emit('error', error);
      throw new WalletSignTransactionError(error?.message, error);
    }
  }

  async signMessage(message: Uint8Array): Promise<Uint8Array> {
    try {
      const responsePromise =
        this.getHostResponse<CanvasSolanaInterface.SignMessageResponseMessage>(
          'solana-wallet:sign-message-response',
        );
      this.sendCanvasRequest({
        type: 'solana-wallet:sign-message-request',
        payload: {
          name: this._name,
          unsignedMessage: message,
        },
      });
      const response = await responsePromise;

      if (!response.untrusted.success) {
        // TODO: reason?
        throw new Error(response.untrusted.error);
      }

      return response.untrusted.signedMessage;
    } catch (error: any) {
      this.emit('error', error);
      throw new WalletSignMessageError(error?.message, error);
    }
  }

  private _disconnected = () => {
    this._publicKey = null;
    this._connected = false;
  };

  private parsePublicKey(address: string) {
    try {
      return new PublicKey(address);
    } catch (error: any) {
      const newError = new WalletPublicKeyError(error?.message, error);
      this.emit('error', newError);
      throw newError;
    }
  }

  private getHostResponse<T extends CanvasSolanaInterface.HostMessage>(
    responseType: T['type'],
  ): Promise<T> {
    return new Promise<T>((resolve) => {
      this.eventBus.once(responseType, (message: T) => {
        if (message.untrusted.name === this.name) {
          resolve(message);
        }
      });
    });
  }
}
