<script setup lang="ts">
import {
  Connection,
  PublicKey,
  SystemProgram,
  Transaction,
  TransactionMessage,
  VersionedTransaction,
} from '@solana/web3.js';
import { CANVAS_WALLET_NAME } from '@dscvr-one/canvas-wallet-adapter';
import { useWallet } from 'solana-wallets-vue';

const rpcEndpoint = 'https://api.devnet.solana.com';
const connection = new Connection(rpcEndpoint);
const targetAddress = ref<string>();
const amount = ref<number>();
const errorMessage = ref<string>();
const successfulSignedTx = ref<string>();

const { $canvasClient } = useNuxtApp();
const { select, connect, sendTransaction, wallet, wallets, publicKey } =
  useWallet();

const createTransaction = async () => {
  if (!publicKey.value) {
    errorMessage.value = 'Wallet not connected';
    return;
  }

  if (!targetAddress.value) {
    errorMessage.value = 'Please enter a target address';
    return;
  }

  if (!amount.value) {
    errorMessage.value = 'Please enter an amount';
    return;
  }

  const blockhash = await connection
    .getLatestBlockhash()
    .then((res) => res.blockhash);

  const tx = new Transaction();

  tx.add(
    SystemProgram.transfer({
      fromPubkey: publicKey.value,
      toPubkey: new PublicKey(targetAddress.value),
      lamports: amount.value * 10 ** 9,
    }),
  );
  const messageV0 = new TransactionMessage({
    payerKey: publicKey.value,
    recentBlockhash: blockhash,
    instructions: tx.instructions,
  }).compileToV0Message();

  return new VersionedTransaction(messageV0);
};

const clear = () => {
  errorMessage.value = '';
  successfulSignedTx.value = undefined;
  targetAddress.value = undefined;
  amount.value = undefined;
};

const submit = async () => {
  errorMessage.value = '';
  successfulSignedTx.value = undefined;
  const transaction = await createTransaction();
  if (!transaction) return;
  try {
    sendTransaction(transaction, connection);
  } catch (e) {
    const error = e as Error;
    errorMessage.value = error.message;
  }
};

const openTransactionLink = () => {
  if (!successfulSignedTx) return;
  const url = `https://solana.fm/tx/${successfulSignedTx}`;
  $canvasClient?.openLink(url);
};

onMounted(() => {
  if (wallet.value?.adapter.name === CANVAS_WALLET_NAME) return;
  const exists = wallets.value.find(
    (w) => w.adapter.name === CANVAS_WALLET_NAME,
  );
  if (exists) {
    select(exists.adapter.name);
  }
});
</script>

<template>
  <div
    v-if="successfulSignedTx"
    class="flex flex-col justify-center items-center gap-6"
  >
    <p class="text-2xl text-green-500">Transaction sent successfully</p>

    <a
      class="text-indigo-400 hover:underline text-indigo-300"
      @click="openTransactionLink"
    >
      Open in Solana.fm
    </a>
    <button
      class="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded"
      @click="clear"
    >
      Close
    </button>
  </div>
  <form
    v-else
    class="flex flex-col justify-center items-center gap-6"
    @submit.prevent="submit"
  >
    <h2 class="text-2xl">Send Transaction</h2>
    <template v-if="publicKey">
      <div class="flex flex-col md:flex-row items-center gap-4 w-full">
        <label class="min-w-28">Source Address</label>
        <span class="flex-1 text-gray-400 truncate text-ellipsis">{{
          publicKey.toString()
        }}</span>
      </div>

      <div class="flex flex-col md:flex-row items-center gap-4 w-full">
        <label for="target" class="min-w-28">Target address</label>
        <input
          type="text"
          name="target"
          class="flex-1 text-gray-700 border border-gray-700 rounded-xl w-full p-3"
          v-model="targetAddress"
        />
      </div>

      <div class="flex flex-col md:flex-row items-center gap-4 w-full">
        <label for="amount" class="min-w-28">Amount (SOL)</label>
        <input
          type="number"
          name="amount"
          class="flex-1 text-gray-700 border border-gray-700 rounded-xl w-full p-3"
          step="0.000000001"
          v-model="amount"
        />
      </div>
    </template>

    <p v-if="errorMessage" class="text-red-500">
      {{ errorMessage }}
    </p>

    <button
      v-if="publicKey"
      type="submit"
      class="text-white font-bold py-2 px-4 bg-green-500 rounded"
    >
      Send
    </button>
    <button
      v-else
      type="button"
      class="text-white font-bold py-2 px-4 bg-green-500 rounded"
      @click="connect"
    >
      Connect
    </button>
  </form>
</template>
