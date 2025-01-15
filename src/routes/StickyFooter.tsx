import { BsLightningCharge } from "react-icons/bs";
import { PiBankLight, PiHandWithdrawLight } from "react-icons/pi";

function StickyFooter() {
  return (
    <div className="flex flex-row justify-around sticky lg:hidden inset-x-0 bottom-0 text-white h-16 w-full bg-darkBlue border border-gray-500">
      <a href="/stake" className="flex items-center cursor-pointer">
        <BsLightningCharge className="mr-1" />
        Stake
      </a>
      <a href="/lend" className="flex items-center cursor-pointer">
        <PiBankLight className="mr-1" />
        Lend
      </a>
      <a href="/withdrawals" className="flex items-center cursor-pointer">
        <PiHandWithdrawLight className="mr-1" />
        Withdrawals
      </a>
    </div>
  );
}

export default StickyFooter;
