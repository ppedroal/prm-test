import { Router } from 'express';
import { getNotesRoute } from './get/getNotes.route';
import { createNoteRoute } from './create/createNote.route';
import { deleteNoteRoute } from './delete/deleteNote.route';
import { updateNoteRoute } from './update/updateNote.route';
import { getNoteByIdRoute } from './getById/getNoteById.route';

export const notesRouter = Router();

notesRouter.use('/', createNoteRoute);
notesRouter.use('/', getNotesRoute);
notesRouter.use('/', getNoteByIdRoute);
notesRouter.use('/', updateNoteRoute);
notesRouter.use('/', deleteNoteRoute);
