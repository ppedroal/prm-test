import { z } from 'zod';

export const createContactSchema = z
    .object({
        name: z.string().min(1, { error: 'Name is required' }),
        email: z.email({ error: 'Invalid email address' }),
        phone: z.string().optional(),
        companyId: z.string().optional(),
    })
    .refine((data) => !data.companyId || data.companyId.length > 0, {
        message: 'Company ID is required',
        path: ['companyId'],
    });
