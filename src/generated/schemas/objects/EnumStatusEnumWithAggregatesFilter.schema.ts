import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StatusEnumSchema } from '../enums/StatusEnum.schema';
import { NestedEnumStatusEnumWithAggregatesFilterObjectSchema as NestedEnumStatusEnumWithAggregatesFilterObjectSchema } from './NestedEnumStatusEnumWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumStatusEnumFilterObjectSchema as NestedEnumStatusEnumFilterObjectSchema } from './NestedEnumStatusEnumFilter.schema'

const makeSchema = () => z.object({
  equals: StatusEnumSchema.optional(),
  in: StatusEnumSchema.array().optional(),
  notIn: StatusEnumSchema.array().optional(),
  not: z.union([StatusEnumSchema, z.lazy(() => NestedEnumStatusEnumWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumStatusEnumFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumStatusEnumFilterObjectSchema).optional()
}).strict();
export const EnumStatusEnumWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumStatusEnumWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumStatusEnumWithAggregatesFilter>;
export const EnumStatusEnumWithAggregatesFilterObjectZodSchema = makeSchema();
