import { useAppKit, useDisconnect } from "@reown/appkit/react";
import { useAppKitAccount } from "@reown/appkit/react";
import shortenAddress from "../utils/shortenAddress";

function useWallet() {
  const { open, close } = useAppKit();
  const {
    address,
    isConnected,
    allAccounts,
    caipAddress,
    status,
    embeddedWalletInfo,
  } = useAppKitAccount();
  const { disconnect } = useDisconnect();

  const shortAddress = address && shortenAddress(address);

  const handleDisconnect = async () => {
    await disconnect();
  };

  return {
    open,
    close,
    address,
    isConnected,
    allAccounts,
    caipAddress,
    status,
    embeddedWalletInfo,
    shortAddress,
    handleDisconnect,
  };
}

export default useWallet;
