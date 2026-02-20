import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByRelationAggregateInputObjectSchema as UserOrderByRelationAggregateInputObjectSchema } from './UserOrderByRelationAggregateInput.schema';
import { ExamOrderByRelationAggregateInputObjectSchema as ExamOrderByRelationAggregateInputObjectSchema } from './ExamOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  slug: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  users: z.lazy(() => UserOrderByRelationAggregateInputObjectSchema).optional(),
  exams: z.lazy(() => ExamOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const TenantOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.TenantOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantOrderByWithRelationInput>;
export const TenantOrderByWithRelationInputObjectZodSchema = makeSchema();
