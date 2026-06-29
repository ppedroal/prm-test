import { z } from 'zod';

export const updateContactSchema = z
    .object({
        name: z.string().min(1).optional(),
        email: z.email({ error: 'Invalid email address' }).optional(),
        phone: z.string().optional(),
        companyId: z.string().optional(),
    })
    .refine((data) => !data.companyId || data.companyId.length > 0, {
        message: 'Company ID is required',
        path: ['companyId'],
    });
