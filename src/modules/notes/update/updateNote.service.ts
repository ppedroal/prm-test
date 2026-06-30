import { z } from 'zod';
import { prisma } from '../../../lib/prisma';
import { getNoteById } from '../getById/getNoteById.service';
import { NotFoundError } from '../../../errors/AppError';
import { updateNoteSchema } from './updateNote.schema';

type UpdateNoteInput = z.infer<typeof updateNoteSchema>;

export async function updateNote(id: string, data: UpdateNoteInput) {
    const note = await getNoteById(id);
    if (!note) {
        throw new NotFoundError('Note');
    }
    return prisma.note.update({ where: { id }, data });
}
