import HeaderStake from "./HeaderStake";
import LendBox from "./LendBox";
import StickyFooter from "./StickyFooter";

function LendMain() {
  return (
    <>
      <div className="pb-10 min-h-screen bg-landing dark:bg-gradient-radial-small dark:from-darkBlue dark:to-niceBlack">
        <HeaderStake />

        {/* <DisableMessage className="inset-y-48" /> */}

        <div className="w-3/4 lg:w-2/5 mx-auto pt-7 lg:pt-16 items-center text-xl text-gray-900 dark:text-white space-y-3">
          <h1 className="flex justify-center font-thin -mb-3">Lending</h1>
          <span className="flex justify-center font-thin text-sm text-gray-500 mb-5">
            Lend WBTC and eran fees
          </span>
          <LendBox />
        </div>
      </div>
      <StickyFooter />
    </>
  );
}

export default LendMain;
