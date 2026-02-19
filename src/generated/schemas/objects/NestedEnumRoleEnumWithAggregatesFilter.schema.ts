import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { RoleEnumSchema } from '../enums/RoleEnum.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumRoleEnumFilterObjectSchema as NestedEnumRoleEnumFilterObjectSchema } from './NestedEnumRoleEnumFilter.schema'

const nestedenumroleenumwithaggregatesfilterSchema = z.object({
  equals: RoleEnumSchema.optional(),
  in: RoleEnumSchema.array().optional(),
  notIn: RoleEnumSchema.array().optional(),
  not: z.union([RoleEnumSchema, z.lazy(() => NestedEnumRoleEnumWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumRoleEnumFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumRoleEnumFilterObjectSchema).optional()
}).strict();
export const NestedEnumRoleEnumWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumRoleEnumWithAggregatesFilter> = nestedenumroleenumwithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumRoleEnumWithAggregatesFilter>;
export const NestedEnumRoleEnumWithAggregatesFilterObjectZodSchema = nestedenumroleenumwithaggregatesfilterSchema;
