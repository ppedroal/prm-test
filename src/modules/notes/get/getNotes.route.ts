import { Router } from 'express';
import { asyncHandler } from '../../../middlewares/asyncHandler';
import { getNotes } from './getNotes.service';

export const getNotesRoute = Router();

getNotesRoute.get(
    '/',
    asyncHandler(async (_req, res) => {
        const notes = await getNotes();
        res.json(notes);
    }),
);
