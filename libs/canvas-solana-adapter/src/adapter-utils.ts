import * as bs58 from 'bs58';
import { Transaction, VersionedTransaction } from '@solana/web3.js';

export const parseTransaction = (unsignedTx: string) => {
  return VersionedTransaction.deserialize(bs58.decode(unsignedTx));
};

export const serializeTransaction = (
  transaction: Transaction | VersionedTransaction,
) => {
  if (transaction instanceof VersionedTransaction) {
    return bs58.encode(transaction.serialize());
  }

  return bs58.encode(Uint8Array.from(transaction.serialize()));
};
