import * as zod from 'zod';
import {
  type SendTransactionOptions,
  type SupportedTransactionVersions,
} from '@solana/wallet-adapter-base';
import {
  createClientMessageSchema,
  createFailedResponsePayload,
  createHostMessageSchema,
  type BaseClientMessage,
  type BaseHostMessage,
} from '@dscvr-one/canvas-interface';

export const walletNameSchema = zod.object({
  name: zod.string(),
});

export const walletSchema = zod.object({
  name: zod.string(),
  icon: zod.string(),
  url: zod.string(),
  supportedTransactionVersions: zod.custom<SupportedTransactionVersions>(),
});

const createFailedWalletResponse = () =>
  walletNameSchema.and(
    createFailedResponsePayload(['user-cancelled', 'error']),
  );

export const disconnectRequestSchema = createClientMessageSchema(
  'wallet:disconnect-request',
  walletNameSchema,
);

export const disconnectResponseSchema = createHostMessageSchema(
  'wallet:disconnect-response',
  zod.union([
    walletNameSchema.extend({
      success: zod.literal(true),
    }),
    walletNameSchema.and(createFailedResponsePayload(['error'])),
  ]),
);

export const sendTransactionRequestSchema = createClientMessageSchema(
  'wallet:send-transaction-request',
  walletNameSchema.extend({
    rpcEndpoint: zod.string(),
    unsignedTx: zod.string(),
    chain: zod.string().optional(),
    options: zod.custom<SendTransactionOptions>().optional(),
  }),
);

export const sendTransactionResponseSchema = createHostMessageSchema(
  'wallet:send-transaction-response',
  zod.union([
    walletNameSchema.extend({
      success: zod.literal(true),
      signedTx: zod.string(),
    }),
    createFailedWalletResponse(),
  ]),
);

export const signTransactionRequestSchema = createClientMessageSchema(
  'wallet:sign-transaction-request',
  walletNameSchema.extend({
    unsignedTx: zod.string(),
    chain: zod.string().optional(),
  }),
);

export const signTransactionResponseSchema = createHostMessageSchema(
  'wallet:sign-transaction-response',
  zod.union([
    walletNameSchema.extend({
      success: zod.literal(true),
      signedTx: zod.string(),
    }),
    createFailedWalletResponse(),
  ]),
);

export const signAllTransactionsRequestSchema = createClientMessageSchema(
  'wallet:sign-all-transactions-request',
  walletNameSchema.extend({
    unsignedTxs: zod.array(zod.string()),
  }),
);

export const signAllTransactionsResponseSchema = createHostMessageSchema(
  'wallet:sign-all-transactions-response',
  zod.union([
    walletNameSchema.extend({
      success: zod.literal(true),
      signedTxs: zod.array(zod.string()),
    }),
    createFailedWalletResponse(),
  ]),
);

export const signMessageRequestSchema = createClientMessageSchema(
  'wallet:sign-message-request',
  walletNameSchema.extend({
    unsignedMessage: zod.custom<Uint8Array>(),
  }),
);

export const signMessageResponseSchema = createHostMessageSchema(
  'wallet:sign-message-response',
  zod.union([
    walletNameSchema.extend({
      success: zod.literal(true),
      signedMessage: zod.custom<Uint8Array>(),
    }),
    createFailedWalletResponse(),
  ]),
);

export interface Wallet extends zod.infer<typeof walletSchema> {}
export interface DisconnectRequest
  extends BaseClientMessage<typeof disconnectRequestSchema> {}
export interface DisconnectResponse
  extends BaseHostMessage<typeof disconnectResponseSchema> {}
export interface SendTransactionRequest
  extends BaseClientMessage<typeof sendTransactionRequestSchema> {}
export interface SendTransactionResponse
  extends BaseHostMessage<typeof sendTransactionResponseSchema> {}
export interface SignTransactionRequest
  extends BaseClientMessage<typeof signTransactionRequestSchema> {}
export interface SignTransactionResponse
  extends BaseHostMessage<typeof signTransactionResponseSchema> {}
export interface SignAllTransactionsRequest
  extends BaseClientMessage<typeof signAllTransactionsRequestSchema> {}
export interface SignAllTransactionsResponse
  extends BaseHostMessage<typeof signAllTransactionsResponseSchema> {}
export interface SignMessageRequest
  extends BaseClientMessage<typeof signMessageRequestSchema> {}
export interface SignMessageResponse
  extends BaseHostMessage<typeof signMessageResponseSchema> {}
