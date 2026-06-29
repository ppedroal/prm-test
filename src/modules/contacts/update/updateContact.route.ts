import { Router } from 'express';
import { asyncHandler } from '../../../middlewares/asyncHandler';
import { validate } from '../../../middlewares/validate';
import { idParamSchema } from '../../../middlewares/idParamSchema';
import { updateContactSchema } from './updateContact.schema';
import { updateContact } from './updateContact.service';

export const updateContactRoute = Router();

updateContactRoute.put(
    '/:id',
    validate({ params: idParamSchema, body: updateContactSchema }),
    asyncHandler(async (req, res) => {
        const { id } = req.params as { id: string };
        const contact = await updateContact(id, req.body);
        res.json(contact);
    }),
);
