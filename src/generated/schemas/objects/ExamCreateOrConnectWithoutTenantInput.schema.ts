import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ExamWhereUniqueInputObjectSchema as ExamWhereUniqueInputObjectSchema } from './ExamWhereUniqueInput.schema';
import { ExamCreateWithoutTenantInputObjectSchema as ExamCreateWithoutTenantInputObjectSchema } from './ExamCreateWithoutTenantInput.schema';
import { ExamUncheckedCreateWithoutTenantInputObjectSchema as ExamUncheckedCreateWithoutTenantInputObjectSchema } from './ExamUncheckedCreateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ExamWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ExamCreateWithoutTenantInputObjectSchema), z.lazy(() => ExamUncheckedCreateWithoutTenantInputObjectSchema)])
}).strict();
export const ExamCreateOrConnectWithoutTenantInputObjectSchema: z.ZodType<Prisma.ExamCreateOrConnectWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.ExamCreateOrConnectWithoutTenantInput>;
export const ExamCreateOrConnectWithoutTenantInputObjectZodSchema = makeSchema();
