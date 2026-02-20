import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { AttemptSelectObjectSchema as AttemptSelectObjectSchema } from './objects/AttemptSelect.schema';
import { AttemptIncludeObjectSchema as AttemptIncludeObjectSchema } from './objects/AttemptInclude.schema';
import { AttemptWhereUniqueInputObjectSchema as AttemptWhereUniqueInputObjectSchema } from './objects/AttemptWhereUniqueInput.schema';
import { AttemptCreateInputObjectSchema as AttemptCreateInputObjectSchema } from './objects/AttemptCreateInput.schema';
import { AttemptUncheckedCreateInputObjectSchema as AttemptUncheckedCreateInputObjectSchema } from './objects/AttemptUncheckedCreateInput.schema';
import { AttemptUpdateInputObjectSchema as AttemptUpdateInputObjectSchema } from './objects/AttemptUpdateInput.schema';
import { AttemptUncheckedUpdateInputObjectSchema as AttemptUncheckedUpdateInputObjectSchema } from './objects/AttemptUncheckedUpdateInput.schema';

export const AttemptUpsertOneSchema: z.ZodType<Prisma.AttemptUpsertArgs> = z.object({ select: AttemptSelectObjectSchema.optional(), include: AttemptIncludeObjectSchema.optional(), where: AttemptWhereUniqueInputObjectSchema, create: z.union([ AttemptCreateInputObjectSchema, AttemptUncheckedCreateInputObjectSchema ]), update: z.union([ AttemptUpdateInputObjectSchema, AttemptUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.AttemptUpsertArgs>;

export const AttemptUpsertOneZodSchema = z.object({ select: AttemptSelectObjectSchema.optional(), include: AttemptIncludeObjectSchema.optional(), where: AttemptWhereUniqueInputObjectSchema, create: z.union([ AttemptCreateInputObjectSchema, AttemptUncheckedCreateInputObjectSchema ]), update: z.union([ AttemptUpdateInputObjectSchema, AttemptUncheckedUpdateInputObjectSchema ]) }).strict();