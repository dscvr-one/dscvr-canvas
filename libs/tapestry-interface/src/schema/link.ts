import * as zod from 'zod';
import { createClientMessageSchema, createHostMessageSchema } from './base';

export const OpenLnkRequestMessageSchema = createClientMessageSchema(
  'open-link-request',
  zod.object({
    url: zod.string(),
  }),
);

export type OpenLnkRequestMessage = zod.infer<
  typeof OpenLnkRequestMessageSchema
>;
