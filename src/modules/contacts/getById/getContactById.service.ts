import { NotFoundError } from '../../../errors/AppError';
import { prisma } from '../../../lib/prisma';

export async function getContactById(id: string) {
    const contact = await prisma.contact.findUnique({
        where: { id },
        include: {
            company: true,
            deals: true,
            tasks: true,
            notes: true,
        },
    });
    if (!contact) {
        throw new NotFoundError('Contact');
    }
    return contact;
}
