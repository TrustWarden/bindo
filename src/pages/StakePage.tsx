import StakeBox from "../components/StakeBox";
import Disclosures from "../components/Disclosures";

function StakePage() {
  return (
    <>
      <h1 className="flex justify-center font-thin -mb-3">Staking</h1>
      <span className="flex justify-center font-thin text-sm text-gray-500 mb-5">
        Stake ETH and receive stETH while staking
      </span>
      <StakeBox className="mb-10" />
      <Disclosures />
    </>
  );
}

export default StakePage;
