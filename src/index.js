import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { SnackbarProvider } from "notistack";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

ReactDOM.render(
  <SnackbarProvider maxSnack={3} preventDuplicate>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </SnackbarProvider>,
  document.getElementById("root")
);
