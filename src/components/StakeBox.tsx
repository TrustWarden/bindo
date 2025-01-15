import { FaEthereum } from "react-icons/fa";
import BoxStakePage from "./BoxStakePage";
import useWallet from "../hooks/useWallet";
import useRandomGas from "../hooks/useRandomGas";

interface Props {
  className?: string;
}

function StakeBox({ className }: Props) {
  const { connectWallet, walletAddress } = useWallet();

  return (
    <BoxStakePage className={walletAddress ? `${className} blur-sm` : ""}>
      {/* todo: add a box on top of blur one to show a tempo disabled message */}
      <div className="relative">
        <input
          className="w-full p-3 pl-12 min-h-14 text-sm placeholder:text-sm bg-slate-600 border border-gray-500 rounded-lg "
          type="number"
          placeholder="ETH amount"
        />
        <FaEthereum className="absolute inset-y-0 left-0 pl-3 top-3 text-3xl text-gray-400 items-center content-center" />
        <button className="absolute px-4 max-h-8 inset-y-0 right-3 top-3 text-sm rounded-lg bg-blue-800/30 text-sky-500/70">
          MAX
        </button>
      </div>

      {walletAddress ? (
        <button
          disabled
          className="w-full min-h-14 text-lg bg-gray-500 rounded-lg"
        >
          Stake
        </button>
      ) : (
        <button
          onClick={connectWallet}
          className="w-full min-h-14 text-lg bg-sky-500 rounded-lg"
        >
          Connect wallet
        </button>
      )}

      <div className="p-5 space-y-2 rounded-lg bg-gray-800/60">
        <h5 className="text-lg font-semibold">
          New way to support decentralization
        </h5>
        <p className="text-sm font-light">
          You can stake ETH in the DVV vault to get stETH rewards, gain points
          and help to decentralize the Bindo Protocol
        </p>
        <p className="text-sm font-extralight">
          stETH APR + Obol + SSV + Mellow Points
        </p>
        <p className="pt-4 pr-8 text-xs text-gray-600">
          Not financial advice. Info and APR are illustrative, actual rewards
          may vary. Vaults use carries risk. By proceeding, you'll be redirected
          to a third-party site.
        </p>
      </div>

      <div className="grid grid-cols-2 text-sm text-gray-400/60">
        <ul className="space-y-2">
          <li>You will receive</li>
          <li>Exchange rate</li>
          <li>Max transaction cost</li>
          <li>Reward fee</li>
        </ul>
        <ul className="text-end space-y-2">
          <li>0.0 stETH</li>
          <li>1 ETH = 1 stETH</li>
          <li>${useRandomGas()}</li>
          <li>10%</li>
        </ul>
      </div>
    </BoxStakePage>
  );
}

export default StakeBox;
