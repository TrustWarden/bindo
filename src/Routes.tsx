import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import StakeMain from "./routes/StakeMain";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/stake", element: <StakeMain /> },
]);

export default router;
