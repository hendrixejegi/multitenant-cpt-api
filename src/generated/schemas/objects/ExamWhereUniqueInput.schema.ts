import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const ExamWhereUniqueInputObjectSchema: z.ZodType<Prisma.ExamWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ExamWhereUniqueInput>;
export const ExamWhereUniqueInputObjectZodSchema = makeSchema();
