import "./EndpointEditor.css";

import Card from "../../general/Card/Card";
import React from "react";
import Collapsible from "../../general/Collapsible/Collapsible";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
} from "@mui/material";

class EndpointEditor extends React.Component {
    render() {
        return (
            <Card className="endpoint-editor-card">
                <h1>Endpoint Title</h1>

                <Accordion>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <h2 className="noMargin">Parameters</h2>
                        <Button variant="contained" sx={{ marginLeft: 1 }}>
                            +
                        </Button>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box sx={{ display: "flex", gap: 1 }}>
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
                        </Box>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                        <Typography variant="h2">Response</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Accordion sx={{ width: "fit-content" }}>
                            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                <h3 className="noMargin">Status</h3>
                            </AccordionSummary>
                            <AccordionDetails>
                                <TextField id="outlined-number" label="Status" type="number" />
                            </AccordionDetails>
                        </Accordion>
                        <TextField id="response-content" label="Multiline" multiline rows={8} defaultValue="" />
                    </AccordionDetails>
                </Accordion>
            </Card>
        );
    }
}

export default EndpointEditor;
