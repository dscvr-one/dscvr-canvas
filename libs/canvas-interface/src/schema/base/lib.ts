import * as zod from 'zod';
import type {
  CanvasMessageType,
  BaseClientMessageSchema,
  BaseHostMessageSchema,
  BaseClientMessage,
  BaseHostMessage,
} from './types';

export function createClientMessageSchema<T extends CanvasMessageType>(
  type: T,
): BaseClientMessageSchema<T>;

export function createClientMessageSchema<
  T extends CanvasMessageType,
  D extends zod.ZodTypeAny,
>(type: T, payloadSchema: D): BaseClientMessageSchema<T, D>;

export function createClientMessageSchema<
  T extends CanvasMessageType,
  D extends zod.ZodTypeAny,
>(
  type: T,
  payloadSchema?: D,
): BaseClientMessageSchema<T> | BaseClientMessageSchema<T, D> {
  if (!payloadSchema) {
    return zod.object({
      type: zod.literal(type),
    });
  }

  return zod.object({
    type: zod.literal(type),
    payload: payloadSchema,
  });
}

export function createHostMessageSchema<T extends CanvasMessageType>(
  type: T,
): BaseHostMessageSchema<T>;

export function createHostMessageSchema<
  T extends CanvasMessageType,
  D extends zod.ZodTypeAny,
>(type: T, payloadSchema: D): BaseHostMessageSchema<T, D>;

export function createHostMessageSchema<
  T extends CanvasMessageType,
  D extends zod.ZodTypeAny,
>(
  type: T,
  untrustedSchema?: D,
): BaseHostMessageSchema<T> | BaseHostMessageSchema<T, D> {
  if (!untrustedSchema) {
    return zod.object({
      type: zod.literal(type),
      trustedBytes: zod.string(),
    });
  }

  return zod.object({
    type: zod.literal(type),
    untrusted: untrustedSchema,
    trustedBytes: zod.string(),
  });
}

export const createFailedResponsePayload = <
  U extends string,
  T extends readonly [U, ...U[]],
>(
  reasons: T,
) => {
  return zod.object({
    success: zod.literal(false),
    errorReason: zod.enum<string, T>(reasons),
    error: zod.string().optional(),
  });
};

export const parseBaseClientMessage = (
  message: unknown,
): BaseClientMessage | undefined => {
  const clientMessageSchema = zod.object({
    type: zod.custom<CanvasMessageType>(),
    payload: zod.any().optional(),
  });

  const parsedMessage = clientMessageSchema.safeParse(message);
  if (!parsedMessage.success) {
    return undefined;
  }

  return parsedMessage.data;
};

export const parseBaseHostMessage = (
  message: unknown,
): BaseHostMessage | undefined => {
  const hostMessageSchema = zod.object({
    type: zod.custom<CanvasMessageType>(),
    untrusted: zod.any().optional(),
    trustedBytes: zod.string(),
    zod: zod.custom<{ test: string }>(),
  });

  const parsedMessage = hostMessageSchema.safeParse(message);
  if (!parsedMessage.success) {
    return undefined;
  }

  return parsedMessage.data;
};
