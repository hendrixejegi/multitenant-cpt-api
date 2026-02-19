import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ExamWhereInputObjectSchema as ExamWhereInputObjectSchema } from './ExamWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => ExamWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => ExamWhereInputObjectSchema).optional()
}).strict();
export const ExamScalarRelationFilterObjectSchema: z.ZodType<Prisma.ExamScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ExamScalarRelationFilter>;
export const ExamScalarRelationFilterObjectZodSchema = makeSchema();
