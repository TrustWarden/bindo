import { create } from "zustand";

interface WalletStore {
  walletAddress: string;
  selectedCoin: string;
  saveAddress: (_address: string) => void;
  resetAddress: () => void;
  setSelectedCoin: (coin: string) => void;
}

const useWalletStore = create<WalletStore>((set) => ({
  walletAddress: "",
  selectedCoin: "ETH",
  saveAddress: (address) => set(() => ({ walletAddress: address })),
  resetAddress: () => set(() => ({ walletAddress: "" })),
  setSelectedCoin: (coin) => set(() => ({ selectedCoin: coin })),
}));

export default useWalletStore;
