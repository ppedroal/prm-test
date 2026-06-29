import { Router } from 'express';
import { asyncHandler } from '../../../middlewares/asyncHandler';
import { validate } from '../../../middlewares/validate';
import { idParamSchema } from '../../../middlewares/idParamSchema';
import { deleteDeal } from './deleteDeal.service';

export const deleteDealRoute = Router();

deleteDealRoute.delete(
    '/:id',
    validate({ params: idParamSchema }),
    asyncHandler(async (req, res) => {
        const { id } = req.params as { id: string };
        await deleteDeal(id);
        res.json({ message: 'Deal deleted successfully' });
    }),
);
