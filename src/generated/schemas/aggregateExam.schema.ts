import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { ExamOrderByWithRelationInputObjectSchema as ExamOrderByWithRelationInputObjectSchema } from './objects/ExamOrderByWithRelationInput.schema';
import { ExamWhereInputObjectSchema as ExamWhereInputObjectSchema } from './objects/ExamWhereInput.schema';
import { ExamWhereUniqueInputObjectSchema as ExamWhereUniqueInputObjectSchema } from './objects/ExamWhereUniqueInput.schema';
import { ExamCountAggregateInputObjectSchema as ExamCountAggregateInputObjectSchema } from './objects/ExamCountAggregateInput.schema';
import { ExamMinAggregateInputObjectSchema as ExamMinAggregateInputObjectSchema } from './objects/ExamMinAggregateInput.schema';
import { ExamMaxAggregateInputObjectSchema as ExamMaxAggregateInputObjectSchema } from './objects/ExamMaxAggregateInput.schema';
import { ExamAvgAggregateInputObjectSchema as ExamAvgAggregateInputObjectSchema } from './objects/ExamAvgAggregateInput.schema';
import { ExamSumAggregateInputObjectSchema as ExamSumAggregateInputObjectSchema } from './objects/ExamSumAggregateInput.schema';

export const ExamAggregateSchema: z.ZodType<Prisma.ExamAggregateArgs> = z.object({ orderBy: z.union([ExamOrderByWithRelationInputObjectSchema, ExamOrderByWithRelationInputObjectSchema.array()]).optional(), where: ExamWhereInputObjectSchema.optional(), cursor: ExamWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ExamCountAggregateInputObjectSchema ]).optional(), _min: ExamMinAggregateInputObjectSchema.optional(), _max: ExamMaxAggregateInputObjectSchema.optional(), _avg: ExamAvgAggregateInputObjectSchema.optional(), _sum: ExamSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ExamAggregateArgs>;

export const ExamAggregateZodSchema = z.object({ orderBy: z.union([ExamOrderByWithRelationInputObjectSchema, ExamOrderByWithRelationInputObjectSchema.array()]).optional(), where: ExamWhereInputObjectSchema.optional(), cursor: ExamWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ExamCountAggregateInputObjectSchema ]).optional(), _min: ExamMinAggregateInputObjectSchema.optional(), _max: ExamMaxAggregateInputObjectSchema.optional(), _avg: ExamAvgAggregateInputObjectSchema.optional(), _sum: ExamSumAggregateInputObjectSchema.optional() }).strict();