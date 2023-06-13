import "./EndpointEditor.css";

import React, { ChangeEvent } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import EditIcon from "@mui/icons-material/Edit";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Card,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
    CardContent,
    Divider,
    List,
    Stack,
    styled,
    IconButton,
    SelectChangeEvent,
} from "@mui/material";
import { BoxProps, Container, StackProps } from "@mui/system";

type EndpointParameter = {
    name: string;
    value: string;
    type: EndpointParameterType;
};

enum EndpointParameterType {
    Any,
    Number,
    Boolean,
}

type Props = {};

type State = {
    isEditingTitle: boolean;
    name: string;
    endpoint: string;
    parameters: EndpointParameter[];
};

const TitleRowStack = styled((props: StackProps) => (
    <Stack direction={"row"} spacing={2} width={"100%"} {...props} />
))<StackProps>(({ theme }) => ({}));

class EndpointEditor extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.addParameter = this.addParameter.bind(this);
        this.handleNewTitle = this.handleNewTitle.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEndpointChange = this.handleEndpointChange.bind(this);

        this.state = {
            isEditingTitle: false,
            name: "Example",
            endpoint: "Endpoint",
            parameters: [],
        };
    }

    render() {
        return (
            <Card className="endpoint-editor-card">
                <CardContent>
                    <Stack divider={<Divider orientation="vertical" flexItem />} spacing={1}>
                        <Stack direction="row" justifyContent="space-between">
                            {this.state.isEditingTitle ? (
                                <TitleRowStack>
                                    <TextField
                                        id="name-input"
                                        label="Name"
                                        variant="outlined"
                                        required
                                        onBlur={this.handleNameChange}
                                        defaultValue={this.state.name}
                                    />
                                    <TextField
                                        id="endpoint-input"
                                        label="Endpoint"
                                        variant="outlined"
                                        required
                                        onBlur={this.handleEndpointChange}
                                        defaultValue={this.state.endpoint}
                                    />
                                    <Button
                                        color="secondary"
                                        variant="contained"
                                        sx={{ margin: "auto 0" }}
                                        onFocus={this.handleNewTitle}
                                    >
                                        Submit
                                    </Button>
                                </TitleRowStack>
                            ) : (
                                <TitleRowStack>
                                    <Typography variant="h1" color="primary">
                                        {this.state.name} | {this.state.endpoint}
                                    </Typography>
                                    <Box>
                                        <IconButton aria-label="edit" onFocus={this.handleNewTitle}>
                                            <EditIcon />
                                        </IconButton>
                                    </Box>
                                </TitleRowStack>
                            )}
                            <Box mt="auto" mb="auto" pr={4}>
                                <Button size="large">Headers</Button>
                            </Box>
                        </Stack>

                        <Stack spacing={1}>
                            <TitleRowStack>
                                <Typography variant="h3" color="primary">
                                    Parameters
                                </Typography>
                                <IconButton onClick={this.addParameter}>
                                    <AddIcon />
                                </IconButton>
                            </TitleRowStack>

                            {this.state.parameters.map((value, index) => {
                                return (
                                    <Stack spacing={1} direction={"row"}>
                                        <TextField
                                            id={`param-name-input-${index}`}
                                            label="Name"
                                            variant="outlined"
                                            value={this.state.parameters[index].name}
                                            onChange={this.updateParameterName.bind(this, index)}
                                        />
                                        <TextField
                                            id={`param-value-input-${index}`}
                                            label="Value"
                                            variant="outlined"
                                            value={this.state.parameters[index].value}
                                            onChange={this.updateParameterValue.bind(this, index)}
                                        />
                                        <FormControl>
                                            <InputLabel id={`param-type-input-label-${index}`}>Type</InputLabel>
                                            <Select
                                                labelId={`param-type-input-label-${index}`}
                                                id={`param-type-input-${index}`}
                                                value={this.state.parameters[index].type}
                                                label="Type"
                                                onChange={this.updateParameterType.bind(this, index)}
                                            >
                                                <MenuItem value={EndpointParameterType.Any}>Any</MenuItem>
                                                <MenuItem value={EndpointParameterType.Number}>Number</MenuItem>
                                                <MenuItem value={EndpointParameterType.Boolean}>Boolean</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <IconButton onClick={this.removeParameter.bind(this, index)}>
                                            <RemoveIcon />
                                        </IconButton>
                                    </Stack>
                                );
                            })}
                        </Stack>

                        <Stack spacing={1}>
                            <Typography variant="h3" color="primary">
                                Response
                            </Typography>
                            <Stack spacing={1} direction={"row"}>
                                <TextField id="outlined-number" label="Status" type="number" sx={{ maxWidth: "15em" }} />
                            </Stack>
                            <TextField id="response-content" label="Body" multiline rows={8} defaultValue="" />
                        </Stack>
                    </Stack>
                </CardContent>
            </Card>
        );
    }

    handleNameChange(evt: React.FocusEvent<HTMLInputElement>) {
        this.setState({
            name: evt.target.value,
        });
    }

    handleEndpointChange(evt: React.FocusEvent<HTMLInputElement>) {
        this.setState({
            endpoint: evt.target.value,
        });
    }

    handleNewTitle(evt: React.FocusEvent<HTMLButtonElement>) {
        this.setState({
            isEditingTitle: this.state.isEditingTitle ? false : true,
        });
    }

    // #region parameters

    addParameter() {
        const newParams = this.state.parameters.slice();
        newParams.push({
            name: "",
            value: "",
            type: EndpointParameterType.Any,
        });
        this.setState({ parameters: newParams });
    }

    removeParameter(index: number) {
        const newParams = this.state.parameters.slice();
        newParams.splice(index, 1);
        this.setState({ parameters: newParams });
    }

    updateParameterName(index: number, evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        this.state.parameters[index].name = evt.target.value;
        this.setState({ parameters: this.state.parameters });
    }

    updateParameterValue(index: number, evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        this.state.parameters[index].value = evt.target.value;
        this.setState({ parameters: this.state.parameters });
    }

    updateParameterType(index: number, evt: SelectChangeEvent<EndpointParameterType>) {
        this.state.parameters[index].type = evt.target.value as EndpointParameterType;
        this.setState({ parameters: this.state.parameters });
    }

    // #endregion
}

export default EndpointEditor;
