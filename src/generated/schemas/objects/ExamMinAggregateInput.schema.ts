import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  tenant_id: z.literal(true).optional(),
  title: z.literal(true).optional(),
  description: z.literal(true).optional(),
  duration_minutes: z.literal(true).optional(),
  code: z.literal(true).optional(),
  is_published: z.literal(true).optional(),
  created_at: z.literal(true).optional()
}).strict();
export const ExamMinAggregateInputObjectSchema: z.ZodType<Prisma.ExamMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ExamMinAggregateInputType>;
export const ExamMinAggregateInputObjectZodSchema = makeSchema();
