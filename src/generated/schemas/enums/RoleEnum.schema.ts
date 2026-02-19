import * as z from 'zod';

export const RoleEnumSchema = z.enum(['ADMIN', 'STUDENT'])

export type RoleEnum = z.infer<typeof RoleEnumSchema>;