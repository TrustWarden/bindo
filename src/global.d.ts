export {};

declare global {
  interface Window {
    ethereum?: ethers.Eip1193Provider & {
      isMetaMask?: boolean;
    };
  }
}
