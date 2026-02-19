import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { AttemptSelectObjectSchema as AttemptSelectObjectSchema } from './objects/AttemptSelect.schema';
import { AttemptIncludeObjectSchema as AttemptIncludeObjectSchema } from './objects/AttemptInclude.schema';
import { AttemptUpdateInputObjectSchema as AttemptUpdateInputObjectSchema } from './objects/AttemptUpdateInput.schema';
import { AttemptUncheckedUpdateInputObjectSchema as AttemptUncheckedUpdateInputObjectSchema } from './objects/AttemptUncheckedUpdateInput.schema';
import { AttemptWhereUniqueInputObjectSchema as AttemptWhereUniqueInputObjectSchema } from './objects/AttemptWhereUniqueInput.schema';

export const AttemptUpdateOneSchema: z.ZodType<Prisma.AttemptUpdateArgs> = z.object({ select: AttemptSelectObjectSchema.optional(), include: AttemptIncludeObjectSchema.optional(), data: z.union([AttemptUpdateInputObjectSchema, AttemptUncheckedUpdateInputObjectSchema]), where: AttemptWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AttemptUpdateArgs>;

export const AttemptUpdateOneZodSchema = z.object({ select: AttemptSelectObjectSchema.optional(), include: AttemptIncludeObjectSchema.optional(), data: z.union([AttemptUpdateInputObjectSchema, AttemptUncheckedUpdateInputObjectSchema]), where: AttemptWhereUniqueInputObjectSchema }).strict();