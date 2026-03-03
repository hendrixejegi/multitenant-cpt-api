import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ExamOrderByWithRelationInputObjectSchema as ExamOrderByWithRelationInputObjectSchema } from './ExamOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  exam_id: SortOrderSchema.optional(),
  started_at: SortOrderSchema.optional(),
  submitted_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  correct_answers: SortOrderSchema.optional(),
  wrong_answers: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  score: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  exam: z.lazy(() => ExamOrderByWithRelationInputObjectSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const AttemptOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.AttemptOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.AttemptOrderByWithRelationInput>;
export const AttemptOrderByWithRelationInputObjectZodSchema = makeSchema();
