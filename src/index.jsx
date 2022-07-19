import React from "react";
import ReactDOM from "react-dom/client";
import Context from "./Context";
import "./index.css";
import Root from "./root/index";
import "antd/dist/antd.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Context>
      <Root />
    </Context>
  </React.StrictMode>
);
