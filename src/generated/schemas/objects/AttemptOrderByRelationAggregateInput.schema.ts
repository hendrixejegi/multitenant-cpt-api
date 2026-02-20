import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const AttemptOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.AttemptOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AttemptOrderByRelationAggregateInput>;
export const AttemptOrderByRelationAggregateInputObjectZodSchema = makeSchema();
