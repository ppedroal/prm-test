import { prisma } from '../../../lib/prisma';

export async function getNotes() {
    return prisma.note.findMany({
        orderBy: {
            createdAt: 'desc',
        },
    });
}
