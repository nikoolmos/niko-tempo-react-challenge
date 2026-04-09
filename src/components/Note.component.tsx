import React from "react";
import { useNote } from "../hooks/useNote";

interface NoteProps {
    id: string;
}

export const Note: React.FC<NoteProps> = (props: NoteProps) => {

    const { id, note, updateNote } = useNote(props.id);

    if(!note) {
        return null;
    }

    const handleContentChange = (event: any) => {
        if (note) {

            updateNote(
                {
                    ...note,
                    content: event.target.value
                }
            );
        };

    }

    const handlePositionChange = (newX: number, newY: number) => {
        if(note) {
            updateNote({
                ...note,
                position: {
                    x: newX,
                    y: newY,
                    layer: note.position.layer
                }
            });
        }
    }

    const handleDragOn = (event) => {
        console.info('DRAG ON EVENT', event);
    }

    const handleDragEnd = (event) => {
        console.info('DRAG END EVENT', event);
        handlePositionChange(event.pageX, event.pageY);
    }


    const styles = {
        display: 'inline-block',
        backgroundColor: 'tomato',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: 'black',
        padding: '10px',
        boxShadow: '5px 5px 5px 2px grey',
        position: 'absolute',
        top: note?.position.y + 'px',
        left: note?.position.x + 'px',
    };

    const textAreaStyles = {
        backgroundColor: 'transparent',
        border:'none',
        outline: 'none'
    }

    return (
        <section draggable={true} style={styles} onDrag={handleDragOn} onDragEnd={handleDragEnd}>
            <textarea style={textAreaStyles}  onChange={handleContentChange}></textarea>
        </section >
    );
}