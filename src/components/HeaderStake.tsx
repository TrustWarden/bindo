import logoSky from "../assets/ethereum-logo-sky.png";
import { BsLightningCharge } from "react-icons/bs";
import { PiHandWithdrawLight } from "react-icons/pi";
import { PiBankLight } from "react-icons/pi";
import { BiWalletAlt } from "react-icons/bi";
import DisconnectDropdown from "./DisconnectDropdown";
import DarkModeButton from "./DarkModeButton";
import useWallet from "../hooks/useWallet";
import { Link } from "react-router-dom";

function HeaderStake() {
  const { open, isConnected } = useWallet();

  return (
    <header className="border-b border-gray-800">
      <nav className="mx-auto flex max-w-full justify-between items-center py-3 pr-2 sm:px-1 lg:px-8">
        <div className="flex">
          <a href="/" className="flex items-center">
            <img src={logoSky} className="max-w-24 max-h-24" />
            <span className="text-4xl text-bg-gray-700 dark:text-neutral-100 relative -left-5 hidden lg:block">
              Bindo
            </span>
          </a>
        </div>

        <div className="hidden lg:flex space-x-16 text-gray-900 dark:text-white">
          <Link
            to="/dashboard/stake"
            className="flex items-center cursor-pointer"
          >
            <BsLightningCharge className="mr-1" />
            Stake
          </Link>
          <Link
            to="/dashboard/lend"
            className="flex items-center cursor-pointer"
          >
            <PiBankLight className="mr-1" />
            Lend
          </Link>
          <Link
            to="/dashboard/withdrawals"
            className="flex items-center cursor-pointer"
          >
            <PiHandWithdrawLight className="mr-1" />
            Withdrawals
          </Link>
        </div>

        <div className="flex space-x-2 lg:space-x-4">
          {isConnected ? (
            <>
              <DisconnectDropdown />
            </>
          ) : (
            <>
              <button
                onClick={() => open()}
                className="flex bg-sky-500 py-2 px-4 lg:py-2 lg:px-4 min-h-10 rounded-lg text-neutral-50 font-bold hover:bg-sky-600"
              >
                <BiWalletAlt className="mt-1 mr-1" />
                <span>Connect</span>
              </button>
            </>
          )}
          <DarkModeButton />
        </div>
      </nav>
    </header>
  );
}

export default HeaderStake;
