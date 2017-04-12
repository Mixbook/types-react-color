import { ComponentClass, StatelessComponent } from "react";
import { HSLColor, RGBColor, ColorChangeHandler, HSVColor } from "react-color";

export interface InjectedColorProps {
    hex?: string;
    hsl?: HSLColor;
    hsv?: HSVColor;
    rgb?: RGBColor;
    onChange?: ColorChangeHandler;
    onChangeComplete?: ColorChangeHandler;
}

export default function CustomPicker<A>(component: ComponentClass<A> | StatelessComponent<A>): ComponentClass<A & InjectedColorProps>;
