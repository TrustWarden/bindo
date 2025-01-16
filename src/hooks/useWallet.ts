import { useQuery, useQueryClient } from "@tanstack/react-query";
import useWalletStore from "../data/walletStore";
import { ethers } from "ethers";
import ms from "ms";
import { useEffect } from "react";

function useWallet() {
  const queryClient = useQueryClient();
  const { saveAddress, resetAddress, walletAddress } = useWalletStore();

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
    queryClient.setQueryData(["cacheAddress"], address);

    return address;
  };

  const disconnectWallet = (): void => {
    resetAddress();
    localStorage.removeItem("cacheAddress");
    queryClient.removeQueries();
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
    staleTime: ms("1d"),
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    const cachedAddress = localStorage.getItem("walletAddress");
    if (cachedAddress) {
      queryClient.setQueryData(["walletAddress"], cachedAddress);
    }
  }, [queryClient]);

  return {
    disconnectWallet,
    connectWallet,
    cacheAddress,
    walletAddress,
    error,
    isLoading,
  };
}

export default useWallet;
