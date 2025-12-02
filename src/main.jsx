import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import router from "./Routes/Routes";
import { RouterProvider } from "react-router";
import WhatsAppButton from "./Components/Sections/WhatsAppButton";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WhatsAppButton/>
    <RouterProvider router={router} />
  </React.StrictMode>
);
