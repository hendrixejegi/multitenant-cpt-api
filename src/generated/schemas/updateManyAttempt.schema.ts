import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { AttemptUpdateManyMutationInputObjectSchema as AttemptUpdateManyMutationInputObjectSchema } from './objects/AttemptUpdateManyMutationInput.schema';
import { AttemptWhereInputObjectSchema as AttemptWhereInputObjectSchema } from './objects/AttemptWhereInput.schema';

export const AttemptUpdateManySchema: z.ZodType<Prisma.AttemptUpdateManyArgs> = z.object({ data: AttemptUpdateManyMutationInputObjectSchema, where: AttemptWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AttemptUpdateManyArgs>;

export const AttemptUpdateManyZodSchema = z.object({ data: AttemptUpdateManyMutationInputObjectSchema, where: AttemptWhereInputObjectSchema.optional() }).strict();