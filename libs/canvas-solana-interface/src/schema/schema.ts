import {
  type SendTransactionOptions,
  type SupportedTransactionVersions,
} from '@solana/wallet-adapter-base';
import * as zod from 'zod';
import {
  createClientMessageSchema,
  createFailedResponsePayload,
  createHostMessageSchema,
  type BaseClientMessage,
  type BaseHostMessage,
} from '@dscvr-one/canvas-interface';

export const WalletNameSchema = zod.object({
  name: zod.string(),
});

export const WalletSchema = zod.object({
  name: zod.string(),
  icon: zod.string(),
  url: zod.string(),
  supportedTransactionVersions: zod.custom<SupportedTransactionVersions>(),
});

const createFailedWalletResponse = () =>
  WalletNameSchema.and(
    createFailedResponsePayload(['user-cancelled', 'error']),
  );

export const DisconnectRequestMessageSchema = createClientMessageSchema(
  'solana-wallet:disconnect-request',
  WalletNameSchema,
);

export const DisconnectResponseMessageSchema = createHostMessageSchema(
  'solana-wallet:disconnect-response',
  zod.union([
    WalletNameSchema.extend({
      success: zod.literal(true),
    }),
    WalletNameSchema.and(createFailedResponsePayload(['error'])),
  ]),
);

export const SendTransactionRequestMessageSchema = createClientMessageSchema(
  'solana-wallet:send-transaction-request',
  WalletNameSchema.extend({
    rpcEndpoint: zod.string(),
    unsignedTx: zod.string(),
    options: zod.custom<SendTransactionOptions>(),
  }),
);

export const SendTransactionResponseMessageSchema = createHostMessageSchema(
  'solana-wallet:send-transaction-response',
  zod.union([
    WalletNameSchema.extend({
      success: zod.literal(true),
      signedTx: zod.string(),
    }),
    createFailedWalletResponse(),
  ]),
);

export const SignTransactionRequestMessageSchema = createClientMessageSchema(
  'solana-wallet:sign-transaction-request',
  WalletNameSchema.extend({
    unsignedTx: zod.string(),
  }),
);

export const SignTransactionResponseMessageSchema = createHostMessageSchema(
  'solana-wallet:sign-transaction-response',
  zod.union([
    WalletNameSchema.extend({
      success: zod.literal(true),
      signedTx: zod.string(),
    }),
    createFailedWalletResponse(),
  ]),
);

export const SignAllTransactionsRequestMessageSchema =
  createClientMessageSchema(
    'solana-wallet:sign-all-transactions-request',
    WalletNameSchema.extend({
      unsignedTxs: zod.array(zod.string()),
    }),
  );

export const SignAllTransactionsResponseMessageSchema = createHostMessageSchema(
  'solana-wallet:sign-all-transactions-response',
  zod.union([
    WalletNameSchema.extend({
      success: zod.literal(true),
      signedTxs: zod.array(zod.string()),
    }),
    createFailedWalletResponse(),
  ]),
);

export const SignMessageRequestMessageSchema = createClientMessageSchema(
  'solana-wallet:sign-message-request',
  WalletNameSchema.extend({
    unsignedMessage: zod.custom<Uint8Array>(),
  }),
);

export const SignMessageResponseMessageSchema = createHostMessageSchema(
  'solana-wallet:sign-message-response',
  zod.union([
    WalletNameSchema.extend({
      success: zod.literal(true),
      signedMessage: zod.custom<Uint8Array>(),
    }),
    createFailedWalletResponse(),
  ]),
);

export interface Wallet extends zod.infer<typeof WalletSchema> {}
export interface DisconnectRequestMessage
  extends BaseClientMessage<typeof DisconnectRequestMessageSchema> {}
export interface DisconnectResponseMessage
  extends BaseHostMessage<typeof DisconnectResponseMessageSchema> {}
export interface SendTransactionRequestMessage
  extends BaseClientMessage<typeof SendTransactionRequestMessageSchema> {}
export interface SendTransactionResponseMessage
  extends BaseHostMessage<typeof SendTransactionResponseMessageSchema> {}
export interface SignTransactionRequestMessage
  extends BaseClientMessage<typeof SignTransactionRequestMessageSchema> {}
export interface SignTransactionResponseMessage
  extends BaseHostMessage<typeof SignTransactionResponseMessageSchema> {}
export interface SignAllTransactionsRequestMessage
  extends BaseClientMessage<typeof SignAllTransactionsRequestMessageSchema> {}
export interface SignAllTransactionsResponseMessage
  extends BaseHostMessage<typeof SignAllTransactionsResponseMessageSchema> {}
export interface SignMessageRequestMessage
  extends BaseClientMessage<typeof SignMessageRequestMessageSchema> {}
export interface SignMessageResponseMessage
  extends BaseHostMessage<typeof SignMessageResponseMessageSchema> {}
