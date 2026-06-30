import { z } from 'zod';

export const updateNoteSchema = z.object({
    content: z.string().min(1).optional(),
    contactId: z.string().optional(),
    dealId: z.string().optional(),
});
