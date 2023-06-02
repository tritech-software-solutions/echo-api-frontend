import "./HomePage.css";

import React from "react";

import GraphImage from "../../../assets/graph2.png";

import AddIcon from "@mui/icons-material/Add";
import VisibilityIcon from "@mui/icons-material/Visibility";
import BarChartIcon from "@mui/icons-material/BarChart";

import { Link } from "react-router-dom";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, CssBaseline, Grid, Stack, Typography } from "@mui/material";

class HomePage extends React.Component {
    buttonText = ["Create New Simulator", "View Current Simulations", "View Analytics"];

    render() {
        return (
            <Container maxWidth="lg" sx={{ minHeight: "100%" }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Card>
                            <CardContent>
                                <Typography variant="h2" color="primary.main" sx={{ mb: 2 }}>
                                    Create Your Own API Simulator
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Create a locally hosted API that can be used for testing your application. Simulate any existing API
                                    without the fear of making too many unnecessary calls, or dealing with changing data.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button startIcon={<AddIcon />} color="secondary">
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
                                    Create a locally hosted API that can be used for testing your application. Simulate any existing API
                                    without the fear of making too many unnecessary calls, or dealing with changing data.
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
                                    Get Insight Into How Your App Uses Your APIs
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Analytics are a window into how your application is interacting with the API without actually using the
                                    API. Gain critical insights into what endpoints your app is calling and how often it is making those
                                    calls. Great for debugging and verifying that your application is performing tasks as expected.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button startIcon={<BarChartIcon />} color="secondary">
                                    Explore Analytics
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        );

        // return (
        //     <div className="home">
        //         <img src={Background1} alt="Background1" className="background1" />
        //         <div className="home-cards">
        //             <div className="left-cards">
        //                 <Card>
        //                     <h1 className="card-header">Create Your First API Simulator</h1>
        //                     <p className="description">
        //                         Create a locally hosted API that can be used for testing your application. Simulate any existing API without
        //                         the fear of making too many unnecessary calls, or dealing with changing data.
        //                     </p>
        //                     <Link to="/endpoint" className="noSelect noDecoration headerTitle">
        //                         <Button text={this.buttonText[0]} hasText={true} icon={<PlusSvg className="plus-icon" />} />
        //                     </Link>
        //                 </Card>
        //                 <Card>
        //                     <h1 className="card-header">View Your Current API Simulators</h1>
        //                     <p className="description">
        //                         View your created API simulators. Run for testing or make changes to your existing setups.
        //                     </p>
        //                     <Link to="/view" className="noSelect noDecoration headerTitle">
        //                         <Button text={this.buttonText[1]} hasText={true} icon={<EyeSvg className="eye-icon" />} />
        //                     </Link>
        //                 </Card>
        //             </div>
        //             <Card>
        //                 <h1 className="card-header right-card">Get Insight Into How Your App Uses Your APIs</h1>
        //                 <div className="graph-svg">
        //                     <img src={GraphSvg} alt="GraphSvg" className="image" />
        //                 </div>
        //                 <p className="description right-card">
        //                     Analytics are a window into how your application is interacting with the API without actually using the API.
        //                     Gain critical insights into what endpoints your app is calling and how often it is making those calls. Great for
        //                     debugging and verifying that your application is performing tasks as expected.
        //                 </p>
        //                 <Link to="/" className="noSelect noDecoration headerTitle">
        //                     <Button text={this.buttonText[2]} hasText={true} icon={<ChartSvg className="chart-icon" />} />
        //                 </Link>
        //             </Card>
        //         </div>
        //     </div>
        // );
    }
}

export default HomePage;
