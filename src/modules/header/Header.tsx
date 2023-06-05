import "./Header.css";

import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/logo.svg";

type State = {
    activeLink: string;
};

type Props = {};

class Header extends React.Component<Props, State> {
    state = {
        activeLink: "/",
    };

    handleClick = (link: string) => {
        this.setState({ activeLink: link });
    };

    render() {
        const { activeLink } = this.state;

        return (
            <div className="header">
                <Link to="/" className={`noSelect noDecoration headerTitle `} onClick={() => this.handleClick("/")}>
                    <Logo className="logo" />
                </Link>
                <Link
                    to="/endpoint"
                    className={`noSelect noDecoration headerTitle ${activeLink === "/endpoint" ? "active" : ""}`}
                    onClick={() => this.handleClick("/endpoint")}
                >
                    <div className="text">Build API Sim</div>
                </Link>
                <Link
                    to="/view"
                    className={`noSelect noDecoration headerTitle ${activeLink === "/view" ? "active" : ""}`}
                    onClick={() => this.handleClick("/view")}
                >
                    <div className="text">My API Sims</div>
                </Link>
                <Link
                    to="/analytics"
                    className={`noSelect noDecoration headerTitle ${activeLink === "/analytics" ? "active" : ""}`}
                    onClick={() => this.handleClick("/analytics")}
                >
                    <div className="text">Analytics</div>
                </Link>
                <Link
                    to="/settings"
                    className={`noSelect noDecoration headerTitle ${activeLink === "/settings" ? "active" : ""}`}
                    onClick={() => this.handleClick("/settings")}
                >
                    <div className="text">Settings</div>
                </Link>
            </div>
        );
    }
}

export default Header;
