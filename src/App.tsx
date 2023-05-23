import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./modules/header/Header";
import HomePage from "./modules/pages/home/HomePage";
import EndpointEditor from "./modules/pages/endpointEditor/EndpointEditor";
import EndpointViewer from "./modules/pages/endpointViewer/EndpointViewer";
import Settings from "./modules/pages/settings/Settings";
import Analytics from "./modules/pages/analytics/Analytics";

function App() {
    return (
        <div className="app">
            <Router>
                <Header />
                <div className="app-content">
                    <Routes>
                        <Route path={"/"} element={<HomePage />} />
                        <Route path={"/endpoint"} element={<EndpointEditor />} />
                        <Route path={"/view"} element={<EndpointViewer />} />
                        <Route path={"/analytics"} element={<Analytics />} />
                        <Route path={"/settings"} element={<Settings />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
