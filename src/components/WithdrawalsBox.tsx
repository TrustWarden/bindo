import BoxStakePage from "./BoxStakePage";
import Dropdown from "./Dropdown";
import useRandomNumber from "../hooks/useRandomGas";
// import useWalletStore from "../data/walletStore";
import ConnectButtonBox from "./ConnectButtonBox";
import useWallet from "../hooks/useWallet";

interface Props {
  className?: string;
}

function WithdrawalsBox({ className }: Props) {
  const targetAddresses = [
    "0x2fFc5CaC16c34498613bc2C370E128D69b4acaF1",
    "0x22B20C2b318e574Bd7a8875b9E295cF1839968DF",
  ];
  // const { selectedCoin } = useWalletStore();
  const { address } = useWallet();
  const randNum = useRandomNumber(8.93, 10.29);

  return (
    <>
      <BoxStakePage className={address ? `${className}` : ""}>
        <div className="relative">
          <input
            className="w-full p-3 pl-16 min-h-14 text-sm placeholder:text-smbg-gray-300 dark:bg-slate-600 border border-gray-500 rounded-lg "
            type="number"
            placeholder="Enter amount"
          />
          <Dropdown />
          {/* <button className="absolute px-2 lg:px-4 max-h-8 inset-y-0 right-3 top-3 text-sm rounded-lg bg-blue-800/30 text-gray-300 dark:text-sky-500/70">
            MAX
          </button> */}
        </div>

        <ConnectButtonBox connectedTitle="Request" />

        {targetAddresses.includes(address ?? "") && (
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
            {/* <p className="pt-4 pr-8 text-xs text-gray-400 dark:text-gray-600">
              Not financial advice. Info and APR are illustrative, actual
              rewards may vary. Vaults use carries risk.
            </p> */}
          </div>
          // <div className="p-5 space-y-2 rounded-lg bg-gray-300 dark:bg-gray-800/60">
          //   <h5 className="text-lg font-semibold">
          //     Your position in locked time.
          //   </h5>
          //   <p className="text-sm font-light">
          //     You need to wait until the locked stake period passed.
          //     <br /> Your appriximately unlock tokens will take place in 6
          //     months.
          //   </p>
          //   <p className="pt-4 pr-8 text-xs text-gray-400 dark:text-gray-600">
          //     Not financial advice. Info and APR are illustrative, actual
          //     rewards may vary. Vaults use carries risk.
          //   </p>
          // </div>
        )}

        {/* {address && address === targetAddress && (
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
                    <li>15 APR 2023</li>
                    <li>15 JUL 2025</li>
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
                    <li>15 APR 2023</li>
                    <li>15 JUL 2025</li>
                    <li>1 BTC = 1 WBTC</li>
                  </ul>
                </>
              )}
            </div>
          </BoxStakePage>
        )} */}

        {address && !targetAddresses.includes(address ?? "") && (
          <span className="flex justify-center text-lg font-light p-10">
            You have not staken your tokens
          </span>
        )}

        {!targetAddresses.includes(address ?? "") && (
          <div className="grid grid-cols-2 text-sm text-gray-400/60">
            <ul className="space-y-2">
              <li>Max transaction cost</li>
            </ul>
            <ul className="text-end space-y-2">
              <li>${randNum}</li>
            </ul>
          </div>
        )}
      </BoxStakePage>
    </>
  );
}

export default WithdrawalsBox;
