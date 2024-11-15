import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useMemo } from 'react';
import { clusterApiUrl } from '@solana/web3.js';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react';
import { CanvasProvider } from '@/context/canvas';

export default function App({ Component, pageProps }: AppProps) {
  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
  const network = WalletAdapterNetwork.Devnet;

  // You can also provide a custom RPC endpoint.
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  return (
    <CanvasProvider>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={[]}>
          <Component {...pageProps} />
        </WalletProvider>
      </ConnectionProvider>
    </CanvasProvider>
  );
}
