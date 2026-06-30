import { z } from 'zod';

export const createNoteSchema = z.object({
    content: z.string().min(1),
    contactId: z.string().min(1, { error: 'Contact ID is required' }),
    dealId: z.string().min(1, { error: 'Deal ID is required' }),
});
