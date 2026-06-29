import { Router } from 'express';
import { asyncHandler } from '../../../middlewares/asyncHandler';
import { validate } from '../../../middlewares/validate';
import { idParamSchema } from '../../../middlewares/idParamSchema';
import { getContactById } from './getContactById.service';

export const getContactByIdRoute = Router();

getContactByIdRoute.get(
    '/:id',
    validate({ params: idParamSchema }),
    asyncHandler(async (req, res) => {
        const { id } = req.params as { id: string };
        const contact = await getContactById(id);
        res.json(contact);
    }),
);
