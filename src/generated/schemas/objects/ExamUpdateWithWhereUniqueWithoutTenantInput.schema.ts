import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ExamWhereUniqueInputObjectSchema as ExamWhereUniqueInputObjectSchema } from './ExamWhereUniqueInput.schema';
import { ExamUpdateWithoutTenantInputObjectSchema as ExamUpdateWithoutTenantInputObjectSchema } from './ExamUpdateWithoutTenantInput.schema';
import { ExamUncheckedUpdateWithoutTenantInputObjectSchema as ExamUncheckedUpdateWithoutTenantInputObjectSchema } from './ExamUncheckedUpdateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ExamWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ExamUpdateWithoutTenantInputObjectSchema), z.lazy(() => ExamUncheckedUpdateWithoutTenantInputObjectSchema)])
}).strict();
export const ExamUpdateWithWhereUniqueWithoutTenantInputObjectSchema: z.ZodType<Prisma.ExamUpdateWithWhereUniqueWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.ExamUpdateWithWhereUniqueWithoutTenantInput>;
export const ExamUpdateWithWhereUniqueWithoutTenantInputObjectZodSchema = makeSchema();
