import React from "react";

export interface RemoveNoteAreaProps {
    onRemove: (paramId: string) => void;
}

export const RemoveNoteArea: React.FC<RemoveNoteAreaProps> = (props: RemoveNoteAreaProps) => {

    const styles = {
        display: 'block',
        border: 'dashed',
        borderWidth: '8px',
        borderColor: 'grey',
        padding: '60px',
        margin: '20px',
        borderRadius: '10px',
        fontSize: '48px',
        color: 'grey',
        textAlign: 'center'
    };

    const handleOnDrop = (event: any) => {
        const id = event.target.value;

        props.onRemove(id);
    }

    return (
        <div style={styles} onDrop={handleOnDrop}>
            Drop here the note you want to remove.
        </div>
    )
}