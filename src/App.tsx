import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./modules/header/Header";
import HomePage from "./modules/pages/home/HomePage";
import EndpointEditor from "./modules/pages/endpointEditor/EndpointEditor";
import EndpointViewer from "./modules/pages/endpointViewer/EndpointViewer";
import Settings from "./modules/pages/settings/Settings";
import Analytics from "./modules/pages/analytics/Analytics";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const lightTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#3b3c8d",
            light: "#494da2",
            dark: "#27216b",
            contrastText: "#FFFFFF",
        },
        secondary: {
            main: "#1bb3a9",
            light: "#a9deda",
            dark: "#009283",
            contrastText: "#FFFFFF",
        },
        error: {
            main: "#db3633",
            light: "#e6504d",
            dark: "#bc2626",
            contrastText: "#FFFFFF",
        },
        success: {
            main: "#26bc26",
            light: "#76d170",
            dark: "#009a0a",
            contrastText: "#FFFFFF",
        },
        neutral: {
            main: "#64748B",
            contrastText: "#FFFFFF",
        },
    },
    typography: {
        fontFamily: "Roboto, Jaldi, Viga",
        h1: {},
    },
});

declare module "@mui/material/styles" {
    interface Palette {
        neutral: Palette["primary"];
    }

    interface PaletteOptions {
        neutral?: PaletteOptions["primary"];
    }
}

const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#3b3c8d",
            light: "#494da2",
            dark: "#27216b",
            contrastText: "#FFFFFF",
        },
        secondary: {
            main: "#1bb3a9",
            light: "#a9deda",
            dark: "#009283",
            contrastText: "#FFFFFF",
        },
    },
});

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
