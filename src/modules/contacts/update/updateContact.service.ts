import { NotFoundError } from '../../../errors/AppError';
import { prisma } from '../../../lib/prisma';
import { getContactById } from '../getById/getContactById.service';

type UpdateContactInput = {
    name?: string;
    email?: string;
    phone?: string;
    companyId?: string;
};

export async function updateContact(id: string, data: UpdateContactInput) {
    const contact = await getContactById(id);
    if (!contact) {
        throw new NotFoundError('Contact');
    }
    return prisma.contact.update({ where: { id }, data });
}
