import { Colors } from "../colors";
import { Position } from "../NoteListService";

export type UseNoteListHook = () => {
    noteList: Array<string>;
    addNewNote: (paramPosition: Position) => string;
    removeNote: (paramId: string) => string;
    colorToSet: Colors;
    setColor: (paramColor: Colors) => void;
}