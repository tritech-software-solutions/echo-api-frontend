import "./Button.css";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type Props = {
    text?: string;
    icon?: React.ReactNode;
    hasText?: boolean;
    className?: string;
};

class Button extends React.Component<Props> {
    render() {
        const { text, icon, hasText, className} = this.props;

        const buttonClassName = `button ` + (className ? ` ${className}` : "");

        // Conditionally render different content based on the `hasText` prop
        if (hasText) {
            return (
                <div className={buttonClassName}>
                    <div className="button-icon">
                        <div className="svg-icon">{icon}</div>  
                    </div>
                    <div className="button-extension">{text}</div>
                </div>
            );
        } else {
            return (
                <div className={buttonClassName}>
                    <div className="button-icon">
                        <div className="svg-icon">{icon}</div>
                    </div>
                </div>
            );
        }
    }
}

export default Button;
