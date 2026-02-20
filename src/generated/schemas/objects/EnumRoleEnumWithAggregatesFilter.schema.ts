import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { RoleEnumSchema } from '../enums/RoleEnum.schema';
import { NestedEnumRoleEnumWithAggregatesFilterObjectSchema as NestedEnumRoleEnumWithAggregatesFilterObjectSchema } from './NestedEnumRoleEnumWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumRoleEnumFilterObjectSchema as NestedEnumRoleEnumFilterObjectSchema } from './NestedEnumRoleEnumFilter.schema'

const makeSchema = () => z.object({
  equals: RoleEnumSchema.optional(),
  in: RoleEnumSchema.array().optional(),
  notIn: RoleEnumSchema.array().optional(),
  not: z.union([RoleEnumSchema, z.lazy(() => NestedEnumRoleEnumWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumRoleEnumFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumRoleEnumFilterObjectSchema).optional()
}).strict();
export const EnumRoleEnumWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumRoleEnumWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumRoleEnumWithAggregatesFilter>;
export const EnumRoleEnumWithAggregatesFilterObjectZodSchema = makeSchema();
