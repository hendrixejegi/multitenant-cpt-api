import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  set: z.string().array()
}).strict();
export const QuestionCreateoptionsInputObjectSchema: z.ZodType<Prisma.QuestionCreateoptionsInput> = makeSchema() as unknown as z.ZodType<Prisma.QuestionCreateoptionsInput>;
export const QuestionCreateoptionsInputObjectZodSchema = makeSchema();
