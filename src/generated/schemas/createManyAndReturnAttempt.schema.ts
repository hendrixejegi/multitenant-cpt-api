import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { AttemptSelectObjectSchema as AttemptSelectObjectSchema } from './objects/AttemptSelect.schema';
import { AttemptCreateManyInputObjectSchema as AttemptCreateManyInputObjectSchema } from './objects/AttemptCreateManyInput.schema';

export const AttemptCreateManyAndReturnSchema: z.ZodType<Prisma.AttemptCreateManyAndReturnArgs> = z.object({ select: AttemptSelectObjectSchema.optional(), data: z.union([ AttemptCreateManyInputObjectSchema, z.array(AttemptCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AttemptCreateManyAndReturnArgs>;

export const AttemptCreateManyAndReturnZodSchema = z.object({ select: AttemptSelectObjectSchema.optional(), data: z.union([ AttemptCreateManyInputObjectSchema, z.array(AttemptCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();