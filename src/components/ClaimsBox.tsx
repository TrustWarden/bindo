import useWallet from "../hooks/useWallet";
import BoxStakePage from "./BoxStakePage";

function ClaimsBox() {
  const { cacheAddress, connectWallet } = useWallet();

  return (
    <BoxStakePage>
      {cacheAddress ? (
        <span className="text-sm text-gray-300">
          You did not make request yet.
          <br /> First need to request to claims be avalaible after 7 days.
        </span>
      ) : (
        <>
          <span className="flex justify-center text-sm text-gray-300">
            Connect wallet to see your withdrawal requests
          </span>
          <button
            onClick={connectWallet}
            className="w-full min-h-14 text-lg bg-sky-500 rounded-lg"
          >
            Connect wallet
          </button>
        </>
      )}

      {/* <div className="grid grid-cols-2 text-sm text-gray-400/60">
        <ul className="space-y-2">
          <li>Max transaction cost</li>
        </ul>
        <ul className="text-end space-y-2">
          <li>${useRandomGas()}</li>
        </ul>
      </div> */}
    </BoxStakePage>
  );
}

export default ClaimsBox;
