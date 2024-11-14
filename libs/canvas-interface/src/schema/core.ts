import * as zod from 'zod';

import {
  closeMessageSchema,
  initRequestSchema,
  initResponseSchema,
} from './lifecycle';

import {
  initialInteractionRequestSchema,
  resizeRequestSchema,
  connectWalletRequestSchema,
  connectWalletResponseSchema,
  signAndSendTransactionRequestSchema,
  signAndSendTransactionResponseSchema,
  openLnkRequestSchema,
  createPostRequestSchema,
  createPostResponseSchema,
  copyToClipboardRequestSchema,
  copyToClipboardResponseSchema,
  contentReactionResponseSchema,
  createShareLinkResponseMessageSchema,
  createShareLinkRequestMessageSchema,
} from './user';
import type { BaseClientMessage, BaseHostMessage } from './base';

const coreClientSchemas = [
  initRequestSchema,
  initialInteractionRequestSchema,
  resizeRequestSchema,
  connectWalletRequestSchema,
  signAndSendTransactionRequestSchema,
  openLnkRequestSchema,
  createPostRequestSchema,
  copyToClipboardRequestSchema,
  createShareLinkRequestMessageSchema,
] as const;

const coreHostSchemas = [
  initResponseSchema,
  closeMessageSchema,
  connectWalletResponseSchema,
  signAndSendTransactionResponseSchema,
  createPostResponseSchema,
  copyToClipboardResponseSchema,
  contentReactionResponseSchema,
  createShareLinkResponseMessageSchema,
] as const;

export type CoreClientMessageSchema = (typeof coreClientSchemas)[number];
export type CoreHostMessageSchema = (typeof coreHostSchemas)[number];
export type CoreClientMessage = BaseClientMessage<CoreClientMessageSchema>;
export type CoreHostMessage = BaseHostMessage<CoreHostMessageSchema>;
export type CoreClientMessageType = CoreClientMessage['type'];
export type CoreHostMessageType = CoreHostMessage['type'];

export const parseCoreClientMessage = (
  message: unknown,
): CoreClientMessage | undefined => {
  const schema = zod.union(coreClientSchemas);

  const parsedMessage = schema.safeParse(message);
  if (!parsedMessage.success) {
    return undefined;
  }

  return parsedMessage.data;
};

export const parseCoreHostMessage = (
  message: unknown,
): CoreHostMessage | undefined => {
  const schema = zod.union(coreHostSchemas);

  const parsedMessage = schema.safeParse(message);
  if (!parsedMessage.success) {
    return undefined;
  }

  return parsedMessage.data;
};
