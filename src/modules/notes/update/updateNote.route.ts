import { Router } from 'express';
import { validate } from '../../../middlewares/validate';
import { updateNote } from './updateNote.service';
import { asyncHandler } from '../../../middlewares/asyncHandler';
import { idParamSchema } from '../../../middlewares/idParamSchema';
import { updateNoteSchema } from './updateNote.schema';

export const updateNoteRoute = Router();

updateNoteRoute.put(
    '/:id',
    validate({ params: idParamSchema, body: updateNoteSchema }),
    asyncHandler(async (req, res) => {
        const { id } = req.params as { id: string };
        const note = await updateNote(id, req.body);
        res.json(note);
    }),
);
