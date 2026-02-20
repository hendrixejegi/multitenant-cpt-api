import * as z from 'zod';
import { RoleEnumSchema } from '../../enums/RoleEnum.schema';
// prettier-ignore
export const UserInputSchema = z.object({
    id: z.string(),
    tenant_id: z.string(),
    name: z.string(),
    email: z.string().optional().nullable(),
    password_hash: z.string().optional().nullable(),
    role: RoleEnumSchema,
    is_guest: z.boolean(),
    created_at: z.date(),
    attempts: z.array(z.unknown()),
    tenant: z.unknown()
}).strict();

export type UserInputType = z.infer<typeof UserInputSchema>;
