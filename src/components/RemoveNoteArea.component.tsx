import React, { useState } from "react";

export interface RemoveNoteAreaProps {
    onRemove: (paramId: string) => void;
}

export const RemoveNoteArea: React.FC<RemoveNoteAreaProps> = (props: RemoveNoteAreaProps) => {
    const [isOverDeletionZone, setIsOverDeletionZone] = useState<boolean>(false);

    const styles = {
        display: 'block',
        border: 'dashed',
        borderWidth: '8px',
        borderColor: 'grey',
        padding: '40px',
        borderRadius: '10px',
        fontSize: '48px',
        color: 'grey',
        textAlign: 'center',
        position: 'absolute',
        bottom: '20px',
        left: '10px',
    };

    const handleEnterDropzone = (event: any) => {
        event.preventDefault();
        setIsOverDeletionZone(true);
    }
    
    
    const handleLeaveZone = (event: any) => {
        setIsOverDeletionZone(false);
    }
    
    const handleDrop = (event: any) => {
        const id = event.dataTransfer.getData('id');
        props.onRemove(id);

        console.log('DATA TRANSFERIDA ES ', id);
    }

    return (
        <div style={styles} onDragOver={handleEnterDropzone} onDrop={handleDrop} onDragLeave={handleLeaveZone}  onDragEnd={(e) => {
            e.stopPropagation();
            e.preventDefault();
        }}>
            Drop here the note you want to remove.
        </div>
    )
}