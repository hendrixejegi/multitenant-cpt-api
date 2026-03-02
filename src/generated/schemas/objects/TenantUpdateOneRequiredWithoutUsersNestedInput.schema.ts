import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TenantCreateWithoutUsersInputObjectSchema as TenantCreateWithoutUsersInputObjectSchema } from './TenantCreateWithoutUsersInput.schema';
import { TenantUncheckedCreateWithoutUsersInputObjectSchema as TenantUncheckedCreateWithoutUsersInputObjectSchema } from './TenantUncheckedCreateWithoutUsersInput.schema';
import { TenantCreateOrConnectWithoutUsersInputObjectSchema as TenantCreateOrConnectWithoutUsersInputObjectSchema } from './TenantCreateOrConnectWithoutUsersInput.schema';
import { TenantUpsertWithoutUsersInputObjectSchema as TenantUpsertWithoutUsersInputObjectSchema } from './TenantUpsertWithoutUsersInput.schema';
import { TenantWhereUniqueInputObjectSchema as TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantUpdateToOneWithWhereWithoutUsersInputObjectSchema as TenantUpdateToOneWithWhereWithoutUsersInputObjectSchema } from './TenantUpdateToOneWithWhereWithoutUsersInput.schema';
import { TenantUpdateWithoutUsersInputObjectSchema as TenantUpdateWithoutUsersInputObjectSchema } from './TenantUpdateWithoutUsersInput.schema';
import { TenantUncheckedUpdateWithoutUsersInputObjectSchema as TenantUncheckedUpdateWithoutUsersInputObjectSchema } from './TenantUncheckedUpdateWithoutUsersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantCreateWithoutUsersInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutUsersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantCreateOrConnectWithoutUsersInputObjectSchema).optional(),
  upsert: z.lazy(() => TenantUpsertWithoutUsersInputObjectSchema).optional(),
  connect: z.lazy(() => TenantWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TenantUpdateToOneWithWhereWithoutUsersInputObjectSchema), z.lazy(() => TenantUpdateWithoutUsersInputObjectSchema), z.lazy(() => TenantUncheckedUpdateWithoutUsersInputObjectSchema)]).optional()
}).strict();
export const TenantUpdateOneRequiredWithoutUsersNestedInputObjectSchema: z.ZodType<Prisma.TenantUpdateOneRequiredWithoutUsersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUpdateOneRequiredWithoutUsersNestedInput>;
export const TenantUpdateOneRequiredWithoutUsersNestedInputObjectZodSchema = makeSchema();
