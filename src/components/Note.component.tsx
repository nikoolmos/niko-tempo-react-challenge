import React from "react";
import { useNote } from "../hooks/useNote";

interface NoteProps {
    id: string;
}

export const Note: React.FC<NoteProps> = (props: NoteProps) => {

    const { id, note, updateNote } = useNote(props.id);

    return (
        <section>
            <textarea></textarea>
        </section>
    );
}