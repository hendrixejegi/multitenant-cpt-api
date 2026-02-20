import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { AttemptSelectObjectSchema as AttemptSelectObjectSchema } from './objects/AttemptSelect.schema';
import { AttemptUpdateManyMutationInputObjectSchema as AttemptUpdateManyMutationInputObjectSchema } from './objects/AttemptUpdateManyMutationInput.schema';
import { AttemptWhereInputObjectSchema as AttemptWhereInputObjectSchema } from './objects/AttemptWhereInput.schema';

export const AttemptUpdateManyAndReturnSchema: z.ZodType<Prisma.AttemptUpdateManyAndReturnArgs> = z.object({ select: AttemptSelectObjectSchema.optional(), data: AttemptUpdateManyMutationInputObjectSchema, where: AttemptWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AttemptUpdateManyAndReturnArgs>;

export const AttemptUpdateManyAndReturnZodSchema = z.object({ select: AttemptSelectObjectSchema.optional(), data: AttemptUpdateManyMutationInputObjectSchema, where: AttemptWhereInputObjectSchema.optional() }).strict();