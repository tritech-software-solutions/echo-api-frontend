import "./EndpointEditor.css";

import React from "react";
import AddIcon from "@mui/icons-material/Add";
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
} from "@mui/material";
import { BoxProps, Container, StackProps } from "@mui/system";
import LineNumberInput from "../../general/LineNumberedInput/LinedNumberedInput";

type Props = {};

type State = {
    isEditingTitle: boolean;
    name: string;
    endpoint: string;
};

const TitleRowStack = styled((props: StackProps) => <Stack direction={"row"} spacing={2} width={"100%"} {...props} />)<StackProps>(
    ({ theme }) => ({})
);

class EndpointEditor extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.handleNewTitle = this.handleNewTitle.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEndpointChange = this.handleEndpointChange.bind(this);

        this.state = {
            isEditingTitle: false,
            name: "Example",
            endpoint: "Endpoint",
        };
    }

    render() {
        return (
            <Card className="endpoint-editor-card">
                <CardContent>
                    <Stack divider={<Divider orientation="vertical" flexItem />} spacing={1}>
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
                                <Button color="secondary" variant="contained" sx={{ margin: "auto 0" }} onFocus={this.handleNewTitle}>
                                    Submit
                                </Button>
                            </TitleRowStack>
                        ) : (
                            <TitleRowStack spacing={0}>
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

                        <Stack spacing={1}>
                            <TitleRowStack>
                                <Typography variant="h3" color="primary">
                                    Parameters
                                </Typography>
                                <IconButton>
                                    <AddIcon />
                                </IconButton>
                            </TitleRowStack>
                            <Stack spacing={1} direction={"row"}>
                                <TextField id="param1-name-input" label="Name" variant="outlined" />
                                <TextField id="param1-value-input" label="Value" variant="outlined" />
                                <FormControl>
                                    <InputLabel id="param1-type-input-label">Type</InputLabel>
                                    <Select labelId="param1-type-input-label" id="param1-type-input" value={undefined} label="Type">
                                        <MenuItem value={"any"}>Any</MenuItem>
                                        <MenuItem value={"number"}>Number</MenuItem>
                                        <MenuItem value={"boolean"}>Boolean</MenuItem>
                                    </Select>
                                </FormControl>
                            </Stack>
                        </Stack>

                        <Stack spacing={1}>
                            <Typography variant="h3" color="primary">
                                Response
                            </Typography>
                            <Stack spacing={1} direction={"row"}>
                                <TextField id="outlined-number" label="Status" type="number" sx={{ maxWidth: "15em" }} />
                            </Stack>
                            <LineNumberInput label="Body" />
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

    addParamter() {}
}

export default EndpointEditor;
