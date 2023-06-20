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
                    required
                    sx={{
                        "& .MuiInputBase-input": {
                            marginLeft: "2em",
                            lineHeight: "1.25em",
                            fontSize: "16px",
                        },
                        width: "100%",
                    }}
                    rows={Math.max(10, this.state.lineNumbers * 0.89)}
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
        this.updateLineNumbers(value);
    };

    updateLineNumbers(value: string) {
        let lineNumbers = value.split("\n").length;
        if (value === "") {
            lineNumbers = 0;
        }
        this.setState({ value, lineNumbers });
    }

    handleKeyDown = (evt: React.KeyboardEvent<HTMLDivElement>) => {
        if (evt.target instanceof HTMLInputElement || evt.target instanceof HTMLTextAreaElement) {
            const textArea = evt.target as HTMLTextAreaElement | HTMLInputElement;

            const { selectionStart, selectionEnd, value } = textArea;
            const duplicatedCharacterPairs: { [key: string]: string } = {
                "{": "}",
                "[": "]",
                '"': '"',
                "(": ")",
            };

            if (textArea && selectionStart !== null && selectionEnd !== null) {
                let newValue = "";
                let caretPosition = 0;
                let preventDefault = true;

                if (evt.key === "Tab") {
                    newValue = value.substring(0, selectionStart) + "    " + value.substring(selectionEnd);
                    caretPosition = selectionStart + 1;
                } else if (duplicatedCharacterPairs[evt.key] != null) {
                    if (value[selectionStart] === undefined || value[selectionStart] === " " || value[selectionStart] === "\n") {
                        newValue =
                            value.substring(0, selectionStart) +
                            evt.key +
                            duplicatedCharacterPairs[evt.key] +
                            value.substring(selectionEnd);
                        caretPosition = selectionStart + 1;
                    } else {
                        preventDefault = false;
                    }
                } else if (evt.key === "Backspace") {
                    const firstCharacter = value.substring(selectionStart - 1, selectionStart);
                    const secondCharacter = value.substring(selectionStart, selectionStart + 1);

                    if (firstCharacter + secondCharacter === firstCharacter + duplicatedCharacterPairs[firstCharacter]) {
                        newValue = value.substring(0, selectionStart - 1) + value.substring(selectionEnd + 1);
                        caretPosition = selectionStart;
                    } else {
                        preventDefault = false;
                    }
                } else if (evt.key === "Enter") {
                    if (value.substring(selectionStart - 1, selectionStart + 1) === "{}") {
                        const indentationLevel = this.spacesToNewLine(value, selectionStart);

                        newValue = this.createIndentaion(value, selectionStart, selectionEnd);
                        caretPosition = selectionStart + indentationLevel + 4 + 1;
                    } else if (value.substring(selectionStart - 1, selectionStart + 1) === "[]") {
                        const indentationLevel = this.spacesToNewLine(value, selectionStart);

                        newValue = this.createIndentaion(value, selectionStart, selectionEnd);
                        caretPosition = selectionStart + indentationLevel + 4 + 1;
                    } else {
                        const indentationLevel = this.spacesToNewLine(value, selectionStart - 1);
                        newValue =
                            value.substring(0, selectionStart) +
                            "\n" +
                            " ".repeat(indentationLevel) +
                            value.substring(selectionEnd);
                        caretPosition = selectionStart + indentationLevel + 1;
                    }
                } else {
                    return;
                }

                if (preventDefault) {
                    evt.preventDefault();
                    textArea.value = newValue;
                    textArea.setSelectionRange(caretPosition, caretPosition);
                    this.updateLineNumbers(newValue);
                }
            }
        }
    };

    spacesToNewLine(value: string, selectionPosition: number) {
        let spaces = 0;
        let pos = selectionPosition;
        while (value[pos] != "\n" && pos >= 0) {
            if (value[pos] == " ") {
                spaces++;
            } else {
                spaces = 0;
            }
            pos--;
        }
        return spaces;
    }

    createIndentaion(value: string, selectionPosition: number, selectionEnd: number) {
        let indentationLevel = this.spacesToNewLine(value, selectionPosition);

        // prettier-ignore
        return (
            value.substring(0, selectionPosition) + "\n" +
            " ".repeat(indentationLevel) + "    " + "\n" +
            " ".repeat(indentationLevel) + value.substring(selectionEnd)
        );
    }

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
