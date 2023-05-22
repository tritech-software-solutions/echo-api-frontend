import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./modules/header/Header";
import HomePage from "./modules/pages/home/HomePage";
import EndpointEditor from "./modules/pages/endpointEditor/EndpointEditor";

function App() {
    return (
        <div className="app">
            <Router>
                <Header />
                <div className="app-content">
                    <Routes>
                        <Route path={"/"} element={<HomePage />} />
                        <Route path={"/endpoint"} element={<EndpointEditor />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
