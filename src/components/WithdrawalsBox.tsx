import BoxStakePage from "./BoxStakePage";
import useWallet from "../hooks/useWallet";
import Dropdown from "./Dropdown";
import useRandomGas from "../hooks/useRandomGas";
import useWalletStore from "../data/walletStore";

interface Props {
  className?: string;
}

function WithdrawalsBox({ className }: Props) {
  // const staked = {
  //   ethAmount: 42.18,
  //   btcAmount: 3.026,
  //   startDate: "18 JUN 2021",
  //   endDate: "17 JUN 2025",
  // };
  const targetAddress = "0x85647A4c95da82A03018ac9A69f6344965A7631C";

  const { cacheAddress, connectWallet } = useWallet();
  const { selectedCoin } = useWalletStore();

  return (
    <>
      <BoxStakePage className={cacheAddress ? `${className}` : ""}>
        <div className="relative">
          <input
            className="w-full p-3 pl-16 min-h-14 text-sm placeholder:text-sm bg-slate-600 border border-gray-500 rounded-lg "
            type="number"
            placeholder="Enter amount"
          />
          <Dropdown />
          <button className="absolute px-4 max-h-8 inset-y-0 right-3 top-3 text-sm rounded-lg bg-blue-800/30 text-sky-500/70">
            MAX
          </button>
        </div>

        {cacheAddress ? (
          <>
            <button
              disabled
              className="w-full min-h-14 text-lg bg-gray-500 rounded-lg"
            >
              Request
            </button>

            {cacheAddress === "0x85647A4c95da82A03018ac9A69f6344965A7631C" && (
              <div className="p-5 space-y-2 rounded-lg bg-gray-800/60">
                <h5 className="text-lg font-semibold">
                  Your position in locked time.
                </h5>
                <p className="text-sm font-light">
                  You need to wait until the locked stake period passed.
                  <br /> Your appriximately unlock tokens will be take place in
                  7 months.
                </p>
                <p className="pt-4 pr-8 text-xs text-gray-600">
                  Not financial advice. Info and APR are illustrative, actual
                  rewards may vary. Vaults use carries risk.
                </p>
              </div>
            )}
          </>
        ) : (
          <button
            onClick={connectWallet}
            className="w-full min-h-14 text-lg bg-sky-500 rounded-lg"
          >
            Connect wallet
          </button>
        )}

        {cacheAddress && cacheAddress === targetAddress && (
          <BoxStakePage className="min-w-full bg-gradient-to-br from-sky-600 to-indigo-500">
            <span className="flex justify-center text-sm font-semibold text-gray-300">
              Your {selectedCoin ? selectedCoin + "'s" : ""} still locked
            </span>

            <div className="grid grid-cols-2 text-sm text-gray-300/70">
              {selectedCoin === "ETH" ? (
                <>
                  <ul className="space-y-2">
                    <li>Stake amount</li>
                    <li>Staked date</li>
                    <li>Unlock date</li>
                    <li>Exchange rate</li>
                  </ul>
                  <ul className="text-end space-y-2">
                    <li>42.18 ETH</li>
                    <li>18 JUN 2021</li>
                    <li>17 JUN 2025</li>
                    <li>1 ETH = 1 stETH</li>
                  </ul>
                </>
              ) : (
                <>
                  <ul className="space-y-2">
                    <li>Stake amount</li>
                    <li>Staked date</li>
                    <li>Unlock date</li>
                    <li>Exchange rate</li>
                  </ul>
                  <ul className="text-end space-y-2">
                    <li>3.026 WBTC</li>
                    <li>18 JUN 2021</li>
                    <li>17 JUN 2025</li>
                    <li>1 BTC = 1 WBTC</li>
                  </ul>
                </>
              )}
            </div>
          </BoxStakePage>
        )}

        {cacheAddress && cacheAddress !== targetAddress && (
          <span className="flex justify-center text-lg font-light p-10">
            You have not staken your tokens
          </span>
        )}

        <div className="grid grid-cols-2 text-sm text-gray-400/60">
          <ul className="space-y-2">
            <li>Max transaction cost</li>
          </ul>
          <ul className="text-end space-y-2">
            <li>${useRandomGas()}</li>
          </ul>
        </div>
      </BoxStakePage>
    </>
  );
}

export default WithdrawalsBox;
