import "./LinedNumberedInput.css";
import { TextField } from "@mui/material";

import React from "react";

type Props = {};

type State = {
    value: string;
    lineNumbers: number;
};

class LineNumberInput extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            value: "",
            lineNumbers: 1,
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
                    label="Body"
                    sx={{
                        fontSize: 14,
                    }}
                    multiline
                />
            </div>
        );
    }

    handleChange = (evt: React.FormEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const value = evt.currentTarget.value;
        console.log(value);
        const lineNumbers = value.split("\n").length;
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
                    newValue = value.substring(0, selectionStart) + "    " + value.substring(selectionEnd);
                }

                this.setState({ value: newValue });
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
