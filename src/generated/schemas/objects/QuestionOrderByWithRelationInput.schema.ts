import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ExamOrderByWithRelationInputObjectSchema as ExamOrderByWithRelationInputObjectSchema } from './ExamOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  exam_id: SortOrderSchema.optional(),
  text: SortOrderSchema.optional(),
  options: SortOrderSchema.optional(),
  correct_answer: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  exam: z.lazy(() => ExamOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const QuestionOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.QuestionOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.QuestionOrderByWithRelationInput>;
export const QuestionOrderByWithRelationInputObjectZodSchema = makeSchema();
