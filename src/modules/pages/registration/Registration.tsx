import "./Registration.css";

import { Box, Container, Stack } from "@mui/system";
import React from "react";
import { Button, Card, CardContent, CardHeader, TextField, Typography } from "@mui/material";
import { stat } from "fs";

type Props = {};

type State = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
};

type KeysMatching<T, V> = { [K in keyof T]-?: T[K] extends V ? K : never }[keyof T];

class Registration extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.getTextInputHandler = this.getTextInputHandler.bind(this);
        this.submit = this.submit.bind(this);

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        };
    }

    render() {
        return (
            <Container sx={{ flexGrow: 1 }} maxWidth="md">
                <Card>
                    <CardContent>
                        <Typography variant="h1" color="primary">
                            Registration
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <Stack direction={"column"} gap={1}>
                            <Stack direction={"row"} gap={1}>
                                <TextField
                                    id={`first-name-input`}
                                    label="First Name"
                                    variant="outlined"
                                    required
                                    value={this.state.firstName}
                                    onChange={this.getTextInputHandler("firstName")}
                                    fullWidth
                                />
                                <TextField
                                    id={`last-name-input`}
                                    label="Last Name"
                                    variant="outlined"
                                    required
                                    value={this.state.lastName}
                                    onChange={this.getTextInputHandler("lastName")}
                                    fullWidth
                                />
                            </Stack>
                            <TextField
                                id={`email-input`}
                                label="Email"
                                variant="outlined"
                                required
                                value={this.state.email}
                                onChange={this.getTextInputHandler("email")}
                            />
                            <TextField
                                id={`password-input`}
                                label="Password"
                                variant="outlined"
                                required
                                value={this.state.password}
                                onChange={this.getTextInputHandler("password")}
                            />
                        </Stack>
                    </CardContent>
                    <CardContent>
                        <Button variant="contained" color="primary" onClick={this.submit}>
                            Register
                        </Button>
                    </CardContent>
                </Card>
            </Container>
        );
    }

    submit() {}

    getTextInputHandler(propName: KeysMatching<State, string>) {
        return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            this.setState({
                ...this.state,
                [propName]: e.target.value,
            });
        };
    }
}

export default Registration;
