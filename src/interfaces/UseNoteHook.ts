import { Note } from "./Note";

export type UseNoteHook = (paramId: string) => {
    note: Note | undefined,
    id: string,
    updateNote: (value: Note) => void;
}