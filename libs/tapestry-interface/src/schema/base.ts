import * as zod from 'zod';

// TODO: Other's opinion, is this name ok?
export const createClientMessageSchema = <
  T extends string,
  D extends zod.ZodTypeAny,
>(
  type: T,
  payloadSchema: D,
) =>
  zod.object({
    type: zod.literal(type),
    payload: payloadSchema,
  });

export const createHostMessageSchema = <
  T extends string,
  D extends zod.ZodTypeAny,
>(
  type: T,
  untrustedSchema: D,
) =>
  zod.object({
    type: zod.literal(type),
    untrusted: untrustedSchema,
    trustedBytes: zod.string(),
  });
