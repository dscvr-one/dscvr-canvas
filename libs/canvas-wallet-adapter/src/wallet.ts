import * as bs58 from 'bs58';
import {
  getEndpointForChain,
  SOLANA_CHAINS,
  type SolanaChain,
  type SolanaSignAndSendTransactionFeature,
  type SolanaSignAndSendTransactionMethod,
  type SolanaSignAndSendTransactionOutput,
  type SolanaSignMessageFeature,
  type SolanaSignMessageMethod,
  type SolanaSignMessageOutput,
  type SolanaSignTransactionFeature,
  type SolanaSignTransactionMethod,
  type SolanaSignTransactionOutput,
} from '@solana/wallet-standard';
import { PublicKey } from '@solana/web3.js';
import type {
  StandardConnectFeature,
  StandardConnectMethod,
  StandardDisconnectFeature,
  StandardDisconnectMethod,
  StandardEventsFeature,
  Wallet,
  WalletAccount,
} from '@wallet-standard/core';
import type { CanvasClient } from '@dscvr-one/canvas-client-sdk';
import * as CanvasInterface from '@dscvr-one/canvas-wallet-interface';
import { AbstractWallet } from './abstract-wallet';
import { validateHostMessage } from './api/dscvr';

// source: https://github.com/wallet-standard/wallet-standard/blob/master/packages/example/wallets/src/solanaWallet.ts
export class CanvasWallet extends AbstractWallet implements Wallet {
  #underlyingWalletName: string | undefined;
  #name = 'Dscvr Canvas Wallet' as const;
  #icon =
    'data:image/png;base64,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' as const;

  get name() {
    return this.#name;
  }

  get icon() {
    return this.#icon;
  }

  get chains() {
    return SOLANA_CHAINS.slice();
  }

  get features(): StandardConnectFeature &
    StandardDisconnectFeature &
    StandardEventsFeature &
    SolanaSignAndSendTransactionFeature &
    SolanaSignTransactionFeature &
    SolanaSignMessageFeature {
    return {
      'standard:connect': {
        version: '1.0.0',
        connect: this.#connect,
      },
      'standard:disconnect': {
        version: '1.0.0',
        disconnect: this.#disconnect,
      },
      'standard:events': {
        version: '1.0.0',
        on: this._on,
      },
      'solana:signAndSendTransaction': {
        version: '1.0.0',
        supportedTransactionVersions: ['legacy'],
        signAndSendTransaction: this.#signAndSendTransaction,
      },
      'solana:signTransaction': {
        version: '1.0.0',
        supportedTransactionVersions: ['legacy'],
        signTransaction: this.#signTransaction,
      },
      'solana:signMessage': {
        version: '1.0.0',
        signMessage: this.#signMessage,
      },
    };
  }

  constructor(private canvasClient: CanvasClient) {
    super();

    if (new.target === CanvasWallet) {
      Object.freeze(this);
    }
  }

  #connect: StandardConnectMethod = async ({ silent } = {}) => {
    if (silent) return { accounts: this.accounts };
    const canvasResponse = await this.canvasClient.connectWallet(
      this.chains[0],
    );

    const isValidResponse = await validateHostMessage(canvasResponse);
    if (!isValidResponse) {
      throw new Error('invalid message');
    }

    if (!canvasResponse.untrusted.success) return { accounts: this.accounts };

    this.#underlyingWalletName = canvasResponse.untrusted.walletName;
    const account: WalletAccount = {
      address: canvasResponse.untrusted.address,
      publicKey: new PublicKey(canvasResponse.untrusted.address).toBytes(),
      chains: SOLANA_CHAINS,
      features: [
        'solana:signAndSendTransaction',
        'solana:signTransaction',
        'solana:signMessage',
      ],
    };
    this._accounts.push(account);

    return { accounts: this.accounts };
  };

  #disconnect: StandardDisconnectMethod = async () => {
    if (!this.#underlyingWalletName) throw new Error('wallet not connected');

    const canvasResponse = await this.sendMessage(
      {
        type: 'wallet:disconnect-request',
        payload: {
          name: this.#underlyingWalletName,
        },
      },
      CanvasInterface.disconnectResponseSchema,
    );

    if (!canvasResponse.untrusted.success) {
      throw new Error(canvasResponse.untrusted.error);
    }

    this._accounts.splice(0, this._accounts.length);
    this.#underlyingWalletName = undefined;
  };

  #signAndSendTransaction: SolanaSignAndSendTransactionMethod = async (
    ...inputs
  ) => {
    if (!this.#underlyingWalletName) throw new Error('wallet not connected');

    const outputs: SolanaSignAndSendTransactionOutput[] = [];
    for (const { transaction, account, chain, options } of inputs) {
      if (!account.features.includes('solana:signAndSendTransaction'))
        throw new Error('invalid feature');

      if (!this.chains.includes(chain as SolanaChain))
        throw new Error('invalid chain');

      const rpcEndpoint = getEndpointForChain(chain as SolanaChain);

      const unsignedTx = bs58.encode(transaction);

      const canvasResponse = await this.sendMessage(
        {
          type: 'wallet:send-transaction-request',
          payload: {
            name: this.#underlyingWalletName,
            rpcEndpoint,
            unsignedTx,
            chain,
            options,
          },
        },
        CanvasInterface.sendTransactionResponseSchema,
      );

      if (!canvasResponse.untrusted.success) {
        throw new Error(canvasResponse.untrusted.error);
      }

      outputs.push({
        signature: bs58.decode(canvasResponse.untrusted.signedTx),
      });
    }

    return outputs;
  };

  #signTransaction: SolanaSignTransactionMethod = async (...inputs) => {
    if (!this.#underlyingWalletName) throw new Error('wallet not connected');
    if (inputs.length === 0) return [];

    const transactions: { chain: string | undefined; unsignedTx: string }[] =
      [];
    for (const { transaction, account, chain } of inputs) {
      if (!account.features.includes('solana:signTransaction'))
        throw new Error('invalid feature');

      if (chain && !this.chains.includes(chain as SolanaChain))
        throw new Error('invalid chain');
      const unsignedTx = bs58.encode(transaction);
      transactions.push({
        unsignedTx,
        chain,
      });
    }

    const isSingleTransation = transactions.length === 1;
    const canvasResponse = isSingleTransation
      ? await this.sendMessage(
          {
            type: 'wallet:sign-transaction-request',
            payload: {
              name: this.#underlyingWalletName,
              unsignedTx: transactions[0].unsignedTx,
              chain: transactions[0].chain,
            },
          },
          CanvasInterface.signTransactionResponseSchema,
        )
      : await this.sendMessage(
          {
            type: 'wallet:sign-all-transactions-request',
            payload: {
              name: this.#underlyingWalletName,
              unsignedTxs: transactions.map((t) => t.unsignedTx),
            },
          },
          CanvasInterface.signAllTransactionsResponseSchema,
        );

    if (!canvasResponse.untrusted.success) {
      throw new Error(canvasResponse.untrusted.error);
    }

    const signedTxs =
      'signedTx' in canvasResponse.untrusted
        ? [canvasResponse.untrusted.signedTx]
        : canvasResponse.untrusted.signedTxs;
    const outputs: SolanaSignTransactionOutput[] = signedTxs.map(
      (signedTx) => ({ signedTransaction: bs58.decode(signedTx) }),
    );

    return outputs;
  };

  #signMessage: SolanaSignMessageMethod = async (...inputs) => {
    if (!this.#underlyingWalletName) throw new Error('wallet not connected');

    const outputs: SolanaSignMessageOutput[] = [];
    for (const { account, message } of inputs) {
      if (!account.features.includes('solana:signMessage'))
        throw new Error('invalid feature');

      const canvasResponse = await this.sendMessage(
        {
          type: 'wallet:sign-message-request',
          payload: {
            name: this.#underlyingWalletName,
            unsignedMessage: message,
          },
        },
        CanvasInterface.signMessageResponseSchema,
      );
      if (!canvasResponse.untrusted.success) {
        throw new Error(canvasResponse.untrusted.error);
      }

      outputs.push({
        signedMessage: message,
        signature: canvasResponse.untrusted.signedMessage,
      });
    }

    return outputs;
  };

  private async validateResponse<T extends CanvasInterface.HostMessage>(
    canvasResponse: T,
  ) {
    const isValidResponse = await validateHostMessage(canvasResponse);
    if (!isValidResponse) {
      throw new Error('invalid message');
    }

    const name = canvasResponse.untrusted.name;
    if (name !== this.#underlyingWalletName) {
      throw new Error('Unexpected wallet name');
    }

    return canvasResponse;
  }

  private async sendMessage<T extends CanvasInterface.HostMessageSchema>(
    message: CanvasInterface.ClientMessage,
    schema: T,
  ) {
    const canvasResponse = await this.canvasClient.sendMessageAndWaitResponse(
      message,
      schema,
    );
    return await this.validateResponse(canvasResponse);
  }
}
