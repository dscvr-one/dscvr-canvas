import * as zod from 'zod';
import {
  createClientMessageSchema,
  createFailedResponsePayload,
  createHostMessageSchema,
  type BaseClientMessage,
  type BaseHostMessage,
} from './base';

export const ConnectWalletRequestMessageSchema = createClientMessageSchema(
  'user:connect-wallet-request',
  zod.object({
    chainId: zod.string(),
  }),
);

export const InitialInteractionRequestMessageSchema = createClientMessageSchema(
  'user:initial-interaction-request',
);

export const ResizeRequestMessageSchema = createClientMessageSchema(
  'user:resize-request',
  zod.object({
    width: zod.number(),
    height: zod.number(),
  }),
);

export const ConnectWalletResponseMessageSchema = createHostMessageSchema(
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
export const UnsignedTransactionSchema = zod.object({
  unsignedTx: zod.string(),
  awaitCommitment: zod.enum(['confirmed', 'finalized', 'none']).optional(),
});

export const SignAndSendTransactionRequestMessageSchema =
  createClientMessageSchema(
    'user:sign-send-transaction-request',
    UnsignedTransactionSchema.extend({
      chainId: zod.string(),
    }),
  );

export const SignAndSendTransactionResponseMessageSchema =
  createHostMessageSchema(
    'user:sign-send-transaction-response',
    zod.union([
      zod.object({
        success: zod.literal(true),
        signedTx: zod.string(),
      }),
      createFailedResponsePayload(['user-cancelled', 'error']),
    ]),
  );

export const OpenLnkRequestMessageSchema = createClientMessageSchema(
  'user:open-link-request',
  zod.object({
    url: zod.string(),
  }),
);

export const ContentReactionResponseMessageSchema = createHostMessageSchema(
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

export interface InitialInteractionRequestMessage
  extends BaseClientMessage<typeof InitialInteractionRequestMessageSchema> {}
export interface ResizeRequestMessage
  extends BaseClientMessage<typeof ResizeRequestMessageSchema> {}
export interface ConnectWalletRequestMessage
  extends BaseClientMessage<typeof ConnectWalletRequestMessageSchema> {}
export interface ConnectWalletResponseMessage
  extends BaseHostMessage<typeof ConnectWalletResponseMessageSchema> {}
export type UnsignedTransaction = zod.infer<typeof UnsignedTransactionSchema>;
export interface SignAndSendTransactionRequestMessage
  extends BaseClientMessage<
    typeof SignAndSendTransactionRequestMessageSchema
  > {}
export interface SignAndSendTransactionResponseMessage
  extends BaseHostMessage<typeof SignAndSendTransactionResponseMessageSchema> {}
export interface OpenLnkRequestMessage
  extends BaseClientMessage<typeof OpenLnkRequestMessageSchema> {}

export interface ContentReactionResponseMessage
  extends BaseHostMessage<typeof ContentReactionResponseMessageSchema> {}
