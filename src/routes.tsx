import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import StakeMain from "./components/StakeMain";
import LendMain from "./components/LendMain";
import WithdrawalsMain from "./components/WithdrawalsMain";
import WithdrawalsBox from "./components/WithdrawalsBox";
import ClaimsBox from "./components/ClaimsBox";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/stake", element: <StakeMain /> },
  { path: "/lend", element: <LendMain /> },
  { path: "/privacy", element: <Privacy /> },
  { path: "/terms-of-use", element: <Terms /> },
  {
    path: "/withdrawals",
    element: <WithdrawalsMain />,
    children: [
      { index: true, element: <WithdrawalsBox /> },
      { path: "claims", element: <ClaimsBox /> },
    ],
  },
]);

export default router;
