import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { UserUncheckedCreateNestedManyWithoutTenantInputObjectSchema as UserUncheckedCreateNestedManyWithoutTenantInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutTenantInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  slug: z.string(),
  created_at: z.coerce.date().optional(),
  users: z.lazy(() => UserUncheckedCreateNestedManyWithoutTenantInputObjectSchema).optional()
}).strict();
export const TenantUncheckedCreateWithoutExamsInputObjectSchema: z.ZodType<Prisma.TenantUncheckedCreateWithoutExamsInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUncheckedCreateWithoutExamsInput>;
export const TenantUncheckedCreateWithoutExamsInputObjectZodSchema = makeSchema();
