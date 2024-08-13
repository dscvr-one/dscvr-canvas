import * as zod from 'zod';
import {
  disconnectRequestSchema,
  sendTransactionRequestSchema,
  signTransactionRequestSchema,
  signAllTransactionsRequestSchema,
  signMessageRequestSchema,
  disconnectResponseSchema,
  sendTransactionResponseSchema,
  signTransactionResponseSchema,
  signAllTransactionsResponseSchema,
  signMessageResponseSchema,
} from './schema';

import type {
  BaseClientMessage,
  BaseHostMessage,
} from '@dscvr-one/canvas-interface';

const clientSchemas = [
  disconnectRequestSchema,
  sendTransactionRequestSchema,
  signTransactionRequestSchema,
  signAllTransactionsRequestSchema,
  signMessageRequestSchema,
] as const;

const hostSchemas = [
  disconnectResponseSchema,
  sendTransactionResponseSchema,
  signTransactionResponseSchema,
  signAllTransactionsResponseSchema,
  signMessageResponseSchema,
] as const;

export {
  disconnectRequestSchema,
  disconnectResponseSchema,
  sendTransactionRequestSchema,
  sendTransactionResponseSchema,
  signAllTransactionsRequestSchema,
  signAllTransactionsResponseSchema,
  signMessageRequestSchema,
  signMessageResponseSchema,
  signTransactionRequestSchema,
  signTransactionResponseSchema,
  walletNameSchema,
  walletSchema,
  type DisconnectRequest,
  type DisconnectResponse,
  type SendTransactionRequest,
  type SendTransactionResponse,
  type SignAllTransactionsRequest,
  type SignAllTransactionsResponse,
  type SignMessageRequest,
  type SignMessageResponse,
  type SignTransactionRequest,
  type SignTransactionResponse,
  type Wallet,
} from './schema';

export type ClientMessageSchema = (typeof clientSchemas)[number];
export type HostMessageSchema = (typeof hostSchemas)[number];
export type ClientMessage = BaseClientMessage<ClientMessageSchema>;
export type HostMessage = BaseHostMessage<HostMessageSchema>;
export type ClientMessageType = ClientMessage['type'];
export type HostMessageType = HostMessage['type'];

export const parseClientMessage = (
  message: unknown,
): ClientMessage | undefined => {
  const schema = zod.union(clientSchemas);

  const parsedMessage = schema.safeParse(message);
  if (!parsedMessage.success) {
    return undefined;
  }

  return parsedMessage.data;
};

export const parseCoreHostMessage = (
  message: unknown,
): HostMessage | undefined => {
  const schema = zod.union(hostSchemas);

  const parsedMessage = schema.safeParse(message);
  if (!parsedMessage.success) {
    return undefined;
  }

  return parsedMessage.data;
};
