import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutTenantInputObjectSchema as UserUpdateWithoutTenantInputObjectSchema } from './UserUpdateWithoutTenantInput.schema';
import { UserUncheckedUpdateWithoutTenantInputObjectSchema as UserUncheckedUpdateWithoutTenantInputObjectSchema } from './UserUncheckedUpdateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => UserUpdateWithoutTenantInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutTenantInputObjectSchema)])
}).strict();
export const UserUpdateWithWhereUniqueWithoutTenantInputObjectSchema: z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutTenantInput>;
export const UserUpdateWithWhereUniqueWithoutTenantInputObjectZodSchema = makeSchema();
