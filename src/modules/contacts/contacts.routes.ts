import { Router } from 'express';
import { createContactRoute } from './create/createContact.route';
import { getContactsRoute } from './get/getContacts.route';
import { updateContactRoute } from './update/updateContact.route';
import { deleteContactRoute } from './delete/deleteContact.route';
import { getContactByIdRoute } from './getById/getContactById.route';

export const contactsRouter = Router();

contactsRouter.use('/', createContactRoute);
contactsRouter.use('/', getContactsRoute);
contactsRouter.use('/', getContactByIdRoute);
contactsRouter.use('/', updateContactRoute);
contactsRouter.use('/', deleteContactRoute);
