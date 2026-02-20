import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ExamCreateWithoutAttemptsInputObjectSchema as ExamCreateWithoutAttemptsInputObjectSchema } from './ExamCreateWithoutAttemptsInput.schema';
import { ExamUncheckedCreateWithoutAttemptsInputObjectSchema as ExamUncheckedCreateWithoutAttemptsInputObjectSchema } from './ExamUncheckedCreateWithoutAttemptsInput.schema';
import { ExamCreateOrConnectWithoutAttemptsInputObjectSchema as ExamCreateOrConnectWithoutAttemptsInputObjectSchema } from './ExamCreateOrConnectWithoutAttemptsInput.schema';
import { ExamUpsertWithoutAttemptsInputObjectSchema as ExamUpsertWithoutAttemptsInputObjectSchema } from './ExamUpsertWithoutAttemptsInput.schema';
import { ExamWhereUniqueInputObjectSchema as ExamWhereUniqueInputObjectSchema } from './ExamWhereUniqueInput.schema';
import { ExamUpdateToOneWithWhereWithoutAttemptsInputObjectSchema as ExamUpdateToOneWithWhereWithoutAttemptsInputObjectSchema } from './ExamUpdateToOneWithWhereWithoutAttemptsInput.schema';
import { ExamUpdateWithoutAttemptsInputObjectSchema as ExamUpdateWithoutAttemptsInputObjectSchema } from './ExamUpdateWithoutAttemptsInput.schema';
import { ExamUncheckedUpdateWithoutAttemptsInputObjectSchema as ExamUncheckedUpdateWithoutAttemptsInputObjectSchema } from './ExamUncheckedUpdateWithoutAttemptsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ExamCreateWithoutAttemptsInputObjectSchema), z.lazy(() => ExamUncheckedCreateWithoutAttemptsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ExamCreateOrConnectWithoutAttemptsInputObjectSchema).optional(),
  upsert: z.lazy(() => ExamUpsertWithoutAttemptsInputObjectSchema).optional(),
  connect: z.lazy(() => ExamWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ExamUpdateToOneWithWhereWithoutAttemptsInputObjectSchema), z.lazy(() => ExamUpdateWithoutAttemptsInputObjectSchema), z.lazy(() => ExamUncheckedUpdateWithoutAttemptsInputObjectSchema)]).optional()
}).strict();
export const ExamUpdateOneRequiredWithoutAttemptsNestedInputObjectSchema: z.ZodType<Prisma.ExamUpdateOneRequiredWithoutAttemptsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ExamUpdateOneRequiredWithoutAttemptsNestedInput>;
export const ExamUpdateOneRequiredWithoutAttemptsNestedInputObjectZodSchema = makeSchema();
