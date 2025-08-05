import { Outlet } from "react-router-dom";
import WithdrawalsTab from "../components/WithdrawalsTab";

function WithdrawalsPage() {
  return (
    <>
      <h1 className="flex justify-center font-thin -mb-3">Withdrawals</h1>
      <span className="flex justify-center font-thin text-sm text-gray-500 mb-5">
        Request ETH/WBTC withdrawal and claim your coins
      </span>

      <WithdrawalsTab />

      <Outlet />
    </>
  );
}

export default WithdrawalsPage;
