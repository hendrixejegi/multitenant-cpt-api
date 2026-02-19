import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { RoleEnumSchema } from '../enums/RoleEnum.schema'

const nestedenumroleenumfilterSchema = z.object({
  equals: RoleEnumSchema.optional(),
  in: RoleEnumSchema.array().optional(),
  notIn: RoleEnumSchema.array().optional(),
  not: z.union([RoleEnumSchema, z.lazy(() => NestedEnumRoleEnumFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumRoleEnumFilterObjectSchema: z.ZodType<Prisma.NestedEnumRoleEnumFilter> = nestedenumroleenumfilterSchema as unknown as z.ZodType<Prisma.NestedEnumRoleEnumFilter>;
export const NestedEnumRoleEnumFilterObjectZodSchema = nestedenumroleenumfilterSchema;
