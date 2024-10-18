import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";

export function SendTokens() {

    const wallet = useWallet();
    const { connection } = useConnection();
    async function sendTokens() {
        let to = document.getElementById("to").value;
        let amount = document.getElementById("sol").value;
        const transaction = new Transaction();
        transaction.add(SystemProgram.transfer({
            fromPubkey: wallet.publicKey,
            toPubkey: new PublicKey(to),
            lamports: amount * LAMPORTS_PER_SOL,
        }));
        try {
            const sign = await wallet.sendTransaction(transaction, connection);
            console.log(sign);
            alert(`Transfer SUCCESS ${sign}`);

        } catch (err) {
            alert(console.log(err))
        }
        window.location.reload(false);

    }
    return <div className='flex justify-center'>
        <input className="m-2 p-2 rounded-xl border border-sky-500 bg-slate-800" type="text" placeholder="To" id="to"></input>
        <input className="m-2 p-2 w-20 rounded-xl border border-sky-500 bg-slate-800" type="text" placeholder="amount" id="sol"></input>
        <button className="m-2 p-2 w-24 rounded-xl border border-sky-500 bg-cyan-600 text-slate-200 " onClick={sendTokens}>Send Sol</button>
    </div>
}