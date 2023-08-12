import React from "react";
import { Link as DOMLink } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Box, Link, AppBar } from "@mui/material";
import { Stack } from "@mui/system";

const HEADER_HEIGHT = "130px";

const HeaderLink = (props: any) => {
    const { isActive, ...passedProps } = props;
    return (
        <Link
            width="115px"
            height="auto"
            underline={isActive ? "always" : "none"}
            align="center"
            color="#6d6d6d"
            component={DOMLink}
            {...passedProps}
        ></Link>
    );
};

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
            <Box
                sx={{ flexGrow: 1, marginLeft: "auto", marginRight: "auto", marginBottom: "2em", marginTop: "1em" }}
                maxWidth={"sm"}
            >
                <AppBar sx={{ background: "transparent" }} elevation={0} position="static">
                    <Stack sx={{ flexGrow: 1, justifyContent: "space-between", flexDirection: "row", alignItems: "center" }}>
                        <HeaderLink
                            to="/view"
                            isActive={this.state.activeLink == "/view"}
                            onClick={() => this.handleClick("/view")}
                        >
                            All API Sims
                        </HeaderLink>
                        <HeaderLink
                            to="/"
                            onClick={() => this.handleClick("/")}
                            sx={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}
                        >
                            <Logo className="logo" width={61} height={61} />
                        </HeaderLink>
                        <HeaderLink
                            to="/endpoint"
                            isActive={this.state.activeLink == "/endpoint"}
                            onClick={() => this.handleClick("/endpoint")}
                        >
                            Create API Sim
                        </HeaderLink>
                    </Stack>
                </AppBar>
            </Box>
        );
    }
}

export default Header;
