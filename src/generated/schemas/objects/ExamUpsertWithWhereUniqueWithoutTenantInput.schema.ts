import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ExamWhereUniqueInputObjectSchema as ExamWhereUniqueInputObjectSchema } from './ExamWhereUniqueInput.schema';
import { ExamUpdateWithoutTenantInputObjectSchema as ExamUpdateWithoutTenantInputObjectSchema } from './ExamUpdateWithoutTenantInput.schema';
import { ExamUncheckedUpdateWithoutTenantInputObjectSchema as ExamUncheckedUpdateWithoutTenantInputObjectSchema } from './ExamUncheckedUpdateWithoutTenantInput.schema';
import { ExamCreateWithoutTenantInputObjectSchema as ExamCreateWithoutTenantInputObjectSchema } from './ExamCreateWithoutTenantInput.schema';
import { ExamUncheckedCreateWithoutTenantInputObjectSchema as ExamUncheckedCreateWithoutTenantInputObjectSchema } from './ExamUncheckedCreateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ExamWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ExamUpdateWithoutTenantInputObjectSchema), z.lazy(() => ExamUncheckedUpdateWithoutTenantInputObjectSchema)]),
  create: z.union([z.lazy(() => ExamCreateWithoutTenantInputObjectSchema), z.lazy(() => ExamUncheckedCreateWithoutTenantInputObjectSchema)])
}).strict();
export const ExamUpsertWithWhereUniqueWithoutTenantInputObjectSchema: z.ZodType<Prisma.ExamUpsertWithWhereUniqueWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.ExamUpsertWithWhereUniqueWithoutTenantInput>;
export const ExamUpsertWithWhereUniqueWithoutTenantInputObjectZodSchema = makeSchema();
