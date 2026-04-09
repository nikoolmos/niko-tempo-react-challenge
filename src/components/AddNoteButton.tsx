import React from "react";

export interface AddNoteButtonProps {
    onClick: () => void;
}

export const AddNoteButton: React.FC<AddNoteButtonProps> = (props: AddNoteButtonProps) => {
    const styles = {
        borderRadius: '50px',
        display: 'inline-block',
        backgroundColor: '#2196f3',
        borderStyle: 'none',
        padding: '10px',
        width: '80px',
        height: '80px',
        boxShadow: '5px 5px 5px 2px grey',
        color: 'white',
        position: 'absolute',
        right: '20px',
        bottom: '30px',
        fontSize: '40px',
        fontWeight: 'bold',
        cursor: 'pointer'
    };

    return <button style={styles} onClick={props.onClick}>+</button>;
}