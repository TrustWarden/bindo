import { useQuery } from "@tanstack/react-query";
import useWalletStore from "../data/walletStore";
import { ethers } from "ethers";

function useWallet() {
  const { saveAddress, walletAddress } = useWalletStore();

  const connectWallet = async (): Promise<string> => {
    if (!window.ethereum) {
      throw new Error("Web3 wallet not detected. Please install one.");
    }

    const provider = new ethers.BrowserProvider(
      window.ethereum as unknown as ethers.Eip1193Provider
    );
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();

    const address = await signer.getAddress();
    saveAddress(address);

    localStorage.setItem("cacheAddress", address);

    return address;
  };

  const {
    data: cacheAddress,
    error,
    isLoading,
  } = useQuery<string, Error>({
    queryKey: ["cacheAddress"],
    queryFn: async () => {
      const cachedAddress = localStorage.getItem("cacheAddress");
      if (cachedAddress) {
        return cachedAddress;
      }

      return connectWallet();
    },
    staleTime: 1000 * 60,
    refetchOnWindowFocus: false,
  });

  return { connectWallet, cacheAddress, walletAddress, error, isLoading };
}

export default useWallet;
