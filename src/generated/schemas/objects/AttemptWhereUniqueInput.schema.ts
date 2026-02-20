import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const AttemptWhereUniqueInputObjectSchema: z.ZodType<Prisma.AttemptWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.AttemptWhereUniqueInput>;
export const AttemptWhereUniqueInputObjectZodSchema = makeSchema();
