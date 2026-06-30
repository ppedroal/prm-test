import { NotFoundError } from '../../../errors/AppError';
import { prisma } from '../../../lib/prisma';
import { getNoteById } from '../getById/getNoteById.service';

export async function deleteNote(id: string) {
    const note = await getNoteById(id);
    if (!note) {
        throw new NotFoundError('Note');
    }
    return prisma.note.delete({ where: { id } });
}
