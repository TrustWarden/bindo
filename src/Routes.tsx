import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import StakeMain from "./routes/StakeMain";
import LendMain from "./routes/LendMain";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/stake", element: <StakeMain /> },
  { path: "/lend", element: <LendMain /> },
]);

export default router;
