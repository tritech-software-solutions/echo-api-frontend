import "./EndpointEditor.css";

import Card from "../../general/Card/Card";
import React from "react";
import Collapsible from "../../general/Collapsible/Collapsible";

class EndpointEditor extends React.Component {
    render() {
        return (
            <Card className="endpoint-editor-card">
                <h1>Endpoint Title</h1>
                <Collapsible title="Parameters">
                    <div>Parameters Here</div>
                </Collapsible>
                <Collapsible title="Status">
                    <div>Status Here</div>
                </Collapsible>
                <Collapsible title="Response">
                    <div>Response Here</div>
                </Collapsible>
            </Card>
        );
    }
}

export default EndpointEditor;
