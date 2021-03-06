import { Component } from "react";
import { ColorPickerProps } from "react-color";

export interface HuePickerProps extends ColorPickerProps<HuePicker> {
    height?: string;
    width?: string;
}

export default class HuePicker extends Component<HuePickerProps, any> {}
