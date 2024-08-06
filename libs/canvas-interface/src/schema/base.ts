import * as zod from 'zod';

export type BaseClientMessageSchemaType<
  T extends string = string,
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
  T extends string = string,
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
    string,
    zod.ZodTypeAny | undefined
  >,
> = zod.infer<T>;
export type BaseHostMessage<
  T extends BaseHostMessageSchemaType = BaseHostMessageSchemaType<
    string,
    zod.ZodTypeAny | undefined
  >,
> = zod.infer<T>;

export function createClientMessageSchema<T extends string>(
  type: T,
): BaseClientMessageSchemaType<T>;

export function createClientMessageSchema<
  T extends string,
  D extends zod.ZodTypeAny,
>(type: T, payloadSchema: D): BaseClientMessageSchemaType<T, D>;

export function createClientMessageSchema<
  T extends string,
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

export function createHostMessageSchema<T extends string>(
  type: T,
): BaseHostMessageSchemaType<T>;

export function createHostMessageSchema<
  T extends string,
  D extends zod.ZodTypeAny,
>(type: T, payloadSchema: D): BaseHostMessageSchemaType<T, D>;

export function createHostMessageSchema<
  T extends string,
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

export const createFailedResponsePayload = () =>
  zod.object({
    success: zod.literal(false),
    errorReason: zod.enum(['user-cancelled', 'error']),
    error: zod.string().optional(),
  });

export const parseClientMessage = (
  message: any,
): BaseClientMessage | undefined => {
  const clientMessageSchema = zod.object({
    type: zod.string(),
    payload: zod.any().optional(),
  });

  const parsedMessage = clientMessageSchema.safeParse(message);
  if (!parsedMessage.success) {
    return undefined;
  }

  return parsedMessage.data;
};

export const parseHostMessage = (
  message: any,
): BaseClientMessage | undefined => {
  const hostMessageSchema = zod.object({
    type: zod.string(),
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
