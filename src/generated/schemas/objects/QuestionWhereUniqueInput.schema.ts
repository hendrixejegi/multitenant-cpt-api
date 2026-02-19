import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const QuestionWhereUniqueInputObjectSchema: z.ZodType<Prisma.QuestionWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.QuestionWhereUniqueInput>;
export const QuestionWhereUniqueInputObjectZodSchema = makeSchema();
