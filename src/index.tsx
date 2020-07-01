import "regenerator-runtime/runtime";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import store from "./store";
import Root from "./Root";
import theme from "./theme";

render(
    <MuiThemeProvider theme={theme}>
        <Router>
            <Provider store={store}>
                <CssBaseline />
                <Root />
            </Provider>
        </Router>
    </MuiThemeProvider>,
    document.getElementById("root")
);
