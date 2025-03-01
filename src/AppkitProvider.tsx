import { createAppKit } from "@reown/appkit/react";

import { WagmiProvider } from "wagmi";
import { mainnet, arbitrum, base } from "@reown/appkit/networks";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { ReactNode } from "react";

// 0. Setup queryClient
const queryClient = new QueryClient();

// 1. Get projectId from https://cloud.reown.com
const projectId = "d9ca7d0b839ebf25b859cb5a29b721f2";

// 2. Create a metadata object - optional
const metadata = {
  name: "Bindo",
  description: "Bindo fi",
  url: "https://bindo.vercel.app", // origin must match your domain & subdomain
  icons: ["https://assets.reown.com/reown-profile-pic.png"],
};

// 3. Set the networks
const networks = [mainnet, arbitrum, base];

// 4. Create Wagmi Adapter
const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: true,
});

// 5. Create modal
createAppKit({
  adapters: [wagmiAdapter],
  networks: [mainnet, arbitrum, base],
  defaultNetwork: mainnet,
  projectId,
  metadata,
  privacyPolicyUrl: "https://www.optimism.io/attestation-terms",
  termsConditionsUrl: "https://www.optimism.io/gateway-terms",
  features: {
    analytics: true, // Optional - defaults to your Cloud configuration
    connectMethodsOrder: ["wallet"],
  },
});

interface Props {
  children: ReactNode;
}

export function AppKitProvider({ children }: Props) {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
