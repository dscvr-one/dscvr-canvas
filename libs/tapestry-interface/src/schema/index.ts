import * as zod from 'zod';

import {
  CloseMessageSchema,
  InitRequestMessageSchema,
  InitResponseMessageSchema,
} from './handshake';

import {
  ConnectWalletRequestMessageSchema,
  ConnectWalletResponseMessageSchema,
  SignTransactionRequestMessageSchema,
  SignTransactionResponseMessageSchema,
} from './transactions';

import { OpenLnkRequestMessageSchema } from './link';

export const ClientMessageSchema = zod.union([
  InitRequestMessageSchema,
  ConnectWalletRequestMessageSchema,
  SignTransactionRequestMessageSchema,
  OpenLnkRequestMessageSchema,
]);

export const HostMessageSchema = zod.union([
  InitResponseMessageSchema,
  CloseMessageSchema,
  ConnectWalletResponseMessageSchema,
  SignTransactionResponseMessageSchema,
]);

export type ClientMessage = zod.infer<typeof ClientMessageSchema>;
export type ClientMessageType = ClientMessage['type'];
export type HostMessage = zod.infer<typeof HostMessageSchema>;
export type HostMessageType = HostMessage['type'];
