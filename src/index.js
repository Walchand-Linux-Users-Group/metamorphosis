import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { SnackbarProvider } from "notistack";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

ReactDOM.render(
  <SnackbarProvider maxSnack={3} preventDuplicate>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </SnackbarProvider>,
  document.getElementById("root")
);
