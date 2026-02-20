import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { QuestionOrderByWithRelationInputObjectSchema as QuestionOrderByWithRelationInputObjectSchema } from './objects/QuestionOrderByWithRelationInput.schema';
import { QuestionWhereInputObjectSchema as QuestionWhereInputObjectSchema } from './objects/QuestionWhereInput.schema';
import { QuestionWhereUniqueInputObjectSchema as QuestionWhereUniqueInputObjectSchema } from './objects/QuestionWhereUniqueInput.schema';
import { QuestionCountAggregateInputObjectSchema as QuestionCountAggregateInputObjectSchema } from './objects/QuestionCountAggregateInput.schema';

export const QuestionCountSchema: z.ZodType<Prisma.QuestionCountArgs> = z.object({ orderBy: z.union([QuestionOrderByWithRelationInputObjectSchema, QuestionOrderByWithRelationInputObjectSchema.array()]).optional(), where: QuestionWhereInputObjectSchema.optional(), cursor: QuestionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), QuestionCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.QuestionCountArgs>;

export const QuestionCountZodSchema = z.object({ orderBy: z.union([QuestionOrderByWithRelationInputObjectSchema, QuestionOrderByWithRelationInputObjectSchema.array()]).optional(), where: QuestionWhereInputObjectSchema.optional(), cursor: QuestionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), QuestionCountAggregateInputObjectSchema ]).optional() }).strict();