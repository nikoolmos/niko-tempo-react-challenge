import React from "react";
import { useNote } from "../hooks/useNote";
import { ColorConverter } from "../utils/ColorConventer";
import { Colors } from "../interfaces/colors";

interface NoteProps {
    id: string;
    selectedColor: Colors
}

export const Note: React.FC<NoteProps> = (props: NoteProps) => {

    const { id, note, updateNote } = useNote(props.id);

    if (!note) {
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
        if (note) {
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

    const handleDragStart = (event: any) => {
        event.dataTransfer.setData("id", id);
    }

    const handleDragEnd = (event: any) => {
        console.info('DRAG END EVENT', event);
        handlePositionChange(event.pageX, event.pageY);
    }

    const handleSetColor = () => {
        if (note) {
            updateNote({
                ...note,
                color: props.selectedColor
            });
        }
    }

    const styles = {
        display: 'inline-block',
        backgroundColor: ColorConverter.fromEnum(note.color),
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
        border: 'none',
        outline: 'none'
    }

    return (
        <section onClick={handleSetColor} draggable={true} style={styles} onDragStart={handleDragStart} onDragEnd={handleDragEnd} >
            <textarea style={textAreaStyles} value={note.content} onChange={handleContentChange}></textarea>
        </section >
    );
}