import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ExamWhereInputObjectSchema as ExamWhereInputObjectSchema } from './ExamWhereInput.schema';
import { ExamUpdateWithoutAttemptsInputObjectSchema as ExamUpdateWithoutAttemptsInputObjectSchema } from './ExamUpdateWithoutAttemptsInput.schema';
import { ExamUncheckedUpdateWithoutAttemptsInputObjectSchema as ExamUncheckedUpdateWithoutAttemptsInputObjectSchema } from './ExamUncheckedUpdateWithoutAttemptsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ExamWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ExamUpdateWithoutAttemptsInputObjectSchema), z.lazy(() => ExamUncheckedUpdateWithoutAttemptsInputObjectSchema)])
}).strict();
export const ExamUpdateToOneWithWhereWithoutAttemptsInputObjectSchema: z.ZodType<Prisma.ExamUpdateToOneWithWhereWithoutAttemptsInput> = makeSchema() as unknown as z.ZodType<Prisma.ExamUpdateToOneWithWhereWithoutAttemptsInput>;
export const ExamUpdateToOneWithWhereWithoutAttemptsInputObjectZodSchema = makeSchema();
