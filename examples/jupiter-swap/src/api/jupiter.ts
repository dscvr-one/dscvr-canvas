import {
  VersionedTransaction,
  Connection,
  PublicKey,
  TransactionInstruction,
  AddressLookupTableAccount,
  TransactionMessage
} from '@solana/web3.js';
import { Buffer } from 'buffer';
import type { IOnRequestIxCallback } from '@/jupiter-terminal';

export const jupiterRpcEndpoint = 'https://julieta-jciq77-fast-mainnet.helius-rpc.com';

export const createTXFromInstructions = async (
  walletPublicKey: PublicKey,
  ixAndCb: IOnRequestIxCallback
) => {
  const { instructions } = ixAndCb;
  const connection = new Connection(jupiterRpcEndpoint);
  const {
    setupInstructions, // Setup missing ATA for the users.
    swapInstruction: swapInstructionPayload, // The actual swap instruction.
    cleanupInstruction, // Unwrap the SOL if `wrapAndUnwrapSol = true`.
    addressLookupTableAddresses // The lookup table addresses that you can use if you are using versioned transaction.
  } = instructions;

  const deserializeInstruction = (instruction: (typeof instructions)['swapInstruction']) => {
    return new TransactionInstruction({
      programId: new PublicKey(instruction.programId),
      keys: instruction.accounts.map((key) => ({
        pubkey: new PublicKey(key.pubkey),
        isSigner: key.isSigner,
        isWritable: key.isWritable
      })),
      data: Buffer.from(instruction.data, 'base64')
    });
  };

  const getAddressLookupTableAccounts = async (
    keys: string[]
  ): Promise<AddressLookupTableAccount[]> => {
    const addressLookupTableAccountInfos = await connection.getMultipleAccountsInfo(
      keys.map((key) => new PublicKey(key))
    );

    return addressLookupTableAccountInfos.reduce((acc, accountInfo, index) => {
      const addressLookupTableAddress = keys[index];
      if (accountInfo) {
        const addressLookupTableAccount = new AddressLookupTableAccount({
          key: new PublicKey(addressLookupTableAddress),
          state: AddressLookupTableAccount.deserialize(accountInfo.data)
        });
        acc.push(addressLookupTableAccount);
      }

      return acc;
    }, new Array<AddressLookupTableAccount>());
  };

  const addressLookupTableAccounts: AddressLookupTableAccount[] = [];
  addressLookupTableAccounts.push(
    ...(await getAddressLookupTableAccounts(addressLookupTableAddresses))
  );

  const { blockhash } = await connection.getLatestBlockhash();
  const messageV0 = new TransactionMessage({
    payerKey: new PublicKey(walletPublicKey),
    recentBlockhash: blockhash,
    instructions: [
      ...setupInstructions.map(deserializeInstruction),
      deserializeInstruction(swapInstructionPayload),
      cleanupInstruction ? deserializeInstruction(cleanupInstruction) : null
    ].filter(Boolean) as TransactionInstruction[]
  }).compileToV0Message(addressLookupTableAccounts);

  return new VersionedTransaction(messageV0);
};
