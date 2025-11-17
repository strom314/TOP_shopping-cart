import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.jsx";
import "./index.css";
import "./font.css"

import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import routes from "./Router.jsx";

const router = createBrowserRouter(routes);
{
  /* <App /> */
}
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
