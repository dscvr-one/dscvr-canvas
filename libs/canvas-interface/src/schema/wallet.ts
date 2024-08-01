import {
  type SendTransactionOptions,
  type SupportedTransactionVersions,
} from '@solana/wallet-adapter-base';
import * as zod from 'zod';
import {
  createClientMessageSchema,
  createFailedResponse,
  createHostMessageSchema,
} from './base';

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
  WalletNameSchema.and(createFailedResponse());

// TODO (JM): only if multiple wallets are passed
// export const ListRequestMessageSchema = createClientMessageSchema(
//   'wallet:connect-request',
//   WalletPayloadSchema,
// );

// export const ListResponseMessageSchema = createHostMessageSchema(
//   'wallet:connect-response',
//   zod.union([
//     zod.array(WalletSchema),
//     createFailedWalletResponse(),
//   ]),
// );
// export const ConnectRequestMessageSchema = createClientMessageSchema(
//   'wallet:connect-request',
//   WalletPayloadSchema,
// );

// export const ConnectResponseMessageSchema = createHostMessageSchema(
//   'wallet:connect-response',
//   zod.union([
//     WalletSchema.extend({
//       success: zod.literal(true),
//       address: zod.string(),
//     }),
//     createFailedWalletResponse(),
//   ]),
// );

export const DisconnectRequestMessageSchema = createClientMessageSchema(
  'wallet:disconnect-request',
  WalletNameSchema,
);

export const DisconnectResponseMessageSchema = createHostMessageSchema(
  'wallet:disconnect-response',
  zod.union([
    WalletNameSchema.extend({
      success: zod.literal(true),
    }),
    createFailedWalletResponse(),
  ]),
);

export const SendTransactionRequestMessageSchema = createClientMessageSchema(
  'wallet:send-transaction-request',
  WalletNameSchema.extend({
    rpcEndpoint: zod.string(),
    unsignedTx: zod.string(),
    options: zod.custom<SendTransactionOptions>(),
  }),
);

export const SendTransactionResponseMessageSchema = createHostMessageSchema(
  'wallet:send-transaction-response',
  zod.union([
    WalletNameSchema.extend({
      success: zod.literal(true),
      signedTx: zod.string(),
    }),
    createFailedWalletResponse(),
  ]),
);

export const SignTransactionRequestMessageSchema = createClientMessageSchema(
  'wallet:sign-transaction-request',
  WalletNameSchema.extend({
    unsignedTx: zod.string(),
  }),
);

export const SignTransactionResponseMessageSchema = createHostMessageSchema(
  'wallet:sign-transaction-response',
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
    'wallet:sign-all-transactions-request',
    WalletNameSchema.extend({
      unsignedTxs: zod.array(zod.string()),
    }),
  );

export const SignAllTransactionsResponseMessageSchema = createHostMessageSchema(
  'wallet:sign-all-transactions-response',
  zod.union([
    WalletNameSchema.extend({
      success: zod.literal(true),
      signedTxs: zod.array(zod.string()),
    }),
    createFailedWalletResponse(),
  ]),
);

export const SignMessageRequestMessageSchema = createClientMessageSchema(
  'wallet:sign-message-request',
  WalletNameSchema.extend({
    unsignedMessage: zod.custom<Uint8Array>(),
  }),
);

export const SignMessageResponseMessageSchema = createHostMessageSchema(
  'wallet:sign-message-response',
  zod.union([
    WalletNameSchema.extend({
      success: zod.literal(true),
      signedMessage: zod.custom<Uint8Array>(),
    }),
    createFailedWalletResponse(),
  ]),
);

export const requestMessageSchemas = [
  // ListRequestMessageSchema,
  // ConnectRequestMessageSchema,
  DisconnectRequestMessageSchema,
  SendTransactionRequestMessageSchema,
  SignTransactionRequestMessageSchema,
  SignAllTransactionsRequestMessageSchema,
  SignMessageRequestMessageSchema,
] as const;

export const responseMessageSchemas = [
  // ListResponseMessageSchema,
  // ConnectResponseMessageSchema,
  DisconnectResponseMessageSchema,
  SendTransactionResponseMessageSchema,
  SignTransactionResponseMessageSchema,
  SignAllTransactionsResponseMessageSchema,
  SignMessageResponseMessageSchema,
] as const;

const RequestMessageSchema = zod.union(requestMessageSchemas);

const ResponseMessageSchema = zod.union(responseMessageSchemas);

const requestMessageTypes = RequestMessageSchema.options.map(
  (m) => m.shape.type.value,
);
const RequestMessageTypeSchema = zod.enum([
  requestMessageTypes[0],
  ...requestMessageTypes.slice(1),
] as const);

const responseMessageTypes = ResponseMessageSchema.options.map(
  (m) => m.shape.type.value,
);
const ResponseMessageTypeSchema = zod.enum([
  responseMessageTypes[0],
  ...responseMessageTypes.slice(1),
] as const);

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

export type RequestMessage = zod.infer<typeof RequestMessageSchema>;
export type RequestMessageType = zod.infer<typeof RequestMessageTypeSchema>;
export type ResponseMessage = zod.infer<typeof ResponseMessageSchema>;
export type ResponseMessageType = zod.infer<typeof ResponseMessageTypeSchema>;
