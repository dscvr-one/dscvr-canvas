import * as bs58 from 'bs58';
import { Transaction, VersionedTransaction } from '@solana/web3.js';

export const parseLegacyTransaction = (unsignedTx: string) => {
  return Transaction.from(Buffer.from(unsignedTx, 'base64'));
};

export const parseVersionedTransaction = (unsignedTx: string) => {
  const txUint8Array = bs58.decode(unsignedTx);
  return VersionedTransaction.deserialize(txUint8Array);
};

export const serializeTransaction = (
  transaction: Transaction | VersionedTransaction,
) => {
  if (transaction instanceof VersionedTransaction) {
    return bs58.encode(transaction.serialize());
  }

  return transaction.serialize().toString('base64');
};
