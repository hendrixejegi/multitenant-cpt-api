import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const UserOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.UserOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserOrderByRelationAggregateInput>;
export const UserOrderByRelationAggregateInputObjectZodSchema = makeSchema();
