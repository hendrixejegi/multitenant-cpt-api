import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string(),
  duration_minutes: z.number().int(),
  code: z.string(),
  is_published: z.boolean(),
  created_at: z.coerce.date().optional()
}).strict();
export const ExamCreateManyTenantInputObjectSchema: z.ZodType<Prisma.ExamCreateManyTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.ExamCreateManyTenantInput>;
export const ExamCreateManyTenantInputObjectZodSchema = makeSchema();
