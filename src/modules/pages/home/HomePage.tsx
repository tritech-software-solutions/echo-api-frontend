import "./HomePage.css";

import Card from "../../general/Card/Card";
import React from "react";

import Background1 from "../../../assets/background1.png"
import { ReactComponent as EyeSvg } from '../../../assets/icons/eye-regular.svg';
import { ReactComponent as ChartSvg } from '../../../assets/icons/chart-simple-solid.svg';
import { ReactComponent as PlusSvg } from '../../../assets/icons/plus-solid.svg';
import GraphSvg from '../../../assets/graph.png';

import Button from "../../general/Button/Button";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
    
    buttonText = [
        "Create New Simulator",
        "View Current Simulations",
        "View Analytics"
    ]

    render() {
        return (
            <div className="home">
                <img src={Background1} alt="Background1" className="background1" />
                <div className="home-cards">
                    <div className="left-cards">
                        <Card>
                            <h1 className="card-header">Create Your First API Simulator</h1>
                            <p className="description">
                                Create a locally hosted API that can be used for testing your application. Simulate any existing API without the fear of making too many unnecessary calls, or dealing with changing data. 
                            </p>
                            <Link to="/endpoint" className="noSelect noDecoration headerTitle">
                                <Button
                                    text={this.buttonText[0]}
                                    hasText={true}
                                    icon={<PlusSvg className="plus-icon"/>} 
                                />
                            </Link>
                        </Card>
                        <Card>
                            <h1 className="card-header">View Your Current API Simulators</h1>
                            <p className="description">
                                View your created API simulators. Run for testing or make changes to your existing setups.
                            </p>
                            <Link to="/view" className="noSelect noDecoration headerTitle">
                                <Button 
                                    text={this.buttonText[1]}
                                    hasText={true} 
                                    icon={<EyeSvg className="eye-icon"/>}
                                    />
                            </Link>
                        </Card>
                    </div>
                    <Card>
                        <h1 className="card-header right-card">Get Insight Into How Your App Uses Your APIs</h1>
                        <div className="graph-svg">
                            <img src={GraphSvg} alt="GraphSvg" className="image"/>
                        </div>
                        <p className="description right-card">
                            Analytics are a window into how your application is interacting with the API without actually using the API. Gain critical insights into what endpoints your app is calling and how often it is making those calls. Great for debugging and verifying that your application is performing tasks as expected.
                        </p>
                        <Link to="/" className="noSelect noDecoration headerTitle">
                            <Button 
                                text={this.buttonText[2]} 
                                hasText={true}
                                icon={<ChartSvg className="chart-icon"/>}
                            />
                        </Link>
                    </Card>
                </div>
            </div>
        );
    }
}

export default HomePage;
