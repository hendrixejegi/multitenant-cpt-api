import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { UserCreateNestedManyWithoutTenantInputObjectSchema as UserCreateNestedManyWithoutTenantInputObjectSchema } from './UserCreateNestedManyWithoutTenantInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  slug: z.string(),
  created_at: z.coerce.date().optional(),
  users: z.lazy(() => UserCreateNestedManyWithoutTenantInputObjectSchema).optional()
}).strict();
export const TenantCreateWithoutExamsInputObjectSchema: z.ZodType<Prisma.TenantCreateWithoutExamsInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantCreateWithoutExamsInput>;
export const TenantCreateWithoutExamsInputObjectZodSchema = makeSchema();
