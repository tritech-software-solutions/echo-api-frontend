import "./Card.css";

import React from "react";


type Props = {
    children?: React.ReactNode;
    className?: string;
};

class Card extends React.Component<Props> {
    render() {
        return <div className={"card" + (this.props.className ? " " + this.props.className : "")}>
            {this.props.children}
            </div>;
    }
}

export default Card;
