import * as zod from 'zod';
import { createClientMessageSchema, createHostMessageSchema } from './base';

export const UserSchema = zod.object({
  id: zod.string(),
  username: zod.string(),
  avatar: zod.string().optional(),
});

export const ContentSchema = zod.object({
  id: zod.string(),
  portalId: zod.string(),
  portalName: zod.string(),
});

export const InitRequestMessageSchema = createClientMessageSchema(
  'init-request',
  zod.object({
    version: zod.string(),
    // TODO: more
  }),
);

export const InitResponseMessageSchema = createHostMessageSchema(
  'init-response',
  zod.object({
    user: UserSchema.optional(),
    content: ContentSchema.optional(),
  }),
);

// TODO: untrusted data on empty message?
export const CloseMessageSchema = createHostMessageSchema(
  'close',
  zod.undefined(),
);

export interface User extends zod.infer<typeof UserSchema> {}
export interface Content extends zod.infer<typeof ContentSchema> {}
export interface InitRequestMessage
  extends zod.infer<typeof InitRequestMessageSchema> {}
export interface InitResponseMessage
  extends zod.infer<typeof InitResponseMessageSchema> {}
export interface CloseMessage extends zod.infer<typeof CloseMessageSchema> {}
