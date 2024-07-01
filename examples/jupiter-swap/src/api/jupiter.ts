import {
  type PublicKey,
  VersionedTransaction,
  type Cluster,
  clusterApiUrl,
  Connection
} from '@solana/web3.js'
import { Buffer } from 'buffer'
import type { JupiterQuoteResponse, JupiterSwapResponse, Token, TokenType } from './types'
import { tokens } from './tokens'

const getApiUrl = () => {
  return 'https://quote-api.jup.ag/v6'
}

export const getTransactionDetails = (cluster: Cluster, transactionId: string) => {
  const connection = new Connection(clusterApiUrl(cluster))
  return connection.getParsedTransaction(transactionId, {
    commitment: 'confirmed',
    maxSupportedTransactionVersion: 0
  })
}

export const getTokenList = (): Token[] => {
  return tokens
    .map((token) => ({
      type: token.symbol,
      name: token.name,
      icon: token.logoURI,
      mintAddress: token.address,
      decimals: token.decimals
    }))
    .sort((a, b) => a.type.localeCompare(b.type))
}

export const getToken = async (token?: TokenType): Promise<Token | undefined> => {
  const list = getTokenList()
  return list.find((t) => t.type === token)
}

export const quote = async (
  sourceTokenType: TokenType,
  targetTokenType: TokenType,
  amount: number
) => {
  const sourceToken = await getToken(sourceTokenType)
  const targetToken = await getToken(targetTokenType)
  if (!sourceToken || !targetToken) {
    throw new Error('Invalid tokens')
  }
  const newAmount = amount * 10 ** sourceToken?.decimals
  const apiUrl = getApiUrl()
  const quoteUrl = `${apiUrl}/quote?inputMint=${sourceToken.mintAddress}&outputMint=${targetToken.mintAddress}&amount=${newAmount}`
  const quoteResponse: JupiterQuoteResponse = await fetch(quoteUrl).then((response) =>
    response.json()
  )
  if ('error' in quoteResponse) {
    throw new Error(quoteResponse.error)
  }
  return quoteResponse
}

export const swap = async (
  userAddressPubkey: PublicKey,
  sourceTokenType: TokenType,
  targetTokenType: TokenType,
  amount: number
) => {
  const quoteResponse = await quote(sourceTokenType, targetTokenType, amount)
  const apiUrl = getApiUrl()
  const swapUrl = `${apiUrl}/swap`
  const payload = {
    // quoteResponse from /quote api
    quoteResponse,
    // user public key to be used for the swap
    userPublicKey: userAddressPubkey.toString(),
    // auto wrap and unwrap SOL. default is true
    wrapAndUnwrapSol: true
    // feeAccount is optional. Use if you want to charge a fee.  feeBps must have been passed in /quote API.
    // feeAccount: "fee_account_public_key"
  }
  const body = JSON.stringify(payload)

  const swapResponse: JupiterSwapResponse = await fetch(swapUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body
  }).then((response) => response.json())

  if ('error' in swapResponse) {
    throw new Error(swapResponse.error)
  }
  const swapTransactionBuf = Buffer.from(swapResponse.swapTransaction, 'base64')
  return VersionedTransaction.deserialize(swapTransactionBuf)
}
