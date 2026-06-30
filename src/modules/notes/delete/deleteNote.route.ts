import { Router } from 'express';
import { validate } from '../../../middlewares/validate';
import { deleteNote } from './deleteNote.service';
import { asyncHandler } from '../../../middlewares/asyncHandler';
import { idParamSchema } from '../../../middlewares/idParamSchema';

export const deleteNoteRoute = Router();

deleteNoteRoute.delete(
    '/:id',
    validate({ params: idParamSchema }),
    asyncHandler(async (req, res) => {
        const { id } = req.params as { id: string };
        await deleteNote(id);
        res.json({ message: 'Note deleted successfully' });
    }),
);
