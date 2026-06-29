import { Router } from 'express';
import { asyncHandler } from '../../../middlewares/asyncHandler';
import { validate } from '../../../middlewares/validate';
import { createContactSchema } from './createContact.schema';
import { createContact } from './createContact.service';

export const createContactRoute = Router();

createContactRoute.post(
    '/',
    validate({ body: createContactSchema }),
    asyncHandler(async (req, res) => {
        const contact = await createContact(req.body);
        res.status(201).json(contact);
    }),
);
