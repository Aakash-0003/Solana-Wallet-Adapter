# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
SOLANA WALLET ADAPTER-
Functions-
1- Connect/Disconnect Wallet 
2-Airdrop Devnet SOL
3-Show SOL Balance
4-Send SOL 
5- Sign Message

Libraries used-
https://github.com/anza-xyz/wallet-adapter

@solana/wallet-adapter-base \
    @solana/wallet-adapter-react \
    @solana/wallet-adapter-react-ui \
    @solana/wallet-adapter-wallets \
    @solana/web3.js 

Working-

***** Context API- Context API provides data to it's child components - here -
ConnectionProvider- provides RPC connection object and methods - useConnection hook
Wallet Provider- provides wallet and wallet methods- useWallet Hook
------------------------------------------------------------------------------------------------------------------
AIRDROP
- `@solana/web3.js` provides you with a `requestAirdrop` function.
- You can get the `current users` public key using the `useWallet` hook.

------------------------------------------------------------------------------------------------------------------
Show Balance
- import connection and wallet hook (get public key and connection url)
-call blockchain via connection to read balance of user

------------------------------------------------------------------------------------------------------------------

Send Token
- create a transaction from solana web3.js object 
-adding one system program instruction to transfer solana giving sender and reciepient address and sol amount.
-sending this transaction through wallet to the connection 
------------------------------------------------------------------------------------------------------------------

Sign Message
- To verify the ownership of wallet or signing the user via wallet
- SIGNING a MESSAGE with PRIVATE KEY from your wallet -> can be verified by decrypting the SIGNATURE with your PUBLIC KEY at backend and get MESSAGE 

-getting message from user and converting to byte array 
- signing the converted message with wallet via signMessage method of wallet
- verifying with ed25519 library by sending SIGNATURE,MESSAGE to compare decrypted message with,PUBLICKEY
