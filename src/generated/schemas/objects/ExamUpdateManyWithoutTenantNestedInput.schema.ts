import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ExamCreateWithoutTenantInputObjectSchema as ExamCreateWithoutTenantInputObjectSchema } from './ExamCreateWithoutTenantInput.schema';
import { ExamUncheckedCreateWithoutTenantInputObjectSchema as ExamUncheckedCreateWithoutTenantInputObjectSchema } from './ExamUncheckedCreateWithoutTenantInput.schema';
import { ExamCreateOrConnectWithoutTenantInputObjectSchema as ExamCreateOrConnectWithoutTenantInputObjectSchema } from './ExamCreateOrConnectWithoutTenantInput.schema';
import { ExamUpsertWithWhereUniqueWithoutTenantInputObjectSchema as ExamUpsertWithWhereUniqueWithoutTenantInputObjectSchema } from './ExamUpsertWithWhereUniqueWithoutTenantInput.schema';
import { ExamCreateManyTenantInputEnvelopeObjectSchema as ExamCreateManyTenantInputEnvelopeObjectSchema } from './ExamCreateManyTenantInputEnvelope.schema';
import { ExamWhereUniqueInputObjectSchema as ExamWhereUniqueInputObjectSchema } from './ExamWhereUniqueInput.schema';
import { ExamUpdateWithWhereUniqueWithoutTenantInputObjectSchema as ExamUpdateWithWhereUniqueWithoutTenantInputObjectSchema } from './ExamUpdateWithWhereUniqueWithoutTenantInput.schema';
import { ExamUpdateManyWithWhereWithoutTenantInputObjectSchema as ExamUpdateManyWithWhereWithoutTenantInputObjectSchema } from './ExamUpdateManyWithWhereWithoutTenantInput.schema';
import { ExamScalarWhereInputObjectSchema as ExamScalarWhereInputObjectSchema } from './ExamScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ExamCreateWithoutTenantInputObjectSchema), z.lazy(() => ExamCreateWithoutTenantInputObjectSchema).array(), z.lazy(() => ExamUncheckedCreateWithoutTenantInputObjectSchema), z.lazy(() => ExamUncheckedCreateWithoutTenantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ExamCreateOrConnectWithoutTenantInputObjectSchema), z.lazy(() => ExamCreateOrConnectWithoutTenantInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ExamUpsertWithWhereUniqueWithoutTenantInputObjectSchema), z.lazy(() => ExamUpsertWithWhereUniqueWithoutTenantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ExamCreateManyTenantInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ExamWhereUniqueInputObjectSchema), z.lazy(() => ExamWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ExamWhereUniqueInputObjectSchema), z.lazy(() => ExamWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ExamWhereUniqueInputObjectSchema), z.lazy(() => ExamWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ExamWhereUniqueInputObjectSchema), z.lazy(() => ExamWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ExamUpdateWithWhereUniqueWithoutTenantInputObjectSchema), z.lazy(() => ExamUpdateWithWhereUniqueWithoutTenantInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ExamUpdateManyWithWhereWithoutTenantInputObjectSchema), z.lazy(() => ExamUpdateManyWithWhereWithoutTenantInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ExamScalarWhereInputObjectSchema), z.lazy(() => ExamScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ExamUpdateManyWithoutTenantNestedInputObjectSchema: z.ZodType<Prisma.ExamUpdateManyWithoutTenantNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ExamUpdateManyWithoutTenantNestedInput>;
export const ExamUpdateManyWithoutTenantNestedInputObjectZodSchema = makeSchema();
