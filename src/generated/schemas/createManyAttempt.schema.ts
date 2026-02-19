import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { AttemptCreateManyInputObjectSchema as AttemptCreateManyInputObjectSchema } from './objects/AttemptCreateManyInput.schema';

export const AttemptCreateManySchema: z.ZodType<Prisma.AttemptCreateManyArgs> = z.object({ data: z.union([ AttemptCreateManyInputObjectSchema, z.array(AttemptCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AttemptCreateManyArgs>;

export const AttemptCreateManyZodSchema = z.object({ data: z.union([ AttemptCreateManyInputObjectSchema, z.array(AttemptCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();