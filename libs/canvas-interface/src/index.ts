export * as Lifecycle from './schema/lifecycle';
export * as User from './schema/user';
export {
  ClientMessageSchema,
  HostMessageSchema,
  type ClientMessage,
  type ClientMessageType,
  type HostMessage,
  type HostMessageType,
} from './schema';

export {
  ClientAlreadyInitializedError,
  ClientNotInitializedError,
  WindowNotDefinedError,
  ReferrerNotDefinedError,
} from './errors';

export const VERSION = 'vNext';
