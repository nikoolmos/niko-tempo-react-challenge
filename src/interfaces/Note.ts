import { Colors } from "./colors";

export interface Note {
    id: string;
    content: string;
    size: {
        width: number;
        height: number;
    },
    position: {
        x: number;
        y: number;
        layer: number;
    },
    color: Colors;


}