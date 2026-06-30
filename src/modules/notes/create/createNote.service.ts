import { z } from 'zod';
import { prisma } from '../../../lib/prisma';
import { createNoteSchema } from './createNote.schema';

type CreateNoteInput = z.infer<typeof createNoteSchema>;

export async function createNote(data: CreateNoteInput) {
    return prisma.note.create({ data });
}
