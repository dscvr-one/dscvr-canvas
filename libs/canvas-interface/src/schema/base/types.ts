import * as zod from 'zod';

export type CanvasMessageType = `${string}:${string}`;

export type BaseClientMessageSchema<
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

export type BaseHostMessageSchema<
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
  T extends BaseClientMessageSchema = BaseClientMessageSchema<
    CanvasMessageType,
    zod.ZodTypeAny | undefined
  >,
> = zod.infer<T>;

export type BaseHostMessage<
  T extends BaseHostMessageSchema = BaseHostMessageSchema<
    CanvasMessageType,
    zod.ZodTypeAny | undefined
  >,
> = zod.infer<T>;
