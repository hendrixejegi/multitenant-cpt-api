import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { UserScalarWhereInputObjectSchema as UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema';
import { UserUpdateManyMutationInputObjectSchema as UserUpdateManyMutationInputObjectSchema } from './UserUpdateManyMutationInput.schema';
import { UserUncheckedUpdateManyWithoutTenantInputObjectSchema as UserUncheckedUpdateManyWithoutTenantInputObjectSchema } from './UserUncheckedUpdateManyWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => UserUpdateManyMutationInputObjectSchema), z.lazy(() => UserUncheckedUpdateManyWithoutTenantInputObjectSchema)])
}).strict();
export const UserUpdateManyWithWhereWithoutTenantInputObjectSchema: z.ZodType<Prisma.UserUpdateManyWithWhereWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateManyWithWhereWithoutTenantInput>;
export const UserUpdateManyWithWhereWithoutTenantInputObjectZodSchema = makeSchema();
