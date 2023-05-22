import "./Collapsible.css";
import React from "react";

interface Props {
    title: string;
    children?: React.ReactNode;
}

interface State {
    isCollapsed: boolean;
}

class Collapsible extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isCollapsed: false,
        };
    }

    handleToggleCollapse = () => {
        this.setState((prevState) => ({
            isCollapsed: !prevState.isCollapsed,
        }));
    };

    render() {
        const { title, children } = this.props;
        const { isCollapsed } = this.state;

        return (
            <div>
                <div className="collapsible-header" onClick={this.handleToggleCollapse}>
                    <span className="caret noSelect">{isCollapsed ? "▶" : "▼"}</span>
                    <h2 className="title noSelect">{title}</h2>
                </div>
                {!isCollapsed && <div className="content">{children}</div>}
            </div>
        );
    }
}

export default Collapsible;
