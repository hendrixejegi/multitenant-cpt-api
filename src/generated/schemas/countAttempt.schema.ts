import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { AttemptOrderByWithRelationInputObjectSchema as AttemptOrderByWithRelationInputObjectSchema } from './objects/AttemptOrderByWithRelationInput.schema';
import { AttemptWhereInputObjectSchema as AttemptWhereInputObjectSchema } from './objects/AttemptWhereInput.schema';
import { AttemptWhereUniqueInputObjectSchema as AttemptWhereUniqueInputObjectSchema } from './objects/AttemptWhereUniqueInput.schema';
import { AttemptCountAggregateInputObjectSchema as AttemptCountAggregateInputObjectSchema } from './objects/AttemptCountAggregateInput.schema';

export const AttemptCountSchema: z.ZodType<Prisma.AttemptCountArgs> = z.object({ orderBy: z.union([AttemptOrderByWithRelationInputObjectSchema, AttemptOrderByWithRelationInputObjectSchema.array()]).optional(), where: AttemptWhereInputObjectSchema.optional(), cursor: AttemptWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AttemptCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.AttemptCountArgs>;

export const AttemptCountZodSchema = z.object({ orderBy: z.union([AttemptOrderByWithRelationInputObjectSchema, AttemptOrderByWithRelationInputObjectSchema.array()]).optional(), where: AttemptWhereInputObjectSchema.optional(), cursor: AttemptWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AttemptCountAggregateInputObjectSchema ]).optional() }).strict();