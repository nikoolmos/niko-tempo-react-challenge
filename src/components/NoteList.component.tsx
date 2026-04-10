import React from "react";
import { useNoteList } from "../hooks/useNoteList";
import { AddNoteButton } from "./AddNoteButton";
import { RemoveNoteArea } from "./RemoveNoteArea.component";
import { Note } from "./Note.component";
import { useSetupApp } from "../hooks/useSetupApp";
import { ColorSelector } from "./ColorSelector.component";
import { Colors } from "../interfaces/colors";

export interface NoteListProps { }

export const NoteList: React.FC<NoteListProps> = (props: NoteListProps) => {
    useSetupApp();
    const { addNewNote, noteList, removeNote, setColor, colorToSet } = useNoteList();
    return (
        <main>
            <ColorSelector onColorChange={(paramColor: Colors) => { setColor(paramColor) }} />
            <div>
                {
                    noteList.map(noteId => {
                        return <Note id={noteId} key={noteId} selectedColor={colorToSet} />
                    })
                }
            </div>
            <RemoveNoteArea onRemove={removeNote} />
            <AddNoteButton onClick={() => { addNewNote({ x: 0, y: 0, layer: 0 }) }} />
        </main>
    )
}