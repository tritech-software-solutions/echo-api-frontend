import React from "react";
import "./InputField.css";

type Props = {
    name: string;
    selectables?: string[];
    className?: string;
};

type State = {
    selected: boolean;
    type?: string | null;
};

class InputField extends React.Component<Props, State> {
    state = {
        selected: false,
        type: "checkbox",
    };

    render() {
        const { selected, type } = this.state;

        return (
            <div className={`input-field ${type != null ? type : ""}`}>
                <label className="input-name">{this.props.name}</label>
                <input
                    type={type != null ? type : "text"}
                    className={`custom-input ${selected ? "selected" : ""}`}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                />
            </div>
        );
    }

    handleFocus = () => {
        this.setState({ selected: true });
    };

    handleBlur = () => {
        this.setState({ selected: false });
    };
}

export default InputField;
