import { useState } from "react";
import { ethers } from "ethers";
import useWalletStore from "../data/walletStore";

function useWallet() {
  // const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { saveAddress, walletAddress } = useWalletStore();

  const connectWallet = async (): Promise<void> => {
    try {
      if (!window.ethereum) {
        setError(
          "Web3 wallet not detected. Please install one to use this feature."
        );
        return;
      }

      const provider = new ethers.BrowserProvider(
        window.ethereum as unknown as ethers.Eip1193Provider
      );
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();

      const address = await signer.getAddress();
      // setWalletAddress(address);
      saveAddress(address);
      setError(null);
    } catch (err) {
      setError("Failed to connect wallet. Please try again.");
      console.log(err);
    }
  };

  return { walletAddress, error, connectWallet };
}

export default useWallet;
