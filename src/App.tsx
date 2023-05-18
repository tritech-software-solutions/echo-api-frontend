import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./modules/header/Header";
import HomePage from "./modules/pages/home/HomePage";

function App() {
    return (
        <div className="app">
            <Router>
                <Header />
                <Routes>
                    <Route path={"/"} element={<HomePage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
