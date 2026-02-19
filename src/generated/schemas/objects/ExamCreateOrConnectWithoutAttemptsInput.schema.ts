import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ExamWhereUniqueInputObjectSchema as ExamWhereUniqueInputObjectSchema } from './ExamWhereUniqueInput.schema';
import { ExamCreateWithoutAttemptsInputObjectSchema as ExamCreateWithoutAttemptsInputObjectSchema } from './ExamCreateWithoutAttemptsInput.schema';
import { ExamUncheckedCreateWithoutAttemptsInputObjectSchema as ExamUncheckedCreateWithoutAttemptsInputObjectSchema } from './ExamUncheckedCreateWithoutAttemptsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ExamWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ExamCreateWithoutAttemptsInputObjectSchema), z.lazy(() => ExamUncheckedCreateWithoutAttemptsInputObjectSchema)])
}).strict();
export const ExamCreateOrConnectWithoutAttemptsInputObjectSchema: z.ZodType<Prisma.ExamCreateOrConnectWithoutAttemptsInput> = makeSchema() as unknown as z.ZodType<Prisma.ExamCreateOrConnectWithoutAttemptsInput>;
export const ExamCreateOrConnectWithoutAttemptsInputObjectZodSchema = makeSchema();
