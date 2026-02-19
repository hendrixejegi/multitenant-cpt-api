import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  slug: z.string(),
  created_at: z.coerce.date().optional()
}).strict();
export const TenantCreateManyInputObjectSchema: z.ZodType<Prisma.TenantCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantCreateManyInput>;
export const TenantCreateManyInputObjectZodSchema = makeSchema();
