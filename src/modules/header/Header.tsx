import "./Header.css";

import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/logo.svg";

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <Link to="/" className="noSelect noDecoration headerTitle">
                    <Logo className="logo" />
                </Link>
                <Link to="/" className="noSelect noDecoration headerTitle">
                    <div className="text">Build API Sim</div>
                </Link>
                <Link to="/" className="noSelect noDecoration headerTitle">
                    <div className="text">My API Sims</div>
                </Link>
                <Link to="/" className="noSelect noDecoration headerTitle">
                    <div className="text">Analytics</div>
                </Link>
                <Link to="/" className="noSelect noDecoration headerTitle">
                    <div className="text">Settings</div>
                </Link>
            </div>
        );
    }
}

export default Header;
