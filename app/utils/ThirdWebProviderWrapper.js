'use client';

import { Sepolia } from '@thirdweb-dev/chains';

import {
  metamaskWallet,
  ThirdwebProvider,
  coinbaseWallet,
  walletConnect,
} from '@thirdweb-dev/react';

const activeChain = Sepolia;

export default function ThirdWebProviderWrapper({ children }) {
  return (
    <ThirdwebProvider
      supportedWallets={[
        metamaskWallet({
          recommended: true,
        }),
        coinbaseWallet(),
        walletConnect(),
      ]}
      clientId={process.env.THIRDWEB_CLIENT_ID}
      activeChain={activeChain}
    >
      {children}
    </ThirdwebProvider>
  );
}