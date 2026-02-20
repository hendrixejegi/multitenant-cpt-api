import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StatusEnumSchema } from '../enums/StatusEnum.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumStatusEnumFilterObjectSchema as NestedEnumStatusEnumFilterObjectSchema } from './NestedEnumStatusEnumFilter.schema'

const nestedenumstatusenumwithaggregatesfilterSchema = z.object({
  equals: StatusEnumSchema.optional(),
  in: StatusEnumSchema.array().optional(),
  notIn: StatusEnumSchema.array().optional(),
  not: z.union([StatusEnumSchema, z.lazy(() => NestedEnumStatusEnumWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumStatusEnumFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumStatusEnumFilterObjectSchema).optional()
}).strict();
export const NestedEnumStatusEnumWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumStatusEnumWithAggregatesFilter> = nestedenumstatusenumwithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumStatusEnumWithAggregatesFilter>;
export const NestedEnumStatusEnumWithAggregatesFilterObjectZodSchema = nestedenumstatusenumwithaggregatesfilterSchema;
