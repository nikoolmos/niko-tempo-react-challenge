import { Colors } from "../interfaces/colors";

export class ColorConverter {
    public static fromEnum(paramColor: Colors) {
        let value = '';

        switch (paramColor) {
            case Colors.LightBlue:
                value = '#BBDCE5';
                break;
            case Colors.LightRed:
                value = '#F08787';
                break;
            case Colors.LightYellow:
                value = '#F8FAB4';
                break;
            case Colors.LightBrown:
                value = '#D9C4B0';
                break;
            case Colors.LightGreen:
                value = '#CADCAE';
                break;
            case Colors.LightGrey:
                value = '#EEEEEE';
                break;
            case Colors.LightOrange:
                value = '#FFC7A7';
                break;
            case Colors.LightPurple:
                value = '#C9BEFF';
                break;
            default:
                value = 'white';
        }

        return value;
    }

}