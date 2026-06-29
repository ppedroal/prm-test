import { NotFoundError } from '../../../errors/AppError';
import { prisma } from '../../../lib/prisma';
import { getContactById } from '../getById/getContactById.service';

export async function deleteContact(id: string) {
    const contact = await getContactById(id);
    if (!contact) {
        throw new NotFoundError('Contact');
    }
    return prisma.contact.delete({ where: { id } });
}
