import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AppKitProvider } from "./components/AppkitProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppKitProvider>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </AppKitProvider>
  </StrictMode>
);
