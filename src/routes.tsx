import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import StakePage from "./pages/StakePage";
import LendPage from "./pages/LendPage";
import WithdrawalsPage from "./pages/WithdrawalsPage";
import WithdrawalsBox from "./components/WithdrawalsBox";
import ClaimsBox from "./components/ClaimsBox";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Layout from "./Layout";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "/dashboard",
    element: <Layout />,
    children: [
      { path: "stake", element: <StakePage /> },
      { path: "lend", element: <LendPage /> },
      {
        path: "withdrawals",
        element: <WithdrawalsPage />,
        children: [
          { index: true, element: <WithdrawalsBox /> },
          { path: "claims", element: <ClaimsBox /> },
        ],
      },
    ],
  },
  { path: "/privacy", element: <Privacy /> },
  { path: "/terms-of-use", element: <Terms /> },
  { path: "/contact", element: <Contact /> },
  { path: "/FAQ", element: <FAQ /> },
]);

export default router;
