export * as Lifecycle from './schema/lifecycle';
export * as User from './schema/user';
export {
  createClientMessageSchema,
  createHostMessageSchema,
  createFailedResponsePayload,
  parseClientMessage,
  parseHostMessage,
  CoreClientMessageSchema,
  CoreHostMessageSchema,
  type BaseClientMessageSchemaType,
  type BaseHostMessageSchemaType,
  type BaseClientMessage,
  type BaseHostMessage,
  type CoreClientMessage,
  type CoreClientMessageType,
  type CoreHostMessage,
  type CoreHostMessageType,
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
