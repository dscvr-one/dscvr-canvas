import * as zod from 'zod';
import { createClientMessageSchema, createHostMessageSchema } from './base';

export const ConnectWalletRequestMessageSchema = createClientMessageSchema(
  'user:connect-wallet-request',
  zod.object({
    chainId: zod.string(),
  }),
);

export const ConnectWalletResponseMessageSchema = createHostMessageSchema(
  'user:connect-wallet-response',
  zod.union([
    zod.object({
      success: zod.literal(true),
      address: zod.string(),
      walletName: zod.string(),
      walletIcon: zod.string(),
    }),
    zod.object({
      success: zod.literal(false),
      errorReason: zod.enum(['user-cancelled', 'error']),
      error: zod.string().optional(),
    }),
  ]),
);

/**
 * Represents an unsigned transaction that needs to be signed by the user.
 * The `txId` is a serialized string of the transaction.
 * The `awaitCommitment` field is optional and can be used to specify the commitment level that should be awaited.
 * If not specified, it is assumed to be `confirmed`.
 */
export const UnsignedTransactionSchema = zod.object({
  unsignedTx: zod.string(),
  awaitCommitment: zod.enum(['confirmed', 'finalized', 'none']).optional(),
});

export const SignAndSendTransactionRequestMessageSchema =
  createClientMessageSchema(
    'user:sign-send-transaction-request',
    UnsignedTransactionSchema.extend({
      chainId: zod.string(),
    }),
  );

export const SignAndSendTransactionResponseMessageSchema =
  createHostMessageSchema(
    'user:sign-send-transaction-response',
    zod.union([
      zod.object({
        success: zod.literal(true),
        signedTx: zod.string(),
      }),
      zod.object({
        success: zod.literal(false),
        errorReason: zod.enum(['user-cancelled', 'error']),
        error: zod.string().optional(),
      }),
    ]),
  );

export const OpenLnkRequestMessageSchema = createClientMessageSchema(
  'user:open-link-request',
  zod.object({
    url: zod.string(),
  }),
);

export interface ConnectWalletRequestMessage
  extends zod.infer<typeof ConnectWalletRequestMessageSchema> {}
export interface ConnectWalletResponseMessage
  extends zod.infer<typeof ConnectWalletResponseMessageSchema> {}
export type UnsignedTransaction = zod.infer<typeof UnsignedTransactionSchema>;
export interface SignAndSendTransactionRequestMessage
  extends zod.infer<typeof SignAndSendTransactionRequestMessageSchema> {}
export interface SignAndSendTransactionResponseMessage
  extends zod.infer<typeof SignAndSendTransactionResponseMessageSchema> {}
export interface OpenLnkRequestMessage
  extends zod.infer<typeof OpenLnkRequestMessageSchema> {}
