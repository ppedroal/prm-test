import { Router } from 'express';
import { asyncHandler } from '../../../middlewares/asyncHandler';
import { getContacts } from './getContacts.service';

export const getContactsRoute = Router();

getContactsRoute.get(
    '/',
    asyncHandler(async (_req, res) => {
        const contacts = await getContacts();
        res.json(contacts);
    }),
);
