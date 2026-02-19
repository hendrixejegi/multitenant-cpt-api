import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { AttemptSelectObjectSchema as AttemptSelectObjectSchema } from './objects/AttemptSelect.schema';
import { AttemptIncludeObjectSchema as AttemptIncludeObjectSchema } from './objects/AttemptInclude.schema';
import { AttemptWhereUniqueInputObjectSchema as AttemptWhereUniqueInputObjectSchema } from './objects/AttemptWhereUniqueInput.schema';

export const AttemptDeleteOneSchema: z.ZodType<Prisma.AttemptDeleteArgs> = z.object({ select: AttemptSelectObjectSchema.optional(), include: AttemptIncludeObjectSchema.optional(), where: AttemptWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AttemptDeleteArgs>;

export const AttemptDeleteOneZodSchema = z.object({ select: AttemptSelectObjectSchema.optional(), include: AttemptIncludeObjectSchema.optional(), where: AttemptWhereUniqueInputObjectSchema }).strict();