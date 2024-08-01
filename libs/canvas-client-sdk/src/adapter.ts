import {
  BaseMessageSignerWalletAdapter,
  WalletDisconnectedError,
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
import EventEmitter from 'eventemitter3';
import * as CanvasInterface from '@dscvr-one/canvas-interface';
import {
  parseLegacyTransaction,
  parseVersionedTransaction,
  serializeTransaction,
} from './adapter-utils';

// TODO: Discovery process for window injection and discover
export class CanvasWalletAdapter extends BaseMessageSignerWalletAdapter {
  private _supportedTransactionVersions: SupportedTransactionVersions;

  private _name: WalletName;
  private _url: string;
  private _icon: string;
  private _connected: boolean = false;
  private _connecting = false;
  private _readyState: WalletReadyState = WalletReadyState.Installed;
  private _publicKey: PublicKey | null = null;

  constructor(
    private eventBus: EventEmitter<
      CanvasInterface.HostMessageType,
      CanvasInterface.HostMessage
    >,
    private sendCanvasRequest: (
      message: CanvasInterface.Wallet.RequestMessage,
    ) => void,
    wallet: CanvasInterface.Wallet.Wallet & { address?: string },
  ) {
    super();
    this._name = wallet.name as WalletName;
    this._url = wallet.url;
    this._icon = wallet.icon;
    this._supportedTransactionVersions = wallet.supportedTransactionVersions;
    if (wallet.address) {
      this._publicKey = this.parsePublicKey(wallet.address);
      this._connected = true;
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
      this._publicKey = null;

      try {
        const response =
          await this.sendWalletRequest<CanvasInterface.Wallet.DisconnectResponseMessage>(
            'wallet:disconnect-response',
            {
              type: 'wallet:disconnect-request',
              payload: {
                name: this._name,
              },
            },
          );
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

      const response =
        await this.sendWalletRequest<CanvasInterface.Wallet.SendTransactionResponseMessage>(
          'wallet:send-transaction-response',
          {
            type: 'wallet:send-transaction-request',
            payload: {
              name: this._name,
              rpcEndpoint,
              unsignedTx,
              options,
            },
          },
        );
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
      const response =
        await this.sendWalletRequest<CanvasInterface.Wallet.SignTransactionResponseMessage>(
          'wallet:sign-transaction-response',
          {
            type: 'wallet:sign-transaction-request',
            payload: {
              name: this._name,
              unsignedTx,
            },
          },
        );

      if (!response.untrusted.success) {
        // TODO: reason?
        throw new Error(response.untrusted.error);
      }

      if (transaction instanceof Transaction) {
        return parseLegacyTransaction(response.untrusted.signedTx) as T;
      }

      return parseVersionedTransaction(response.untrusted.signedTx) as T;
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
      const response =
        await this.sendWalletRequest<CanvasInterface.Wallet.SignAllTransactionsResponseMessage>(
          'wallet:sign-all-transactions-response',
          {
            type: 'wallet:sign-all-transactions-request',
            payload: {
              name: this._name,
              unsignedTxs,
            },
          },
        );

      if (!response.untrusted.success) {
        // TODO: reason?
        throw new Error(response.untrusted.error);
      }

      if (transactions[0] instanceof Transaction) {
        return response.untrusted.signedTxs.map(parseLegacyTransaction) as T[];
      }

      return response.untrusted.signedTxs.map(parseVersionedTransaction) as T[];
    } catch (error: any) {
      this.emit('error', error);
      throw new WalletSignTransactionError(error?.message, error);
    }
  }

  async signMessage(message: Uint8Array): Promise<Uint8Array> {
    try {
      const response =
        await this.sendWalletRequest<CanvasInterface.Wallet.SignMessageResponseMessage>(
          'wallet:sign-message-response',
          {
            type: 'wallet:sign-message-request',
            payload: {
              name: this._name,
              unsignedMessage: message,
            },
          },
        );

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
    if (this.connected) {
      this._connected = false;
      this.emit('error', new WalletDisconnectedError());
      this.emit('disconnect');
    }
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

  // TODO; investigate inference
  private sendWalletRequest<T extends CanvasInterface.Wallet.ResponseMessage>(
    responseType: T['type'],
    message: CanvasInterface.Wallet.RequestMessage,
  ): Promise<T> {
    const responsePromise = new Promise<T>((resolve) => {
      this.eventBus.once(responseType, (message: T) => {
        if (message.untrusted.name === this.name) {
          resolve(message);
        }
      });
    });
    this.sendCanvasRequest(message);

    return responsePromise;
  }
}
