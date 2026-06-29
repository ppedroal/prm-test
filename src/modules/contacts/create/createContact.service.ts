import { prisma } from '../../../lib/prisma';

type CreateContactInput = {
    name: string;
    email: string;
    phone?: string;
    companyId?: string;
};

export async function createContact(data: CreateContactInput) {
    return prisma.contact.create({ data });
}
