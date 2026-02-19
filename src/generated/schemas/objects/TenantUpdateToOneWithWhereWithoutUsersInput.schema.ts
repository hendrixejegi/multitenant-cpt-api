import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TenantWhereInputObjectSchema as TenantWhereInputObjectSchema } from './TenantWhereInput.schema';
import { TenantUpdateWithoutUsersInputObjectSchema as TenantUpdateWithoutUsersInputObjectSchema } from './TenantUpdateWithoutUsersInput.schema';
import { TenantUncheckedUpdateWithoutUsersInputObjectSchema as TenantUncheckedUpdateWithoutUsersInputObjectSchema } from './TenantUncheckedUpdateWithoutUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TenantUpdateWithoutUsersInputObjectSchema), z.lazy(() => TenantUncheckedUpdateWithoutUsersInputObjectSchema)])
}).strict();
export const TenantUpdateToOneWithWhereWithoutUsersInputObjectSchema: z.ZodType<Prisma.TenantUpdateToOneWithWhereWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUpdateToOneWithWhereWithoutUsersInput>;
export const TenantUpdateToOneWithWhereWithoutUsersInputObjectZodSchema = makeSchema();
