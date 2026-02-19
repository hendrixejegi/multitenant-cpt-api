import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { QuestionOrderByRelationAggregateInputObjectSchema as QuestionOrderByRelationAggregateInputObjectSchema } from './QuestionOrderByRelationAggregateInput.schema';
import { AttemptOrderByRelationAggregateInputObjectSchema as AttemptOrderByRelationAggregateInputObjectSchema } from './AttemptOrderByRelationAggregateInput.schema';
import { TenantOrderByWithRelationInputObjectSchema as TenantOrderByWithRelationInputObjectSchema } from './TenantOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  tenant_id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  duration_minutes: SortOrderSchema.optional(),
  code: SortOrderSchema.optional(),
  is_published: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  questions: z.lazy(() => QuestionOrderByRelationAggregateInputObjectSchema).optional(),
  attempts: z.lazy(() => AttemptOrderByRelationAggregateInputObjectSchema).optional(),
  tenant: z.lazy(() => TenantOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const ExamOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ExamOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ExamOrderByWithRelationInput>;
export const ExamOrderByWithRelationInputObjectZodSchema = makeSchema();
