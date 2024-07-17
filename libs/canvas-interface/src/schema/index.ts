import * as zod from 'zod';

import {
  CloseMessageSchema,
  InitRequestMessageSchema,
  InitResponseMessageSchema,
} from './lifecycle';

import {
  ConnectWalletRequestMessageSchema,
  ConnectWalletResponseMessageSchema,
  SignAndSendTransactionRequestMessageSchema,
  SignAndSendTransactionResponseMessageSchema,
  OpenLnkRequestMessageSchema,
} from './user';

export const ClientMessageSchema = zod.union([
  InitRequestMessageSchema,
  ConnectWalletRequestMessageSchema,
  SignAndSendTransactionRequestMessageSchema,
  OpenLnkRequestMessageSchema,
]);

export const HostMessageSchema = zod.union([
  InitResponseMessageSchema,
  CloseMessageSchema,
  ConnectWalletResponseMessageSchema,
  SignAndSendTransactionResponseMessageSchema,
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
