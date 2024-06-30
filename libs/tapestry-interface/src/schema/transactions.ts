import * as zod from 'zod';
import { createClientMessageSchema, createHostMessageSchema } from './base';

export const ConnectWalletRequestMessageSchema = createClientMessageSchema(
  'connect-wallet-request',
  zod.object({
    chainId: zod.string(),
  }),
);

export const ConnectWalletResponseMessageSchema = createHostMessageSchema(
  'connect-wallet-response',
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
  'sign-transaction-request',
  zod.object({
    chainId: zod.string(),
    unsignedTx: zod.string(),
  }),
);

export const SignTransactionResponseMessageSchema = createHostMessageSchema(
  'sign-transaction-response',
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

export type ConnectWalletRequestMessage = zod.infer<
  typeof ConnectWalletRequestMessageSchema
>;
export type ConnectWalletResponseMessage = zod.infer<
  typeof ConnectWalletResponseMessageSchema
>;
export type SignTransactionRequestMessage = zod.infer<
  typeof SignTransactionRequestMessageSchema
>;
export type SignTransactionResponseMessage = zod.infer<
  typeof SignTransactionResponseMessageSchema
>;
