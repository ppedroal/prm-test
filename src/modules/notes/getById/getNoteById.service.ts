import { prisma } from '../../../lib/prisma';

export async function getNoteById(id: string) {
    return prisma.note.findUnique({
        where: { id },
        include: {
            contact: true,
            deal: true,
        },
    });
}
