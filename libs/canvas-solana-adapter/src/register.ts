import * as bs58 from 'bs58';
import { VersionedTransaction } from '@solana/web3.js';
import { registerWallet } from '@wallet-standard/wallet';
import { StandardWalletAdapter } from '@solana/wallet-standard-wallet-adapter-base';
import type { WalletAdapterCompatibleStandardWallet } from '@solana/wallet-adapter-base';
import type { CanvasClient } from '@dscvr-one/canvas-client-sdk';
import { CanvasSolanaAdapter } from './adapter';

export const installCanvasSolanaAdapter = (canvasClient: CanvasClient) => {
  const canvasSolanaAdapter = new CanvasSolanaAdapter(canvasClient);
  const supportedTransactionVersions = Array.from(
    canvasSolanaAdapter.supportedTransactionVersions?.values() || [],
  );
  const version = '1.0.0';
  const chainId = 'solana:101';
  console.log(canvasSolanaAdapter);
  // return adapter;
  const wallet: WalletAdapterCompatibleStandardWallet = {
    accounts: [],
    chains: [chainId],
    name: canvasSolanaAdapter.name,
    icon: canvasSolanaAdapter.icon,
    version,
    features: {
      'solana:signAndSendTransaction': {
        version,
        supportedTransactionVersions,
        signAndSendTransaction: async (...params) => {
          return Promise.all(
            params.map(async ({ transaction, options }) => {
              const unsignedTx = VersionedTransaction.deserialize(transaction);
              const signedTx = await canvasSolanaAdapter.sendTransaction(
                unsignedTx,
                {} as any,
                options,
              );
              return {
                signature: bs58.decode(signedTx),
              };
            }),
          );
          // return canvasSolanaAdapter.sendTransaction(transaction);
        },
      },
      'solana:signTransaction': {
        version,
        supportedTransactionVersions,
        signTransaction: async (...params) => {
          if (params.length === 1) {
            const [{ transaction }] = params;
            const unsignedTx = VersionedTransaction.deserialize(transaction);
            const signedTx =
              await canvasSolanaAdapter.signTransaction(unsignedTx);
            return [
              {
                signedTransaction: signedTx.serialize(),
              },
            ];
          }

          const transactions = params.map(({ transaction }) =>
            VersionedTransaction.deserialize(transaction),
          );
          const signedTxs =
            await canvasSolanaAdapter.signAllTransactions(transactions);
          return signedTxs.map((signedTx) => ({
            signedTransaction: signedTx.serialize(),
          }));
        },
      },
      'solana:signIn': {
        version,
        signIn: async () => {
          throw new Error('Not implemented');
        },
      },
      'solana:signMessage': {
        version,
        signMessage: async (...params) => {
          return Promise.all(
            params.map(async ({ message }) => {
              const signedMessage =
                await canvasSolanaAdapter.signMessage(message);
              return {
                signedMessage,
                // TODO: What?
                signature: signedMessage,
              };
            }),
          );
        },
      },
      'standard:connect': {
        version,
        connect: async () => {
          await canvasSolanaAdapter.connect();
          if (!canvasSolanaAdapter.publicKey) {
            return {
              accounts: [],
            };
          }
          return {
            accounts: [
              {
                publicKey: canvasSolanaAdapter.publicKey.toBytes(),
                address: canvasSolanaAdapter.publicKey.toString(),
                chains: [chainId],
                features: [
                  'solana:signAndSendTransaction',
                  'solana:signTransaction',
                  'solana:signMessage',
                ],
                label: canvasSolanaAdapter.name,
                icon: canvasSolanaAdapter.icon,
              },
            ],
          };
        },
      },
      'standard:disconnect': {
        version,
        disconnect: async () => {
          return canvasSolanaAdapter.disconnect();
        },
      },
      'standard:events': {
        version,
        on: (
          event: string,
          listener: (param: WalletAdapterCompatibleStandardWallet) => void,
        ) => {
          // throw new Error('Not implemented');
          // return canvasSolanaAdapter.events();
          return () => {};
        },
      },
    },
  };
  // const adapter = new StandardWalletAdapter({ wallet });
  registerWallet(wallet);
  return canvasSolanaAdapter;
};
