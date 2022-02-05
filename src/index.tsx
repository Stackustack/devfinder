import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AppProvider } from "./store/AppProvider";
import { ThemeProvider } from "./store/Theme/useTheme";
import ThemeHeaders from "./store/Theme/ThemeHeaders";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <AppProvider>
        <ThemeHeaders />
        <App />
      </AppProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);


