<script setup lang="ts">
import { ref } from 'vue';
import type { CanvasClient, CanvasInterface } from '@dscvr-one/canvas-client-sdk';
import * as bs58 from 'bs58';
import { createSendSolTransaction } from '../api/solana';
import type { TokenType } from '../api/types';
import { PublicKey, type Cluster } from '@solana/web3.js';
import { validateHostMessage } from '@/api/dscvr';

type ClusterInfo = {
  name: string;
  cluster: Cluster;
  chainId: string;
  appUrl?: string;
};

const props = defineProps<{
  canvasClient: CanvasClient;
}>();

const emit = defineEmits<{
  (e: 'success', signedTx: string): void;
}>();

const clusterList: ClusterInfo[] = [
  { name: 'Devnet', cluster: 'devnet', chainId: 'solana:103' },
  {
    name: 'Mainnet',
    cluster: 'mainnet-beta',
    chainId: 'solana:101',
    appUrl: import.meta.env.VITE_SOLANA_MAINNET_CLUSTER
  }
];
const clusterInfo = ref<ClusterInfo>(clusterList[0]);
const sourceAddress = ref<string>();
const targetAddress = ref<string>();
const amount = ref<number>();
const token = ref<TokenType>('SOL');
const errorMessage = ref<string>();
const successfulSignedTx = ref<string>();

const openTransactionLink = () => {
  if (!successfulSignedTx.value) return;
  const url = `https://solana.fm/tx/${successfulSignedTx.value}`;
  props.canvasClient.openLink(url);
};

const createTx = async (
  response: CanvasInterface.User.ConnectWalletResponse
): Promise<CanvasInterface.User.UnsignedTransaction | undefined> => {
  const isValidResponse = await validateHostMessage(response);
  if (!isValidResponse) {
    errorMessage.value = 'Security error';
    return;
  }

  if (!response.untrusted.success) {
    errorMessage.value = 'Failed to connect wallet';
    return;
  }
  if (!targetAddress.value || !amount.value || !token.value) {
    errorMessage.value = 'Please fill out all fields';
    return;
  }
  sourceAddress.value = response.untrusted.address;
  const sourceAddressPublicKey = new PublicKey(sourceAddress.value);
  const targetAddressPublicKey = new PublicKey(targetAddress.value);
  const transaction = await createSendSolTransaction(
    clusterInfo.value.cluster,
    amount.value,
    sourceAddressPublicKey,
    targetAddressPublicKey,
    clusterInfo.value.appUrl
  );

  if (!transaction) {
    errorMessage.value = 'Failed to create send transaction';
    return;
  }

  const unsignedTx = bs58.encode(transaction.serialize());

  return {
    unsignedTx
  };
};

const sendTransaction = async () => {
  const response = await props.canvasClient.connectWalletAndSendTransaction(
    clusterInfo.value.chainId,
    createTx
  );

  if (!response) {
    errorMessage.value = 'Transaction not executed';
    return;
  }

  const isValidResponse = await validateHostMessage(response);
  if (!isValidResponse) {
    errorMessage.value = 'Security error';
    return;
  }

  if (response.untrusted.success) {
    successfulSignedTx.value = response.untrusted.signedTx;
    emit('success', response.untrusted.signedTx);
  } else if (response.untrusted.errorReason === 'user-cancelled') {
    errorMessage.value = 'User cancelled transaction';
  } else {
    errorMessage.value = response?.untrusted.error;
  }
};

const clear = () => {
  errorMessage.value = '';
  successfulSignedTx.value = undefined;
  sourceAddress.value = undefined;
  targetAddress.value = undefined;
  amount.value = undefined;
  clusterInfo.value = clusterList[0];
};

const submit = () => {
  errorMessage.value = '';
  successfulSignedTx.value = undefined;
  sendTransaction();
};
</script>

<template>
  <div v-if="successfulSignedTx" class="flex flex-col justify-center items-center gap-6">
    <p class="text-2xl text-green-500">Transaction sent successfully</p>

    <a class="text-indigo-400 hover:underline text-indigo-300" @click="openTransactionLink">
      Open in Solana.fm
    </a>
    <button
      @click="clear"
      class="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded"
    >
      Close
    </button>
  </div>
  <form
    v-else
    class="flex flex-col justify-center items-center gap-6 w-screen p-10"
    @submit.prevent="submit"
  >
    <h2 class="text-2xl">Send Transaction</h2>
    <div v-if="sourceAddress" class="flex items-center gap-4 w-full">
      <label class="min-w-28">Source Address</label>
      <span class="flex-1 text-gray-400">{{ sourceAddress }}</span>
    </div>

    <div class="flex flex-col md:flex-row items-center gap-4 w-full">
      <label for="target" class="min-w-28">Target address</label>
      <input
        type="text"
        name="target"
        class="flex-1 text-gray-700 border border-gray-700 rounded-xl w-full"
        v-model="targetAddress"
      />
    </div>

    <div class="flex flex-col md:flex-row items-center gap-4 w-full">
      <label for="amount" class="min-w-28">Amount (SOL)</label>
      <input
        type="number"
        name="amount"
        class="flex-1 text-gray-700 border border-gray-700 rounded-xl w-full"
        step="0.000000001"
        v-model="amount"
      />
    </div>
    <p v-if="errorMessage" class="text-red-500">{{ errorMessage }}</p>
    <div class="flex flex-col md:flex-row gap-6 items-center">
      <button
        v-for="clusterItem in clusterList"
        :key="clusterItem.cluster"
        type="submit"
        class="text-white font-bold py-2 px-4 border-b-4 rounded"
        :class="
          clusterItem.cluster === 'mainnet-beta'
            ? 'bg-amber-500 hover:bg-amber-400 border-amber-700 hover:border-amber-500'
            : 'bg-gray-500 hover:bg-gray-400 border-gray-700 hover:border-gray-500'
        "
        @click="clusterInfo = clusterItem"
      >
        Send ({{ clusterItem.name }})
      </button>
    </div>
  </form>
</template>
