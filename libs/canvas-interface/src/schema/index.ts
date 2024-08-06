import * as zod from 'zod';

export {
  createClientMessageSchema,
  createHostMessageSchema,
  createFailedResponsePayload,
  parseClientMessage,
  parseHostMessage,
  type BaseClientMessage,
  type BaseHostMessage,
  type BaseClientMessageSchemaType,
  type BaseHostMessageSchemaType,
} from './base';

import {
  CloseMessageSchema,
  InitRequestMessageSchema,
  InitResponseMessageSchema,
} from './lifecycle';

import {
  InitialInteractionRequestMessageSchema,
  ResizeRequestMessageSchema,
  ConnectWalletRequestMessageSchema,
  ConnectWalletResponseMessageSchema,
  SignAndSendTransactionRequestMessageSchema,
  SignAndSendTransactionResponseMessageSchema,
  OpenLnkRequestMessageSchema,
} from './user';

export const CoreClientMessageSchema = zod.union([
  InitRequestMessageSchema,
  InitialInteractionRequestMessageSchema,
  ResizeRequestMessageSchema,
  ConnectWalletRequestMessageSchema,
  SignAndSendTransactionRequestMessageSchema,
  OpenLnkRequestMessageSchema,
]);

export const CoreHostMessageSchema = zod.union([
  InitResponseMessageSchema,
  CloseMessageSchema,
  ConnectWalletResponseMessageSchema,
  SignAndSendTransactionResponseMessageSchema,
]);

const coreClientMessageTypes = CoreClientMessageSchema.options.map(
  (m) => m.shape.type.value,
);
const CoreClientMessageTypeSchema = zod.enum([
  coreClientMessageTypes[0],
  ...coreClientMessageTypes.slice(1),
] as const);

const coreHostMessageTypes = CoreHostMessageSchema.options.map(
  (m) => m.shape.type.value,
);
const CoreHostMessageTypeSchema = zod.enum([
  coreHostMessageTypes[0],
  ...coreHostMessageTypes.slice(1),
] as const);

export type CoreClientMessage = zod.infer<typeof CoreClientMessageSchema>;
export type CoreClientMessageType = zod.infer<
  typeof CoreClientMessageTypeSchema
>;
export type CoreHostMessage = zod.infer<typeof CoreHostMessageSchema>;
export type CoreHostMessageType = zod.infer<typeof CoreHostMessageTypeSchema>;
