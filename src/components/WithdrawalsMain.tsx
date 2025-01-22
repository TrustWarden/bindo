import HeaderStake from "./HeaderStake";
import StickyFooter from "./StickyFooter";
import { Outlet } from "react-router-dom";
import WithdrawalsTab from "./WithdrawalsTab";

function WithdrawalsMain() {
  return (
    <>
      <div className="pb-10 min-h-screen  bg-landing dark:bg-gradient-radial-small dark:from-darkBlue dark:to-niceBlack">
        <HeaderStake />

        <div className="w-3/4 lg:w-2/5 mx-auto pt-7 lg:pt-16 items-center text-xl text-gray-900 dark:text-white space-y-3">
          <h1 className="flex justify-center font-thin -mb-3">Withdrawals</h1>
          <span className="flex justify-center font-thin text-sm text-gray-500 mb-5">
            Request ETH/WBTC withdrawal and claim your coins
          </span>

          <WithdrawalsTab />

          <Outlet />
        </div>
      </div>
      <StickyFooter />
    </>
  );
}

export default WithdrawalsMain;
