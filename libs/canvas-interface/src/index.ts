export * as Lifecycle from './schema/lifecycle';
export * as User from './schema/user';

export {
  createClientMessageSchema,
  createHostMessageSchema,
  createFailedResponsePayload,
  parseBaseClientMessage,
  parseBaseHostMessage,
  type BaseClientMessage,
  type BaseHostMessage,
  type BaseClientMessageSchema,
  type BaseHostMessageSchema,
} from './schema/base';

export {
  parseCoreClientMessage,
  parseCoreHostMessage,
  type CoreClientMessage,
  type CoreClientMessageSchema,
  type CoreClientMessageType,
  type CoreHostMessage,
  type CoreHostMessageSchema,
  type CoreHostMessageType,
} from './schema/core';

export {
  ClientAlreadyInitializedError,
  ClientNotInitializedError,
  WindowNotDefinedError,
  ReferrerNotDefinedError,
} from './errors';

export const VERSION = 'vNext';
