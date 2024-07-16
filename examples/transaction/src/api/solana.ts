import {
  Connection,
  PublicKey,
  SystemProgram,
  Transaction,
  TransactionMessage,
  VersionedTransaction,
  clusterApiUrl,
  type Cluster
} from '@solana/web3.js'

export const getTransactionDetails = (cluster: Cluster, transactionId: string) => {
  const connection = new Connection(clusterApiUrl(cluster))
  return connection.getParsedTransaction(transactionId, {
    commitment: 'confirmed',
    maxSupportedTransactionVersion: 0
  })
}

export const createSendSolTransaction = async (
  cluster: Cluster,
  amount: number,
  fromPubKey: PublicKey,
  toPubKey: PublicKey,
  appUrl?: string
) => {
  const connectionEndpoint = appUrl ?? clusterApiUrl(cluster)
  const connection = new Connection(connectionEndpoint)
  const blockhash = await connection.getLatestBlockhash().then((res) => res.blockhash)

  const tx = new Transaction()

  tx.add(
    SystemProgram.transfer({
      fromPubkey: fromPubKey,
      toPubkey: toPubKey,
      lamports: amount * 10 ** 9
    })
  )
  const messageV0 = new TransactionMessage({
    payerKey: fromPubKey,
    recentBlockhash: blockhash,
    instructions: tx.instructions
  }).compileToV0Message()

  return new VersionedTransaction(messageV0)
}
