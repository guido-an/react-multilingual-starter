import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./i18nextInit";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Suspense fallback="Loading...">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>,
  rootElement
);
