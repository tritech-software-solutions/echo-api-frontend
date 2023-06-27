import "./LinedNumberedInput.css";
import { TextField } from "@mui/material";

import React, { FormEvent, SyntheticEvent } from "react";

type Props = {
    label: string;
};

type State = {
    value: string;
    lineNumbers: number;
};

class LineNumberInput extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            value: "",
            lineNumbers: 0,
        };
    }

    render() {
        return (
            <div className="line-number-input">
                <div className="line-numbers">{this.renderLineNumbers()}</div>
                <TextField
                    className="input-field"
                    value={this.state.value}
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyDown}
                    label={this.props.label}
                    multiline
                    sx={{
                        "& .MuiInputBase-input": {
                            marginLeft: "2em",
                            lineHeight: "1.25em",
                            fontSize: "16px",
                        },
                    }}
                />
            </div>
        );
    }

    handleChange = (evt: React.FormEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        let value = "";
        if (evt.currentTarget.value === undefined) {
            value = this.state.value;
        } else {
            value = evt.currentTarget.value;
        }
        let lineNumbers = value.split("\n").length;
        if (value === "") {
            lineNumbers = 0;
        }
        this.setState({ value, lineNumbers });
    };

    handleKeyDownChange = (value: string) => {
        let lineNumbers = value.split("\n").length;
        if (value === "") {
            lineNumbers = 0;
        }
        this.setState({ value, lineNumbers });
    };

    handleKeyDown = (evt: React.KeyboardEvent<HTMLDivElement>) => {
        if (evt.key === "Tab") {
            evt.preventDefault();
            console.log(evt.target);
            if (evt.target instanceof HTMLInputElement || evt.target instanceof HTMLTextAreaElement) {
                const textArea = evt.target as HTMLTextAreaElement | HTMLInputElement;

                const { selectionStart, selectionEnd, value } = textArea;
                let newValue = "";

                if (textArea && selectionStart !== null && selectionEnd !== null) {
                    newValue = value.substring(0, selectionStart) + "\t" + value.substring(selectionEnd);
                    const caretPosition = selectionStart + 1;

                    textArea.value = newValue;
                    textArea.setSelectionRange(caretPosition, caretPosition);
                }

                this.handleKeyDownChange(value);
                //this.handleChange({ target: textArea } as React.ChangeEvent<HTMLTextAreaElement>);
            }
        }
        if (evt.key === "{") {
            evt.preventDefault();
            if (evt.target instanceof HTMLInputElement || evt.target instanceof HTMLTextAreaElement) {
                const textArea = evt.target as HTMLTextAreaElement | HTMLInputElement;

                const { selectionStart, selectionEnd, value } = textArea;
                let newValue = "";

                if (
                    textArea &&
                    selectionStart !== null &&
                    selectionEnd !== null &&
                    (value[selectionStart] === undefined || value[selectionStart] === " " || value[selectionStart] === "\n")
                ) {
                    newValue = value.substring(0, selectionStart) + "{}" + value.substring(selectionEnd);
                    const caretPosition = selectionStart + 1;

                    textArea.value = newValue;
                    textArea.setSelectionRange(caretPosition, caretPosition); // Update the caret position
                } else if (textArea && selectionStart !== null && selectionEnd !== null) {
                    newValue = value.substring(0, selectionStart) + "{" + value.substring(selectionEnd);
                    const caretPosition = selectionStart + 1;

                    textArea.value = newValue;
                    textArea.setSelectionRange(caretPosition, caretPosition); // Update the caret position
                }

                this.setState({ value: newValue });
                //this.handleChange({ target: textArea } as React.ChangeEvent<HTMLTextAreaElement>);
            }
        }
        if (evt.key === "[") {
            evt.preventDefault();
            if (evt.target instanceof HTMLInputElement || evt.target instanceof HTMLTextAreaElement) {
                const textArea = evt.target as HTMLTextAreaElement | HTMLInputElement;

                const { selectionStart, selectionEnd, value } = textArea;
                let newValue = "";

                if (
                    textArea &&
                    selectionStart !== null &&
                    selectionEnd !== null &&
                    (value[selectionStart] === undefined || value[selectionStart] === " " || value[selectionStart] === "\n")
                ) {
                    newValue = value.substring(0, selectionStart) + "[]" + value.substring(selectionEnd);
                    const caretPosition = selectionStart + 1;

                    textArea.value = newValue;
                    textArea.setSelectionRange(caretPosition, caretPosition); // Update the caret position
                } else if (textArea && selectionStart !== null && selectionEnd !== null) {
                    newValue = value.substring(0, selectionStart) + "[" + value.substring(selectionEnd);
                    const caretPosition = selectionStart + 1;

                    textArea.value = newValue;
                    textArea.setSelectionRange(caretPosition, caretPosition); // Update the caret position
                }

                this.setState({ value: newValue });
                //this.handleChange({ target: textArea } as React.ChangeEvent<HTMLTextAreaElement>);
            }
        }
        if (evt.key === "Backspace") {
            evt.preventDefault();
            if (evt.target instanceof HTMLInputElement || evt.target instanceof HTMLTextAreaElement) {
                const textArea = evt.target as HTMLTextAreaElement | HTMLInputElement;

                const { selectionStart, selectionEnd, value } = textArea;
                let newValue = "";

                if (
                    textArea &&
                    selectionStart !== null &&
                    selectionEnd !== null &&
                    value.substring(selectionStart - 1, selectionStart + 1) === "{}"
                ) {
                    newValue = value.substring(0, selectionStart - 1) + value.substring(selectionEnd + 1);
                    const caretPosition = selectionStart;

                    textArea.value = newValue;
                    textArea.setSelectionRange(caretPosition, caretPosition); // Update the caret position
                } else if (
                    textArea &&
                    selectionStart !== null &&
                    selectionEnd !== null &&
                    value.substring(selectionStart - 1, selectionStart + 1) === "[]"
                ) {
                    newValue = value.substring(0, selectionStart - 1) + value.substring(selectionEnd + 1);
                    const caretPosition = selectionStart;

                    textArea.value = newValue;
                    textArea.setSelectionRange(caretPosition, caretPosition); // Update the caret position
                } else if (textArea && selectionStart !== null && selectionEnd !== null) {
                    newValue = value.substring(0, selectionStart - 1) + value.substring(selectionEnd);
                    const caretPosition = selectionStart - 1;

                    textArea.value = newValue;
                    textArea.setSelectionRange(caretPosition, caretPosition);
                }

                this.setState({ value: newValue });
                //this.handleChange({ target: textArea } as React.ChangeEvent<HTMLTextAreaElement>);
            }
        }
        if (evt.key === "Enter") {
            evt.preventDefault();
            if (evt.target instanceof HTMLInputElement || evt.target instanceof HTMLTextAreaElement) {
                const textArea = evt.target as HTMLTextAreaElement | HTMLInputElement;

                const { selectionStart, selectionEnd, value } = textArea;
                let newValue = "";

                if (
                    textArea &&
                    selectionStart !== null &&
                    selectionEnd !== null &&
                    value.substring(selectionStart - 1, selectionStart + 1) === "{}"
                ) {
                    newValue = value.substring(0, selectionStart) + "\n\t\n" + value.substring(selectionEnd);
                    const caretPosition = selectionStart + 2;

                    textArea.value = newValue;
                    textArea.setSelectionRange(caretPosition, caretPosition); // Update the caret position
                } else if (
                    textArea &&
                    selectionStart !== null &&
                    selectionEnd !== null &&
                    value.substring(selectionStart - 1, selectionStart + 1) === "[]"
                ) {
                    newValue = value.substring(0, selectionStart) + "\n\t\n" + value.substring(selectionEnd);
                    const caretPosition = selectionStart + 2;

                    textArea.value = newValue;
                    textArea.setSelectionRange(caretPosition, caretPosition); // Update the caret position
                } else if (textArea && selectionStart !== null && selectionEnd !== null) {
                    newValue = value.substring(0, selectionStart) + "\n" + value.substring(selectionEnd);
                    const caretPosition = selectionStart + 1;

                    textArea.value = newValue;
                    textArea.setSelectionRange(caretPosition, caretPosition);
                }

                this.setState({ value: newValue });
                //this.handleChange({ target: textArea } as React.ChangeEvent<HTMLTextAreaElement>);
            }
        }
    };

    renderLineNumbers() {
        const { lineNumbers } = this.state;
        let lineList = [];
        for (let i = 0; i < lineNumbers; i++) {
            lineList.push(
                <div key={i} className="line-number">
                    {i + 1}
                </div>
            );
        }
        return lineList;
    }
}

export default LineNumberInput;
