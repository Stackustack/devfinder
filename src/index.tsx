import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AppProvider } from "./store/AppProvider";
import { ThemeProvider } from "./store/Theme/useTheme";
import ThemeHeaders from "./store/Theme/ThemeHeaders";
import { ProfileResultProvider } from "./store/Profile/useProfileResult";

ReactDOM.render(
  <React.StrictMode>
    <ProfileResultProvider>
      <ThemeProvider>
        <AppProvider>
          <ThemeHeaders />
          <App />
        </AppProvider>
      </ThemeProvider>
    </ProfileResultProvider>
  </React.StrictMode>,
  document.getElementById("root")
);


