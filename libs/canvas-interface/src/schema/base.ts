import * as zod from 'zod';

export type CanvasMessageType = `${string}:${string}`;

export type BaseClientMessageSchemaType<
  T extends CanvasMessageType = CanvasMessageType,
  D extends zod.ZodTypeAny | undefined = undefined,
> = D extends zod.ZodTypeAny
  ? zod.ZodObject<{
      type: zod.ZodLiteral<T>;
      payload: D;
    }>
  : zod.ZodObject<{
      type: zod.ZodLiteral<T>;
    }>;

export type BaseHostMessageSchemaType<
  T extends CanvasMessageType = CanvasMessageType,
  D extends zod.ZodTypeAny | undefined = undefined,
> = D extends zod.ZodTypeAny
  ? zod.ZodObject<{
      type: zod.ZodLiteral<T>;
      untrusted: D;
      trustedBytes: zod.ZodString;
    }>
  : zod.ZodObject<{
      type: zod.ZodLiteral<T>;
      trustedBytes: zod.ZodString;
    }>;

export type BaseClientMessage<
  T extends BaseClientMessageSchemaType = BaseClientMessageSchemaType<
    CanvasMessageType,
    zod.ZodTypeAny | undefined
  >,
> = zod.infer<T>;
export type BaseHostMessage<
  T extends BaseHostMessageSchemaType = BaseHostMessageSchemaType<
    CanvasMessageType,
    zod.ZodTypeAny | undefined
  >,
> = zod.infer<T>;

export function createClientMessageSchema<T extends CanvasMessageType>(
  type: T,
): BaseClientMessageSchemaType<T>;

export function createClientMessageSchema<
  T extends CanvasMessageType,
  D extends zod.ZodTypeAny,
>(type: T, payloadSchema: D): BaseClientMessageSchemaType<T, D>;

export function createClientMessageSchema<
  T extends CanvasMessageType,
  D extends zod.ZodTypeAny,
>(
  type: T,
  payloadSchema?: D,
): BaseClientMessageSchemaType<T> | BaseClientMessageSchemaType<T, D> {
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
): BaseHostMessageSchemaType<T>;

export function createHostMessageSchema<
  T extends CanvasMessageType,
  D extends zod.ZodTypeAny,
>(type: T, payloadSchema: D): BaseHostMessageSchemaType<T, D>;

export function createHostMessageSchema<
  T extends CanvasMessageType,
  D extends zod.ZodTypeAny,
>(
  type: T,
  untrustedSchema?: D,
): BaseHostMessageSchemaType<T> | BaseHostMessageSchemaType<T, D> {
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

export const parseClientMessage = (
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

export const parseHostMessage = (
  message: unknown,
): BaseClientMessage | undefined => {
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
