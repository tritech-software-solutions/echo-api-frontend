import "./Header.css";

import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Box, Tab, Tabs, AppBar, Container, Toolbar, Typography, IconButton, Button } from "@mui/material";
import { faAlignCenter } from "@fortawesome/free-solid-svg-icons";
import { Stack, margin, padding, textAlign } from "@mui/system";

type State = {
    activeLink: string;
    headerSize: string;
};

type Props = {};

class Header extends React.Component<Props, State> {
    state = {
        activeLink: "/",
        headerSize: "md",
    };

    handleClick = (link: string) => {
        let headerSize;
        if (link === "/") {
            headerSize = "md";
        } else {
            headerSize = "lg";
        }
        this.setState({ activeLink: link, headerSize: headerSize });
    };

    render() {
        const { activeLink } = this.state;

        return (
            <Stack
                sx={{ width: "100%", marginTop: "2em", marginBottom: "3em", marginLeft: "auto", marginRight: "auto" }}
                maxWidth={this.state.headerSize}
            >
                <Stack sx={{ flexGrow: 1, justifyContent: "center", flexDirection: "row", alignItems: "center", gap: "2em" }}>
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
                </Stack>
                <Stack sx={{ marginRight: "1em" }}>
                    <Button>Hello</Button>
                </Stack>
            </Stack>
        );
    }
}

export default Header;
