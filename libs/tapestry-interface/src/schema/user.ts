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
    }),
    zod.object({
      success: zod.literal(false),
      errorReason: zod.enum(['user-cancelled', 'error']),
      error: zod.string().optional(),
    }),
  ]),
);

export const SignTransactionRequestMessageSchema = createClientMessageSchema(
  'user:sign-transaction-request',
  zod.object({
    chainId: zod.string(),
    unsignedTx: zod.string(),
  }),
);

export const SignTransactionResponseMessageSchema = createHostMessageSchema(
  'user:sign-transaction-response',
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
export interface SignTransactionRequestMessage
  extends zod.infer<typeof SignTransactionRequestMessageSchema> {}
export interface SignTransactionResponseMessage
  extends zod.infer<typeof SignTransactionResponseMessageSchema> {}
export interface OpenLnkRequestMessage
  extends zod.infer<typeof OpenLnkRequestMessageSchema> {}
