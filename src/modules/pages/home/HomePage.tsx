import "./HomePage.css";

import Card from "../../general/Card/Card";
import React from "react";

import Background1 from "../../../assets/background1.png"
import Button from "../../general/Button/Button";


class HomePage extends React.Component {
    render() {
        return (
            <div className="home page">
                <img src={Background1} alt="Background1" className="background1" />
                <div>
                    <Card className="topLeft">
                        <h1 className="topleft header">Create your first API simulator</h1>
                        <p className="topleft description">
                            Create a locally hosted API that can be used for testing your application. Simulate any existing API without the fear of making too many unnecessary calls, or dealing with changing data. 
                        </p>
                        <Button />
                    </Card>
                    <Card className="bottomLeft">
                        <h1>View Your Current</h1>
                    </Card>
                </div>
                <Card className="bottomLeft">
                    <h1>Get insights</h1>
                </Card>
            </div>
        );
    }
}

export default HomePage;
