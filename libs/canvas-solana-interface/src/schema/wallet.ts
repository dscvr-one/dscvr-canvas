import {
  type SendTransactionOptions,
  type SupportedTransactionVersions,
} from '@solana/wallet-adapter-base';
import * as zod from 'zod';
import {
  createClientMessageSchema,
  createFailedResponsePayload,
  createHostMessageSchema,
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
  WalletNameSchema.and(createFailedResponsePayload());

// TODO (JM): only if multiple wallets are passed
// export const ListRequestMessageSchema = createClientMessageSchema(
//   'solana-wallet:connect-request',
//   WalletPayloadSchema,
// );

// export const ListResponseMessageSchema = createHostMessageSchema(
//   'solana-wallet:connect-response',
//   zod.union([
//     zod.array(WalletSchema),
//     createFailedWalletResponse(),
//   ]),
// );
// export const ConnectRequestMessageSchema = createClientMessageSchema(
//   'solana-wallet:connect-request',
//   WalletPayloadSchema,
// );

// export const ConnectResponseMessageSchema = createHostMessageSchema(
//   'solana-wallet:connect-response',
//   zod.union([
//     WalletSchema.extend({
//       success: zod.literal(true),
//       address: zod.string(),
//     }),
//     createFailedWalletResponse(),
//   ]),
// );

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
    createFailedWalletResponse(),
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
// export interface ListRequestMessage
//   extends zod.infer<typeof ListRequestMessageSchema> {}
// export interface ListResponseMessage
//   extends zod.infer<typeof ListResponseMessageSchema> {}
// export interface ConnectRequestMessage
//   extends zod.infer<typeof ConnectRequestMessageSchema> {}
// export interface ConnectResponseMessage
//   extends zod.infer<typeof ConnectResponseMessageSchema> {}
export interface DisconnectRequestMessage
  extends zod.infer<typeof DisconnectRequestMessageSchema> {}
export interface DisconnectResponseMessage
  extends zod.infer<typeof DisconnectResponseMessageSchema> {}
export interface SendTransactionRequestMessage
  extends zod.infer<typeof SendTransactionRequestMessageSchema> {}
export interface SendTransactionResponseMessage
  extends zod.infer<typeof SendTransactionResponseMessageSchema> {}
export interface SignTransactionRequestMessage
  extends zod.infer<typeof SignTransactionRequestMessageSchema> {}
export interface SignTransactionResponseMessage
  extends zod.infer<typeof SignTransactionResponseMessageSchema> {}
export interface SignAllTransactionsRequestMessage
  extends zod.infer<typeof SignAllTransactionsRequestMessageSchema> {}
export interface SignAllTransactionsResponseMessage
  extends zod.infer<typeof SignAllTransactionsResponseMessageSchema> {}
export interface SignMessageRequestMessage
  extends zod.infer<typeof SignMessageRequestMessageSchema> {}
export interface SignMessageResponseMessage
  extends zod.infer<typeof SignMessageResponseMessageSchema> {}
