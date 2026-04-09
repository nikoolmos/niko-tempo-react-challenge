import React from "react";
import { useNote } from "../hooks/useNote";

interface NoteProps {
    id: string;
}

export const Note: React.FC<NoteProps> = (props: NoteProps) => {

    const { id, note, updateNote } = useNote(props.id);

    const handleContentChange = (value: any) => {
        if (note) {

            updateNote(
                {
                    ...note,
                    content: value
                }
            );
        };

    }

    const styles = {
        display: 'inline-block',
        backgroundColor: 'tomato',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: 'black',
        padding: '10px',
        boxShadow: '5px 5px 5px 2px grey'
    };

    const textAreaStyles = {
        backgroundColor: 'transparent',
        border:'none',
        outline: 'none'
    }

    return (
        <section style={styles} >
            <textarea style={textAreaStyles} onChange={handleContentChange}></textarea>
        </section >
    );
}