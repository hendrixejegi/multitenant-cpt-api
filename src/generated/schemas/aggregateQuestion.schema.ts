import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { QuestionOrderByWithRelationInputObjectSchema as QuestionOrderByWithRelationInputObjectSchema } from './objects/QuestionOrderByWithRelationInput.schema';
import { QuestionWhereInputObjectSchema as QuestionWhereInputObjectSchema } from './objects/QuestionWhereInput.schema';
import { QuestionWhereUniqueInputObjectSchema as QuestionWhereUniqueInputObjectSchema } from './objects/QuestionWhereUniqueInput.schema';
import { QuestionCountAggregateInputObjectSchema as QuestionCountAggregateInputObjectSchema } from './objects/QuestionCountAggregateInput.schema';
import { QuestionMinAggregateInputObjectSchema as QuestionMinAggregateInputObjectSchema } from './objects/QuestionMinAggregateInput.schema';
import { QuestionMaxAggregateInputObjectSchema as QuestionMaxAggregateInputObjectSchema } from './objects/QuestionMaxAggregateInput.schema';

export const QuestionAggregateSchema: z.ZodType<Prisma.QuestionAggregateArgs> = z.object({ orderBy: z.union([QuestionOrderByWithRelationInputObjectSchema, QuestionOrderByWithRelationInputObjectSchema.array()]).optional(), where: QuestionWhereInputObjectSchema.optional(), cursor: QuestionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), QuestionCountAggregateInputObjectSchema ]).optional(), _min: QuestionMinAggregateInputObjectSchema.optional(), _max: QuestionMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.QuestionAggregateArgs>;

export const QuestionAggregateZodSchema = z.object({ orderBy: z.union([QuestionOrderByWithRelationInputObjectSchema, QuestionOrderByWithRelationInputObjectSchema.array()]).optional(), where: QuestionWhereInputObjectSchema.optional(), cursor: QuestionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), QuestionCountAggregateInputObjectSchema ]).optional(), _min: QuestionMinAggregateInputObjectSchema.optional(), _max: QuestionMaxAggregateInputObjectSchema.optional() }).strict();