import { Router } from 'express';
import { validate } from '../../../middlewares/validate';
import { createNote } from './createNote.service';
import { asyncHandler } from '../../../middlewares/asyncHandler';
import { createNoteSchema } from './createNote.schema';

export const createNoteRoute = Router();

createNoteRoute.post(
    '/',
    validate({ body: createNoteSchema }),
    asyncHandler(async (req, res) => {
        const note = await createNote(req.body);
        res.status(201).json(note);
    }),
);
