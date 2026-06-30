import { Router } from 'express';
import { asyncHandler } from '../../../middlewares/asyncHandler';
import { validate } from '../../../middlewares/validate';
import { idParamSchema } from '../../../middlewares/idParamSchema';
import { getNoteById } from './getNoteById.service';

export const getNoteByIdRoute = Router();

getNoteByIdRoute.get(
    '/:id',
    validate({ params: idParamSchema }),
    asyncHandler(async (req, res) => {
        const { id } = req.params as { id: string };
        const note = await getNoteById(id);
        res.json(note);
    }),
);
