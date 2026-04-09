import { Colors } from "../interfaces/colors";
import { Note } from "../interfaces/Note";


// This class intends to contain the defaults for the note creation use case.
// It should be easily customizable without much effort.

export class DefaultNoteDTO implements Note {
    public color: Colors;
    public size: { width: number; height: number; };
    public position: { x: number; y: number; layer: number; };
    public content: string;
    public id: string;

    constructor() {
        this.color = Colors.LightYellow;
        this.size = {height: 500, width: 500};
        this.position = {x: 0, y: 0, layer: 0};
        this.content = '';
        this.id = 'default-id';
    }

}