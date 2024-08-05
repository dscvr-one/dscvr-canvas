export * as Lifecycle from './schema/lifecycle';
export * as User from './schema/user';
export {
  createClientMessageSchema,
  createHostMessageSchema,
  createFailedResponsePayload,
  ClientMessageSchema,
  HostMessageSchema,
  type BaseClientMessage,
  type BaseHostMessage,
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
  PluginAlreadyExistsError,
  PluginNotInstalledError,
} from './errors';

export const VERSION = 'vNext';
