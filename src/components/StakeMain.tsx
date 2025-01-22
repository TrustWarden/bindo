import HeaderStake from "./HeaderStake";
import StakeBox from "./StakeBox";
import StickyFooter from "./StickyFooter";
import Disclosures from "./Disclosures";

function StakeMain() {
  return (
    <>
      <div className="pb-10 min-h-screen bg-landing dark:bg-gradient-radial-small dark:from-darkBlue dark:to-niceBlack">
        <HeaderStake />

        <div className="w-3/4 lg:w-2/5 mx-auto pt-7 lg:pt-16 items-center text-xl text-gray-900 dark:text-white space-y-3">
          <h1 className="flex justify-center font-thin -mb-3">Staking</h1>
          <span className="flex justify-center font-thin text-sm text-gray-500 mb-5">
            Stake ETH and receive stETH while staking
          </span>
          <StakeBox className="mb-10" />
          <Disclosures />
        </div>
      </div>
      <StickyFooter />
    </>
  );
}

export default StakeMain;
