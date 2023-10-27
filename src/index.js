import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "./styles/common.scss";
import "./styles/utilities.scss";
import "./styles/screen-media-query.scss";
import { RouterProvider } from "react-router-dom";

import { router } from "./routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
