import { type } from "os";
import "./InputField.css";
import React from "react";
import InputField from "./InputField";

type Props = {
    name: string;
    selectables?: string[];
    className?: string;
    type?: string;
}

type State = {
    selected: boolean;
}

class DropdownInput extends InputField {}

export default DropdownInput;

