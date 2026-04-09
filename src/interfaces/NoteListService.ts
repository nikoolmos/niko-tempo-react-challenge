export interface Position {
    x: number;
    y: number;
    layer: number;
}

export interface NoteListService {
    addNote(paramPosition: Position): string;
    removeNote(paramId: string): string;
    getNoteList(): Array<string>;
    init(): void;
}