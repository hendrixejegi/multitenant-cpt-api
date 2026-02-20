import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { QuestionWhereInputObjectSchema as QuestionWhereInputObjectSchema } from './QuestionWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => QuestionWhereInputObjectSchema).optional(),
  some: z.lazy(() => QuestionWhereInputObjectSchema).optional(),
  none: z.lazy(() => QuestionWhereInputObjectSchema).optional()
}).strict();
export const QuestionListRelationFilterObjectSchema: z.ZodType<Prisma.QuestionListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.QuestionListRelationFilter>;
export const QuestionListRelationFilterObjectZodSchema = makeSchema();
