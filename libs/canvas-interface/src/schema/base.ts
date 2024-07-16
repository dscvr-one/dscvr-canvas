import * as zod from 'zod';

export function createClientMessageSchema<T extends string>(
  type: T,
): zod.ZodObject<{
  type: zod.ZodLiteral<T>;
}>;

export function createClientMessageSchema<
  T extends string,
  D extends zod.ZodTypeAny,
>(
  type: T,
  payloadSchema: D,
): zod.ZodObject<{
  type: zod.ZodLiteral<T>;
  payload: D;
}>;

export function createClientMessageSchema<
  T extends string,
  D extends zod.ZodTypeAny,
>(
  type: T,
  payloadSchema?: D,
):
  | zod.ZodObject<{
      type: zod.ZodLiteral<T>;
    }>
  | zod.ZodObject<{
      type: zod.ZodLiteral<T>;
      payload: D;
    }> {
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
): zod.ZodObject<{
  type: zod.ZodLiteral<T>;
}>;

export function createHostMessageSchema<
  T extends string,
  D extends zod.ZodTypeAny,
>(
  type: T,
  payloadSchema: D,
): zod.ZodObject<{
  type: zod.ZodLiteral<T>;
  untrusted: D;
  trustedBytes: zod.ZodString;
}>;

export function createHostMessageSchema<
  T extends string,
  D extends zod.ZodTypeAny,
>(
  type: T,
  untrustedSchema?: D,
):
  | zod.ZodObject<{
      type: zod.ZodLiteral<T>;
      trustedBytes: zod.ZodString;
    }>
  | zod.ZodObject<{
      type: zod.ZodLiteral<T>;
      untrusted: D;
      trustedBytes: zod.ZodString;
    }> {
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
