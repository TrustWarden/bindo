import logoSky from "../assets/ethereum-logo-sky.png";
import { MdSunny } from "react-icons/md";
// import { FaMoon } from "react-icons/fa";
import { BsLightningCharge } from "react-icons/bs";
import { PiHandWithdrawLight } from "react-icons/pi";
import { PiBankLight } from "react-icons/pi";

function HeaderStake() {
  return (
    <header className="border-b border-gray-800">
      <nav className="mx-auto flex max-w-full justify-between items-center py-3 pr-2 sm:px-1 lg:px-8">
        <div className="flex">
          <a href="/" className="flex items-center">
            <img src={logoSky} className="max-w-24 max-h-24" />
            <span className="text-4xl text-neutral-100 relative -left-5 hidden lg:block">
              Bindo
            </span>
          </a>
        </div>

        <div className="hidden lg:flex space-x-16 text-white">
          <a className="flex items-center cursor-pointer">
            <BsLightningCharge className="mr-1" />
            Stake
          </a>
          <a className="flex items-center cursor-pointer">
            <PiBankLight className="mr-1" />
            Lend
          </a>
          <a className="flex items-center cursor-pointer">
            <PiHandWithdrawLight className="mr-1" />
            Withdrawals
          </a>
        </div>

        <div className="flex space-x-2 lg:space-x-4">
          <button className="bg-sky-500 py-2 px-4 lg:py-2 lg:px-4 min-h-10 rounded-lg text-neutral-50 font-bold hover:bg-sky-600">
            Connect wallet
          </button>
          <button className="bg-gray-500 py-2 px-4 lg:py-2 lg:px-4 min-h-10 rounded-lg text-neutral-50 font-bold hover:bg-gray-400">
            <MdSunny />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default HeaderStake;
