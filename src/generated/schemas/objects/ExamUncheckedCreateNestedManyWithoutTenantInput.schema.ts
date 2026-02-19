import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ExamCreateWithoutTenantInputObjectSchema as ExamCreateWithoutTenantInputObjectSchema } from './ExamCreateWithoutTenantInput.schema';
import { ExamUncheckedCreateWithoutTenantInputObjectSchema as ExamUncheckedCreateWithoutTenantInputObjectSchema } from './ExamUncheckedCreateWithoutTenantInput.schema';
import { ExamCreateOrConnectWithoutTenantInputObjectSchema as ExamCreateOrConnectWithoutTenantInputObjectSchema } from './ExamCreateOrConnectWithoutTenantInput.schema';
import { ExamCreateManyTenantInputEnvelopeObjectSchema as ExamCreateManyTenantInputEnvelopeObjectSchema } from './ExamCreateManyTenantInputEnvelope.schema';
import { ExamWhereUniqueInputObjectSchema as ExamWhereUniqueInputObjectSchema } from './ExamWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ExamCreateWithoutTenantInputObjectSchema), z.lazy(() => ExamCreateWithoutTenantInputObjectSchema).array(), z.lazy(() => ExamUncheckedCreateWithoutTenantInputObjectSchema), z.lazy(() => ExamUncheckedCreateWithoutTenantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ExamCreateOrConnectWithoutTenantInputObjectSchema), z.lazy(() => ExamCreateOrConnectWithoutTenantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ExamCreateManyTenantInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ExamWhereUniqueInputObjectSchema), z.lazy(() => ExamWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ExamUncheckedCreateNestedManyWithoutTenantInputObjectSchema: z.ZodType<Prisma.ExamUncheckedCreateNestedManyWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.ExamUncheckedCreateNestedManyWithoutTenantInput>;
export const ExamUncheckedCreateNestedManyWithoutTenantInputObjectZodSchema = makeSchema();
