import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ExamCreateWithoutAttemptsInputObjectSchema as ExamCreateWithoutAttemptsInputObjectSchema } from './ExamCreateWithoutAttemptsInput.schema';
import { ExamUncheckedCreateWithoutAttemptsInputObjectSchema as ExamUncheckedCreateWithoutAttemptsInputObjectSchema } from './ExamUncheckedCreateWithoutAttemptsInput.schema';
import { ExamCreateOrConnectWithoutAttemptsInputObjectSchema as ExamCreateOrConnectWithoutAttemptsInputObjectSchema } from './ExamCreateOrConnectWithoutAttemptsInput.schema';
import { ExamWhereUniqueInputObjectSchema as ExamWhereUniqueInputObjectSchema } from './ExamWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ExamCreateWithoutAttemptsInputObjectSchema), z.lazy(() => ExamUncheckedCreateWithoutAttemptsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ExamCreateOrConnectWithoutAttemptsInputObjectSchema).optional(),
  connect: z.lazy(() => ExamWhereUniqueInputObjectSchema).optional()
}).strict();
export const ExamCreateNestedOneWithoutAttemptsInputObjectSchema: z.ZodType<Prisma.ExamCreateNestedOneWithoutAttemptsInput> = makeSchema() as unknown as z.ZodType<Prisma.ExamCreateNestedOneWithoutAttemptsInput>;
export const ExamCreateNestedOneWithoutAttemptsInputObjectZodSchema = makeSchema();
