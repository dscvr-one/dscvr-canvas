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
  type WalletError,
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
import type { CanvasClient } from '@dscvr-one/canvas-client-sdk';
import { parseTransaction, serializeTransaction } from './adapter-utils';

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
    private canvasClient: CanvasClient,
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
  }

  async connect(): Promise<void> {
    throw new Error('Cannot connect in this context');
  }

  async disconnect(): Promise<void> {
    if (this.connected) {
      try {
        const response = await this.canvasClient.sendMessageAndWait(
          {
            type: 'solana-wallet:disconnect-request',
            payload: {
              name: this.name,
            },
          },
          CanvasSolanaInterface.DisconnectResponseMessageSchema,
        );
        if (!response.untrusted.success) {
          throw new Error(response.untrusted.error);
        }
        this._disconnected();
      } catch (e: unknown) {
        const error = e as Error;
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

      const response = await this.canvasClient.sendMessageAndWait(
        {
          type: 'solana-wallet:send-transaction-request',
          payload: {
            name: this.name,
            rpcEndpoint,
            unsignedTx,
            options,
          },
        },
        CanvasSolanaInterface.SendTransactionResponseMessageSchema,
      );

      if (!response.untrusted.success) {
        throw new Error(response.untrusted.error);
      }

      return response.untrusted.signedTx;
    } catch (e: unknown) {
      const error = e as WalletError;
      this.emit('error', error);
      throw new WalletSendTransactionError(error?.message, error);
    }
  }

  async signTransaction<T extends Transaction | VersionedTransaction>(
    transaction: T,
  ): Promise<T> {
    try {
      const unsignedTx = serializeTransaction(transaction);
      const response = await this.canvasClient.sendMessageAndWait(
        {
          type: 'solana-wallet:sign-transaction-request',
          payload: {
            name: this.name,
            unsignedTx,
          },
        },
        CanvasSolanaInterface.SignTransactionResponseMessageSchema,
      );

      if (!response.untrusted.success) {
        throw new Error(response.untrusted.error);
      }

      return parseTransaction(response.untrusted.signedTx) as T;
    } catch (e: unknown) {
      const error = e as WalletError;
      this.emit('error', error);
      throw new WalletSignTransactionError(error?.message, error);
    }
  }

  async signAllTransactions<T extends Transaction | VersionedTransaction>(
    transactions: T[],
  ): Promise<T[]> {
    try {
      const unsignedTxs = transactions.map((t) => serializeTransaction(t));
      const response = await this.canvasClient.sendMessageAndWait(
        {
          type: 'solana-wallet:sign-all-transactions-request',
          payload: {
            name: this.name,
            unsignedTxs,
          },
        },
        CanvasSolanaInterface.SignAllTransactionsResponseMessageSchema,
      );

      if (!response.untrusted.success) {
        throw new Error(response.untrusted.error);
      }

      return response.untrusted.signedTxs.map(parseTransaction) as T[];
    } catch (e: unknown) {
      const error = e as WalletError;
      this.emit('error', error);
      throw new WalletSignTransactionError(error?.message, error);
    }
  }

  async signMessage(message: Uint8Array): Promise<Uint8Array> {
    try {
      const response = await this.canvasClient.sendMessageAndWait(
        {
          type: 'solana-wallet:sign-message-request',
          payload: {
            name: this.name,
            unsignedMessage: message,
          },
        },
        CanvasSolanaInterface.SignMessageResponseMessageSchema,
      );

      if (!response.untrusted.success) {
        throw new Error(response.untrusted.error);
      }

      return response.untrusted.signedMessage;
    } catch (e: unknown) {
      const error = e as WalletError;
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
    } catch (e: unknown) {
      const error = e as WalletError;
      const newError = new WalletPublicKeyError(error?.message, error);
      this.emit('error', newError);
      throw newError;
    }
  }
}
