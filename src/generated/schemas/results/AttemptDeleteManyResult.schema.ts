import * as z from 'zod';
export const AttemptDeleteManyResultSchema = z.object({
  count: z.number()
});