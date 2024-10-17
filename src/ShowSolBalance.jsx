import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export function ShowSolBalance() {
    const { connection } = useConnection();
    const wallet = useWallet();

    async function getBalance() {
        if (wallet.publicKey) {
            const balance = await connection.getBalance(wallet.publicKey);
            const sol = balance / LAMPORTS_PER_SOL;
            document.getElementById("balance").innerHTML = "Available Balance : " + sol.toPrecision(3) + " SOL";

        }
    } getBalance();

    if (wallet.publicKey) {
        return <div className="text-slate-200 text-center border border-cyan-600 mb-5 p-1 px-2">
            <div className="center" id="balance"></div>
        </div>
    }



}