import { Position } from "../NoteListService";

export type UseNoteListHook = () => {
    noteList: Array<string>;
    addNewNote: (paramPosition: Position) => string;
    removeNote: (paramId: string) => string;
}