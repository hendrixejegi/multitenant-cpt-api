import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TenantUpdateWithoutExamsInputObjectSchema as TenantUpdateWithoutExamsInputObjectSchema } from './TenantUpdateWithoutExamsInput.schema';
import { TenantUncheckedUpdateWithoutExamsInputObjectSchema as TenantUncheckedUpdateWithoutExamsInputObjectSchema } from './TenantUncheckedUpdateWithoutExamsInput.schema';
import { TenantCreateWithoutExamsInputObjectSchema as TenantCreateWithoutExamsInputObjectSchema } from './TenantCreateWithoutExamsInput.schema';
import { TenantUncheckedCreateWithoutExamsInputObjectSchema as TenantUncheckedCreateWithoutExamsInputObjectSchema } from './TenantUncheckedCreateWithoutExamsInput.schema';
import { TenantWhereInputObjectSchema as TenantWhereInputObjectSchema } from './TenantWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TenantUpdateWithoutExamsInputObjectSchema), z.lazy(() => TenantUncheckedUpdateWithoutExamsInputObjectSchema)]),
  create: z.union([z.lazy(() => TenantCreateWithoutExamsInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutExamsInputObjectSchema)]),
  where: z.lazy(() => TenantWhereInputObjectSchema).optional()
}).strict();
export const TenantUpsertWithoutExamsInputObjectSchema: z.ZodType<Prisma.TenantUpsertWithoutExamsInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUpsertWithoutExamsInput>;
export const TenantUpsertWithoutExamsInputObjectZodSchema = makeSchema();
