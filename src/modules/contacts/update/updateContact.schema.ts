import { z } from 'zod';

export const updateContactSchema = z.object({
    name: z.string().min(1).optional(),
    email: z.email({ error: 'Invalid email address' }).optional(),
    phone: z.string().optional(),
    companyId: z.string().min(1, { error: 'Company ID is required' }).optional(),
});
