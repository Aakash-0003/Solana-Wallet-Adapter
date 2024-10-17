import { ed25519 } from '@noble/curves/ed25519';
import { useWallet } from '@solana/wallet-adapter-react';
import bs58 from 'bs58';

export function SignMessage() {
    const { publicKey, signMessage } = useWallet();

    async function onClick() {
        if (!publicKey) throw new Error('Wallet not connected!');
        if (!signMessage) throw new Error('Wallet does not support message signing!');

        const message = document.getElementById("message").value;
        const encodedMessage = new TextEncoder().encode(message);
        const signature = await signMessage(encodedMessage);

        if (!ed25519.verify(signature, encodedMessage, publicKey.toBytes())) throw new Error('Message signature invalid!');
        alert(`Success:Message signature: ${bs58.encode(signature)}`);
    };

    return (
        <div className='flex justify-center'>
            <input className="m-2 p-2 w-8/12 rounded-xl border border-cyan-600 bg-slate-800" id="message" type="text" placeholder="Message" />
            <button className="m-2 p-2 w-4/12 rounded-xl border border-sky-500 bg-cyan-600 text-slate-200 " onClick={onClick}>
                Sign Message
            </button>
        </div>
    );
};