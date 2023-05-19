import "./Button.css";

import React from "react";

type Props = {
    text?: string;
};

type State = {
    isClicked: boolean;
};

class Button extends React.Component<Props, State> {
    state = {
        isClicked: false,
    };


    render() {
        return (
            <div className={this.state.isClicked ? "clicked" : "notClicked"} onClick={this.buttonClick}>
                {this.props.text}
            </div>
        );
    }

    buttonClick(e: any) {
        this.setState({
            isClicked: true,
        });
    }
}

export default Button;
