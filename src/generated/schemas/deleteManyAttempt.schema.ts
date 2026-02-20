import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { AttemptWhereInputObjectSchema as AttemptWhereInputObjectSchema } from './objects/AttemptWhereInput.schema';

export const AttemptDeleteManySchema: z.ZodType<Prisma.AttemptDeleteManyArgs> = z.object({ where: AttemptWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AttemptDeleteManyArgs>;

export const AttemptDeleteManyZodSchema = z.object({ where: AttemptWhereInputObjectSchema.optional() }).strict();