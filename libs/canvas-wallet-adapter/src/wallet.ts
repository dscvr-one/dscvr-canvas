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
  static Name = 'DSCVR Canvas' as const;
  #underlyingWalletName: string | undefined;
  #name = CanvasWallet.Name;
  #icon =
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA4IiBoZWlnaHQ9IjEwOCIgdmlld0JveD0iMCAwIDEwOCAxMDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDE2QzAgNy4xNjM0NCA3LjE2MzQ0IDAgMTYgMEg5MkMxMDAuODM3IDAgMTA4IDcuMTYzNDQgMTA4IDE2VjkyQzEwOCAxMDAuODM3IDEwMC44MzcgMTA4IDkyIDEwOEgxNkM3LjE2MzQ0IDEwOCAwIDEwMC44MzcgMCA5MlYxNloiIGZpbGw9IiM0RjQ2RTUiLz4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzEzMDgwXzE3NjQ1KSI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNODcuOTE2NyA1My45OTY2Qzg3LjkxNjcgNjMuMDIyIDg0LjM2MzIgNzEuNjAwNyA3Ny45ODA2IDc3Ljk4MjRDNzEuNjAzIDg0LjM2MjQgNjMuMDI1NCA4Ny45MTYzIDU0LjAwMTIgODcuOTE2M0M1MC4xNDQ4IDg3LjkxNjMgNDYuMzcwNSA4Ny4yNjg4IDQyLjgxMzcgODYuMDI4OUMzOC4wNDcyIDg0LjM2MjQgMzMuNjcyMyA4MS42MzY3IDMwLjAxODQgNzcuOTgyNEMyMy42MzU4IDcxLjYwMDcgMjAuMDg0IDYzLjAyMzcgMjAuMDg0IDUzLjk5NjZDMjAuMDg0IDUwLjA1NDUgMjAuNzY0OSA0Ni4xNTA5IDIyLjEwNjcgNDIuNDQ0N0MyMi40OTMxIDQxLjM4MjIgMjIuOTMxNSA0MC4zMzk4IDIzLjQyMTcgMzkuMzE5MUwyMy44NiAzOC40MDM4TDI0LjEyOTQgMzguNTE0M0MyNS4wMjYxIDM4Ljg4NDEgMjUuNDg0NSAzOS44NzQ2IDI1LjE4NjcgNDAuNzk5OUMyMC41MjA2IDU1LjI1MTYgMjUuNzk5IDcxLjMyMTMgMzkuNTg2NCA3OC40NTkzQzUwLjc0NTUgODQuMjMzNiA2NC43MDY4IDgyLjY5NTkgNzMuNzAxIDczLjcwMDZDNzUuNjQxNyA3MS43NTk2IDc3LjI2NDUgNjkuNTcxMSA3OC41Mzk0IDY3LjIwODVDNzguOTg0NCA2Ni4zODAyIDc5LjM4OTMgNjUuNTMwMiA3OS43NDczIDY0LjY2MzVDODEuMTMyNiA2MS4zMjA0IDgxLjg2MDMgNTcuNzA0NSA4MS44NjAzIDUzLjk5NjZDODEuODYwMyA0Ni41ODA5IDc4Ljk0MjYgMzkuNTM2NiA3My43MDEgMzQuMjkyN0M2OC40NTk0IDI5LjA1MDUgNjEuNDE0MyAyNi4xMzI0IDU0LjAwMTIgMjYuMTMyNEM1MS41NTE5IDI2LjEzMjQgNDkuMTE0MyAyNi40NDUzIDQ2Ljc3NTQgMjcuMDc0NEw0NS41MjkgMjcuNDQwOEM0MS43NjggMjkuMjAyOCAzOC41Njc1IDMyLjAwODggMzYuMzE5IDM1LjUwMjVDMzQuMDMzNiAzOS4wNTk3IDMyLjg0MDggNDMuMTY3NSAzMi44NDA4IDQ3LjM5NzRDMzIuODQwOCA0OC4xNzIxIDMyLjg3OTMgNDguOTQxOCAzMi45NTk2IDQ5LjcwMzFDMzMuNDcxNSA1NC42MTQxIDM1LjYwOCA1OS4yMDM3IDM5LjA5NzkgNjIuNzc5NEM0Ni4xODY1IDcwLjA0MTIgNjAuNzg4NiA3MC41NzUgNjUuODgzIDYwLjgzMThDNjguMjgyMSA1Ni4yMzM4IDY3Ljg0ODggNTAuNjkyIDY0Ljc0MiA0Ni41MzkxQzYxLjA2OCA0MS42MzE1IDU1LjIyMjUgNDAuNDY4NiA0OS42MzQ2IDQyLjI4NEg0OS42MzI5TDUwLjAwNiA2NS44MTNDNDcuMzc2IDY1LjI4MjYgNDQuMzI0NCA2NC4yMzY4IDQxLjgzMTYgNjEuNjQ2Nkw0MS41MjM4IDUyLjE4NzlMNDEuMDExOCAzNi41NjMzTDQxLjYxNzUgMzYuMjUwNEM1MS4zOTYzIDMxLjE4MDUgNjAuOTAyNCAzMC41NDY0IDY5LjE3MzggMzguODIwNUM3My4yMTA4IDQyLjg1OTYgNzUuNDU3NyA0OC4yODU5IDc1LjQ1NzcgNTMuOTk2NkM3NS40NTc3IDU5LjcwNzQgNzMuMjA5MSA2NS4xMzUzIDY5LjE3MzggNjkuMTcxMkM1OS4zMjE0IDc5LjAyODEgNDMuOTI0NiA3Ni4zNzYxIDM0Ljc2NDggNjYuOTk0M0MyOS42MzM2IDYxLjczODcgMjYuNzgyOCA1NC43NDYzIDI2Ljc4MjggNDcuMzk3NEMyNi43ODI4IDQ0LjQ4OTQgMjcuMjMxMSA0MS42MDE0IDI4LjEyNjIgMzguODAzN0MzMS40NzIyIDI5LjMwNDggMzguMjc4MSAyMi44NzYzIDQ3LjQ0MjkgMjAuODA2NUM0OS41MTI0IDIwLjMzOCA1MS43MDA4IDIwLjA5MzcgNTMuOTk2MSAyMC4wODM3QzU0LjM2NzYgMjAuMDgzNyA1NC43MzczIDIwLjA4MiA1NS4xMDU0IDIwLjA5MzdDNjMuNzM4MiAyMC4zNjgxIDcxLjg3NzQgMjMuOTA1MyA3Ny45ODA2IDMwLjAxMjZDODQuMzYzMiAzNi4zOTI2IDg3LjkxNjcgNDQuOTcxMyA4Ny45MTY3IDUzLjk5NjZaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMTMwODBfMTc2NDUpIi8+CjwvZz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8xMzA4MF8xNzY0NSIgeDE9IjI0IiB5MT0iMzAuNSIgeDI9Ijc2IiB5Mj0iODQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0JBRjNGMSIvPgo8c3RvcCBvZmZzZXQ9IjAuMjIxOTYzIiBzdG9wLWNvbG9yPSIjRTFFMkY5Ii8+CjxzdG9wIG9mZnNldD0iMC40MzExMjUiIHN0b3AtY29sb3I9IiNDMUYxRTkiLz4KPHN0b3Agb2Zmc2V0PSIwLjYzODk0IiBzdG9wLWNvbG9yPSIjREJDOEYwIi8+CjxzdG9wIG9mZnNldD0iMC44MDQ5ODUiIHN0b3AtY29sb3I9IiNBQUM3RUQiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjQzFDMEY1Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMTMwODBfMTc2NDUiPgo8cmVjdCB3aWR0aD0iNjgiIGhlaWdodD0iNjgiIGZpbGw9IndoaXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMCAyMCkiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K' as const;

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
