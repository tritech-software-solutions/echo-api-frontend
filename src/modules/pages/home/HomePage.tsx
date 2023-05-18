import Card from "../../general/Card/Card";
import "./HomePage.css";

import React from "react";

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Card className="topLeft">
                        <h1>Create your first API simulator</h1>
                        ...
                    </Card>
                    <Card className="bottomLeft">
                        <h1>View Your Current</h1>
                        ...
                    </Card>
                </div>
                <Card className="bottomLeft">
                    <h1>Get insights</h1>
                    ...
                </Card>
            </div>
        );
    }
}

export default HomePage;
