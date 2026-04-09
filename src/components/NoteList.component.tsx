import React from "react";
import { useNoteList } from "../hooks/useNoteList";
import { AddNoteButton } from "./AddNoteButton";
import { RemoveNoteArea } from "./RemoveNoteArea.component";
import { Note } from "./Note.component";
import { useSetupApp } from "../hooks/useSetupApp";

export interface NoteListProps { }

export const NoteList: React.FC<NoteListProps> = (props: NoteListProps) => {
    useSetupApp();
    const { addNewNote, noteList, removeNote } = useNoteList();
    return (
        <main>
            <div>
                {
                    noteList.map(noteId => {
                        return <Note id={noteId} key={noteId} />
                    })
                }
            </div>
            <RemoveNoteArea onRemove={removeNote} />
            <AddNoteButton onClick={() => { addNewNote({ x: 0, y: 0, layer: 0 }) }} />
        </main>
    )
}