import { Note } from "./Note";

export type UseNoteHook = (paramId: string) => {
    note: Note | undefined,
    id: string | undefined,
    updateNote: (value: Note) => void;
}