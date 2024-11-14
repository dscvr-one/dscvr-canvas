import * as zod from 'zod';
import {
  createClientMessageSchema,
  createHostMessageSchema,
  type BaseClientMessage,
  type BaseHostMessage,
} from './base';

export const userSchema = zod.object({
  id: zod.string(),
  username: zod.string(),
  avatar: zod.string().optional(),
});

export const contentSchema = zod.object({
  id: zod.string(),
  portalId: zod.string(),
  portalName: zod.string(),
});

export const initRequestSchema = createClientMessageSchema(
  'lifecycle:init-request',
  zod.object({
    version: zod.string(),
  }),
);

export const initResponseSchema = createHostMessageSchema(
  'lifecycle:init-response',
  zod.object({
    user: userSchema.optional(),
    content: contentSchema.optional(),
    urlData: zod.string().optional(),
  }),
);

export const closeMessageSchema = createHostMessageSchema('lifecycle:close');

export interface User extends zod.infer<typeof userSchema> {}
export interface Content extends zod.infer<typeof contentSchema> {}
export interface InitRequest
  extends BaseClientMessage<typeof initRequestSchema> {}
export interface InitResponse
  extends BaseHostMessage<typeof initResponseSchema> {}
export interface CloseMessage
  extends BaseClientMessage<typeof closeMessageSchema> {}
