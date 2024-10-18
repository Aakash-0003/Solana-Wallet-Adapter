import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";


export function Airdrop() {


    const wallet = useWallet();
    const { connection } = useConnection();
    async function sendAirdrop() {
        let amount = document.getElementById("amount").value;
        const sign = await connection.requestAirdrop(wallet.publicKey, amount * LAMPORTS_PER_SOL);
        console.log(sign);
        alert("AIRDROP SUCCESS");
        window.location.reload(false);

    }
    return <div className='flex justify-center'>
        <input className="m-2 p-2 w-6/12 rounded-xl border border-sky-500 bg-slate-800 " type="text" placeholder="amount" id="amount"></input>
        <button className="m-2 p-2 w-6/12 rounded-xl border border-sky-500 bg-cyan-600 text-slate-200 " onClick={sendAirdrop}>Airdrop</button>
    </div>
}