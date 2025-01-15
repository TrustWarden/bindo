import { create } from "zustand";

interface WalletStore {
  walletAddress: string;
  saveAddress: (_address: string) => void;
  resetAddress: () => void;
}

const useWalletStore = create<WalletStore>((set) => ({
  walletAddress: "",
  saveAddress: (address) => set(() => ({ walletAddress: address })),
  resetAddress: () => set(() => ({ walletAddress: "" })),
}));

export default useWalletStore;
