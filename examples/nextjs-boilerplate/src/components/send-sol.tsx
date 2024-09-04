import React, { useEffect, useState } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { CANVAS_WALLET_NAME } from '@dscvr-one/canvas-wallet-adapter';
import {
  PublicKey,
  SystemProgram,
  Transaction,
  TransactionMessage,
  VersionedTransaction,
} from '@solana/web3.js';
import { useCanvasContext } from '@/context/canvas';

export default function SendSol() {
  const canvasContext = useCanvasContext();
  const walletContext = useWallet();
  const connectionContext = useConnection();
  const [successfulSignedTx, setSuccessfulSignedTx] = useState<string>();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [targetAddress, setTargetAddress] = useState<string>('');
  const [amount, setAmount] = useState<number>(0);

  // since wallets list not only `DSCVR Canvas` but also other extensions, we do a default select to DSCVR Canvas.
  useEffect(() => {
    if (walletContext.wallet?.adapter.name === CANVAS_WALLET_NAME) return;
    const exists = walletContext.wallets.find(
      (w) => w.adapter.name === CANVAS_WALLET_NAME,
    );
    if (exists) {
      walletContext.select(exists.adapter.name);
    }
  }, [walletContext, walletContext.wallets, walletContext.wallet]);

  const clear = () => {
    setErrorMessage(undefined);
    setSuccessfulSignedTx(undefined);
    setTargetAddress('');
    setAmount(0);
  };

  const createTransaction = async () => {
    if (!walletContext.publicKey) {
      setErrorMessage('Wallet not connected');
      return;
    }

    if (!targetAddress) {
      setErrorMessage('Please enter a target address');
      return;
    }

    if (!amount) {
      setErrorMessage('Please enter an amount');
      return;
    }

    const blockhash = await connectionContext.connection
      .getLatestBlockhash()
      .then((res) => res.blockhash);

    const tx = new Transaction();

    tx.add(
      SystemProgram.transfer({
        fromPubkey: walletContext.publicKey,
        toPubkey: new PublicKey(targetAddress),
        lamports: amount * 10 ** 9,
      }),
    );
    const messageV0 = new TransactionMessage({
      payerKey: walletContext.publicKey,
      recentBlockhash: blockhash,
      instructions: tx.instructions,
    }).compileToV0Message();

    return new VersionedTransaction(messageV0);
  };

  const submit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage(undefined);
    setSuccessfulSignedTx(undefined);

    const transaction = await createTransaction();
    if (!transaction) return;
    try {
      walletContext.sendTransaction(transaction, connectionContext.connection);
    } catch (e) {
      const error = e as Error;
      setErrorMessage(error.message);
    }
  };

  const openTransactionLink = () => {
    if (!successfulSignedTx) return;
    const url = `https://solana.fm/tx/${successfulSignedTx}`;
    canvasContext.client?.openLink(url);
  };

  return (
    <>
      {successfulSignedTx ? (
        <div className="flex flex-col justify-center items-center gap-6">
          <p className="text-2xl text-green-500">
            Transaction sent successfully
          </p>

          <a
            className="text-indigo-400 hover:underline text-indigo-300"
            onClick={openTransactionLink}
          >
            Open in Solana.fm
          </a>
          <button
            onClick={clear}
            className="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded"
          >
            Close
          </button>
        </div>
      ) : (
        <form
          className="flex flex-col justify-center items-center gap-6 p-10"
          onSubmit={submit}
        >
          <h2 className="text-2xl">Send Transaction</h2>
          {walletContext.publicKey && (
            <>
              <div className="flex flex-col md:flex-row items-center gap-4 w-full">
                <label className="min-w-28">Source Address</label>
                <span className="flex-1 text-gray-400 truncate text-ellipsis">
                  {walletContext.publicKey.toString()}
                </span>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-4 w-full">
                <label htmlFor="target" className="min-w-28">
                  Target address
                </label>
                <input
                  type="text"
                  name="target"
                  className="flex-1 text-gray-700 border border-gray-700 rounded-xl w-full p-3"
                  value={targetAddress}
                  onChange={(e) => setTargetAddress(e.target.value)}
                />
              </div>

              <div className="flex flex-col md:flex-row items-center gap-4 w-full">
                <label htmlFor="amount" className="min-w-28">
                  Amount (SOL)
                </label>
                <input
                  type="number"
                  name="amount"
                  className="flex-1 text-gray-700 border border-gray-700 rounded-xl w-full p-3"
                  step="0.000000001"
                  value={amount}
                  onChange={(e) => setAmount(parseFloat(e.target.value))}
                />
              </div>
            </>
          )}
          {errorMessage && (
            <p v-if="errorMessage" className="text-red-500">
              {errorMessage}
            </p>
          )}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            {walletContext.publicKey ? (
              <button
                type="submit"
                className="text-white font-bold py-2 px-4 border-b-4 rounded bg-amber-500 hover:bg-amber-400 border-amber-700 hover:border-amber-500"
              >
                Send
              </button>
            ) : (
              <button
                type="button"
                onClick={() => walletContext.connect()}
                className="text-white font-bold py-2 px-4 border-b-4 rounded bg-purple-500 hover:bg-purple-400 border-purple-700 hover:border-purple-500"
              >
                Connect
              </button>
            )}
          </div>
        </form>
      )}
    </>
  );
}
