import React, { ChangeEvent } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import EditIcon from "@mui/icons-material/Edit";
import {
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
    Stack,
    styled,
    IconButton,
    SelectChangeEvent,
    Checkbox,
    FormControlLabel,
    Modal,
    CardActionArea,
    CardActions,
} from "@mui/material";
import { Container, StackProps } from "@mui/system";
import LineNumberInput from "../../general/LineNumberedInput/LinedNumberedInput";

const modalStyle = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    minWidth: 400,
    width: "50%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

type EndpointParameter = {
    name: string;
    value: string;
    required: boolean;
    type: EndpointParameterType;
};

type ResponseHeader = {
    name: string;
    value: string;
};

enum EndpointParameterType {
    Any,
    Number,
    Boolean,
}

type Props = {};

type State = {
    headerModalOpen: boolean;
    isEditingTitle: boolean;
    name: string;
    endpoint: string;
    parameters: EndpointParameter[];
    headers: ResponseHeader[];
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
            headerModalOpen: false,
            isEditingTitle: false,
            name: "Example",
            endpoint: "Endpoint",
            parameters: [],
            headers: [],
        };
    }

    render() {
        return (
            <Container>
                <Card sx={{ flexGrow: 1, position: "relative" }}>
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
                                    <Button
                                        size="large"
                                        onClick={() => {
                                            this.setState({ headerModalOpen: true });
                                        }}
                                    >
                                        Headers
                                    </Button>
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
                                        <Stack spacing={1} direction={"row"} key={index}>
                                            <TextField
                                                id={`param-name-input-${index}`}
                                                label="Name"
                                                variant="outlined"
                                                required
                                                value={this.state.parameters[index].name}
                                                onChange={this.updateParameterName.bind(this, index)}
                                            />
                                            <TextField
                                                id={`param-value-input-${index}`}
                                                label="Value"
                                                variant="outlined"
                                                required
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
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        defaultChecked
                                                        id={`param-required-input-${index}`}
                                                        value={this.state.parameters[index].required}
                                                        onChange={this.updateParameterRequired.bind(this, index)}
                                                    />
                                                }
                                                label="Required"
                                                labelPlacement="start"
                                            />
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
                                    {" "}
                                    <TextField
                                        id="outlined-number"
                                        label="Status"
                                        type="number"
                                        sx={{ maxWidth: "15em" }}
                                        required
                                    />
                                </Stack>
                                <LineNumberInput label="Body" />
                            </Stack>
                        </Stack>
                    </CardContent>
                    <CardActions sx={{ p: 2, pt: 0 }}>
                        <Button
                            sx={{
                                background: "linear-gradient(135deg, rgba(255,255,255,.1) 0%, rgba(27,179,169,1) 52% )",
                            }}
                            variant="contained"
                            color="primary"
                            onClick={this.save.bind(this)}
                        >
                            Save
                        </Button>
                    </CardActions>
                </Card>

                {/* Modal */}

                <Modal
                    open={this.state.headerModalOpen}
                    onClose={() => {
                        this.setState({ headerModalOpen: false });
                    }}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Card sx={modalStyle}>
                        <CardContent>
                            <Stack direction={"column"} gap={1}>
                                <TitleRowStack>
                                    <Typography id="modal-modal-title" variant="h3">
                                        Headers
                                    </Typography>
                                    <IconButton onClick={this.addHeader.bind(this)}>
                                        <AddIcon />
                                    </IconButton>
                                </TitleRowStack>
                                {this.state.headers.map((value, index) => {
                                    return (
                                        <Stack spacing={1} direction={"row"} key={index} flexWrap={"wrap"}>
                                            <TextField
                                                id={`header-name-input-${index}`}
                                                label="Name"
                                                variant="outlined"
                                                required
                                                value={value.name}
                                                onChange={this.updateHeaderName.bind(this, index)}
                                            />
                                            <TextField
                                                id={`header-value-input-${index}`}
                                                label="Value"
                                                variant="outlined"
                                                required
                                                value={value.value}
                                                onChange={this.updateHeaderValue.bind(this, index)}
                                            />
                                            <IconButton onClick={this.removeHeader.bind(this, index)}>
                                                <RemoveIcon />
                                            </IconButton>
                                        </Stack>
                                    );
                                })}
                            </Stack>
                        </CardContent>
                    </Card>
                </Modal>
            </Container>
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
            required: false,
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

    updateParameterRequired(index: number, evt: ChangeEvent<HTMLInputElement>, checked: boolean) {
        this.state.parameters[index].required = checked;
        this.setState({ parameters: this.state.parameters });
    }

    // #endregion

    // #region headers

    addHeader() {
        const newHeaders = this.state.headers.slice();
        newHeaders.push({
            name: "",
            value: "",
        });
        this.setState({ headers: newHeaders });
    }

    removeHeader(index: number) {
        const newHeaders = this.state.headers.slice();
        newHeaders.splice(index, 1);
        this.setState({ headers: newHeaders });
    }

    updateHeaderName(index: number, evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        this.state.headers[index].name = evt.target.value;
        this.setState({ headers: this.state.headers });
    }

    updateHeaderValue(index: number, evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        this.state.headers[index].value = evt.target.value;
        this.setState({ headers: this.state.headers });
    }

    // #endregion

    // #region Saving

    save() {}

    // #endregion
}

export default EndpointEditor;
