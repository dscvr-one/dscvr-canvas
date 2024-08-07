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
import type { WalletIcon } from '@wallet-standard/base';

export class CanvasSolanaAdapter extends BaseMessageSignerWalletAdapter {
  private _supportedTransactionVersions: SupportedTransactionVersions;

  private _name = 'DscvrCanvas' as WalletName;
  private _url: string = 'https://dscvr.one';
  private _icon: WalletIcon =
    'data:image/png;base64,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';
  private _connected: boolean = false;
  private _connecting = false;
  private _readyState: WalletReadyState = WalletReadyState.Installed;
  private _publicKey: PublicKey | null = null;
  private _underlyingWalletName: string | undefined = undefined;

  constructor(private canvasClient: CanvasClient) {
    super();
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
    // TODO: what?
    return this.connect();
  }

  async connect(): Promise<void> {
    // TODO: for now is fixed to 'solana:101'
    const connectionResponse =
      await this.canvasClient.connectWallet('solana:101');

    if (!connectionResponse.untrusted.success) {
      throw new Error('Failed to connect wallet');
    }

    this._underlyingWalletName = connectionResponse.untrusted.walletName;
    this._publicKey = this.parsePublicKey(connectionResponse.untrusted.address);
    this._connected = true;
    this._supportedTransactionVersions =
      connectionResponse.untrusted.walletSupportedTransactionVersions;
    // this._name = connectionResponse.untrusted.walletName as WalletName;
    // this._url = connectionResponse.untrusted.walletUrl;
    // this._icon = connectionResponse.untrusted.walletIcon;
    this.emit('connect', this._publicKey);
  }

  async disconnect(): Promise<void> {
    if (this.connected) {
      try {
        const response = await this.canvasClient.sendMessageAndWait(
          {
            type: 'solana-wallet:disconnect-request',
            payload: {
              name: this._underlyingWalletName,
            },
          },
          CanvasSolanaInterface.DisconnectResponseMessageSchema,
        );

        if (response.untrusted.name !== this._underlyingWalletName) {
          throw new Error('Unexpected wallet name');
        }

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
            name: this._underlyingWalletName,
            rpcEndpoint,
            unsignedTx,
            options,
          },
        },
        CanvasSolanaInterface.SendTransactionResponseMessageSchema,
      );

      if (response.untrusted.name !== this._underlyingWalletName) {
        throw new Error('Unexpected wallet name');
      }

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
            name: this._underlyingWalletName,
            unsignedTx,
          },
        },
        CanvasSolanaInterface.SignTransactionResponseMessageSchema,
      );

      if (response.untrusted.name !== this._underlyingWalletName) {
        throw new Error('Unexpected wallet name');
      }

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
            name: this._underlyingWalletName,
            unsignedTxs,
          },
        },
        CanvasSolanaInterface.SignAllTransactionsResponseMessageSchema,
      );

      if (response.untrusted.name !== this._underlyingWalletName) {
        throw new Error('Unexpected wallet name');
      }

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
            name: this._underlyingWalletName,
            unsignedMessage: message,
          },
        },
        CanvasSolanaInterface.SignMessageResponseMessageSchema,
      );

      if (response.untrusted.name !== this._underlyingWalletName) {
        throw new Error('Unexpected wallet name');
      }

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
    this._underlyingWalletName = undefined;
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
