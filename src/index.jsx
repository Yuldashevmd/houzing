import React from "react";
import ReactDOM from "react-dom/client";
import Context from "./Context";
import "./index.css";
import Root from "./root/index";
import "antd/dist/antd.css";
import "react-alice-carousel/lib/alice-carousel.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Context>
      <Root />
    </Context>
  </React.StrictMode>
);
