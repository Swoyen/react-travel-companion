import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { styled, ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
const theme = createTheme();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
