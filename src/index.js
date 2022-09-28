import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <img
      id="logo"
      src="https://res.cloudinary.com/yoav-cloud/image/upload/v1587564735/rpldy/logo/react-uploady-text-logo-light.png"
    />
    <App />
  </React.StrictMode>,
  rootElement
);
