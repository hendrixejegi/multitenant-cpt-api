import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { AttemptSelectObjectSchema as AttemptSelectObjectSchema } from './objects/AttemptSelect.schema';
import { AttemptIncludeObjectSchema as AttemptIncludeObjectSchema } from './objects/AttemptInclude.schema';
import { AttemptWhereUniqueInputObjectSchema as AttemptWhereUniqueInputObjectSchema } from './objects/AttemptWhereUniqueInput.schema';

export const AttemptFindUniqueOrThrowSchema: z.ZodType<Prisma.AttemptFindUniqueOrThrowArgs> = z.object({ select: AttemptSelectObjectSchema.optional(), include: AttemptIncludeObjectSchema.optional(), where: AttemptWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AttemptFindUniqueOrThrowArgs>;

export const AttemptFindUniqueOrThrowZodSchema = z.object({ select: AttemptSelectObjectSchema.optional(), include: AttemptIncludeObjectSchema.optional(), where: AttemptWhereUniqueInputObjectSchema }).strict();