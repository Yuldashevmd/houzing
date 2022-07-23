import React from "react";
import ReactDOM from "react-dom/client";
import Context from "./Context";
import "./index.css";
import Root from "./root/index";
import { QueryClient, QueryClientProvider } from "react-query";
import "antd/dist/antd.css";
import "react-alice-carousel/lib/alice-carousel.css";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Context>
        <Root />
      </Context>
    </QueryClientProvider>
  </React.StrictMode>
);
