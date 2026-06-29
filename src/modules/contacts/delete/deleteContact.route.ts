import { Router } from 'express';
import { asyncHandler } from '../../../middlewares/asyncHandler';
import { validate } from '../../../middlewares/validate';
import { idParamSchema } from '../../../middlewares/idParamSchema';
import { deleteContact } from './deleteContact.service';

export const deleteContactRoute = Router();

deleteContactRoute.delete(
    '/:id',
    validate({ params: idParamSchema }),
    asyncHandler(async (req, res) => {
        const { id } = req.params as { id: string };
        await deleteContact(id);
        res.json({ message: 'Contact deleted successfully' });
    }),
);
