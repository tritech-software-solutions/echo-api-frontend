import React, { Component } from "react";

type Props = {};
type State = {
    parameterCount: number;
    endpoint: string;
    status: number;
    response: string;
    parameters: Parameter[];
};
type Parameter = {
    name: string;
    required: boolean;
    value: string;
};

class TestApp extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            parameterCount: 0,
            endpoint: "",
            status: 200,
            response: "",
            parameters: [],
        };
    }

    addParameter = () => {
        const { parameterCount } = this.state;

        this.setState((prevState) => ({
            parameterCount: prevState.parameterCount + 1,
            parameters: [
                ...prevState.parameters,
                {
                    name: "",
                    required: false,
                    value: "",
                },
            ],
        }));
    };

    handleInputChange = (e: any, index: number, field: any) => {
        const { value, type, checked } = e.target;
        const { parameters } = this.state;

        const updatedParameters = [...parameters];
        updatedParameters[index] = {
            ...updatedParameters[index],
            [field]: type === "checkbox" ? checked : value,
        };

        this.setState({
            parameters: updatedParameters,
        });
    };

    handleSubmit = () => {
        const { endpoint, status, parameters, response } = this.state;

        fetch(`${window.location.origin}/add_endpoint`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                endpoint,
                status,
                parameters,
                response,
            }),
        })
            .then((response) => response.json())
            .then((response) => console.log(JSON.stringify(response)));
    };

    render() {
        const { parameterCount, parameters } = this.state;

        return (
            <div className="App">
                <p>
                    <label htmlFor="endpoint">Endpoint: </label>
                    <input
                        id="endpoint"
                        type="text"
                        name="endpoint"
                        value={this.state.endpoint}
                        onChange={(e) => this.setState({ endpoint: e.target.value })}
                    />
                    <br />
                    <label htmlFor="status">Status Code: </label>
                    <input
                        id="status"
                        type="number"
                        name="status"
                        value={this.state.status}
                        onChange={(e) => this.setState({ status: parseInt(e.target.value) })}
                    />
                    <br />
                    <label htmlFor="response">Response: </label>
                    <input
                        id="response"
                        type="text"
                        name="response"
                        value={this.state.response}
                        onChange={(e) => this.setState({ response: e.target.value })}
                    />
                    <br />
                </p>
                <p>
                    <div>
                        <b>Parameters</b>
                    </div>
                    <button onClick={this.addParameter}>Add Parameter</button>
                    <div id="parameterContainer">
                        {parameters.map((param, index) => (
                            <div key={index}>
                                <label htmlFor={`param${index}_name`}>Name: </label>
                                <input
                                    id={`param${index}_name`}
                                    type="text"
                                    name={`param${index}_name`}
                                    value={param.name}
                                    onChange={(e) => this.handleInputChange(e, index, "name")}
                                />
                                <label htmlFor={`param${index}_required`}>Required: </label>
                                <input
                                    id={`param${index}_required`}
                                    type="checkbox"
                                    name={`param${index}_required`}
                                    checked={param.required}
                                    onChange={(e) => this.handleInputChange(e, index, "required")}
                                />
                                <label htmlFor={`param${index}_value`}>Value: </label>
                                <input
                                    id={`param${index}_value`}
                                    type="text"
                                    name={`param${index}_value`}
                                    checked={param.required}
                                    onChange={(e) => this.handleInputChange(e, index, "value")}
                                />
                                <br />
                            </div>
                        ))}
                    </div>
                </p>

                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    }
}

export default TestApp;
