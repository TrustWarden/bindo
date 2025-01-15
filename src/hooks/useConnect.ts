import { useState } from "react";
import useWalletStore from "../data/walletStore";
import { ethers } from "ethers";

const useConnect = () => {
  const [error, setError] = useState<string | null>(null);
  const { saveAddress, walletAddress } = useWalletStore();

  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        setError("Need to install a web3 wallet.");
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
    } catch (err) {
      setError("Failed to connect wallet.");
      console.error(err);
    }
  };

  return { connectWallet, walletAddress, error };
};

export default useConnect;
