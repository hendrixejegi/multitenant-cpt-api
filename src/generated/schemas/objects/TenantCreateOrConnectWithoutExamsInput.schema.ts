import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TenantWhereUniqueInputObjectSchema as TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantCreateWithoutExamsInputObjectSchema as TenantCreateWithoutExamsInputObjectSchema } from './TenantCreateWithoutExamsInput.schema';
import { TenantUncheckedCreateWithoutExamsInputObjectSchema as TenantUncheckedCreateWithoutExamsInputObjectSchema } from './TenantUncheckedCreateWithoutExamsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TenantCreateWithoutExamsInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutExamsInputObjectSchema)])
}).strict();
export const TenantCreateOrConnectWithoutExamsInputObjectSchema: z.ZodType<Prisma.TenantCreateOrConnectWithoutExamsInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantCreateOrConnectWithoutExamsInput>;
export const TenantCreateOrConnectWithoutExamsInputObjectZodSchema = makeSchema();
