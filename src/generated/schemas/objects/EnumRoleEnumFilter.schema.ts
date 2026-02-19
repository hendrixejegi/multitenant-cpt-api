import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { RoleEnumSchema } from '../enums/RoleEnum.schema';
import { NestedEnumRoleEnumFilterObjectSchema as NestedEnumRoleEnumFilterObjectSchema } from './NestedEnumRoleEnumFilter.schema'

const makeSchema = () => z.object({
  equals: RoleEnumSchema.optional(),
  in: RoleEnumSchema.array().optional(),
  notIn: RoleEnumSchema.array().optional(),
  not: z.union([RoleEnumSchema, z.lazy(() => NestedEnumRoleEnumFilterObjectSchema)]).optional()
}).strict();
export const EnumRoleEnumFilterObjectSchema: z.ZodType<Prisma.EnumRoleEnumFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumRoleEnumFilter>;
export const EnumRoleEnumFilterObjectZodSchema = makeSchema();
