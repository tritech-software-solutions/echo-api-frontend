import "./HomePage.css";

import React from "react";

import GraphImage from "../../../assets/graph2.png";
import ArrowsImage from "../../../assets/arrows.png";

import VisibilityIcon from "@mui/icons-material/Visibility";
import BarChartIcon from "@mui/icons-material/BarChart";

import { Button, Card, CardActions, CardContent, Container, Grid, Typography } from "@mui/material";

class HomePage extends React.Component {
    buttonText = ["Create New Simulator", "View Current Simulations", "View Analytics"];

    render() {
        return (
            <Container maxWidth="lg" sx={{ minHeight: "100%" }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Card
                            sx={{
                                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.10)), url(${ArrowsImage})`,
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "120%",
                                backgroundPositionX: -33,
                            }}
                        >
                            <CardContent>
                                <Typography variant="h2" color="primary.main" sx={{ mb: 2 }}>
                                    Create Your Own API Simulator
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Create a locally hosted API that can be used for testing your application. Simulate any
                                    existing API without the fear of making too many unnecessary calls, or dealing with changing
                                    data.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    sx={{
                                        background: "linear-gradient(135deg, rgba(255,255,255,.1) 0%, rgba(27,179,169,1) 52% )",
                                    }}
                                    variant="contained"
                                    color="primary"
                                >
                                    Create New Simulator
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Card>
                            <CardContent>
                                <Typography variant="h2" color="primary.main" sx={{ mb: 2 }}>
                                    View Your Current API Simulators
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Create a locally hosted API that can be used for testing your application. Simulate any
                                    existing API without the fear of making too many unnecessary calls, or dealing with changing
                                    data.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button startIcon={<VisibilityIcon />} color="secondary">
                                    View Current Simulations
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Card
                            sx={{
                                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.10)), url(${GraphImage})`,
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "120%",
                                backgroundPositionY: 30,
                            }}
                        >
                            <CardContent>
                                <Typography variant="h2" color="primary.main" sx={{ mb: 2 }}>
                                    Documentation
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Analytics are a window into how your application is interacting with the API without actually
                                    using the API. Gain critical insights into what endpoints your app is calling and how often it
                                    is making those calls. Great for debugging and verifying that your application is performing
                                    tasks as expected.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button startIcon={<BarChartIcon />} color="secondary">
                                    Explore Documentation
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}

export default HomePage;
