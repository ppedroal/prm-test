import { prisma } from '../../../lib/prisma';

export async function getContacts() {
    return prisma.contact.findMany({
        orderBy: {
            createdAt: 'desc',
        },
    });
}
