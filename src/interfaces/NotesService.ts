import { Note } from "./Note";

export interface NotesService {
    createNote(paramId: string, paramValues: Record<string, Note>): boolean;
    deleteNote(paramId: string): boolean;
    updateNote(paramId: string, paramNote: Note): boolean;
    readNote(paramId: string): {id: string, value: Note};
    readAllNotes(): Array<{id: string, value: Note}>;
}