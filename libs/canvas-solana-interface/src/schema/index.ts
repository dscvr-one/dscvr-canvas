import * as zod from 'zod';

import {
  DisconnectRequestMessageSchema,
  SendTransactionRequestMessageSchema,
  SignTransactionRequestMessageSchema,
  SignAllTransactionsRequestMessageSchema,
  SignMessageRequestMessageSchema,
  DisconnectResponseMessageSchema,
  SendTransactionResponseMessageSchema,
  SignTransactionResponseMessageSchema,
  SignAllTransactionsResponseMessageSchema,
  SignMessageResponseMessageSchema,
} from './schema';

export const ClientMessageSchema = zod.union([
  DisconnectRequestMessageSchema,
  SendTransactionRequestMessageSchema,
  SignTransactionRequestMessageSchema,
  SignAllTransactionsRequestMessageSchema,
  SignMessageRequestMessageSchema,
]);

export const HostMessageSchema = zod.union([
  DisconnectResponseMessageSchema,
  SendTransactionResponseMessageSchema,
  SignTransactionResponseMessageSchema,
  SignAllTransactionsResponseMessageSchema,
  SignMessageResponseMessageSchema,
]);

const clientMessageTypes = ClientMessageSchema.options.map(
  (m) => m.shape.type.value,
);
const ClientMessageTypeSchema = zod.enum([
  clientMessageTypes[0],
  ...clientMessageTypes.slice(1),
] as const);

const hostMessageTypes = HostMessageSchema.options.map(
  (m) => m.shape.type.value,
);
const HostMessageTypeSchema = zod.enum([
  hostMessageTypes[0],
  ...hostMessageTypes.slice(1),
] as const);

export type ClientMessage = zod.infer<typeof ClientMessageSchema>;
export type ClientMessageType = zod.infer<typeof ClientMessageTypeSchema>;
export type HostMessage = zod.infer<typeof HostMessageSchema>;
export type HostMessageType = zod.infer<typeof HostMessageTypeSchema>;
