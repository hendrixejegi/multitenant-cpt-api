import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TenantWhereInputObjectSchema as TenantWhereInputObjectSchema } from './TenantWhereInput.schema';
import { TenantUpdateWithoutExamsInputObjectSchema as TenantUpdateWithoutExamsInputObjectSchema } from './TenantUpdateWithoutExamsInput.schema';
import { TenantUncheckedUpdateWithoutExamsInputObjectSchema as TenantUncheckedUpdateWithoutExamsInputObjectSchema } from './TenantUncheckedUpdateWithoutExamsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TenantUpdateWithoutExamsInputObjectSchema), z.lazy(() => TenantUncheckedUpdateWithoutExamsInputObjectSchema)])
}).strict();
export const TenantUpdateToOneWithWhereWithoutExamsInputObjectSchema: z.ZodType<Prisma.TenantUpdateToOneWithWhereWithoutExamsInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUpdateToOneWithWhereWithoutExamsInput>;
export const TenantUpdateToOneWithWhereWithoutExamsInputObjectZodSchema = makeSchema();
