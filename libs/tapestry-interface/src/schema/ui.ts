import * as zod from 'zod';
import { createClientMessageSchema } from './base';

export const OpenLnkRequestMessageSchema = createClientMessageSchema(
  'user:open-link-request',
  zod.object({
    url: zod.string(),
  }),
);

export interface OpenLnkRequestMessage
  extends zod.infer<typeof OpenLnkRequestMessageSchema> {}
