import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ExamWhereInputObjectSchema as ExamWhereInputObjectSchema } from './ExamWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ExamWhereInputObjectSchema).optional(),
  some: z.lazy(() => ExamWhereInputObjectSchema).optional(),
  none: z.lazy(() => ExamWhereInputObjectSchema).optional()
}).strict();
export const ExamListRelationFilterObjectSchema: z.ZodType<Prisma.ExamListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ExamListRelationFilter>;
export const ExamListRelationFilterObjectZodSchema = makeSchema();
