import BoxStakePage from "./BoxStakePage";
import ConnectButtonBox from "./ConnectButtonBox";
import useWallet from "../hooks/useWallet";

function ClaimsBox() {
  const { address } = useWallet();

  return (
    <BoxStakePage>
      {address ? (
        <span className="text-sm text-gray-300">
          You did not make request yet.
        </span>
      ) : (
        <>
          <span className="flex justify-center text-sm text-gray-300">
            Connect wallet to see your withdrawal requests
          </span>
          <ConnectButtonBox connectedTitle="Claim" />
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
