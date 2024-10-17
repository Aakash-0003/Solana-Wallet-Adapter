import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';

import '@solana/wallet-adapter-react-ui/styles.css';
import { Airdrop } from './Airdrop';
import { SendTokens } from './SendTokens';
import { SignMessage } from './SignMessage';
import { ShowSolBalance } from './ShowSolBalance';

function App() {
  const RPC = "https://api.devnet.solana.com";
  return (
    //Connection Provider - Context Api provider which provides certain data to child components e.g. providing RPC URL for connection with Solana 
    //Wallet Provider Context API providing object of array of wallets detected in window object 
    <div className='bg-slate-800 text-cyan-600 grid place-content-center h-lvh	'>

      <ConnectionProvider endpoint={RPC}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <div className='rounded-3xl border border-cyan-600 p-12'>

              <div className='flex mb-9 justify-evenly' >

                < WalletMultiButton />
                <WalletDisconnectButton />
              </div>
              <div className='flex flex-col justify-evenly'>
                <ShowSolBalance />
                <Airdrop />
                <SignMessage />
                <SendTokens />
              </div>
            </div>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </div>
  );
}

export default App