import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumRoleEnumFilterObjectSchema as EnumRoleEnumFilterObjectSchema } from './EnumRoleEnumFilter.schema';
import { RoleEnumSchema } from '../enums/RoleEnum.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const userscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => UserScalarWhereInputObjectSchema), z.lazy(() => UserScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UserScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserScalarWhereInputObjectSchema), z.lazy(() => UserScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  tenant_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  password_hash: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  role: z.union([z.lazy(() => EnumRoleEnumFilterObjectSchema), RoleEnumSchema]).optional(),
  is_guest: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const UserScalarWhereInputObjectSchema: z.ZodType<Prisma.UserScalarWhereInput> = userscalarwhereinputSchema as unknown as z.ZodType<Prisma.UserScalarWhereInput>;
export const UserScalarWhereInputObjectZodSchema = userscalarwhereinputSchema;
