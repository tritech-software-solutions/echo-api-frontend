import "./EndpointViewer.css";

import React from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Card, Checkbox, Container, IconButton, List, ListItem, ListItemText, Typography } from "@mui/material";

type EndpointPreview = {
    shouldRun: boolean;
    name: string;
    endpoint: string;
    parameterNames: string[];
};

type Props = {};

type State = {
    hasRetrievedData: boolean;
    previews: EndpointPreview[];
};

class EndpointViewer extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            hasRetrievedData: false,
            previews: [],
        };
    }

    componentDidMount(): void {
        this.refreshEndpoints();
    }

    render() {
        return (
            <Container maxWidth="md">
                <Typography variant="h2" mb={2}>
                    Your APIs
                </Typography>
                <Card>{this.state.hasRetrievedData ? this.getEndpointList() : this.getLoadingDisplay()}</Card>
            </Container>
        );
    }

    getLoadingDisplay() {
        return (
            <Typography p={2} align="center">
                Loading
            </Typography>
        );
    }

    getEndpointList() {
        return (
            <React.Fragment>
                <List>
                    {this.state.previews.map((val, index) => (
                        <ListItem key={index}>
                            <Checkbox
                                onChange={this.onShouldRunCheckboxToggled.bind(this, index)}
                                checked={val.shouldRun}
                                sx={{ mr: 1 }}
                            />
                            <ListItemText primary={val.name + " - " + val.endpoint} secondary={val.parameterNames.join(", ")} />
                            <IconButton>
                                <ModeEditIcon />
                            </IconButton>
                            <IconButton onClick={this.deleteEndpoint.bind(this, val)}>
                                <DeleteIcon />
                            </IconButton>
                        </ListItem>
                    ))}
                </List>
                <Button variant="contained" sx={{ position: "absolute", right: 25, bottom: 25 }}>
                    Run Selected APIs
                </Button>
            </React.Fragment>
        );
    }

    onShouldRunCheckboxToggled(index: number, evt: React.ChangeEvent<HTMLInputElement>, checked: boolean) {
        const newPreviews = this.state.previews.slice();
        newPreviews[index].shouldRun = checked;
        this.setState({
            previews: newPreviews,
        });
    }

    deleteEndpoint(endpoint: EndpointPreview, evt: React.MouseEvent) {
        const newPreviews = this.state.previews.slice();
        newPreviews.splice(this.state.previews.indexOf(endpoint), 1);
        this.setState({
            previews: newPreviews,
        });

        fetch(window.location.origin + "/delete_endpoint", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                fileName: endpoint.name,
            }),
        }).then(() => this.refreshEndpoints());
    }

    refreshEndpoints() {
        fetch(window.location.origin + "/view_endpoints", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((response) => {
                const endpointPreviews: EndpointPreview[] = [];
                for (const endpoint of response) {
                    endpointPreviews.push({
                        shouldRun: true,
                        ...endpoint,
                    });
                }
                this.setState({
                    hasRetrievedData: true,
                    previews: endpointPreviews,
                });
            });
    }
}

export default EndpointViewer;
