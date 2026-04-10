import React from "react";

import { Colors } from "../interfaces/colors";
import { ColorConverter } from "../utils/ColorConventer";

export interface ColorSelectorProps {
    onColorChange: (paramColor: Colors) => void;
}

export const ColorSelector: React.FC<ColorSelectorProps> = (props: ColorSelectorProps) => {

    const handleColorChange = (color: Colors) => {
        props.onColorChange(color);
    }

    const buttonStyle = {
        width: '20px',
        height: '20px',
        borderRadius: '100%',
        border: 'none',
        cursor: 'pointer'
    };

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: '15px',
        borderStyle: 'dashed',
        borderSize: '5px',
        borderColor: 'grey',
        position: 'absolute',
        top: '10px',
        right: '20px',
        height: '200px'
    };

    const colorStyle = {};

    const colorStyleLightBlue = {
        backgroundColor: ColorConverter.fromEnum(Colors.LightBlue),
    };

    const colorStyleLightRed = {
        backgroundColor: ColorConverter.fromEnum(Colors.LightRed),
    };

    const colorStyleLightYellow = {
        backgroundColor: ColorConverter.fromEnum(Colors.LightYellow),
    };

    const colorStyleLightGreen = {
        backgroundColor: ColorConverter.fromEnum(Colors.LightGreen),
    };

    const colorStyleLightGrey = {
        backgroundColor: ColorConverter.fromEnum(Colors.LightGrey),
    };

    const colorStyleLightOrange = {
        backgroundColor: ColorConverter.fromEnum(Colors.LightOrange),
    };

    const colorStyleLightPurple = {
        backgroundColor: ColorConverter.fromEnum(Colors.LightPurple),
    };

    const colorStyleLightBrown = {
        backgroundColor: ColorConverter.fromEnum(Colors.LightBrown),
    };

    return (
        <section style={containerStyle}>
            <button onClick={() => handleColorChange(Colors.LightBlue)} style={{ ...buttonStyle, ...colorStyleLightBlue }}></button>
            <button onClick={() => handleColorChange(Colors.LightRed)} style={{ ...buttonStyle, ...colorStyleLightRed }}></button>
            <button onClick={() => handleColorChange(Colors.LightYellow)} style={{ ...buttonStyle, ...colorStyleLightYellow }}></button>
            <button onClick={() => handleColorChange(Colors.LightGreen)} style={{ ...buttonStyle, ...colorStyleLightGreen }}></button>
            <button onClick={() => handleColorChange(Colors.LightGrey)} style={{ ...buttonStyle, ...colorStyleLightGrey }}></button>
            <button onClick={() => handleColorChange(Colors.LightOrange)} style={{ ...buttonStyle, ...colorStyleLightOrange }}></button>
            <button onClick={() => handleColorChange(Colors.LightPurple)} style={{ ...buttonStyle, ...colorStyleLightPurple }}></button>
            <button onClick={() => handleColorChange(Colors.LightBrown)} style={{ ...buttonStyle, ...colorStyleLightBrown }}></button>
        </section>
    );
}