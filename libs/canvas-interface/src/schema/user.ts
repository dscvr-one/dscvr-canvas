import * as zod from 'zod';
import {
  createClientMessageSchema,
  createFailedResponsePayload,
  createHostMessageSchema,
  type BaseClientMessage,
  type BaseHostMessage,
} from './base';

export const connectWalletRequestSchema = createClientMessageSchema(
  'user:connect-wallet-request',
  zod.object({
    chainId: zod.string(),
  }),
);

export const initialInteractionRequestSchema = createClientMessageSchema(
  'user:initial-interaction-request',
);

export const resizeRequestSchema = createClientMessageSchema(
  'user:resize-request',
  zod.object({
    width: zod.number(),
    height: zod.number(),
  }),
);

export const connectWalletResponseSchema = createHostMessageSchema(
  'user:connect-wallet-response',
  zod.union([
    zod.object({
      success: zod.literal(true),
      address: zod.string(),
      walletName: zod.string(),
      walletIcon: zod.string(),
      walletUrl: zod.string(),
      walletSupportedTransactionVersions: zod
        .custom<ReadonlySet<'legacy' | 0>>()
        .optional(),
    }),
    createFailedResponsePayload(['user-cancelled', 'error']),
  ]),
);

/**
 * Represents an unsigned transaction that needs to be signed by the user.
 * The `txId` is a serialized string of the transaction.
 * The `awaitCommitment` field is optional and can be used to specify the commitment level that should be awaited.
 * If not specified, it is assumed to be `confirmed`.
 */
export const unsignedTransactionSchema = zod.object({
  unsignedTx: zod.string(),
  awaitCommitment: zod.enum(['confirmed', 'finalized', 'none']).optional(),
});

export const signAndSendTransactionRequestSchema = createClientMessageSchema(
  'user:sign-send-transaction-request',
  unsignedTransactionSchema.extend({
    chainId: zod.string(),
  }),
);

export const signAndSendTransactionResponseSchema = createHostMessageSchema(
  'user:sign-send-transaction-response',
  zod.union([
    zod.object({
      success: zod.literal(true),
      signedTx: zod.string(),
    }),
    createFailedResponsePayload(['user-cancelled', 'error']),
  ]),
);

export const openLnkRequestSchema = createClientMessageSchema(
  'user:open-link-request',
  zod.object({
    url: zod.string(),
  }),
);

export const createPostRequestSchema = createClientMessageSchema(
  'user:create-post-request',
  zod.object({
    htmlContent: zod.string(),
  }),
);

export const createPostResponseSchema = createHostMessageSchema(
  'user:create-post-response',
  zod.union([
    zod.object({
      success: zod.literal(true),
      contentId: zod.bigint(),
    }),
    createFailedResponsePayload(['user-cancelled', 'error']),
  ]),
);

export const copyToClipboardRequestSchema = createClientMessageSchema(
  'user:copy-to-clipboard-request',
  zod.object({
    content: zod.string(),
  }),
);

export const copyToClipboardResponseSchema = createHostMessageSchema(
  'user:copy-to-clipboard-response',
  zod.union([
    zod.object({
      success: zod.literal(true),
    }),
    createFailedResponsePayload(['user-cancelled', 'error']),
  ]),
);

export const contentReactionResponseSchema = createHostMessageSchema(
  'user:content-reaction-response',
  zod.union([
    zod.object({
      status: zod.literal('reacted'),
      reaction: zod.string(),
    }),
    zod.object({
      status: zod.literal('cleared'),
    }),
  ]),
);

export interface InitialInteractionRequest
  extends BaseClientMessage<typeof initialInteractionRequestSchema> {}
export interface ResizeRequest
  extends BaseClientMessage<typeof resizeRequestSchema> {}
export interface ConnectWalletRequest
  extends BaseClientMessage<typeof connectWalletRequestSchema> {}
export interface ConnectWalletResponse
  extends BaseHostMessage<typeof connectWalletResponseSchema> {}
export type UnsignedTransaction = zod.infer<typeof unsignedTransactionSchema>;
export interface SignAndSendTransactionRequest
  extends BaseClientMessage<typeof signAndSendTransactionRequestSchema> {}
export interface SignAndSendTransactionResponse
  extends BaseHostMessage<typeof signAndSendTransactionResponseSchema> {}
export interface OpenLnkRequest
  extends BaseClientMessage<typeof openLnkRequestSchema> {}
export interface CreatePostRequest
  extends BaseClientMessage<typeof createPostRequestSchema> {}
export interface CreatePostResponse
  extends BaseHostMessage<typeof createPostResponseSchema> {}
export interface CopyToClipboardRequest
  extends BaseClientMessage<typeof copyToClipboardRequestSchema> {}
export interface CopyToClipboardResponse
  extends BaseHostMessage<typeof copyToClipboardResponseSchema> {}
export interface ContentReactionResponse
  extends BaseHostMessage<typeof contentReactionResponseSchema> {}
