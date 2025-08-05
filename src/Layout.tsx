import { Outlet } from "react-router-dom";
import HeaderStake from "./components/HeaderStake";
import StickyFooter from "./components/StickyFooter";

function Layout() {
  return (
    <>
      <div className="pb-10 min-h-screen bg-landing dark:bg-gradient-radial-small dark:from-darkBlue dark:to-niceBlack">
        <HeaderStake />

        <div className="w-3/4 lg:w-2/5 mx-auto pt-7 lg:pt-16 items-center text-xl text-gray-900 dark:text-white space-y-3">
          <Outlet />
        </div>
      </div>
      <StickyFooter />
    </>
  );
}

export default Layout;
