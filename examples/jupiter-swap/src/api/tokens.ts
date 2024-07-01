import type { JupiterToken } from './types'

// taken from https://token.jup.ag/strict
export const tokens: JupiterToken[] = [
  {
    address: 'So11111111111111111111111111111111111111112',
    chainId: 101,
    decimals: 9,
    name: 'Wrapped SOL',
    symbol: 'SOL',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png',
    tags: ['old-registry'],
    extensions: { coingeckoId: 'wrapped-solana' }
  },
  {
    address: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
    chainId: 101,
    decimals: 6,
    name: 'USD Coin',
    symbol: 'USDC',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'usd-coin' }
  },
  {
    address: 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB',
    chainId: 101,
    decimals: 6,
    name: 'USDT',
    symbol: 'USDT',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB/logo.svg',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'tether' }
  },
  {
    address: '7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr',
    chainId: 101,
    decimals: 9,
    name: 'Popcat',
    symbol: 'POPCAT',
    logoURI:
      'https://bafkreidvkvuzyslw5jh5z242lgzwzhbi2kxxnpkic5wsvyno5ikvpr7reu.ipfs.nftstorage.link',
    tags: ['community'],
    extensions: { coingeckoId: 'popcat' }
  },
  {
    address: '6D7NaB2xsLd7cauWu1wKk6KBsJohJmP2qZH9GEfVi5Ui',
    chainId: 101,
    decimals: 6,
    name: 'Shark Cat',
    symbol: 'SC',
    logoURI: 'https://cf-ipfs.com/ipfs/QmYZnjijjtoH2YDCPxUc6advSuSbsCre4gDjtS2YTUfw7P',
    tags: ['community'],
    extensions: { coingeckoId: 'shark-cat' }
  },
  {
    address: 'EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm',
    chainId: 101,
    decimals: 6,
    name: 'dogwifhat',
    symbol: '$WIF',
    logoURI:
      'https://bafkreibk3covs5ltyqxa272uodhculbr6kea6betidfwy3ajsav2vjzyum.ipfs.nftstorage.link',
    tags: ['community', 'solana-fm'],
    extensions: { coingeckoId: 'dogwifcoin' }
  },
  {
    address: 'JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN',
    chainId: 101,
    decimals: 6,
    name: 'Jupiter',
    symbol: 'JUP',
    logoURI: 'https://static.jup.ag/jup/icon.png',
    tags: ['community'],
    extensions: { coingeckoId: 'jupiter-exchange-solana' }
  },
  {
    address: '25hAyBQfoDhfWx9ay6rarbgvWGwDdNqcHsXS3jQ3mTDJ',
    chainId: 101,
    decimals: 5,
    name: 'MANEKI',
    symbol: 'MANEKI',
    logoURI: 'https://img.fotofolio.xyz/?url=https%3A%2F%2Fi.ibb.co%2FJnz56gp%2FManeki-PFP.png',
    tags: ['community'],
    extensions: { coingeckoId: 'maneki' }
  },
  {
    address: 'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263',
    chainId: 101,
    decimals: 5,
    name: 'Bonk',
    symbol: 'Bonk',
    logoURI: 'https://arweave.net/hQiPZOsRZXGXBJd_82PhVdlM_hACsT_q6wqwf5cSY7I?ext=png',
    tags: ['community'],
    extensions: { coingeckoId: 'bonk' }
  },
  {
    address: '5mbK36SZ7J19An8jFochhQS4of8g6BwUjbeCSxBSoWdp',
    chainId: 101,
    decimals: 6,
    name: 'michi',
    symbol: '$michi',
    logoURI: 'https://i.ibb.co/GxG0314/5mb-K36-SZ7-J19-An8j-Fochh-QS4of8g6-Bw-Ujbe-CSx-BSo-Wdp.png',
    tags: ['community'],
    extensions: { coingeckoId: 'michicoin' }
  },
  {
    address: '3psH1Mj1f7yUfaD5gh6Zj7epE8hhrMkMETgv5TshQA4o',
    chainId: 101,
    decimals: 9,
    name: 'jeo boden',
    symbol: 'boden',
    logoURI:
      'https://bafkreid2t4f3i36tq4aowwaaa5633ggslefthxfdudaimog6unwu36umha.ipfs.nftstorage.link/',
    tags: ['community'],
    extensions: { coingeckoId: 'jeo-boden' }
  },
  {
    address: 'J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn',
    chainId: 101,
    decimals: 9,
    name: 'Jito Staked SOL',
    symbol: 'JitoSOL',
    logoURI: 'https://storage.googleapis.com/token-metadata/JitoSOL-256.png',
    tags: ['community', 'solana-fm'],
    extensions: { coingeckoId: 'jito-staked-sol' }
  },
  {
    address: '27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4',
    chainId: 101,
    decimals: 6,
    name: 'Jupiter Perps',
    symbol: 'JLP',
    logoURI: 'https://static.jup.ag/jlp/icon.png',
    tags: ['community'],
    extensions: { coingeckoId: 'jupiter-perpetuals-liquidity-provider-token' }
  },
  {
    address: 'mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So',
    chainId: 101,
    decimals: 9,
    name: 'Marinade staked SOL (mSOL)',
    symbol: 'mSOL',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'msol' }
  },
  {
    address: 'MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5',
    chainId: 101,
    decimals: 5,
    name: 'cat in a dogs world',
    symbol: 'MEW',
    logoURI:
      'https://bafkreidlwyr565dxtao2ipsze6bmzpszqzybz7sqi2zaet5fs7k53henju.ipfs.nftstorage.link/',
    tags: ['community'],
    extensions: { coingeckoId: 'cat-in-a-dogs-world' }
  },
  {
    address: 'KMNo3nJsBXfcpJTVhZcXLW7RmTwTt4GVFE7suUBo9sS',
    chainId: 101,
    decimals: 6,
    name: 'Kamino',
    symbol: 'KMNO',
    logoURI: 'https://cdn.kamino.finance/kamino.svg',
    tags: ['community'],
    extensions: { coingeckoId: 'kamino' }
  },
  {
    address: '7BgBvyjrZX1YKz4oh9mjb8ZScatkkwb8DzFx7LoiVkM3',
    chainId: 101,
    decimals: 9,
    name: 'SLERF',
    symbol: 'SLERF',
    logoURI:
      'https://bafkreih44n5jgqpwuvimsxzroyebjunnm47jttqusb4ivagw3vsidil43y.ipfs.nftstorage.link/',
    tags: ['community'],
    extensions: { coingeckoId: 'slerf' }
  },
  {
    address: '85VBFQZC9TZkfaptBWjvUw7YbZjy52A6mjtPGjstQAmQ',
    chainId: 101,
    decimals: 6,
    name: 'Wormhole Token',
    symbol: 'W',
    logoURI: 'https://wormhole.com/token.png',
    tags: ['community'],
    extensions: { coingeckoId: 'wormhole' }
  },
  {
    address: '5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm',
    chainId: 101,
    decimals: 9,
    name: 'Infinity',
    symbol: 'INF',
    logoURI:
      'https://cloudflare-ipfs.com/ipfs/bafkreiflz2xxkfn33qjch2wj55bvbn33q3s4mmb6bye5pt3mpgy4t2wg4e',
    tags: ['old-registry'],
    extensions: { coingeckoId: 'socean-staked-sol' }
  },
  {
    address: 'WENWENvqqNya429ubCdR81ZmD69brwQaaBYY6p3LCpk',
    chainId: 101,
    decimals: 5,
    name: 'Wen',
    symbol: 'WEN',
    logoURI:
      'https://shdw-drive.genesysgo.net/GwJapVHVvfM4Mw4sWszkzywncUWuxxPd6s9VuFfXRgie/wen_logo.png',
    tags: ['community'],
    extensions: { coingeckoId: 'wen-4' }
  },
  {
    address: 'bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1',
    chainId: 101,
    decimals: 9,
    name: 'BlazeStake Staked SOL (bSOL)',
    symbol: 'bSOL',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'blazestake-staked-sol' }
  },
  {
    address: 'GtDZKAqvMZMnti46ZewMiXCa4oXF4bZxwQPoKzXPFxZn',
    chainId: 101,
    decimals: 9,
    name: 'nubcat',
    symbol: 'nub',
    logoURI:
      'https://bafkreieny7bfqv76t3pgaaktrrux6j2iflefncegqxmezqsqrzy7kjhhy4.ipfs.nftstorage.link/',
    tags: ['community'],
    extensions: { coingeckoId: 'sillynubcat' }
  },
  {
    address: 'jtojtomepa8beP8AuQc6eXt5FriJwfFMwQx2v2f9mCL',
    chainId: 101,
    decimals: 9,
    name: 'JITO',
    symbol: 'JTO',
    logoURI: 'https://metadata.jito.network/token/jto/image',
    tags: ['community', 'solana-fm'],
    extensions: { coingeckoId: 'jito-governance-token' }
  },
  {
    address: '69kdRLyP5DTRkpHraaSZAQbWmAwzF9guKjZfzMXzcbAs',
    chainId: 101,
    decimals: 6,
    name: 'American Coin',
    symbol: 'USA',
    logoURI: 'https://arweave.net/xUs-YuP__T2cCUofTOJmYcHIzFHj5s8TdH-O-g9qn3w',
    tags: ['community'],
    extensions: { coingeckoId: 'american-coin' }
  },
  {
    address: '3NZ9JMVBmGAqocybic2c7LQCJScmgsAZ6vQqTDzcqmJh',
    chainId: 101,
    decimals: 8,
    name: 'Wrapped BTC (Portal)',
    symbol: 'WBTC',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/WBTC_wh.png',
    tags: ['wormhole', 'community', 'solana-fm'],
    extensions: { coingeckoId: 'wrapped-btc-wormhole' }
  },
  {
    address: 'H7bTHGb5Cvo5fGe5jBDNDPUv8KykQnzyZA3qZ8sH7yxw',
    chainId: 101,
    decimals: 9,
    name: 'GUMMY',
    symbol: 'GUMMY',
    logoURI:
      'https://bafkreih3pz2wklsnoae5zuyfvascdm3phyffimvyxbsi34rjnqzkjldopu.ipfs.nftstorage.link',
    tags: ['community'],
    extensions: { coingeckoId: 'gummy' }
  },
  {
    address: 'ZEUS1aR7aX8DFFJf5QjWj2ftDDdNTroMNGo8YoQm3Gq',
    chainId: 101,
    decimals: 6,
    name: 'ZEUS',
    symbol: 'ZEUS',
    logoURI: 'https://raw.githubusercontent.com/ZeusNetworkHQ/zeus-metadata/master/logo-v1.png',
    tags: ['community'],
    extensions: { coingeckoId: 'zeus-network' }
  },
  {
    address: '5z3EqYQo9HiCEs3R84RCDMu2n7anpDMxRhdK8PSWmrRC',
    chainId: 101,
    decimals: 9,
    name: 'PONKE',
    symbol: 'PONKE',
    logoURI: 'https://i.imgur.com/qgEcBin.jpg',
    tags: ['community'],
    extensions: { coingeckoId: 'ponke' }
  },
  {
    address: 'rndrizKT3MK1iimdxRdWabcF7Zg7AR5T4nud4EkHBof',
    chainId: 101,
    decimals: 8,
    name: 'Render Token',
    symbol: 'RENDER',
    logoURI:
      'https://shdw-drive.genesysgo.net/5zseP54TGrcz9C8HdjZwJJsZ6f3VbP11p1abwKWGykZH/rndr.png',
    tags: ['community'],
    extensions: { coingeckoId: 'render-token' }
  },
  {
    address: 'hntyVP6YFm1Hg25TN9WGLqM12b8TQmcknKrdu1oxWux',
    chainId: 101,
    decimals: 8,
    name: 'Helium Network Token',
    symbol: 'HNT',
    logoURI:
      'https://shdw-drive.genesysgo.net/CsDkETHRRR1EcueeN346MJoqzymkkr7RFjMqGpZMzAib/hnt.png',
    tags: ['community', 'solana-fm'],
    extensions: { coingeckoId: 'helium' }
  },
  {
    address: 'jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v',
    chainId: 101,
    decimals: 9,
    name: 'Jupiter Staked SOL',
    symbol: 'JupSOL',
    logoURI: 'https://static.jup.ag/jupSOL/icon.png',
    tags: ['community'],
    extensions: { coingeckoId: 'jupiter-staked-sol' }
  },
  {
    address: 'ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82',
    chainId: 101,
    decimals: 6,
    name: 'BOOK OF MEME',
    symbol: 'BOME',
    logoURI:
      'https://bafybeidov7gddabmqke3fozpuvlllp3q2c537f2vfyyf6or4spbbao6cee.ipfs.nftstorage.link/',
    tags: ['community'],
    extensions: { coingeckoId: 'book-of-meme' }
  },
  {
    address: 'FU1q8vJpZNUrmqsciSjp8bAKKidGsLmouB8CBdf8TKQv',
    chainId: 101,
    decimals: 9,
    name: 'doland tremp',
    symbol: 'tremp',
    logoURI:
      'https://bafkreia5oynseyky72us6y7uzbas2uxoosujxvbnnuvscozetprbdinmey.ipfs.nftstorage.link/',
    tags: ['community'],
    extensions: { coingeckoId: 'donald-tremp' }
  },
  {
    address: 'HhJpBhRRn4g56VsyLuT8DL5Bv31HkXqsrahTTUCZeZg4',
    chainId: 101,
    decimals: 9,
    name: 'Myro',
    symbol: '$MYRO',
    logoURI: 'https://i.ibb.co/9nr3xFp/MYRO-200x200.png',
    tags: ['community'],
    extensions: { coingeckoId: 'myro' }
  },
  {
    address: '26KMQVgDUoB6rEfnJ51yAABWWJND8uMtpnQgsHQ64Udr',
    chainId: 101,
    decimals: 6,
    name: 'SAD HAMSTER',
    symbol: 'HAMMY',
    logoURI:
      'https://bafkreidnhl3agzjkay3ljojmvwid72amoumqftgaw7lks2keg27ph3efsu.ipfs.nftstorage.link',
    tags: ['community'],
    extensions: { coingeckoId: 'sad-hamster' }
  },
  {
    address: 'HZ1JovNiVvGrGNiiYvEozEVgZ58xaU3RKwX8eACQBCt3',
    chainId: 101,
    decimals: 6,
    name: 'Pyth Network',
    symbol: 'PYTH',
    logoURI: 'https://pyth.network/token.svg',
    tags: ['community', 'solana-fm'],
    extensions: { coingeckoId: 'pyth-network' }
  },
  {
    address: '6n7Janary9fqzxKaJVrhL9TG2F61VbAtwUMu1YZscaQS',
    chainId: 101,
    decimals: 6,
    name: "Ansem's Cat",
    symbol: 'Hobbes',
    logoURI: 'https://cf-ipfs.com/ipfs/QmccykK3PtscEH8QpkR54CStmcfpazK4nrf8t167gqML99',
    tags: ['community'],
    extensions: { coingeckoId: 'ansem-s-cat' }
  },
  {
    address: '5LafQUrVco6o7KMz42eqVEJ9LW31StPyGjeeu5sKoMtA',
    chainId: 101,
    decimals: 6,
    name: 'Mumu the Bull',
    symbol: 'MUMU',
    logoURI:
      'https://bafkreihszutctvdmdlyjtzfmj7rgvdorpc7jchj2td3feypc7veidbkpsu.ipfs.nftstorage.link',
    tags: ['community'],
    extensions: { coingeckoId: 'mumu-the-bull-3' }
  },
  {
    address: 'A2khRbhRJNrAEHj95htivC4cR4VbJwfssDH5FPPbP4m9',
    chainId: 101,
    decimals: 6,
    name: 'duk',
    symbol: 'duk',
    logoURI:
      'https://bafkreidfel55dm3bvwm4kx4qkutiiwmixsebetskzn7fqrxzkm7r3ilkwy.ipfs.nftstorage.link/',
    tags: ['community'],
    extensions: { coingeckoId: 'duk-on-sol' }
  },
  {
    address: 'mb1eu7TzEc71KxDpsmsKoucSSuuoGLv1drys1oP2jh6',
    chainId: 101,
    decimals: 6,
    name: 'Helium Mobile',
    symbol: 'MOBILE',
    logoURI:
      'https://shdw-drive.genesysgo.net/CsDkETHRRR1EcueeN346MJoqzymkkr7RFjMqGpZMzAib/mobile.png',
    tags: ['community', 'solana-fm'],
    extensions: { coingeckoId: 'helium-mobile' }
  },
  {
    address: '7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs',
    chainId: 101,
    decimals: 8,
    name: 'Ether (Portal)',
    symbol: 'ETH',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/ETH_wh.png',
    tags: ['wormhole', 'old-registry'],
    extensions: { coingeckoId: 'ethereum-wormhole' }
  },
  {
    address: 'CQSzJzwW5H1oyWrp6QhfUKYYwyovbSiVDKnAxNfb1tJC',
    chainId: 101,
    decimals: 5,
    name: 'Stanley Cup Coin',
    symbol: 'STAN',
    logoURI: 'https://arweave.net/urnvj3NcnKmwEWNLDQJetp2OFP_nu3tB8HPdXwSFg7U',
    tags: ['community'],
    extensions: { coingeckoId: 'stanley-cup-coin' }
  },
  {
    address: 'Fch1oixTPri8zxBnmdCEADoJW2toyFHxqDZacQkwdvSP',
    chainId: 101,
    decimals: 9,
    name: 'HARAMBE',
    symbol: 'HARAMBE',
    logoURI:
      'https://turquoise-worried-llama-208.mypinata.cloud/ipfs/QmSsf1AHHx56hyR66DrfvohdQ9mwNrXcZc3WYZb3xi9Tfs?pinataGatewayToken=IjmxGjT2wDVCW9f1Vtqqu4mFAuFmeTtF2KuGOPOUmuNDv0IzHYWPG90almZJn1qp',
    tags: ['community'],
    extensions: { coingeckoId: 'harambe-2' }
  },
  {
    address: '947tEoG318GUmyjVYhraNRvWpMX7fpBTDQFBoJvSkSG3',
    chainId: 101,
    decimals: 9,
    name: 'Solchat',
    symbol: 'CHAT',
    logoURI:
      'https://bafybeigqw6dl5tiexa7utfhcsgldalhrelvjnea23jckqsgo65i2uoln5i.ipfs.nftstorage.link',
    tags: ['community'],
    extensions: { coingeckoId: 'solchat' }
  },
  {
    address: 'nosXBVoaCTtYdLvKY6Csb4AC8JCdQKKAaWYtx2ZMoo7',
    chainId: 101,
    decimals: 6,
    name: 'Nosana',
    symbol: 'NOS',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/nosXBVoaCTtYdLvKY6Csb4AC8JCdQKKAaWYtx2ZMoo7/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'nosana' }
  },
  {
    address: 'SHDWyBxihqiCj6YekG2GUr7wqKLeLAMK1gHZck9pL6y',
    chainId: 101,
    decimals: 9,
    name: 'Shadow Token',
    symbol: 'SHDW',
    logoURI:
      'https://shdw-drive.genesysgo.net/FDcC9gn12fFkSU2KuQYH4TUjihrZxiTodFRWNF4ns9Kt/250x250_with_padding.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'genesysgo-shadow' }
  },
  {
    address: 'EjmDTt8G3T725eFSV7oWmGD8J848guo3LZ1EB3RfwGSw',
    chainId: 101,
    decimals: 9,
    name: 'harold',
    symbol: 'harold',
    logoURI:
      'https://image-cdn.solana.fm/images/?imageUrl=https://bafkreihx4kdgg6floepe6xbb23n2ksjsqeuwtg2fajg2enorvxyu735wku.ipfs.nftstorage.link',
    tags: ['community'],
    extensions: { coingeckoId: 'harold' }
  },
  {
    address: 'BonK1YhkXEGLZzwtcvRTip3gAL9nCeQD7ppZBLXhtTs',
    chainId: 101,
    decimals: 9,
    name: 'Bonk SOL',
    symbol: 'bonkSOL',
    logoURI: 'https://arweave.net/ms-FdIyJ8TxEJOb2SAYhfyrLop7TDrCEjD-I-oIl5u4',
    tags: ['community'],
    extensions: { coingeckoId: 'bonk-staked-sol' }
  },
  {
    address: 'A9mUU4qviSctJVPJdBJWkb28deg915LYJKrzQ19ji3FM',
    chainId: 101,
    decimals: 6,
    name: 'USD Coin (Portal from Ethereum)',
    symbol: 'USDCet',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/USDCet_wh.png',
    tags: ['wormhole', 'old-registry'],
    extensions: { coingeckoId: 'usd-coin-wormhole-from-ethereum' }
  },
  {
    address: '6ogzHhzdrQr9Pgv6hZ2MNze7UrzBMAFyBBWUYp1Fhitx',
    chainId: 101,
    decimals: 6,
    name: 'RETARDIO',
    symbol: 'RETARDIO',
    logoURI:
      'https://bafkreidx64y72zvdmaysswocovwowtjlxjnh26qh62edql5gmp5rpo5gpm.ipfs.nftstorage.link',
    tags: ['community'],
    extensions: { coingeckoId: 'retardio' }
  },
  {
    address: '5hmf8Jt9puwoqiFQTb3vr22732ZTKYRLRw9Vo7tN3rcz',
    chainId: 101,
    decimals: 6,
    name: 'Baby',
    symbol: 'BABY',
    logoURI:
      'https://photos.pinksale.finance/file/pinksale-logo-upload/1709065389877-8334609f627697b59fa95b3f76dc5f39.png',
    tags: ['community'],
    extensions: { coingeckoId: 'baby' }
  },
  {
    address: 'Av6qVigkb7USQyPXJkUvAEm4f599WTRvd75PUWBA9eNm',
    chainId: 101,
    decimals: 9,
    name: 'Costco Hot Dog',
    symbol: 'COST',
    logoURI: 'https://ipfs.io/ipfs/QmSqddq1svm7VpaLCcSQzCea58J8xRo8vhHuVJgdRPUw1J',
    tags: ['community'],
    extensions: { coingeckoId: 'costco-hot-dog' }
  },
  {
    address: '4LLbsb5ReP3yEtYzmXewyGjcir5uXtKFURtaEUVC2AHs',
    chainId: 101,
    decimals: 6,
    name: 'Parcl',
    symbol: 'PRCL',
    logoURI: 'https://ipfs.filebase.io/ipfs/QmVDpnYjKMCBdmqGddQNyW8cc3tBU5cKZFiSV5y18J5YnK',
    tags: ['community'],
    extensions: { coingeckoId: 'parcl' }
  },
  {
    address: 'TNSRxcUxoT9xBG3de7PiJyTDYu7kskLqcpddxnEJAS6',
    chainId: 101,
    decimals: 9,
    name: 'Tensor',
    symbol: 'TNSR',
    logoURI: 'https://arweave.net/beGAyeIzjV_UkyjFtxbkZyi_YqfOBWayiQ0B6wqWygY',
    tags: ['community'],
    extensions: { coingeckoId: 'tensor' }
  },
  {
    address: '3BgwJ8b7b9hHX4sgfZ2KJhv9496CoVfsMK2YePevsBRw',
    chainId: 101,
    decimals: 6,
    name: 'TEH EPIK DUCK',
    symbol: 'EPIK',
    logoURI: 'https://pump.mypinata.cloud/ipfs/QmWqYXSxZGu2AzKLb91eJR9RF68UST8uqZyMj6WHJcogkL',
    tags: ['community'],
    extensions: { coingeckoId: 'teh-epik-duck' }
  },
  {
    address: 'FvER7SsvY5GqAMawf7Qfb5MnUUmDdbPNPg4nCa4zHoLw',
    chainId: 101,
    decimals: 9,
    name: 'The First Youtube Cat',
    symbol: 'PAJAMAS',
    logoURI: 'https://pajamas.cat/wp-content/uploads/2024/03/photo_6303196121761170014_x.jpg',
    tags: ['community'],
    extensions: { coingeckoId: 'pajamas-cat' }
  },
  {
    address: 'LMDAmLNduiDmSiMxgae1gW7ubArfEGdAfTpKohqE5gn',
    chainId: 101,
    decimals: 6,
    name: 'lambda.markets',
    symbol: 'LMDA',
    logoURI: 'https://arweave.net/6y2eY-KEaBu4KbZLJwLCTQQUXhWVPKxjgdyW69DwI0o',
    tags: ['community', 'solana-fm'],
    extensions: { coingeckoId: 'lambda-markets' }
  },
  {
    address: '75XracgnqjPeuexHKWQU3bBcXMZG6XLDF867tKB1T9e6',
    chainId: 101,
    decimals: 9,
    name: 'The Islanders',
    symbol: 'ISL',
    logoURI: 'https://cdn.jsdelivr.net/gh/koudydev/crypto/main/islIcon.png',
    tags: ['old-registry']
  },
  {
    address: 'HovGjrBGTfna4dvg6exkMxXuexB3tUfEZKcut8AWowXj',
    chainId: 101,
    decimals: 4,
    name: 'Space Falcon',
    symbol: 'FCON',
    logoURI: 'https://raw.githubusercontent.com/spacefalcon-io/crypto/main/logo.svg',
    tags: ['old-registry'],
    extensions: { coingeckoId: 'spacefalcon' }
  },
  {
    address: 'CREAMpdDimXxj2zTCwP5wMEtba4NYaKCrTBEQTSKtqHe',
    chainId: 101,
    decimals: 9,
    name: 'Creamy',
    symbol: 'CREAMY',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/CREAMpdDimXxj2zTCwP5wMEtba4NYaKCrTBEQTSKtqHe/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'creamy' }
  },
  {
    address: '8odnqwCqNVQ4UrYmYgkWPuedBr3yEMWY2ZBhtNW7jrCu',
    chainId: 101,
    decimals: 6,
    name: 'AmigosOnSol',
    symbol: 'MIGO',
    logoURI:
      'https://image-cdn.solana.fm/images/?imageUrl=https://bafybeiflobot335eygnhpjqlbo3u2vptijnqw6mwspl3p25habyz3k6zsq.ipfs.nftstorage.link',
    tags: ['community']
  },
  {
    address: '9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa',
    chainId: 101,
    decimals: 8,
    name: 'Binance Coin (Portal)',
    symbol: 'BNB',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/BNB_wh.png',
    tags: ['wormhole', 'old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'binance-coin-wormhole' }
  },
  {
    address: '51tMb3zBKDiQhNwGqpgwbavaGH54mk8fXFzxTc1xnasg',
    chainId: 101,
    decimals: 9,
    name: 'APEX',
    symbol: 'APEX',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/51tMb3zBKDiQhNwGqpgwbavaGH54mk8fXFzxTc1xnasg/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'apexit-finance' }
  },
  {
    address: 'HfYFjMKNZygfMC8LsQ8LtpPsPxEJoXJx4M6tqi75Hajo',
    chainId: 101,
    decimals: 9,
    name: 'Cryowar Token',
    symbol: 'CWAR',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/HfYFjMKNZygfMC8LsQ8LtpPsPxEJoXJx4M6tqi75Hajo/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'cryowar-token' }
  },
  {
    address: 'yomFPUqz1wJwYSfD5tZJUtS3bNb8xs8mx9XzBv8RL39',
    chainId: 101,
    decimals: 9,
    name: 'YOM',
    symbol: 'YOM',
    logoURI: 'https://yom.mypinata.cloud/ipfs/QmQ9qE5XWMEyzQGWJFcZjwjigHBzSWDaaf2xFhCFqdvUcx',
    tags: ['community', 'solana-fm'],
    extensions: { coingeckoId: 'your-open-metaverse' }
  },
  {
    address: 'fueL3hBZjLLLJHiFH9cqZoozTG3XQZ53diwFPwbzNim',
    chainId: 101,
    decimals: 0,
    name: 'Fuel',
    symbol: 'FUEL',
    logoURI: 'https://storage.googleapis.com/nft-assets/items/FUEL.png',
    tags: ['community']
  },
  {
    address: '8Qrc2pf9p24NyJVG1FagnqJXwKw6h5L5McxnMfJoUxev',
    chainId: 101,
    decimals: 9,
    name: 'Emmy',
    symbol: 'EMMY',
    logoURI: 'https://gateway.irys.xyz/ssZtKHuRF1VRdRBZ5Oo5PdrPVvQ_c94EnCzR0CdtVPw',
    tags: ['community'],
    extensions: { coingeckoId: 'emmy' }
  },
  {
    address: 'METAewgxyPbgwsseH8T16a39CQ5VyVxZi9zXiDPY18m',
    chainId: 101,
    decimals: 6,
    name: 'Metaplex Token',
    symbol: 'MPLX',
    logoURI: 'https://arweave.net/VRKOcXIvCxqp35RZ9I0-bDGk5qNfT46OTho-2oP9iGc',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'metaplex' }
  },
  {
    address: 'A6YRaK4toMe2qZY7KLNCugXBrsjCG4fAjAR8uZUBeUek',
    chainId: 101,
    decimals: 9,
    name: 'AndreDefiant',
    symbol: 'GIANT',
    logoURI: 'https://arweave.net/NyVAfC6oeDsD4USdwHQuEv9Q-i5jSK2SHksF6FwN-us',
    tags: ['community']
  },
  {
    address: 'E5ndSkaB17Dm7CsD22dvcjfrYSDLCxFcMd6z8ddCk5wp',
    chainId: 101,
    decimals: 9,
    name: 'Aldrin',
    symbol: 'RIN',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/E5ndSkaB17Dm7CsD22dvcjfrYSDLCxFcMd6z8ddCk5wp/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'aldrin' }
  },
  {
    address: '8x9c5qa4nvakKo5wHPbPa5xvTVMKmS26w4DRpCQLCLk3',
    chainId: 101,
    decimals: 9,
    name: 'MS PAINT',
    symbol: 'PAINT',
    logoURI: 'https://i.imgur.com/t7CeL6E.png',
    tags: ['community'],
    extensions: { coingeckoId: 'ms-paint' }
  },
  {
    address: 'Ceqwd4CSGBZnW8PHEexBQCAV2NDPkBoSqheiKR7gzELV',
    chainId: 101,
    decimals: 5,
    name: 'BABS',
    symbol: 'BABS',
    logoURI: 'https://iili.io/HaOytTu.png',
    tags: ['community']
  },
  {
    address: 'MAPS41MDahZ9QdKXhVa4dWB9RuyfV4XqhyAZ8XcYepb',
    chainId: 101,
    decimals: 6,
    name: 'MAPS',
    symbol: 'MAPS',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/MAPS41MDahZ9QdKXhVa4dWB9RuyfV4XqhyAZ8XcYepb/logo.svg',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'maps' }
  },
  {
    address: '6ep1sNB9UWni3nBZUX84USsRBhKRzMAxEmcia479cWTh',
    chainId: 101,
    decimals: 8,
    name: 'Epiko Regal (Wormhole)',
    symbol: 'EPIKO',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/28018.png',
    tags: ['community']
  },
  {
    address: 'CRWNYkqdgvhGGae9CKfNka58j6QQkaD5bLhKXvUYqnc1',
    chainId: 101,
    decimals: 6,
    name: 'Crowny token',
    symbol: 'CRWNY',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/CRWNYkqdgvhGGae9CKfNka58j6QQkaD5bLhKXvUYqnc1/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'crowny-token' }
  },
  {
    address: 'BWhsvkyrUJqVvrAKjGYLpnTuUCG4SPEh6xVKcjnYCi27',
    chainId: 101,
    decimals: 9,
    name: 'HMM',
    symbol: 'HMM',
    logoURI: 'https://arweave.net/y7pZvMNt042EUDDGJmzKh4UUXYx1lpWg1JRtGE37ap8',
    tags: ['community'],
    extensions: { coingeckoId: 'hmmonsol' }
  },
  {
    address: 'E7BGDtpNXUTqPNbZxKHiLowgLddiAeuKcByD7tSnfYWD',
    chainId: 101,
    decimals: 5,
    name: 'GEM',
    symbol: 'GEM',
    logoURI:
      'https://bafkreifpm7rbwohp4yys2guyibfzqbctu3bist6zetmyq456om2rqvk544.ipfs.nftstorage.link/',
    tags: ['community', 'token-2022']
  },
  {
    address: 'nBZEcHSG771mRbi4y2sSgKjfDUH8jsM2Eo5fNcASLeU',
    chainId: 101,
    decimals: 8,
    name: 'ZOOMER (Wormhole)',
    symbol: 'ZOOMER',
    logoURI: 'https://assets.coingecko.com/coins/images/30894/large/zoooooooooomer.jpg?1696529740',
    tags: ['community', 'solana-fm'],
    extensions: { coingeckoId: 'zoomer' }
  },
  {
    address: 'BMQZzVJa1X5cBYc8fCRVbWuFC4czA1s5GE3HekWfuhjz',
    chainId: 101,
    decimals: 6,
    name: 'burek obema',
    symbol: 'obema',
    logoURI: 'https://i.imgur.com/Mu0fbpi.jpeg',
    tags: ['community']
  },
  {
    address: 'A3HyGZqe451CBesNqieNPfJ4A9Mu332ui8ni6dobVSLB',
    chainId: 101,
    decimals: 5,
    name: 'WOOP',
    symbol: 'WOOP',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/A3HyGZqe451CBesNqieNPfJ4A9Mu332ui8ni6dobVSLB/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'woop' }
  },
  {
    address: 'boooCKXQn9YTK2aqN5pWftQeb9TH7cj7iUKuVCShWQx',
    chainId: 101,
    decimals: 9,
    name: 'Boo Network',
    symbol: 'BOO',
    logoURI: 'https://arweave.net/Reo2_w4k9PGdtYX3p8BllNZpSbbIJ-zype0qdbQgsoE',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'ghostkids' }
  },
  {
    address: '6XfB1VVAxjtfKnF1kotGxLUq4p87xTDp3cCyC6Q2VHNG',
    chainId: 101,
    decimals: 9,
    name: 'Gray',
    symbol: 'GRAY',
    logoURI: 'https://arweave.net/sNQ2D1R6C07UbP4mqZqR7P_hmrwje0y3T5_Vyy5lLGM',
    tags: ['community']
  },
  {
    address: 'AR1Mtgh7zAtxuxGd2XPovXPVjcSdY3i4rQYisNadjfKy',
    chainId: 101,
    decimals: 6,
    name: 'Wrapped SUSHI (Sollet)',
    symbol: 'soSUSHI',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/AR1Mtgh7zAtxuxGd2XPovXPVjcSdY3i4rQYisNadjfKy/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'Bg9CZr1CmVoCn2uNWwj9f5rLbmfYRYvcVikCRCwawUwR',
    chainId: 101,
    decimals: 9,
    name: 'ruburt f kenidy jr',
    symbol: 'kenidy',
    logoURI: 'https://ipfs.io/ipfs/QmdvV2btGAz4EkwHV8oH78KC7KxqtHXrUbnw47B8M56yKT',
    tags: ['community'],
    extensions: { coingeckoId: 'ruburt-f-kenidy-jr' }
  },
  {
    address: 'st8QujHLPsX3d6HG9uQg9kJ91jFxUgruwsb1hyYXSNd',
    chainId: 101,
    decimals: 9,
    name: 'stakeSOL',
    symbol: 'stakeSOL',
    logoURI: 'https://arweave.net/C2P2vlj4GZF1ZfAj5GV7B7cvpvdiz2tDEwh6hOfml_o',
    tags: ['community'],
    extensions: { coingeckoId: 'stake-city-staked-sol' }
  },
  {
    address: '4wjPQJ6PrkC4dHhYghwJzGBVP78DkBzA2U3kHoFNBuhj',
    chainId: 101,
    decimals: 6,
    name: 'LIQ Protocol',
    symbol: 'LIQ',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/4wjPQJ6PrkC4dHhYghwJzGBVP78DkBzA2U3kHoFNBuhj/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'liq-protocol' }
  },
  {
    address: 'SKu11EypaFU3gvr8VSAbi13zEC2CPvqbz9s83N3tWHM',
    chainId: 101,
    decimals: 0,
    name: 'Skeleton Crew',
    symbol: 'SKULL',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/SKu11EypaFU3gvr8VSAbi13zEC2CPvqbz9s83N3tWHM/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'EF23Avq2cTPnMVTfHacZ3SG5Z8misHmFA2gbt2rKqiYH',
    chainId: 101,
    decimals: 9,
    name: 'elizabath whoren',
    symbol: 'whoren',
    logoURI:
      'https://bafkreibec5pa6bn24rqgkqfgyrqkjanbde4cz53xhxv4izol5pzhljpijm.ipfs.nftstorage.link',
    tags: ['community'],
    extensions: { coingeckoId: 'elizabath-whoren' }
  },
  {
    address: 'picobAEvs6w7QEknPce34wAE4gknZA9v5tTonnmHYdX',
    chainId: 101,
    decimals: 9,
    name: 'picoSOL',
    symbol: 'picoSOL',
    logoURI: 'https://arweave.net/zR2ZKXpwmG4hMpqhGXlvz-B7PMs34cXxVb2gC1DmlDo',
    tags: ['community'],
    extensions: { coingeckoId: 'pico-staked-sol' }
  },
  {
    address: '45wdSjpSqZCk9mkqmq5Nh7beCEqqUJMJcVduwYCip5eq',
    chainId: 101,
    decimals: 8,
    name: 'BofB',
    symbol: 'BOFB',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/45wdSjpSqZCk9mkqmq5Nh7beCEqqUJMJcVduwYCip5eq/logo.svg',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: '24a1k6wSDQUSwoRXJyvkr25kF5do8f6Ddff6A2fTc1pM',
    chainId: 101,
    decimals: 9,
    name: 'BEAR',
    symbol: '$BEAR',
    logoURI: 'https://arweave.net/7Qzb-BKL734z8w77fPNJ8lu3f6TtA87nbiw2A-qmCK0',
    tags: ['community']
  },
  {
    address: 'MNDEFzGvMt87ueuHvVU9VcTqsAP5b3fTGPsHuuPA5ey',
    chainId: 101,
    decimals: 9,
    name: 'Marinade',
    symbol: 'MNDE',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/MNDEFzGvMt87ueuHvVU9VcTqsAP5b3fTGPsHuuPA5ey/logo.png',
    tags: ['old-registry'],
    extensions: { coingeckoId: 'marinade' }
  },
  {
    address: 'D8r8XTuCrUhLheWeGXSwC3G92RhASficV3YA7B2XWcLv',
    chainId: 101,
    decimals: 9,
    name: 'catwifbag',
    symbol: 'BAG',
    logoURI: 'https://i.imgur.com/WjsUWFL.png',
    tags: ['community'],
    extensions: { coingeckoId: 'catwifbag' }
  },
  {
    address: 'FLTHudk5B5zag7JmGXqrYrFfey6otevLQA6jm1UHHLEE',
    chainId: 101,
    decimals: 9,
    name: 'FLTH',
    symbol: 'FLTH',
    logoURI: 'https://www.arweave.net/6cZ-d9BnAsCqxkpzazYmKjLpUN2kE-jYnU3WDV4_lo0?ext=png',
    tags: ['community', 'solana-fm'],
    extensions: { coingeckoId: 'liberty-square-filth' }
  },
  {
    address: '4nFwuKievw5wcpcXtUDdfxWLyXsEdvgkpENzC9M9Y5me',
    chainId: 101,
    decimals: 6,
    name: 'Solbook',
    symbol: 'BOOK',
    logoURI: 'https://i.ibb.co/m4ZWcvG/tokenlogo-1.png',
    tags: ['community'],
    extensions: { coingeckoId: 'solbook' }
  },
  {
    address: '2nhjjqSkA8FYCUdJvQhYjbtZdPjZbNo8VtNKTkJ3hncb',
    chainId: 101,
    decimals: 6,
    name: 'bunkee',
    symbol: 'bunk',
    logoURI:
      'https://dd.dexscreener.com/ds-data/tokens/solana/2nhjjqSkA8FYCUdJvQhYjbtZdPjZbNo8VtNKTkJ3hncb.png?size=lg&key=78937d',
    tags: ['community'],
    extensions: { coingeckoId: 'bunkee' }
  },
  {
    address: 't5cSTUSZzUAQXQKzQvhieFG4Hz4xC23z9du1Chp8gES',
    chainId: 101,
    decimals: 6,
    name: 'KORRA',
    symbol: 'KORRA',
    logoURI: 'https://node2.irys.xyz/SE3kQL3Ur04sWUvYlCE_fS-Xdbc9IYaJFv1RyJFj7fQ',
    tags: ['community'],
    extensions: { coingeckoId: 'korra' }
  },
  {
    address: '6ybxMQpMgQhtsTLhvHZqk8uqao7kvoexY6e8JmCTqAB1',
    chainId: 101,
    decimals: 4,
    name: 'QUEST',
    symbol: 'QUEST',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/6ybxMQpMgQhtsTLhvHZqk8uqao7kvoexY6e8JmCTqAB1/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'CRkwd2QedqDi5u6W2w6jeAViAUd1pR4AXs2aKvh7GW7M',
    chainId: 101,
    decimals: 6,
    name: 'Solanium Ecosystem Index',
    symbol: 'SEI',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/CRkwd2QedqDi5u6W2w6jeAViAUd1pR4AXs2aKvh7GW7M/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'poLisWXnNRwC6oBu1vHiuKQzFjGL4XDSu4g9qjz9qVk',
    chainId: 101,
    decimals: 8,
    name: 'Star Atlas DAO',
    symbol: 'POLIS',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/poLisWXnNRwC6oBu1vHiuKQzFjGL4XDSu4g9qjz9qVk/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'star-atlas-dao' }
  },
  {
    address: 'DG5bH1BnfjB5YL7Vt3GjykkUKf6maDUW3jYvdNa9eEVa',
    chainId: 101,
    decimals: 6,
    name: 'WUT',
    symbol: 'WUT',
    logoURI: 'https://i.ibb.co/XtLXFLV/photo-2024-01-17-16-21-23.jpg',
    tags: ['community'],
    extensions: { coingeckoId: 'wut' }
  },
  {
    address: 'Ch9NFVk5sqEPQHtw2gJVgnHfTm7FW1JspYwc7SxLi6q3',
    chainId: 101,
    decimals: 9,
    name: 'Mend',
    symbol: 'MEND',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Ch9NFVk5sqEPQHtw2gJVgnHfTm7FW1JspYwc7SxLi6q3/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'mend' }
  },
  {
    address: '8FktFPUvi73Ywf7ZivsbuQFyQCqZUwvqSQ51hNvRhR26',
    chainId: 101,
    decimals: 8,
    name: 'Milk',
    symbol: '$MILK',
    logoURI:
      'https://shdw-drive.genesysgo.net/Ck7ByKk3NZfC9EFTNiGBrLkvquKGyDL7KLk3h1rdW2P4/image.png',
    tags: ['community']
  },
  {
    address: '7atgF8KQo4wJrD5ATGX7t1V2zVvykPJbFfNeVf1icFv1',
    chainId: 101,
    decimals: 2,
    name: 'catwifhat',
    symbol: '$CWIF',
    logoURI: 'https://i.postimg.cc/d1QD417z/200x200logo-copy.jpg',
    tags: ['community', 'token-2022'],
    extensions: { coingeckoId: 'catwifhat-2' }
  },
  {
    address: '3Tnv2xxSpLDQ1hfRLjWWPYz7vHPWoE5fsCPoG31EwTtv',
    chainId: 101,
    decimals: 8,
    name: 'Independence Token (Wormhole)',
    symbol: 'RFKJ',
    logoURI: 'https://ipfs.io/ipfs/QmT3hfVNRXY3hRQjAkqLuzczoYUHqJAZe5kk8Z3niqr6gu',
    tags: ['community'],
    extensions: { coingeckoId: 'independence-token' }
  },
  {
    address: 'EQGG5muKhviWmWJwy4Fi9TeeNpJUX7RpHAwkQMnTAyAj',
    chainId: 101,
    decimals: 9,
    name: 'Indian Call Center',
    symbol: 'ICC',
    logoURI:
      'https://bafkreicn4czqu7x72v6hqsi5uiu4a3oumhmlg7a6frmdh65kifhrc3naxm.ipfs.nftstorage.link',
    tags: ['community'],
    extensions: { coingeckoId: 'indian-call-center' }
  },
  {
    address: '7VUUicqKYFVmewg1U4w4e9K4FoEYdTcYyxYCPhRNf5Qy',
    chainId: 101,
    decimals: 9,
    name: 'solana green',
    symbol: 'green',
    logoURI: 'https://arweave.net/W68r4cNKbj0t_GRf1km_e9nzm4BLfspy0X-yX8mh4fQ',
    tags: ['community']
  },
  {
    address: '5KxnfDmsXVBNkVHYhW4kztV7ZCCCbrkYxBVrqLWF3G7J',
    chainId: 101,
    decimals: 4,
    name: 'Rock',
    symbol: 'Rock',
    logoURI: 'https://node2.irys.xyz/m0x31ZCuqG640Dvteo-GmiKaLvD7YvmLnV7WrT7Ugmo',
    tags: ['community'],
    extensions: { coingeckoId: 'rock-2' }
  },
  {
    address: '9CPWiCFL11DWr92dsTrzLf5cKz6zKhLz3xzRcYCQ3Nd2',
    chainId: 101,
    decimals: 6,
    name: 'UPTOBER',
    symbol: 'UPT',
    logoURI:
      'https://bafkreihgs65erm5f45s5vzl7y6wdl3nuqqqpcvlith3sotor5jcctft2wu.ipfs.nftstorage.link',
    tags: ['community', 'token-2022']
  },
  {
    address: 'Bx1fDtvTN6NvE4kjdPHQXtmGSg582bZx9fGy4DQNMmAT',
    chainId: 101,
    decimals: 9,
    name: 'Solcubator',
    symbol: 'SOLC',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Bx1fDtvTN6NvE4kjdPHQXtmGSg582bZx9fGy4DQNMmAT/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: '2kMpEJCZL8vEDZe7YPLMCS9Y3WKSAMedXBn7xHPvsWvi',
    chainId: 101,
    decimals: 5,
    name: 'SolarMoon',
    symbol: 'MOON',
    logoURI:
      'https://gateway.ipfscdn.io/ipfs/bafkreifwdwgcv6fnh5icz3wkefokatsemsojck4hftsnuf4xcfjcvagsva',
    tags: ['community', 'token-2022']
  },
  {
    address: 'FbJpd8yhrGGkWVL1Ujf7qFvTw4uD4675k8CYk82LEKvZ',
    chainId: 101,
    decimals: 8,
    name: 'SOCOMFY',
    symbol: 'COMFY',
    logoURI:
      'https://bafybeicg67e5ireijwcndiakcfeiyebhpdk6hcnqislttv5dbsax4kkyse.ipfs.nftstorage.link/',
    tags: ['community'],
    extensions: { coingeckoId: 'socomfy' }
  },
  {
    address: '9AGm8DWXiB4PwvH1V2r31ChsTE2f2TDySvDbfJmfaMBq',
    chainId: 101,
    decimals: 8,
    name: 'DLP8 Coin',
    symbol: 'DLP8',
    logoURI: 'https://arweave.net/T2RURwcLfB2xSjrfksI7R2SL3fKyZoqlTPiLCE3fsBo',
    tags: ['community']
  },
  {
    address: 'GZL4yjPohDShW4RofJ6dEWu2Fv7qEa5mBT7Dpje5hqe7',
    chainId: 101,
    decimals: 2,
    name: 'Stoned Ape Crew',
    symbol: 'SAC',
    logoURI:
      'https://dl.airtable.com/.attachmentThumbnails/483970a827af847e0b031c7d90d70baf/6cc644f1',
    tags: ['community', 'solana-fm']
  },
  {
    address: 'H7Qc9APCWWGDVxGD5fJHmLTmdEgT9GFatAKFNg6sHh8A',
    chainId: 101,
    decimals: 9,
    name: 'OOGI',
    symbol: 'OOGI',
    logoURI: 'https://oogi.com/icon.png',
    tags: ['old-registry'],
    extensions: { coingeckoId: 'oogi' }
  },
  {
    address: '91Fv8PztVLsf4S49RANPGW92veJ2oL6BjwsP9i666Wxu',
    chainId: 101,
    decimals: 6,
    name: 'Fuddles Shiba Inu',
    symbol: 'FUDSI',
    logoURI: 'https://arweave.net/iv6zV6x03hbFXfnS1IJo0nSbr0HFNrjMzy_qbL3sjW8',
    tags: ['community']
  },
  {
    address: '7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU',
    chainId: 101,
    decimals: 9,
    name: 'Samoyed Coin',
    symbol: 'SAMO',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'samoyedcoin' }
  },
  {
    address: 'FCqfQSujuPxy6V42UvafBhsysWtEq1vhjfMN1PUbgaxA',
    chainId: 101,
    decimals: 8,
    name: 'USD Coin (Portal from BSC)',
    symbol: 'USDCbs',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/USDCbs_wh.png',
    tags: ['wormhole', 'old-registry']
  },
  {
    address: '7yqC6J7qxuRzWg1xHHBmcTLG6X1K7Y5DBYB49Ks8nGKf',
    chainId: 101,
    decimals: 6,
    name: 'the keng is beck',
    symbol: 'CONUR',
    logoURI:
      'https://bafkreia3bcw6az6avol5rrnkvb5gf6zm4yi252lket7p5ljowmgfb4vt4e.ipfs.nftstorage.link/',
    tags: ['community']
  },
  {
    address: '2YJH1Y5NbdwJGEUAMY6hoTycKWrRCP6kLKs62xiSKWHM',
    chainId: 101,
    decimals: 9,
    name: 'SolGems',
    symbol: 'GEMS',
    logoURI: 'https://public.djib.io/QmdLDat9CvntvFPG98CcXJJ3tE1mQZkf5DEfPNhK8F3guq',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: '3jzdrXXKxwkBk82u2eCWASZLCKoZs1LQTg87HBEAmBJw',
    chainId: 101,
    decimals: 1,
    name: 'FLOOF',
    symbol: 'FLOOF',
    logoURI: 'https://raw.githubusercontent.com/GreenFailure/Floof/main/OkyT9kpz_400x400.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'floof' }
  },
  {
    address: 'n54ZwXEcLnc3o7zK48nhrLV4KTU5wWD4iq7Gvdt5tik',
    chainId: 101,
    decimals: 6,
    name: 'Peepo',
    symbol: 'PEEP',
    logoURI:
      'https://zk3y35n3ess4i2a4ya5a6hcllkelztul6a5vm2hk7wfjlq7fgypa.arweave.net/yreN9bskpcRoHMA6DxxLWoi8zovwO1Zo6v2KlcPlNh4',
    tags: ['community'],
    extensions: { coingeckoId: 'peepo-sol' }
  },
  {
    address: 'EP2aYBDD4WvdhnwWLUMyqU69g1ePtEjgYK6qyEAFCHTx',
    chainId: 101,
    decimals: 9,
    name: 'KRILL',
    symbol: 'KRILL',
    logoURI: 'https://raw.githubusercontent.com/solanahodlwhales/whitelist/main/Krill_towen.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'krill' }
  },
  {
    address: 'GTH3wG3NErjwcf7VGCoXEXkgXSHvYhx5gtATeeM5JAS1',
    chainId: 101,
    decimals: 6,
    name: 'Whales Market',
    symbol: 'WHALES',
    logoURI:
      'https://nftstorage.link/ipfs/bafkreic6gboxk4nlhhzzuoqakj55s23y37qzwb7yzykczfxbwj7kafy75i',
    tags: ['community'],
    extensions: { coingeckoId: 'whales-market' }
  },
  {
    address: 'PsyFiqqjiv41G7o5SMRzDJCu4psptThNR2GtfeGHfSq',
    chainId: 101,
    decimals: 6,
    name: 'PsyOptions',
    symbol: 'PSY',
    logoURI:
      'https://user-images.githubusercontent.com/32071703/149460918-3694084f-2a37-4c95-93d3-b5aaf078d444.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'psyoptions' }
  },
  {
    address: 'DhTNFBp4NjaxWqf6LwG57GrJQZfXrso1qK9FcMZt9sv7',
    chainId: 101,
    decimals: 9,
    name: 'Rocky',
    symbol: 'ROCKY',
    logoURI: 'https://imageupload.io/ib/B1wtisSaYlCUmwy_1700434086.jpg',
    tags: ['community'],
    extensions: { coingeckoId: 'rocky' }
  },
  {
    address: 'GgKDdEJ9n2NCHHonE5qSxVgPKGQNsbeXEkr1SHDLapPv',
    chainId: 101,
    decimals: 7,
    name: 'Freaky KEKE',
    symbol: 'KEKE',
    logoURI:
      'https://bafybeihvl5whykpdkgi4anxjj3uxtzoevkbzdls4hsljgxtboy7yg23df4.ipfs.nftstorage.link/',
    tags: ['community'],
    extensions: { coingeckoId: 'freaky-keke' }
  },
  {
    address: 'H1aN3vcvB68eaFPbMkoAss3vnfi4AhP5C2dpnrZzdBc7',
    chainId: 101,
    decimals: 9,
    name: 'Myra',
    symbol: 'MYRA',
    logoURI:
      'https://bafkreieakw6eo745t2l46h2lii3n4sych5jl4v4ldumngslnjph53r6m5y.ipfs.nftstorage.link',
    tags: ['community'],
    extensions: { coingeckoId: 'myra' }
  },
  {
    address: '6D7nXHAhsRbwj8KFZR2agB6GEjMLg4BM7MAqZzRT8F1j',
    chainId: 101,
    decimals: 8,
    name: 'Gosu',
    symbol: 'GOSU',
    logoURI: 'https://raw.githubusercontent.com/jGosu/gosu/main/GOSU%20COIN.png',
    tags: ['old-registry']
  },
  {
    address: 'PRT88RkA4Kg5z7pKnezeNH4mafTvtQdfFgpQTGRjz44',
    chainId: 101,
    decimals: 6,
    name: 'PRT (Parrot Protocol)',
    symbol: 'PRT',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/PRT88RkA4Kg5z7pKnezeNH4mafTvtQdfFgpQTGRjz44/logo.svg',
    tags: ['old-registry'],
    extensions: { coingeckoId: 'parrot-protocol' }
  },
  {
    address: 'LTXH7nCGXz5TBZ57H8oZu7YwmDSVfSqWViW4B28yg8X',
    chainId: 101,
    decimals: 8,
    name: 'Tanox',
    symbol: 'LTX',
    logoURI:
      'https://shdw-drive.genesysgo.net/6EcEYWtMEjonup7RcqStXtfTnYYKavBizgFDGoJoVPZL/image.png',
    tags: ['community']
  },
  {
    address: 'T1oYbAejEESrZLtSAjumAXhzFqZGNxQ4kVN9vPUoxMv',
    chainId: 101,
    decimals: 9,
    name: 'Daumenfrosch',
    symbol: '$daumen',
    logoURI:
      'https://bafkreia2rq6bzgsq2jw2of54xv6hflj6zvkiw3zba2unmlomo2czhquqqy.ipfs.nftstorage.link',
    tags: ['community']
  },
  {
    address: 'CY2E69dSG9vBsMoaXDvYmMDSMEP4SZtRY1rqVQ9tkNDu',
    chainId: 101,
    decimals: 8,
    name: 'Feisty Doge NFT',
    symbol: 'NFD',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/CY2E69dSG9vBsMoaXDvYmMDSMEP4SZtRY1rqVQ9tkNDu/logo.svg',
    tags: ['old-registry']
  },
  {
    address: 'EwJN2GqUGXXzYmoAciwuABtorHczTA5LqbukKXV1viH7',
    chainId: 101,
    decimals: 6,
    name: 'UPS token (UPFI Network)',
    symbol: 'UPS',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EwJN2GqUGXXzYmoAciwuABtorHczTA5LqbukKXV1viH7/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'upfi-network' }
  },
  {
    address: 'kNkT1RDnexWqYP3EYGyWv5ZtazB8CfgGAfJtv9AQ3kz',
    chainId: 101,
    decimals: 9,
    name: 'Kineko',
    symbol: 'KNK',
    logoURI: 'https://www.arweave.net/u7prAs3T9UHwykErAXDfX306yAxFU08PpgvN819K_so?ext=png',
    tags: ['community', 'solana-fm'],
    extensions: { coingeckoId: 'kineko-knk' }
  },
  {
    address: '8HGyAAB1yoM1ttS7pXjHMa3dukTFGQggnFFH3hJZgzQh',
    chainId: 101,
    decimals: 6,
    name: 'COPE',
    symbol: 'COPE',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/8HGyAAB1yoM1ttS7pXjHMa3dukTFGQggnFFH3hJZgzQh/logo.png',
    tags: ['old-registry'],
    extensions: { coingeckoId: 'cope' }
  },
  {
    address: 'G3vWvAaXPHCnncnyAbq6yBRXqfRtEV3h7vExzasZeT6g',
    chainId: 101,
    decimals: 6,
    name: 'CATWIFHAT',
    symbol: 'CIF',
    logoURI: 'https://i.postimg.cc/hGBgdxxj/Cif200x200.png',
    tags: ['community'],
    extensions: { coingeckoId: 'catwifhat' }
  },
  {
    address: '2x8o3hA5S5fBxCSE9hzVTf3RohcMWHqkDNKNEPuzprD5',
    chainId: 101,
    decimals: 9,
    name: 'SolTradingBot',
    symbol: 'STBOT',
    logoURI:
      'https://yzevocek3mrl6hm2lz4m4nhskyu4knc4d5xissdmnss7wkecrodq.arweave.net/xklXCIrbIr8dml54zjTyVinFNFwfbolIbGyl-yiCi4c',
    tags: ['community'],
    extensions: { coingeckoId: 'soltradingbot' }
  },
  {
    address: 'AfPeB1BDUotBeNoLv82XRDCNQcdAA1mqis3YC5SMTe7a',
    chainId: 101,
    decimals: 6,
    name: 'Wild Goat Coin',
    symbol: 'WGC',
    logoURI: 'https://gateway.irys.xyz/edk9MSdbuGJv8kXWV7obsLWrIKVPvFpKdwujf4Ss54A',
    tags: ['community'],
    extensions: { coingeckoId: 'wild-goat-coin' }
  },
  {
    address: '6j14WyX1Ag2pLWvn99euK4xp2VcZD62VeJv2iwCrYmT8',
    chainId: 101,
    decimals: 9,
    name: 'Keeshond Coin',
    symbol: '$KSH',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/6j14WyX1Ag2pLWvn99euK4xp2VcZD62VeJv2iwCrYmT8/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: '3J5QaP1zJN9yXE7jr5XJa3Lq2TyGHSHu2wssK7N1Aw4p',
    chainId: 101,
    decimals: 6,
    name: 'WEN',
    symbol: '$WEN',
    logoURI: 'https://arweave.net/sfrKTJisIlWsNJfw6GWnsitsbUbN6WIjoVJZWMe2Mdk',
    tags: ['community'],
    extensions: { coingeckoId: 'wen-2' }
  },
  {
    address: '2emYMetySwE7Xh6qrG1AwAQ3TDvrLkUSpSZ5AjcWCc7B',
    chainId: 101,
    decimals: 6,
    name: 'Lorm the Worm',
    symbol: 'L',
    logoURI:
      'https://bafybeihx6vk7furiw5ls3zpw2hoyg6eocrj6ztjce6z6fm3nsnqwfbcwye.ipfs.nftstorage.link/',
    tags: ['community']
  },
  {
    address: '6Cw88QKMxS7LzAucXbYDcUEXPq1TvsojYPV9xWwJPt7r',
    chainId: 101,
    decimals: 8,
    name: 'Spore',
    symbol: 'SPORE',
    logoURI:
      'https://bafkreidodmcqrprsgoelphtr5vyqintuqscwixqfh6ndaqurvp2mnnx2h4.ipfs.nftstorage.link/',
    tags: ['community']
  },
  {
    address: '5RpUwQ8wtdPCZHhu6MERp2RGrpobsbZ6MH5dDHkUjs2',
    chainId: 101,
    decimals: 8,
    name: 'Binance USD (Portal from BSC)',
    symbol: 'BUSDbs',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/BUSDbs_wh.png',
    tags: ['wormhole', 'old-registry']
  },
  {
    address: '9mXZ54YnJJRmUN2MaMEtWCfFyoncP4ZhKz7U9DZ4JY2X',
    chainId: 101,
    decimals: 4,
    name: 'SPACEGOLD',
    symbol: 'SPACEGOLD',
    logoURI: 'https://raw.githubusercontent.com/cosmic-condos/SPACEGOLD/main/logo-icon.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'H2ZpBXtzk1DaDTzsoXqMhjN6Bd3qzgefHjUZ1e2zuwAe',
    chainId: 101,
    decimals: 6,
    name: 'joeing737',
    symbol: 'jeoing737',
    logoURI:
      'https://bafybeidis3pytkjvznbizwgvo5iuikmq4r53hpzpepbje7splzm72k3t64.ipfs.cf-ipfs.com/',
    tags: ['community']
  },
  {
    address: '5EjMX8pZkJtkbJwT5vzJhzTexBPhECFUrq5ndD3UkQD1',
    chainId: 101,
    decimals: 8,
    name: 'Sallar',
    symbol: 'ALL',
    logoURI: 'https://arweave.net/bCcdDWvWucyfARaT-8aUKo8Xm-rOHcyrlPSM8Qn7WQQ',
    tags: ['community']
  },
  {
    address: 'Ue4yjkPjA4QGis37eWbBsnqfzyK83BtY4AioDETp3Ab',
    chainId: 101,
    decimals: 6,
    name: 'WHEY',
    symbol: 'WHEY',
    logoURI:
      'https://cdn.discordapp.com/attachments/1052450866243850280/1076846325951365161/Coin_2.png',
    tags: ['community'],
    extensions: { coingeckoId: 'whey-token' }
  },
  {
    address: 'ForaXiBD8K3a7C1PwxV1xqDHs5aV8y8nWRmHebafdkes',
    chainId: 101,
    decimals: 9,
    name: 'Fora',
    symbol: 'FORA',
    logoURI: 'imagepng',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: '6VNKqgz9hk7zRShTFdg5AnkfKwZUcojzwAkzxSH3bnUm',
    chainId: 101,
    decimals: 9,
    name: 'Wrapped HAPI',
    symbol: 'wHAPI',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/6VNKqgz9hk7zRShTFdg5AnkfKwZUcojzwAkzxSH3bnUm/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'hapi' }
  },
  {
    address: 'EKCW975DWdt1roK1NVQDf4QGfaGTcQPU5tFD1DMcMe9Q',
    chainId: 101,
    decimals: 7,
    name: 'Tholana',
    symbol: 'THOL',
    logoURI: 'https://arweave.net/qOW4Inn_tDPZI3rQ-OtRa8gSZ0d5pgGV6vRY9D1T5zU',
    tags: ['community'],
    extensions: { coingeckoId: 'tholana' }
  },
  {
    address: 'FTT9rBBrYwcHam4qLvkzzzhrsihYMbZ3k6wJbdoahxAt',
    chainId: 101,
    decimals: 9,
    name: 'Saber Wrapped Wrapped FTT (Sollet) (9 decimals)',
    symbol: 'sFTT-9',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FTT9rBBrYwcHam4qLvkzzzhrsihYMbZ3k6wJbdoahxAt/icon.png',
    tags: ['old-registry']
  },
  {
    address: '8PMJczfs9W8TDKiNBD85AuqxE8tWACCDeUwxpUeadL3j',
    chainId: 101,
    decimals: 9,
    name: 'CEILING CAT',
    symbol: 'CEICAT',
    logoURI: 'https://i.imgur.com/ROCbyO3.png',
    tags: ['community'],
    extensions: { coingeckoId: 'ceiling-cat' }
  },
  {
    address: 'xABfKiG2KCHi6keTeLycW1iK7B52wJmchSWXu3YrsDp',
    chainId: 101,
    decimals: 5,
    name: 'DONK',
    symbol: 'DONK',
    logoURI: 'https://arweave.net/yu68b5mpxYjDqL990DEL9b_ri9E8TX-o27E1PS9W6II',
    tags: ['community'],
    extensions: { coingeckoId: 'donk' }
  },
  {
    address: 'FNFKRV3V8DtA3gVJN6UshMiLGYA8izxFwkNWmJbFjmRj',
    chainId: 101,
    decimals: 6,
    name: 'TabTrader Token',
    symbol: 'TTT',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FNFKRV3V8DtA3gVJN6UshMiLGYA8izxFwkNWmJbFjmRj/logo.svg',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'tabtrader' }
  },
  {
    address: 'LnTRntk2kTfWEY6cVB8K9649pgJbt6dJLS1Ns1GZCWg',
    chainId: 101,
    decimals: 9,
    name: 'Lantern Staked SOL',
    symbol: 'lanternSOL',
    logoURI: 'https://arweave.net/juI8rxciTff6pljaDiXMEq5klSOngQol_8lvyokGGwY',
    tags: ['community'],
    extensions: { coingeckoId: 'lantern-staked-sol' }
  },
  {
    address: 'HKfs24UEDQpHS5hUyKYkHd9q7GY5UQ679q2bokeL2whu',
    chainId: 101,
    decimals: 6,
    name: 'TinyBits',
    symbol: 'TINY',
    logoURI: 'https://tinycolony.io/tinycolonytoken.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'tiny-colony' }
  },
  {
    address: 'J9nsngni1Pavf4ijP4R9QBaD1yEzKzzUQ1vVgcDQT18J',
    chainId: 101,
    decimals: 5,
    name: 'Polygone on SOL',
    symbol: 'POLYGONE',
    logoURI:
      'https://bafkreidlnj7ne4bnygpn45x2k464vw7xzudib3vtecqwkczo4adbcnn2sm.ipfs.nftstorage.link/',
    tags: ['community']
  },
  {
    address: '7V5AaqHTwiySegaAmNPLekQfTAoK4WvEVgfi2R8V44tB',
    chainId: 101,
    decimals: 9,
    name: 'Random FRAKTs',
    symbol: 'rFRAKT',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7V5AaqHTwiySegaAmNPLekQfTAoK4WvEVgfi2R8V44tB/rFRAKT.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'aYZPYgohjK6LYM8o1v6pnr3ZinhuRzSHd6TRDVDUBkK',
    chainId: 101,
    decimals: 8,
    name: 'BitLegacy Token',
    symbol: 'BTL',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/aYZPYgohjK6LYM8o1v6pnr3ZinhuRzSHd6TRDVDUBkK/logo.png',
    tags: ['old-registry']
  },
  {
    address: 'FeLoyXk8ac2AYVmDhAWEKNWWT63Z9TczeidYbpDvxF3T',
    chainId: 101,
    decimals: 8,
    name: 'Wrapped Capsule Coin (Wormhole v1)',
    symbol: 'wCAPS_v1',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FeLoyXk8ac2AYVmDhAWEKNWWT63Z9TczeidYbpDvxF3T/logo.svg',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'BAy5FmGzFwcVcZq1yXaDvF1mEAChF3MPtBLrUMBsnLN9',
    chainId: 101,
    decimals: 6,
    name: 'Lambo Space Princess',
    symbol: 'LSP',
    logoURI: 'https://cf-ipfs.com/ipfs/QmawB8QaHKMCe8myQbkM15FmsZ1YzCnLnPWPHEN6GAB8a6',
    tags: ['community']
  },
  {
    address: 'BgJW7U1u2RY5XJk9uYb5AqFRzjMtqE7pw3kaf9iw9Ntz',
    chainId: 101,
    decimals: 6,
    name: 'PELFORT',
    symbol: '$PELF',
    logoURI: 'https://raw.githubusercontent.com/yamitora0/pelfort/main/logo.png',
    tags: ['community'],
    extensions: { coingeckoId: 'pelfort' }
  },
  {
    address: 'UNQtEecZ5Zb4gSSVHCAWUQEoNnSVEbWiKCi1v9kdUJJ',
    chainId: 101,
    decimals: 6,
    name: 'Unique Venture Clubs',
    symbol: 'UNQ',
    logoURI: 'https://www.arweave.net/X58AnJYdgZRbTNyf5HzavUD7daqAtuPnz0JcUACU70Y?ext=jpg',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'unq' }
  },
  {
    address: 'GfkfESc5A4EkxCGWsymNY4ZfkCDdvtB7ajCybLfYL1Qq',
    chainId: 101,
    decimals: 6,
    name: 'Alickshundra Occasional-Cortex',
    symbol: 'AOC',
    logoURI:
      'https://ipfs.filebase.io/ipfs/bafybeicxg4smser27vzwm3zigmup6rvsqegpn4raptjp75xkufoyg64auq',
    tags: ['community']
  },
  {
    address: 'cxxShYRVcepDudXhe7U62QHvw8uBJoKFifmzggGKVC2',
    chainId: 101,
    decimals: 9,
    name: 'SolChicks',
    symbol: 'CHICKS',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/cxxShYRVcepDudXhe7U62QHvw8uBJoKFifmzggGKVC2/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'solchicks-token' }
  },
  {
    address: 'AGkFkKgXUEP7ZXazza5a25bSKbz5dDpgafPhqywuQnpf',
    chainId: 101,
    decimals: 9,
    name: 'SunnySideUp Token',
    symbol: 'SSU',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/AGkFkKgXUEP7ZXazza5a25bSKbz5dDpgafPhqywuQnpf/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'sunnysideup' }
  },
  {
    address: 'EzfnjRUKtc5vweE1GCLdHV4MkDQ3ebSpQXLobSKgQ9RB',
    chainId: 101,
    decimals: 6,
    name: 'Cricket Star Manager',
    symbol: 'CSM',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EzfnjRUKtc5vweE1GCLdHV4MkDQ3ebSpQXLobSKgQ9RB/logo.svg',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'cricket-star-manager' }
  },
  {
    address: 'Adq3wnAvtaXBNfy63xGV1YNkDiPKadDT469xF9uZPrqE',
    chainId: 101,
    decimals: 6,
    name: 'What in Tarnation?',
    symbol: 'WIT',
    logoURI: 'https://cf-ipfs.com/ipfs/QmeqEFthErkc4E5r758Uc3X7hLEyB9S83iWc5ZjcW1C9M3',
    tags: ['community'],
    extensions: { coingeckoId: 'what-in-tarnation' }
  },
  {
    address: 'BzjsQpgKjxZedFawUV9GZMExhr7VbvsasQv12v2PVxSt',
    chainId: 101,
    decimals: 8,
    name: 'BAT',
    symbol: 'BATT',
    logoURI: 'https://batt.finance/static/media/logo.6284c2cd472e1bacd3e5c370044f6a0e.svg',
    tags: ['community']
  },
  {
    address: 'E43qU77tnWDwN11o7TtaGMNpxCAqz8RZEZ7PcTCUXSim',
    chainId: 101,
    decimals: 9,
    name: 'SmoLanO',
    symbol: 'SLO',
    logoURI:
      'https://img.fotofolio.xyz/?url=https%3A%2F%2Farweave.net%2F2SMzEgv4IqPaiTkKe09CLodbOWbiC2rmIKRzgkFsFNs',
    tags: ['community'],
    extensions: { coingeckoId: 'smolano' }
  },
  {
    address: 'Ak3ovnWQnAxPSFoSNCoNYJLnJtQDCKRBH4HwhWkb6hFm',
    chainId: 101,
    decimals: 8,
    name: 'CheckDot',
    symbol: 'CDT',
    logoURI: 'https://arweave.net/0qQ9rLiXpfs3G2bcilHsDTYOtHXExocm1VBjV3BvypY',
    tags: ['community'],
    extensions: { coingeckoId: 'checkdot' }
  },
  {
    address: '3ag1Mj9AKz9FAkCQ6gAEhpLSX8B2pUbPdkb9iBsDLZNB',
    chainId: 101,
    decimals: 9,
    name: 'Honk',
    symbol: 'HONK',
    logoURI:
      'https://bafkreia5nmyxbrxshpiebsakviidhkfuoevpcyzonwov7bmaovce5ekzym.ipfs.nftstorage.link',
    tags: ['community'],
    extensions: { coingeckoId: 'honk' }
  },
  {
    address: '8twuNzMszqWeFbDErwtf4gw13E6MUS4Hsdx5mi3aqXAM',
    chainId: 101,
    decimals: 9,
    name: 'Solbank',
    symbol: 'SB',
    logoURI: 'https://gateway.irys.xyz/niSLX8FhcEagTaPapRW4gEbi_u2y675Gy1isLB6wAuM',
    tags: ['community'],
    extensions: { coingeckoId: 'solbank' }
  },
  {
    address: 'CsZ5LZkDS7h9TDKjrbL7VAwQZ9nsRu8vJLhRYfmGaN8K',
    chainId: 101,
    decimals: 6,
    name: 'Wrapped ALEPH (Sollet)',
    symbol: 'soALEPH',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/CsZ5LZkDS7h9TDKjrbL7VAwQZ9nsRu8vJLhRYfmGaN8K/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'FriCEbw1V99GwrJRXPnSQ6su2TabHabNxiZ3VNsVFPPN',
    chainId: 101,
    decimals: 9,
    name: 'Soltato FRIES',
    symbol: 'FRIES',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FriCEbw1V99GwrJRXPnSQ6su2TabHabNxiZ3VNsVFPPN/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'soltato-fries' }
  },
  {
    address: '4BzxVoBQzwKoqm1dQc78r42Yby3EzAeZmMiYFdCjeu5Z',
    chainId: 101,
    decimals: 9,
    name: 'Swole Doge',
    symbol: 'SWOLE',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/4BzxVoBQzwKoqm1dQc78r42Yby3EzAeZmMiYFdCjeu5Z/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'EJPtJEDogxzDbvM8qvAsqYbLmPj5n1vQeqoAzj9Yfv3q',
    chainId: 101,
    decimals: 9,
    name: 'Bozo Hybrid',
    symbol: 'bozoHYBRID',
    logoURI:
      'https://bafkreiamobqahwlwio5syavvfkknvfecgt7osbsh2s4xizihgpsajethyy.ipfs.nftstorage.link',
    tags: ['community'],
    extensions: { coingeckoId: 'bozo-hybrid' }
  },
  {
    address: 'FwEHs3kJEdMa2qZHv7SgzCiFXUQPEycEXksfBkwmS8gj',
    chainId: 101,
    decimals: 9,
    name: 'Wrapped USDT (Allbridge from Avalanche)',
    symbol: 'aaUSDT',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB/logo.svg',
    tags: ['old-registry']
  },
  {
    address: 'KRTapyUMe5fW92KZkYoXToFtc6Cn7UG6seaKz646oGu',
    chainId: 101,
    decimals: 9,
    name: 'OOINK',
    symbol: 'OOINK',
    logoURI: 'https://raw.githubusercontent.com/danvernon/tiny-dogz-logo/main/oink.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'Hmatmu1ktLbobSvim94mfpZmjL5iiyoM1zidtXJRAdLZ',
    chainId: 101,
    decimals: 7,
    name: 'Parasol',
    symbol: 'PSOL',
    logoURI: 'https://raw.githubusercontent.com/parasol-finance/white-paper/main/logo.png',
    tags: ['old-registry'],
    extensions: { coingeckoId: 'parasol-finance' }
  },
  {
    address: 'HrqgFZipMFHXvN5nKvTUaCwuA3Tp2UGqcQzArRGAyQ22',
    chainId: 101,
    decimals: 9,
    name: 'HAT',
    symbol: 'HAT',
    logoURI:
      'https://dd.dexscreener.com/ds-data/tokens/solana/HrqgFZipMFHXvN5nKvTUaCwuA3Tp2UGqcQzArRGAyQ22.png?size=lg&key=43fdcc',
    tags: ['community'],
    extensions: { coingeckoId: 'hat-solana' }
  },
  {
    address: 'BLwTnYKqf7u4qjgZrrsKeNs2EzWkMLqVCu6j8iHyrNA3',
    chainId: 101,
    decimals: 8,
    name: 'Boring Protocol',
    symbol: 'BOP',
    logoURI: 'https://raw.githubusercontent.com/boringprotocol/brand-assets/main/boplogo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'boring-protocol' }
  },
  {
    address: 'SCYfrGCw8aDiqdgcpdGjV6jp4UVVQLuphxTDLNWu36f',
    chainId: 101,
    decimals: 9,
    name: 'Synchrony',
    symbol: 'SCY',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/SCYfrGCw8aDiqdgcpdGjV6jp4UVVQLuphxTDLNWu36f/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'synchrony' }
  },
  {
    address: '4AnuSHLSYc4J6yjNekrYMjknL4zJHCvRLXfUxgpmCLeQ',
    chainId: 101,
    decimals: 3,
    name: 'Zeus Pet AI',
    symbol: 'ZPET',
    logoURI: 'https://raw.githubusercontent.com/ZeusPet-AI/contracts/main/zeuspet_logo.png',
    tags: ['community']
  },
  {
    address: '4Njvi3928U3figEF5tf8xvjLC5GqUN33oe4XTJNe7xXC',
    chainId: 101,
    decimals: 8,
    name: 'Threshold Network Token',
    symbol: 'T',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/T_wh.png',
    tags: ['wormhole']
  },
  {
    address: '7x4FgiFfeqzs1tiUNvJzpt47GtLXAJ8Jfn8G1Hyyu6JH',
    chainId: 101,
    decimals: 6,
    name: 'Smilek',
    symbol: 'SMILEK',
    logoURI:
      'https://sapphire-lazy-macaw-504.mypinata.cloud/ipfs/QmZHBg3pzFBmmfAugfQqWt31YRUNFBcYshZdDbnuxRyxTf',
    tags: ['community'],
    extensions: { coingeckoId: 'eye-earn' }
  },
  {
    address: '7UAzn8R4mBfG1foqyL1169Lzd6cSWXYSLQFXYHzsiNQG',
    chainId: 101,
    decimals: 9,
    name: 'LowQ',
    symbol: 'LOWQ',
    logoURI:
      'https://bafkreianicicf7nez6viem3m3jferpzuegfjjbfvrxmafv572versrnvqy.ipfs.nftstorage.link/',
    tags: ['community'],
    extensions: { coingeckoId: 'lowq' }
  },
  {
    address: '9Ttyez3xiruyj6cqaR495hbBkJU6SUWdV6AmQ9MvbyyS',
    chainId: 101,
    decimals: 6,
    name: 'smolecoin',
    symbol: 'smole',
    logoURI: 'https://ipfs.io/ipfs/QmcXAf2KasPyu8UtLnafsj3MR3YSjPH4huRc4NQ8YSanoX',
    tags: ['community'],
    extensions: { coingeckoId: 'smolecoin' }
  },
  {
    address: 'Ee1pKgTQmP5xjYQs76HmRM2c2YkqEdc9tk5mQbiGFigT',
    chainId: 101,
    decimals: 9,
    name: 'Mad Bears Club',
    symbol: 'MBC',
    logoURI: 'https://arweave.net/7jp6IaYj-kCiCDuHzk-zJLf2wRctrhIa1m_PO0rQuig',
    tags: ['community'],
    extensions: { coingeckoId: 'mad-bears-club-2' }
  },
  {
    address: '3RCVCywxSs8pDRU1hw8fo7xTUCpNuX86w8cKTM6fgWBY',
    chainId: 101,
    decimals: 2,
    name: 'Famous Fox Federation',
    symbol: 'FOXES',
    logoURI: 'https://cloudflare-ipfs.com/ipfs/Qmetu9eyf7jxE9cNV9MYMWborQBGHqurt1MvD2LjwDcumy',
    tags: ['community'],
    extensions: { coingeckoId: 'famous-fox-federation-floor-index' }
  },
  {
    address: '6AarZpv8KwmPBxBEZdRmd3g1q2tUBaSgTNQ5e621qcZQ',
    chainId: 101,
    decimals: 2,
    name: 'Degenerate Ape Academy',
    symbol: 'DAPE',
    logoURI:
      'https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://bafkreie44hlb5xve225n6p2siebaevxiwha37aefyvs2ul2kx2akalnree.ipfs.dweb.link/',
    tags: ['community', 'solana-fm']
  },
  {
    address: 'METAmTMXwdb8gYzyCPfXXFmZZw4rUsXX58PNsDg7zjL',
    chainId: 101,
    decimals: 6,
    name: 'Solice',
    symbol: 'SLC',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/METAmTMXwdb8gYzyCPfXXFmZZw4rUsXX58PNsDg7zjL/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'solice' }
  },
  {
    address: 'Trhor7npQLca4DFiUWR9vJCAw1je2zghSbwh37nW81i',
    chainId: 101,
    decimals: 6,
    name: 'RHO',
    symbol: 'RHO',
    logoURI:
      'https://nftstorage.link/ipfs/bafkreif5ri7om5uezpbiqyx7xo74mxwoth5lsc2l4h6yki3aqlcmhsxkwe',
    tags: ['community', 'token-2022'],
    extensions: { coingeckoId: 'rho' }
  },
  {
    address: '8A9HYfj9WAMgjxARWVCJHAeq9i8vdN9cerBmqUamDj7U',
    chainId: 101,
    decimals: 9,
    name: 'Elementerra',
    symbol: 'ELE',
    logoURI: 'https://elementerra.s3.amazonaws.com/images/elementum.png',
    tags: ['community'],
    extensions: { coingeckoId: 'elementum' }
  },
  {
    address: 'ASTRALvKjGK2xk2pamjMBU5dav5cEQa6zpKCP6FZ7BAJ',
    chainId: 101,
    decimals: 6,
    name: 'ASTRALIS',
    symbol: 'ASTRALIS',
    logoURI:
      'https://shdw-drive.genesysgo.net/AcG1tjtJ3vR1XzSCcVArheGLrwmMsphqExa6VodLymGF/astralis_1500x1500_8bit.png',
    tags: ['community']
  },
  {
    address: 'svtMpL5eQzdmB3uqK9NXaQkq8prGZoKQFNVJghdWCkV',
    chainId: 101,
    decimals: 6,
    name: 'Solvent',
    symbol: 'SVT',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/svtMpL5eQzdmB3uqK9NXaQkq8prGZoKQFNVJghdWCkV/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: '3UCMiSnkcnkPE1pgQ5ggPCBv6dXgVUy16TmMUe1WpG9x',
    chainId: 101,
    decimals: 8,
    name: 'Aleph.im (Portal)',
    symbol: 'ALEPH',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/ALEPH_wh.png',
    tags: ['wormhole', 'old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'aleph-im-wormhole' }
  },
  {
    address: 'HWxpSV3QAGzLQzGAtvhSYAEr7sTQugQygnni1gnUGh1D',
    chainId: 101,
    decimals: 10,
    name: 'Synthetic BTC',
    symbol: 'xBTC',
    logoURI: 'https://www.synthetify.io/icons/xbtc.svg',
    tags: ['old-registry']
  },
  {
    address: '7DGJnYfJrYiP5CKBx6wpbu8F5Ya1swdFoesuCrAKCzZc',
    chainId: 101,
    decimals: 6,
    name: 'Melon Dog',
    symbol: 'MELON',
    logoURI: 'https://arweave.net/5VQtSLt9kwn-FlP4ulK9DjuowQZnLm2zarHqda2MhPI',
    tags: ['community'],
    extensions: { coingeckoId: 'melon-dog' }
  },
  {
    address: '7y2KpMzsxmjCN8ogA3PSfwZvmYUgMuWo7NWY4Ct5jRHp',
    chainId: 101,
    decimals: 6,
    name: 'SolBird',
    symbol: 'BIRD',
    logoURI: 'https://arweave.net/K_IaCXwL9YQTPJnZfvi302k2lhANDvmzkiy6e0Y6Zho',
    tags: ['community']
  },
  {
    address: 'G7rwEgk8KgQ4RUTnMy2W2i7dRDq4hXHD4CSp9PSmSbRW',
    chainId: 101,
    decimals: 9,
    name: 'CHAD',
    symbol: 'CHAD',
    logoURI:
      'https://bafybeicl7hj53czkh3vqclya2tltuuj3f4r7acwbchwjjajfv3jvff62iu.ipfs.nftstorage.link/',
    tags: ['community', 'token-2022'],
    extensions: { coingeckoId: 'chad-on-solana' }
  },
  {
    address: '6naWDMGNWwqffJnnXFLBCLaYu1y5U9Rohe5wwJPHvf1p',
    chainId: 101,
    decimals: 3,
    name: 'SCRAP',
    symbol: 'SCRAP',
    logoURI: 'https://art.pixilart.com/bd1b1275fdc0ac1.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'scrap' }
  },
  {
    address: 'UST8SCn7jrqsq51odVLqcmvnC658HkqrKrPL3w2hHQ7',
    chainId: 101,
    decimals: 8,
    name: 'Saber Wrapped UST (Portal) (8 decimals)',
    symbol: 'sUST-8',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/UST8SCn7jrqsq51odVLqcmvnC658HkqrKrPL3w2hHQ7/icon.png',
    tags: ['old-registry']
  },
  {
    address: 'xStpgUCss9piqeFUk2iLVcvJEGhAdJxJQuwLkXP555G',
    chainId: 101,
    decimals: 9,
    name: 'Staked Step',
    symbol: 'xSTEP',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/xStpgUCss9piqeFUk2iLVcvJEGhAdJxJQuwLkXP555G/logo.svg',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'F1n2Tn7Eb9jTbSQiqy2Z7G4VTbkreHGQqcRKKmwZv726',
    chainId: 101,
    decimals: 9,
    name: 'Tradfi Bro',
    symbol: 'CFA',
    logoURI:
      'https://turquoise-elderly-caribou-768.mypinata.cloud/ipfs/QmcnF55f9w2eT1LQQPgCRanXeAmz7DUb7QZCkJDewC21oS',
    tags: ['community'],
    extensions: { coingeckoId: 'tradfi-bro' }
  },
  {
    address: 'LiLyT885cG9xZKYQk9x6VWMzmcui4ueV9J1uzPDDajY',
    chainId: 101,
    decimals: 6,
    name: 'Solily Protocol Coin',
    symbol: 'LILY',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/LiLyT885cG9xZKYQk9x6VWMzmcui4ueV9J1uzPDDajY/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'HmLspvjpQtQEnArUyJoBSFGS38gNJwBuxAeqSV9SZ66K',
    chainId: 101,
    decimals: 9,
    name: 'RARE',
    symbol: 'RARE',
    logoURI:
      'https://raw.githubusercontent.com/SuperRareBears/srb-assets/main/tokens/rare/logo.png',
    tags: ['community'],
    extensions: { coingeckoId: 'superrarebears-rare' }
  },
  {
    address: 'B4cYZYVYeHgLc3W1pCduCYkoS75G6roPaPdPoBCFweNJ',
    chainId: 101,
    decimals: 9,
    name: 'Colana',
    symbol: 'COL',
    logoURI: 'https://www.arweave.net/hj3JN-bVGRs0ytJmxtXkL3vswXnPHfRAGOUNTNyyg8g',
    tags: ['community'],
    extensions: { coingeckoId: 'dogecola' }
  },
  {
    address: 'JEFFSQ3s8T3wKsvp4tnRAsUBW7Cqgnf8ukBZC4C8XBm1',
    chainId: 101,
    decimals: 9,
    name: 'Saber Wrapped USD Coin (9 decimals)',
    symbol: 'sUSDC-9',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/JEFFSQ3s8T3wKsvp4tnRAsUBW7Cqgnf8ukBZC4C8XBm1/icon.png',
    tags: ['old-registry']
  },
  {
    address: '5qKDWkBejLtRh1UGFV7e58QEkdn2fRyH5ehVXqUYujNW',
    chainId: 101,
    decimals: 9,
    name: 'Sdrive Coin',
    symbol: 'SCOIN',
    logoURI: 'https://arweave.net/O5kTUpi6mNl-FWY2zq01MqK0qkwRKy3O5cyaoosyJwM',
    tags: ['community'],
    extensions: { coingeckoId: 'sdrive-app' }
  },
  {
    address: 'CgnTSoL3DgY9SFHxcLj6CgCgKKoTBr6tp4CPAEWy25DE',
    chainId: 101,
    decimals: 9,
    name: 'Cogent SOL',
    symbol: 'cgntSOL',
    logoURI: 'https://cogent-cogs.s3.us-west-2.amazonaws.com/cgntSOL.png',
    tags: ['community', 'solana-fm'],
    extensions: { coingeckoId: 'cogent-sol' }
  },
  {
    address: '5cJUt4HzoVpRfwAqeNEDfbFJLVNxSpV9rzgPyyY3XLJx',
    chainId: 101,
    decimals: 9,
    name: 'Mbapepe',
    symbol: 'Mbapepe',
    logoURI: 'https://i.ibb.co/hsk8QCp/IMG-20240408-191027-942-3-1.png',
    tags: ['community']
  },
  {
    address: 'JDwzFSxcUvLubUb9xAuuZNvh4bbcEJcuM9TezpmRHVWF',
    chainId: 101,
    decimals: 8,
    name: 'DooDoo (Wormhole)',
    symbol: 'doodoo',
    logoURI:
      'https://nftstorage.link/ipfs/bafybeidyutrgtbcw2oxfajdty7kyd3slwqbxval2itdfingeop4324cdjy',
    tags: ['community'],
    extensions: { coingeckoId: 'doodoo' }
  },
  {
    address: '9TVjnzpF3X8DHsfVqYWoCGphJxtGYh1PDCFN5QmsHW5t',
    chainId: 101,
    decimals: 9,
    name: 'Midas',
    symbol: 'MDS',
    logoURI: 'https://arweave.net/DcmraYTxxarO5sZ1fIKdPIo1f76lRMZB_-q7y1d3Qqw',
    tags: ['community', 'solana-fm'],
    extensions: { coingeckoId: 'midas-token' }
  },
  {
    address: '9noXzpXnkyEcKF3AeXqUHTdR59V5uvrRBUZ9bwfQwxeq',
    chainId: 101,
    decimals: 9,
    name: 'KING',
    symbol: 'KING',
    logoURI: 'https://i.imgur.com/IQ4rEmD.png',
    tags: ['community'],
    extensions: { coingeckoId: 'king-2' }
  },
  {
    address: '8bXZuG6NVuhdmGeMEjypYZGny48DgpZ68TvkvVTmFDdF',
    chainId: 101,
    decimals: 9,
    name: 'Saylor',
    symbol: 'SAYLOR',
    logoURI:
      'https://bafybeihsvj7r5hypkjrkayfq5sgh5fz3ef6hpa5wpnfeesmbc52ujjuvue.ipfs.nftstorage.link',
    tags: ['community']
  },
  {
    address: '9e6nnqbsTjWx3ss6a3x7Q9ZvpupLNYLb8cTbVmm6UD2K',
    chainId: 101,
    decimals: 9,
    name: 'Shuttlecoin',
    symbol: 'SHUT',
    logoURI: 'https://raw.githubusercontent.com/Mikkel76543/crypto9/main/logo.png',
    tags: ['old-registry']
  },
  {
    address: 'AMdnw9H5DFtQwZowVFr4kUgSXJzLokKSinvgGiUoLSps',
    chainId: 101,
    decimals: 9,
    name: 'MOONLANA',
    symbol: 'MOLA',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/AMdnw9H5DFtQwZowVFr4kUgSXJzLokKSinvgGiUoLSps/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'moonlana' }
  },
  {
    address: 'orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE',
    chainId: 101,
    decimals: 6,
    name: 'Orca',
    symbol: 'ORCA',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'orca' }
  },
  {
    address: 'DM8YLBujra6arvKuZ23d4ukqLdzbiGuhyWM4dUZnTnFA',
    chainId: 101,
    decimals: 2,
    name: 'Piggy Sol Gang',
    symbol: 'PSG',
    logoURI:
      'https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://cdn.piggygang.com/imgs/4a9e3480c4230ee0efb2a408fab74d91.jpg',
    tags: ['community']
  },
  {
    address: '2ZE6hSL36e44wP168YMnxrbi1CSCFuD2BJm7NoNHfsmN',
    chainId: 101,
    decimals: 9,
    name: 'Solabrador',
    symbol: 'SOBER',
    logoURI: 'https://node2.irys.xyz/5xOYKlM26hYXX5wkZoQhc1yw0Bd0Xzoh_SU52TakOZQ',
    tags: ['community']
  },
  {
    address: 'GRJQtWwdJmp5LLpy8JWjPgn5FnLyqSJGNhn5ZnCTFUwM',
    chainId: 101,
    decimals: 9,
    name: 'Overclock SOL',
    symbol: 'clockSOL',
    logoURI: 'https://raw.githubusercontent.com/Overclock-Validator/assets/main/img.png',
    tags: ['community'],
    extensions: { coingeckoId: 'overclock-staked-sol' }
  },
  {
    address: 'rvxo8t7TKeSmAgpdqK1CY9ddZi3NyowRCh1m2d7KrUc',
    chainId: 101,
    decimals: 9,
    name: 'SMRAI',
    symbol: 'SMRAI',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/rvxo8t7TKeSmAgpdqK1CY9ddZi3NyowRCh1m2d7KrUc/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'E5ZVeBMazQAYq4UEiSNRLxfMeRds9SKL31yPan7j5GJK',
    chainId: 101,
    decimals: 9,
    name: 'Voodoo',
    symbol: 'LDZ',
    logoURI:
      'https://shdw-drive.genesysgo.net/5QGtUB5S2RKa2QyXYcEaXnoDEDN1VswZ5YZkgZ8Zf81S/FB062705-73CE-42C7-9C6F-4C7679DAF01A.jpeg',
    tags: ['community'],
    extensions: { coingeckoId: 'voodoo' }
  },
  {
    address: 'DFL1zNkaGPWm1BqAVqRjCZvHmwTFrEaJtbzJWgseoNJh',
    chainId: 101,
    decimals: 9,
    name: 'DeFi Land',
    symbol: 'DFL',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/DFL1zNkaGPWm1BqAVqRjCZvHmwTFrEaJtbzJWgseoNJh/logo.png',
    tags: ['old-registry'],
    extensions: { coingeckoId: 'defi-land' }
  },
  {
    address: 'ratioMVg27rSZbSvBopUvsdrGUzeALUfFma61mpxc8J',
    chainId: 101,
    decimals: 6,
    name: 'Ratio Governance Token',
    symbol: 'RATIO',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/ratioMVg27rSZbSvBopUvsdrGUzeALUfFma61mpxc8J/logo.svg',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'ratio-finance' }
  },
  {
    address: '63LfDmNb3MQ8mw9MtZ2To9bEA2M71kZUUGq5tiJxcqj9',
    chainId: 101,
    decimals: 5,
    name: 'GIGACHAD',
    symbol: 'GIGA',
    logoURI:
      'https://bafybeifiyvpbr3kd6wepax4qxdlxbjrpz2de4lqsuwwuihirvaal6kqwba.ipfs.nftstorage.link',
    tags: ['community'],
    extensions: { coingeckoId: 'gigachad-2' }
  },
  {
    address: 'ASsnSwFhGVREnuN6YmZQKietjprv731BbETDWQsreAwj',
    chainId: 101,
    decimals: 9,
    name: 'simbawifhat',
    symbol: 'SWH',
    logoURI: 'https://ibb.co/JRvgv9R',
    tags: ['community']
  },
  {
    address: '8UaGbxQbV9v2rsMxy2G2NEh1JYQ8T9dmggq1oesrXD9c',
    chainId: 101,
    decimals: 3,
    name: 'Ribh',
    symbol: 'RIBH',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/8UaGbxQbV9v2rsMxy2G2NEh1JYQ8T9dmggq1oesrXD9c/logo.png',
    tags: ['old-registry']
  },
  {
    address: '47psVap1QaXYYEPhFn7pZuvR8m9GQaX8wDodZuY3fWL7',
    chainId: 101,
    decimals: 6,
    name: 'Book of cartoons',
    symbol: 'BOC',
    logoURI:
      'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f6261666b7265696236373368766f6e6d676f71656b6875707a616b66796668363573796575616868726267366d636f62657a656e75686b6a6578712e697066732e6e667473746f726167652e6c696e6b',
    tags: ['community']
  },
  {
    address: 'BHSTv1nsz57fsXZzcsYWXhEygyqAaQu63DUJd3Rcp5Jo',
    chainId: 101,
    decimals: 9,
    name: 'Bit Harvest Studio Token',
    symbol: 'BHST',
    logoURI: 'https://gitlab.com/bitharveststudio/bhs_governance/-/raw/main/Luna-token.png',
    tags: ['community']
  },
  {
    address: 'HxRELUQfvvjToVbacjr9YECdfQMUqGgPYB68jVDYxkbr',
    chainId: 101,
    decimals: 9,
    name: 'NANA Token',
    symbol: 'NANA',
    logoURI:
      'https://shdw-drive.genesysgo.net/EV1ARo89dwRzR1kv7JMr7V97qrcXjffkcwEuNHMJfJmz/Banan.png',
    tags: ['community', 'solana-fm'],
    extensions: { coingeckoId: 'nana-token' }
  },
  {
    address: '3XxvmED354933DwSPJuzB7SE9uiWpD1ErydDuhmbFRMk',
    chainId: 101,
    decimals: 6,
    name: 'doginthpool',
    symbol: 'DIP',
    logoURI:
      'https://bafkreidjc5can5he5bx7qgvbdkrpmgajs3lcaqm6hvixvrceinc5tsaacq.ipfs.nftstorage.link',
    tags: ['community'],
    extensions: { coingeckoId: 'doginthpool' }
  },
  {
    address: 'A3t817aK6XkhqQA148bjXKWJMhBmP9t2d9caWvQNaHQR',
    chainId: 101,
    decimals: 6,
    name: 'CHURRO',
    symbol: 'CHURRO',
    logoURI:
      'https://bafybeicdl3dbn5cr4xwvov5jnuxusaeichgfyyxnpmmukdsv7xw44qfpxi.ipfs.nftstorage.link',
    tags: ['community']
  },
  {
    address: 'SLCLww7nc1PD2gQPQdGayHviVVcpMthnqUz2iWKhNQV',
    chainId: 101,
    decimals: 9,
    name: 'Solcial token',
    symbol: 'SLCL',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/SLCLww7nc1PD2gQPQdGayHviVVcpMthnqUz2iWKhNQV/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'solcial' }
  },
  {
    address: 'D1wUhnzTDscCDRdxDwR4h82XkesXgQR4Q2zLhSuYJA5m',
    chainId: 101,
    decimals: 6,
    name: 'Flux Terminal',
    symbol: 'FLUXT',
    logoURI:
      'https://image-cdn.solana.fm/images/?imageUrl=https://cf-ipfs.com/ipfs/QmeGpjQhH7CbUfJHFXii2u6gek4ATU4shonqSWMVFMjZ4h',
    tags: ['community']
  },
  {
    address: '8c71AvjQeKKeWRe8jtTGG1bJ2WiYXQdbjqFbUfhHgSVk',
    chainId: 101,
    decimals: 9,
    name: 'GARY',
    symbol: '$GARY',
    logoURI: 'https://raw.githubusercontent.com/puresec-ng/gary/main/GARY_coin.jpg',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'gary' }
  },
  {
    address: 'AZsHEMXd36Bj1EMNXhowJajpUXzrKcK57wW4ZGXVa7yR',
    chainId: 101,
    decimals: 5,
    name: 'Guacamole',
    symbol: 'GUAC',
    logoURI:
      'https://shdw-drive.genesysgo.net/36JhGq9Aa1hBK6aDYM4NyFjR5Waiu9oHrb44j1j8edUt/image.png',
    tags: ['community'],
    extensions: { coingeckoId: 'guacamole' }
  },
  {
    address: '9iLH8T7zoWhY7sBmj1WK9ENbWdS1nL8n9wAxaeRitTa6',
    chainId: 101,
    decimals: 9,
    name: 'Hedge USD',
    symbol: 'USH',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/9iLH8T7zoWhY7sBmj1WK9ENbWdS1nL8n9wAxaeRitTa6/logo.png',
    tags: ['old-registry'],
    extensions: { coingeckoId: 'hedge-usd' }
  },
  {
    address: 'Saber2gLauYim4Mvftnrasomsv6NvAuncvMEZwcLpD1',
    chainId: 101,
    decimals: 6,
    name: 'Saber Protocol Token',
    symbol: 'SBR',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Saber2gLauYim4Mvftnrasomsv6NvAuncvMEZwcLpD1/logo.svg',
    tags: ['old-registry'],
    extensions: { coingeckoId: 'saber' }
  },
  {
    address: '8J5e2FPmBJ1subEUeVkELpeBZv9aYUrMmfHys7sREeXr',
    chainId: 101,
    decimals: 6,
    name: 'CHEXBACCA',
    symbol: 'CHEXBACCA',
    logoURI: 'https://chexbacca.com/assets/images/slider/slider_img01.png',
    tags: ['community'],
    extensions: { coingeckoId: 'chexbacca' }
  },
  {
    address: 'FTT8cGNp3rfTC6c44uPTuEFLqmsVDhjd2BhH65v2uppr',
    chainId: 101,
    decimals: 8,
    name: 'Saber Wrapped Wrapped FTT (Sollet) (8 decimals)',
    symbol: 'ssoFTT-8',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FTT8cGNp3rfTC6c44uPTuEFLqmsVDhjd2BhH65v2uppr/icon.png',
    tags: ['old-registry']
  },
  {
    address: 'CG9WyPmf9EUQWGFUsaPAnFKuAi4eNZGGgCh7mrvAFm8p',
    chainId: 101,
    decimals: 6,
    name: 'DMME.me',
    symbol: 'DMME',
    logoURI: 'https://cf-ipfs.com/ipfs/QmerLhPZW1bXecBtGxFoFs7wByH3A2TCBkujjrSycu1Sys',
    tags: ['community']
  },
  {
    address: 'BQ3F72yt9FVRgYrqCVCG3YohyBesDZ9bTuhGdmQ7GNEF',
    chainId: 101,
    decimals: 9,
    name: 'Grok',
    symbol: 'GROK',
    logoURI: 'https://imageupload.io/ib/buy0hGfs0Eq69TN_1699677473.jpg',
    tags: ['community'],
    extensions: { coingeckoId: 'grok-6' }
  },
  {
    address: '9mWRABuz2x6koTPCWiCPM49WUbcrNqGTHBV9T9k7y1o7',
    chainId: 101,
    decimals: 9,
    name: 'MAI Stablecoin',
    symbol: 'MAI',
    logoURI: 'https://raw.githubusercontent.com/0xlaozi/qidao/main/images/mimatic-red.png',
    tags: ['old-registry'],
    extensions: { coingeckoId: 'mai-solana' }
  },
  {
    address: 'EyrnrbE5ujd3HQG5PZd9MbECN9yaQrqc8pRwGtaLoyC',
    chainId: 101,
    decimals: 9,
    name: 'Wrapped ETH (Allbridge from BSC)',
    symbol: 'abETH',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FeGn77dhg1KXRRFeSwwMiykZnZPw5JXW6naf2aQgZDQf/logo.png',
    tags: ['old-registry']
  },
  {
    address: '9DZ58i5vAfk3JaFVYezYzhrVht7j8McZsUbuTcDiSbrP',
    chainId: 101,
    decimals: 5,
    name: 'Ethrix',
    symbol: 'ETX',
    logoURI: 'https://arweave.net/iOND5JLSsq_0dka0SnzTsDCl83hu0_-sOQ2fDbQDuTQ',
    tags: ['community'],
    extensions: { coingeckoId: 'ethrix' }
  },
  {
    address: 'GEJpt3Wjmr628FqXxTgxMce1pLntcPV4uFi8ksxMyPQh',
    chainId: 101,
    decimals: 9,
    name: 'daoSOL Token',
    symbol: 'daoSOL',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/GEJpt3Wjmr628FqXxTgxMce1pLntcPV4uFi8ksxMyPQh/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'daosol' }
  },
  {
    address: 'CKaKtYvz6dKPyMvYq9Rh3UBrnNqYZAyd7iF4hJtjUvks',
    chainId: 101,
    decimals: 9,
    name: 'Gari',
    symbol: 'GARI',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/CKaKtYvz6dKPyMvYq9Rh3UBrnNqYZAyd7iF4hJtjUvks/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'gari-network' }
  },
  {
    address: 'BkW2v5uv6skTW5c5GYjBctkbY9nuyyHs3gry1dCo5Hra',
    chainId: 101,
    decimals: 9,
    name: 'BōKU Labz',
    symbol: 'BOKU',
    logoURI:
      'https://bafybeid35kcydo75arckv6nwbpxofohxp6jbx3sq6qy4fbmv3idmiqayeq.ipfs.nftstorage.link',
    tags: ['old-registry']
  },
  {
    address: 'BfHkvKMEYjwPXnL36uiM8RnAoMFy8aqNyTJXYU3ZnZtz',
    chainId: 101,
    decimals: 6,
    name: 'ansom',
    symbol: 'ANSOM',
    logoURI: 'https://cf-ipfs.com/ipfs/QmXWnsBLVqSwfKn7zr89HJDb9HSAqHCQQE4eoTSd69qmYe',
    tags: ['community'],
    extensions: { coingeckoId: 'ansom' }
  },
  {
    address: '8yQuj5v4s72UqZi3sYZL5rAD4NPV4ueUwBKzChBDWMVf',
    chainId: 101,
    decimals: 9,
    name: 'Maars',
    symbol: 'MRX',
    logoURI: 'https://raw.githubusercontent.com/maarstoken/crypto/main/maars-800x800.png',
    tags: ['old-registry']
  },
  {
    address: 'EaRMzBwWRwvSgus8rfdZGfdzX3ZKRKoCL7U36G7xfvcb',
    chainId: 101,
    decimals: 9,
    name: 'DRUNK',
    symbol: '$DRUNK',
    logoURI: 'https://node2.irys.xyz/e-xB6tVMZT17UYNGBwT-QfE2omthP5WSzEcGdJB9j-c',
    tags: ['community'],
    extensions: { coingeckoId: 'drunk' }
  },
  {
    address: '66Qq2qS67K4L5xQ3xUTinCyxzdPeZQG1R1ipK8jrY7gc',
    chainId: 101,
    decimals: 5,
    name: 'KIWI Token',
    symbol: 'KIWI',
    logoURI:
      'https://bafkreibcamcjwo5z3itvybznrdtb3fgeiplfy36izu75jygxkt7jzoq4ju.ipfs.nftstorage.link',
    tags: ['community'],
    extensions: { coingeckoId: 'kiwi-token-2' }
  },
  {
    address: 'CALusHembJf3tQ69BxFbLRUSpGRwKzEnLKWUPhQo5dFk',
    chainId: 101,
    decimals: 9,
    name: 'calUSD Stablecoin',
    symbol: 'calUSD',
    logoURI:
      'https://user-images.githubusercontent.com/8619106/167318344-e9ea9147-8969-4818-877c-5c75de10aecc.png',
    tags: ['old-registry']
  },
  {
    address: 'AVLhahDcDQ4m4vHM4ug63oh7xc8Jtk49Dm5hoe9Sazqr',
    chainId: 101,
    decimals: 6,
    name: 'Solama',
    symbol: 'SOLAMA',
    logoURI: 'https://gateway.irys.xyz/UoPHSd2rbj9krhwHfR4Vk94JnzgwbDs8SW92_Z90YUM',
    tags: ['community'],
    extensions: { coingeckoId: 'solama' }
  },
  {
    address: '7i5KKsX2weiTkry7jA4ZwSuXGhs5eJBEjY8vVxR4pfRx',
    chainId: 101,
    decimals: 9,
    name: 'GMT',
    symbol: 'GMT',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7i5KKsX2weiTkry7jA4ZwSuXGhs5eJBEjY8vVxR4pfRx/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'stepn' }
  },
  {
    address: 'NeonTjSjsuo3rexg9o6vHuMXw62f9V7zvmu8M8Zut44',
    chainId: 101,
    decimals: 9,
    name: 'Neon EVM',
    symbol: 'NEON',
    logoURI: 'https://raw.githubusercontent.com/neonevm/neon-evm.docs/main/static/icons/token.svg',
    tags: ['community'],
    extensions: { coingeckoId: 'neon' }
  },
  {
    address: 'PRiME7gDoiG1vGr95a3CRMv9xHY7UGjd4JKvfSkmQu2',
    chainId: 101,
    decimals: 9,
    name: 'SolanaPrime',
    symbol: 'PRIME',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/PRiME7gDoiG1vGr95a3CRMv9xHY7UGjd4JKvfSkmQu2/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'solanaprime' }
  },
  {
    address: 'KARTdF5K68Q2nGppizG3DeCzp7AhHy6YXf2uTQjBSQx',
    chainId: 101,
    decimals: 0,
    name: 'Mushroom Racers Token',
    symbol: 'VROOM',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/KARTdF5K68Q2nGppizG3DeCzp7AhHy6YXf2uTQjBSQx/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: '6F9XriABHfWhit6zmMUYAQBSy6XK5VF1cHXuW5LDpRtC',
    chainId: 101,
    decimals: 9,
    name: 'Run Token',
    symbol: 'RUN',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/6F9XriABHfWhit6zmMUYAQBSy6XK5VF1cHXuW5LDpRtC/RunGear.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'run' }
  },
  {
    address: 'yso11zxLbHA3wBJ9HAtVu6wnesqz9A2qxnhxanasZ4N',
    chainId: 101,
    decimals: 9,
    name: 'Synatra Staked SOL',
    symbol: 'ySOL',
    logoURI:
      'https://shdw-drive.genesysgo.net/76HCWYyF9Sps1TnRdZB1CtHbj5Ji7trzqi4tnxfCabXE/ysol-logo.png',
    tags: ['community'],
    extensions: { coingeckoId: 'synatra-staked-sol' }
  },
  {
    address: 'HCpyiCXvziKByTGoQMLUmooAWBkCLvZmzB9D6TyPdACR',
    chainId: 101,
    decimals: 8,
    name: 'QDOT',
    symbol: 'QDOT',
    logoURI: 'https://www.arweave.net/qyhe_8Lmd82_NWRwxdfPX0fm_CItn18KXV1Skp-x6N0?ext=jpg',
    tags: ['old-registry']
  },
  {
    address: 'CXLBjMMcwkc17GfJtBos6rQCo1ypeH6eDbB82Kby4MRm',
    chainId: 101,
    decimals: 9,
    name: 'Wrapped UST (Wormhole v1)',
    symbol: 'wUST_v1',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/CXLBjMMcwkc17GfJtBos6rQCo1ypeH6eDbB82Kby4MRm/logo.png',
    tags: ['old-registry'],
    extensions: { coingeckoId: 'wrapped-ust' }
  },
  {
    address: 'A5LCTQ1vJECCQWSXJYs3rfCoexctbUgTCAEKDuNye8bZ',
    chainId: 101,
    decimals: 6,
    name: 'gmeow cat',
    symbol: 'GMEOW',
    logoURI: 'https://node1.irys.xyz/ytwHExA-ApqQz4dgdDxBN5rkqw_NkwWveTR2qTGffuM',
    tags: ['community'],
    extensions: { coingeckoId: 'gmeow-cat' }
  },
  {
    address: 'FACTQhZBfRzC7A76antnpAoZtiwYmUfdAN8wz7e8rxC5',
    chainId: 101,
    decimals: 9,
    name: 'Saber Wrapped renBTC (9 decimals)',
    symbol: 'srenBTC-9',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FACTQhZBfRzC7A76antnpAoZtiwYmUfdAN8wz7e8rxC5/icon.png',
    tags: ['old-registry']
  },
  {
    address: 'zwqe1Nd4eiWyCcqdo4FgCq7LYZHdSeGKKudv6RwiAEn',
    chainId: 101,
    decimals: 9,
    name: 'SOLPAY',
    symbol: 'SOLPAY',
    logoURI:
      'https://raw.githubusercontent.com/nguilbaud/token-list/main/assets/mainnet/zwqe1Nd4eiWyCcqdo4FgCq7LYZHdSeGKKudv6RwiAEn/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'solpay-finance' }
  },
  {
    address: 'ATLASXmbPQxBUYbxPsV97usA3fPQYEqzQBUHgiFCUsXx',
    chainId: 101,
    decimals: 8,
    name: 'Star Atlas',
    symbol: 'ATLAS',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/ATLASXmbPQxBUYbxPsV97usA3fPQYEqzQBUHgiFCUsXx/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'star-atlas' }
  },
  {
    address: 'F5WPg7xdZczNg5pynWjPK8TZLT52WmAiT1ZuKRbaLnEM',
    chainId: 101,
    decimals: 6,
    name: 'Pig Cat',
    symbol: 'PC',
    logoURI: 'https://cf-ipfs.com/ipfs/QmSeSJ6huZQLHrNP2TFjU48WtjfP87vFg5FVabP4q9Yf4h',
    tags: ['community'],
    extensions: { coingeckoId: 'pigcatsol' }
  },
  {
    address: '33fsBLA8djQm82RpHmE3SuVrPGtZBWNYExsEUeKX1HXX',
    chainId: 101,
    decimals: 8,
    name: 'Binance USD (Portal from Ethereum)',
    symbol: 'BUSDet',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/BUSDet_wh.png',
    tags: ['wormhole', 'old-registry']
  },
  {
    address: 'AUrMpCDYYcPuHhyNX8gEEqbmDPFUpBpHrNW3vPeCFn5Z',
    chainId: 101,
    decimals: 9,
    name: 'AVAX (Allbridge from Avalanche)',
    symbol: 'AVAX',
    logoURI: 'https://assets.coingecko.com/coins/images/12559/small/coin-round-red.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: '7hdeo5QciUF8S2vfsx6uRJkdNVADBU3DDcXW4zjDcMin',
    chainId: 101,
    decimals: 8,
    name: 'WAM (Wormhole)',
    symbol: 'WAM',
    logoURI:
      'https://bafkreib4rpt2mttfg75fvvsgg3g725chzzpkqz4ci5kccryiaqusl5suei.ipfs.nftstorage.link',
    tags: ['community']
  },
  {
    address: 'MELLd8PyFoeNW3D5VaUe7L96eZeihtrzgLWrbKz5DR2',
    chainId: 101,
    decimals: 6,
    name: 'Mellivora',
    symbol: 'MELL',
    logoURI: 'https://arweave.net/YIrpNAQuLbOMvI8hSRCzJakzm5qiT_wv1Av5mpcYxrY',
    tags: ['community'],
    extensions: { coingeckoId: 'mellivora' }
  },
  {
    address: 'EArkn8uVf8YLfpF2eCdkCvDaPYpQuJzKXxaCnyxXc2P7',
    chainId: 101,
    decimals: 6,
    name: 'Real Smurf Cat-шайлушай',
    symbol: 'SMURF',
    logoURI:
      'https://bafybeigz2m3cfgsmc4q4z6jfqz3t6uzrjg3a5gonza64yw3mjf7vl6oip4.ipfs.nftstorage.link/',
    tags: ['community'],
    extensions: { coingeckoId: 'real-smurf-cat-2' }
  },
  {
    address: 'FmQ7v2QUqXVVtAXkngBh3Mwx7s3mKT55nQ5Z673dURYS',
    chainId: 101,
    decimals: 9,
    name: 'Dark Protocol',
    symbol: 'DARK',
    logoURI: 'https://www.arweave.net/3VPYgJz-wlRAm1H5_4zrsAckyz55qa5ILyk3Uq6l4Ms?ext=png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'dark-protocol' }
  },
  {
    address: 'FgX1WD9WzMU3yLwXaFSarPfkgzjLb2DZCqmkx9ExpuvJ',
    chainId: 101,
    decimals: 6,
    name: 'NINJA',
    symbol: 'NINJA',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FgX1WD9WzMU3yLwXaFSarPfkgzjLb2DZCqmkx9ExpuvJ/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'ninja-protocol' }
  },
  {
    address: '4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R',
    chainId: 101,
    decimals: 6,
    name: 'Raydium',
    symbol: 'RAY',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'raydium' }
  },
  {
    address: '2zzC22UBgJGCYPdFyo7GDwz7YHq5SozJc1nnBqLU8oZb',
    chainId: 101,
    decimals: 9,
    name: '1SPACE',
    symbol: '1SP',
    logoURI: 'https://1space.me/images/1SP_logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'onespace' }
  },
  {
    address: 'CRYPTi2V87Tu6aLc9gSwXM1wSLc6rjZh3TGC4GDRCecq',
    chainId: 101,
    decimals: 9,
    name: 'Crypt',
    symbol: '$CRYPT',
    logoURI:
      'https://aql3kfuqpqpkdchvrzuwyx6pdnjw6p6pualx7kie5erqalavewgq.arweave.net/BBe1FpB8HqGI9Y5pbF_PG1NvP8-gF3-pBOkjACwVJY0?ext=png',
    tags: ['community', 'solana-fm'],
    extensions: { coingeckoId: 'secret-skellies-society' }
  },
  {
    address: 'cocvP5K8DsDYbJkRGasSg69xWFenrVVdBLLKjJKPJSo',
    chainId: 101,
    decimals: 5,
    name: 'COC',
    symbol: 'COC',
    logoURI:
      'https://shdw-drive.genesysgo.net/B7zYUoJVxzhi25zRWPniu4keY4ogmswMRnra1SQMsBnw/coc-logo.png',
    tags: ['community'],
    extensions: { coingeckoId: 'coc' }
  },
  {
    address: '7NQSHjuEGENZDWfSvPZz7oP2D6c5Jc3LjFC6uh179ufr',
    chainId: 101,
    decimals: 9,
    name: ':moyai:(MOAI)',
    symbol: 'MOAI',
    logoURI: 'https://node2.irys.xyz/z-DMnyxOt4FgHKdQq-05tIJOyarmt7Tg1QUqUeEOdew',
    tags: ['community'],
    extensions: { coingeckoId: 'moai' }
  },
  {
    address: 'M9i5xQz8Z2Ua3VHuBkjBSkP5HYwdetu7N9RP5VUsW4z',
    chainId: 101,
    decimals: 6,
    name: 'Chinese Beaver',
    symbol: 'BEAVER',
    logoURI: 'https://gateway.irys.xyz/vhQEI53x9msYz5gHSBofNA1oljDH9xKjGAqkQmge-1o',
    tags: ['community']
  },
  {
    address: 'C5xtJBKm24WTt3JiXrvguv7vHCe7CknDB7PNabp4eYX6',
    chainId: 101,
    decimals: 9,
    name: 'Tiny Bonez',
    symbol: 'T1NY',
    logoURI: 'https://raw.githubusercontent.com/danvernon/tiny-dogz-logo/main/coin.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'GoLDYyyiVeXnVf9qgoK712N5esm1cCbHEK9aNJFx47Sx',
    chainId: 101,
    decimals: 9,
    name: 'DeFi Land Gold',
    symbol: 'GOLDY',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/GoLDYyyiVeXnVf9qgoK712N5esm1cCbHEK9aNJFx47Sx/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'defi-land-gold' }
  },
  {
    address: '2ubuHGFS4VJVxSEpvV3kDwz6JiuXdaAoGMwrwYC87tp8',
    chainId: 101,
    decimals: 9,
    name: 'MILKBAG',
    symbol: 'MILKBAG',
    logoURI:
      'https://www.dextools.io/resources/tokens/logos/solana/2ubuHGFS4VJVxSEpvV3kDwz6JiuXdaAoGMwrwYC87tp8.png?1711033406653',
    tags: ['community']
  },
  {
    address: 'FanJWA4yEVUJj1r83tR7XybxmDGF6bNH8M81ag9aeUbF',
    chainId: 101,
    decimals: 9,
    name: 'BMT',
    symbol: 'BMT',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FanJWA4yEVUJj1r83tR7XybxmDGF6bNH8M81ag9aeUbF/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: '49c7WuCZkQgc3M4qH8WuEUNXfgwupZf1xqWkDQ7gjRGt',
    chainId: 101,
    decimals: 8,
    name: 'The Sandbox (Portal)',
    symbol: 'SAND',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/SAND_wh.png',
    tags: ['wormhole', 'old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'the-sandbox-wormhole' }
  },
  {
    address: 'isktkk27QaTpoRUhwwS5n9YUoYf8ydCuoTz5R2tFEKu',
    chainId: 101,
    decimals: 2,
    name: 'Rafkróna',
    symbol: 'ISKT',
    logoURI: 'https://raw.githubusercontent.com/rafmyntasjodur/iskt-metadata/main/logo.png',
    tags: ['community']
  },
  {
    address: '5tN42n9vMi6ubp67Uy4NnmM5DMZYN8aS8GeB3bEDHr6E',
    chainId: 101,
    decimals: 9,
    name: 'Waggle Network',
    symbol: 'WAG',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/5tN42n9vMi6ubp67Uy4NnmM5DMZYN8aS8GeB3bEDHr6E/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'waggle-network' }
  },
  {
    address: 'BiDB55p4G3n1fGhwKFpxsokBMqgctL4qnZpDH1bVQxMD',
    chainId: 101,
    decimals: 9,
    name: 'Decimated',
    symbol: 'DIO',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/BiDB55p4G3n1fGhwKFpxsokBMqgctL4qnZpDH1bVQxMD/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'decimated' }
  },
  {
    address: '3JSf5tPeuscJGtaCp5giEiDhv51gQ4v3zWg8DGgyLfAB',
    chainId: 101,
    decimals: 6,
    name: 'Wrapped YFI (Sollet)',
    symbol: 'soYFI',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/3JSf5tPeuscJGtaCp5giEiDhv51gQ4v3zWg8DGgyLfAB/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'GENEtH5amGSi8kHAtQoezp1XEXwZJ8vcuePYnXdKrMYz',
    chainId: 101,
    decimals: 9,
    name: 'Genopets',
    symbol: 'GENE',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/GENEtH5amGSi8kHAtQoezp1XEXwZJ8vcuePYnXdKrMYz/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'genopets' }
  },
  {
    address: 'HxhWkVpk5NS4Ltg5nij2G671CKXFRKPK8vy271Ub4uEK',
    chainId: 101,
    decimals: 8,
    name: 'Hxro (Portal)',
    symbol: 'HXRO',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/HXRO_wh.png',
    tags: ['wormhole', 'old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'hxro' }
  },
  {
    address: 'HdnUzyXVD64afcdti3asmtWnsSP9TDrRs16UAqoJp9xS',
    chainId: 101,
    decimals: 6,
    name: 'Locust Pocus',
    symbol: 'CICADA',
    logoURI: 'https://cf-ipfs.com/ipfs/QmQtU6LGYU6q11nsKzedpyHurZU9JPEXpA1odZA811PKEG',
    tags: ['community'],
    extensions: { coingeckoId: 'locust-pocus' }
  },
  {
    address: 'DhRQWsiP53gVXnG8KQwq63Uo1FvouRpVNL8536tsVD5H',
    chainId: 101,
    decimals: 8,
    name: 'Phteven',
    symbol: 'PHTEVE',
    logoURI:
      'https://wakodvrjrzqvc3fkaymxuogqxwh2x3pnaqarada6hczh6l7tx4xq.arweave.net/sBTh1imOYVFsqgYZejjQvY-r7e0EARAMHjiyfy_zvy8',
    tags: ['community'],
    extensions: { coingeckoId: 'phteven' }
  },
  {
    address: 'strng7mqqc1MBJJV6vMzYbEqnwVGvKKGKedeCvtktWA',
    chainId: 101,
    decimals: 9,
    name: 'Stronghold LST',
    symbol: 'strongSOL',
    logoURI:
      'https://shdw-drive.genesysgo.net/CqCTE2k6ext17JLE7EFk6pXAznS7m1rLJaN9nHxUAwpc/stronghold.png',
    tags: ['community'],
    extensions: { coingeckoId: 'stronghold-staked-sol' }
  },
  {
    address: '5Wsd311hY8NXQhkt9cWHwTnqafk7BGEbLu8Py3DSnPAr',
    chainId: 101,
    decimals: 6,
    name: 'Compendium Finance',
    symbol: 'CMFI',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/5Wsd311hY8NXQhkt9cWHwTnqafk7BGEbLu8Py3DSnPAr/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'compendium-fi' }
  },
  {
    address: '25yPcyqSpSv8T2JWyoKKRiU622Sr7LoMk9S3FmuBFt8S',
    chainId: 101,
    decimals: 2,
    name: 'GMers',
    symbol: 'GMERS',
    logoURI:
      'https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://creator-hub-prod.s3.us-east-2.amazonaws.com/gmers_pfp_1662860639809.png',
    tags: ['community']
  },
  {
    address: 'CPjDhhBpwEsLygNuczKcNwBPgMeni1xLomD48x51MyYU',
    chainId: 101,
    decimals: 9,
    name: "Taylor Swift's Cat",
    symbol: 'BENJI',
    logoURI:
      'https://bafkreidr7yjxj75ollxohlgmrvix6dpwgy4y5r3wp2bzz6mrgi3tnuhkuy.ipfs.nftstorage.link',
    tags: ['community'],
    extensions: { coingeckoId: 'taylor-swift-s-cat' }
  },
  {
    address: '5HJ3fCrCXUEEraLJUBLvhbNwSYS2RNzjuuS33FLH7UjP',
    chainId: 101,
    decimals: 9,
    name: 'Lion Cat',
    symbol: 'LC',
    logoURI:
      'https://bafkreiawncphofu5xtihstckvu34knehgsf4vple45dlfdupnza6xc3txq.ipfs.nftstorage.link',
    tags: ['community']
  },
  {
    address: '5WWRMYPchxgh3VmYGPqoq2kfzCtBLxXB9vFH2TeFeR9m',
    chainId: 101,
    decimals: 4,
    name: 'TOYPOODLE COIN',
    symbol: 'TPC',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/5WWRMYPchxgh3VmYGPqoq2kfzCtBLxXB9vFH2TeFeR9m/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'NRVwhjBQiUPYtfDT5zRBVJajzFQHaBUNtC7SNVvqRFa',
    chainId: 101,
    decimals: 6,
    name: 'NIRV',
    symbol: 'NIRV',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/NRVwhjBQiUPYtfDT5zRBVJajzFQHaBUNtC7SNVvqRFa/NIRV.png',
    tags: ['old-registry']
  },
  {
    address: '99ouK5YUK3JPGCPX9joNtHsMU7NPpU7w91JN4kdQ97po',
    chainId: 101,
    decimals: 9,
    name: 'AI',
    symbol: 'AI',
    logoURI: 'https://gateway.irys.xyz/HnDwG54RZvJhTD2PX-mmrD2jwC9MIdxKjW2hL3M8jQc',
    tags: ['community'],
    extensions: { coingeckoId: 'ai-community' }
  },
  {
    address: 'PouWaap6bHZv1oT7T7rzRgQHTBD4nsWQRHGbB5hfDA6',
    chainId: 101,
    decimals: 6,
    name: 'POU',
    symbol: 'POU',
    logoURI:
      'https://bafkreibhyfedw4nxarux6eewzsk2mg7ofe6uklqq3hojzyuu2pgornv42q.ipfs.nftstorage.link',
    tags: ['community'],
    extensions: { coingeckoId: 'pou' }
  },
  {
    address: 'StepAscQoEioFxxWGnh2sLBDFp9d8rvKz2Yp39iDpyT',
    chainId: 101,
    decimals: 9,
    name: 'Step',
    symbol: 'STEP',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/StepAscQoEioFxxWGnh2sLBDFp9d8rvKz2Yp39iDpyT/logo.png',
    tags: ['old-registry'],
    extensions: { coingeckoId: 'step-finance' }
  },
  {
    address: '9LzCMqDgTKYz9Drzqnpgee3SGa89up3a247ypMj2xrqM',
    chainId: 101,
    decimals: 8,
    name: 'Audius (Portal)',
    symbol: 'AUDIO',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/AUDIO_wh.png',
    tags: ['wormhole', 'old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'audius-wormhole' }
  },
  {
    address: '9m8E1yLHaG1B2TFSNeWahsitQh5yQRnrbyw756HFAcEa',
    chainId: 101,
    decimals: 9,
    name: 'Random Blockasset Legends',
    symbol: 'rLGND',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/9m8E1yLHaG1B2TFSNeWahsitQh5yQRnrbyw756HFAcEa/rLGND.png',
    tags: ['old-registry']
  },
  {
    address: 'MEANeD3XDdUmNMsRGjASkSWdC8prLYsoRJ61pPeHctD',
    chainId: 101,
    decimals: 6,
    name: 'MEAN',
    symbol: 'MEAN',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/MEANeD3XDdUmNMsRGjASkSWdC8prLYsoRJ61pPeHctD/logo.svg',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'meanfi' }
  },
  {
    address: 'CJ5U6wPmjxFUyTJpUTS7Rt1UqhTmSVRMvmJ8WD4nndXW',
    chainId: 101,
    decimals: 9,
    name: 'Astrals GLXY',
    symbol: 'GLXY',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/CJ5U6wPmjxFUyTJpUTS7Rt1UqhTmSVRMvmJ8WD4nndXW/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'astrals-glxy' }
  },
  {
    address: '5HsZR8eG7QpQcN8Mnp8oFdENRkJMP9ZkcKhPSCKTJSWh',
    chainId: 101,
    decimals: 9,
    name: 'Moon Roll Coin',
    symbol: 'MRC',
    logoURI: 'https://moonroll-bucket.s3.amazonaws.com/token-image/Frame.png',
    tags: ['community']
  },
  {
    address: 'CejQBkdRPN8Jyod2jVUYTfHwU9hPHvM3rD9prvQiffDU',
    chainId: 101,
    decimals: 9,
    name: 'TAP Coin',
    symbol: 'TAP',
    logoURI: 'https://arweave.net/gHPUUFpbtWac5AnYtV10nGXa3VBgu0PgBiA7gDHJkJE',
    tags: ['community']
  },
  {
    address: 'AWeL8nCXxJm3GZkEVRqxeeT5KWT2KwDa1shgQFeBogkC',
    chainId: 101,
    decimals: 9,
    name: 'VICE',
    symbol: 'VICE',
    logoURI: 'https://bafybeieprtdo3xgvk2ezdlqd47lhcnwdqneoig7jiiiuodoy36jmu6jhte.ipfs.dweb.link',
    tags: ['community', 'token-2022']
  },
  {
    address: 'HysWcbHiYY9888pHbaqhwLYZQeZrcQMXKQWRqS7zcPK5',
    chainId: 101,
    decimals: 8,
    name: 'Axie Infinity Shard (Portal from Ethereum)',
    symbol: 'AXSet',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/AXSet_wh.png',
    tags: ['wormhole', 'old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'axie-infinity-shard-wormhole' }
  },
  {
    address: 'DFrJxDoLMYt6bNYeNe8Wrjzj2UPUSLZLEMMYBLuTKcTk',
    chainId: 101,
    decimals: 8,
    name: 'NINJA TURTLES',
    symbol: 'NINJA',
    logoURI: 'https://arweave.net/2J8mJ6N6GCg7BWTHtcPZMEZsF2iuTYBRI9jdtnHS77o',
    tags: ['community'],
    extensions: { coingeckoId: 'ninja-turtles' }
  },
  {
    address: 'BaoawH9p2J8yUK9r5YXQs3hQwmUJgscACjmTkh8rMwYL',
    chainId: 101,
    decimals: 6,
    name: 'AllDomains',
    symbol: 'ALL',
    logoURI: 'https://arweave.net/FY7yQGrLCAvKAup_SYEsHDoTRZXsttuYyQjvHTnOrYk',
    tags: ['community'],
    extensions: { coingeckoId: 'alldomains' }
  },
  {
    address: 'C6qep3y7tCZUJYDXHiwuK46Gt6FsoxLi8qV1bTCRYaY1',
    chainId: 101,
    decimals: 6,
    name: 'Learning Star',
    symbol: 'LSTAR',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/D3yigvdWq6qobhAwQL6UiSide5W9W7zcJbuVvKa3T231/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'learning-star' }
  },
  {
    address: 'uL2qhMckUAroJPt2MLHwEeppJNYE3wBAGFMCs3anwXn',
    chainId: 101,
    decimals: 2,
    name: 'Drippies',
    symbol: 'DRIPSPLIT',
    logoURI:
      'https://img-cdn.magiceden.dev/rs:fit:640:640:0:0/plain/https://arweave.net/WeX4k81n1xfmCQjaqr16a_iK_R43b8F5mBYiob5YiUQ/4248.png',
    tags: ['community', 'solana-fm']
  },
  {
    address: 'GDfnEsia2WLAW5t8yx2X5j2mkfA74i5kwGdDuZHt7XmG',
    chainId: 101,
    decimals: 9,
    name: 'CROWN Token',
    symbol: 'CROWN',
    logoURI:
      'https://shdw-drive.genesysgo.net/AwJ6W2rRaYCGXimceFuLm5td14fhN1VFEfSYg566RxMD/image.png',
    tags: ['community'],
    extensions: { coingeckoId: 'crown-by-third-time-games' }
  },
  {
    address: 'EwxNF8g9UfmsJVcZFTpL9Hx5MCkoQFoJi6XNWzKf1j8e',
    chainId: 101,
    decimals: 9,
    name: 'Wrapped CUSD (Allbridge from Celo)',
    symbol: 'acUSD',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7236.png',
    tags: ['old-registry'],
    extensions: { coingeckoId: 'wrapped-cusd-allbridge-from-celo' }
  },
  {
    address: '6Dujewcxn1qCd6rcj448SXQL9YYqTcqZCNQdCn3xJAKS',
    chainId: 101,
    decimals: 6,
    name: 'ARTE',
    symbol: 'ARTE',
    logoURI: 'https://raw.githubusercontent.com/ArtPunks/ARTE-token/main/assets/token_512.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'HkSiK3rrAf4JHXN7Cf1j7GsLofX9jo8962xabT1qiff1',
    chainId: 101,
    decimals: 2,
    name: 'Satori',
    symbol: 'SATORI',
    logoURI:
      'https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://bafkreieavkjl5rchszvydi7asd3e7jzms5cw6ggixjfto6euuxd3ido7ui.ipfs.dweb.link/',
    tags: ['community']
  },
  {
    address: 'EMAb1cexvwrMeViyYiK8941V7SGWiXsyhMREBcswggPw',
    chainId: 101,
    decimals: 2,
    name: 'Basilisk',
    symbol: 'BSLSK',
    logoURI: 'https://i.postimg.cc/d0j6rRWH/Dark-BASLSK-666x666.png',
    tags: ['community']
  },
  {
    address: '55qMv1HtV8fqRjnFwDb9yDi9tBCeV8xwfgrPKgiJk5DN',
    chainId: 101,
    decimals: 8,
    name: 'MAGA VP (Wormhole)',
    symbol: 'MVP',
    logoURI: 'https://i.imgur.com/cFpN7lL.png',
    tags: ['community']
  },
  {
    address: 'A3eME5CetyZPBoWbRUwY3tSe25S6tb18ba9ZPbWk9eFJ',
    chainId: 101,
    decimals: 6,
    name: 'Peng',
    symbol: 'PENG',
    logoURI:
      'https://bafkreibmv7tbmuqqhm2foemzuy4o4bxqd677r3obw6igrtlmpe5k3j4oge.ipfs.nftstorage.link',
    tags: ['community'],
    extensions: { coingeckoId: 'peng' }
  },
  {
    address: '4icEZCrEYNop2ZaMMCkRHaNzkt6xG9BpijMCQV7mpw6Z',
    chainId: 101,
    decimals: 9,
    name: 'Rocky',
    symbol: 'ROCKY',
    logoURI: 'https://i.ibb.co/X8r9531/rockylogo-transparents.png',
    tags: ['community'],
    extensions: { coingeckoId: 'rocky-the-dog' }
  },
  {
    address: 'DoxsC4PpVHiUxCKYeKSkPXVVVSJYzidZZJxW4XCFF2t',
    chainId: 101,
    decimals: 6,
    name: 'Bonk of America',
    symbol: 'BONKFA',
    logoURI:
      'https://bafybeibh32qfakyjqnxl2p3zyndqmtubjcwkbiimk3qcb6v4wyzekmr5x4.ipfs.nftstorage.link',
    tags: ['community'],
    extensions: { coingeckoId: 'bonk-of-america' }
  },
  {
    address: 'Hz1XePA2vukqFBcf9P7VJ3AsMKoTXyPn3s21dNvGrHnd',
    chainId: 101,
    decimals: 9,
    name: 'Libra Protocol',
    symbol: 'LIBRA',
    logoURI:
      'https://bafkreie7gs73rnak3aqft5eipsbtd4rtam3locmddovgls6wdhfzsjbmqq.ipfs.nftstorage.link',
    tags: ['community', 'token-2022'],
    extensions: { coingeckoId: 'libra-protocol-2' }
  },
  {
    address: 'HfQuaLjMguh7vyZqqrWuVqpsjQd7tAPrzBWKqA3pDTH3',
    chainId: 101,
    decimals: 9,
    name: 'JENSEN HUANG',
    symbol: 'JENSEN',
    logoURI: 'https://i.ibb.co/k5TC2w0/JENSEEEEN.jpg',
    tags: ['community']
  },
  {
    address: 'AAmGoPDFLG6bE82BgZWjVi8k95tj9Tf3vUN7WvtUm2BU',
    chainId: 101,
    decimals: 6,
    name: 'RaceFi Token',
    symbol: 'RACEFI',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/AAmGoPDFLG6bE82BgZWjVi8k95tj9Tf3vUN7WvtUm2BU/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'racefi' }
  },
  {
    address: 'HeqCcMjmuV5s25J49YiJyT6bD5qWLkP88YPajBySniaV',
    chainId: 101,
    decimals: 5,
    name: 'Ponk',
    symbol: 'PONK',
    logoURI:
      'https://bafkreieyllpkega3ytsmq5gdwx2p44roka5pnlclw2an4xivqmbq7prmge.ipfs.nftstorage.link/',
    tags: ['community'],
    extensions: { coingeckoId: 'ponk' }
  },
  {
    address: 'BULLa6g9e5UCuTXC5Z3Cf7s7CgvJhnJfY71DwipSmF8w',
    chainId: 101,
    decimals: 9,
    name: 'BULL',
    symbol: 'BULL',
    logoURI:
      'https://shdw-drive.genesysgo.net/GVxcsjC2PMpAS1E6aVp78YH7FqpfqxPY1ujeqNduhD1f/bull.png',
    tags: ['community']
  },
  {
    address: 'AFbX8oGjGpmVFywbVouvhQSRmiW2aR1mohfahi4Y2AdB',
    chainId: 101,
    decimals: 9,
    name: 'GST',
    symbol: 'GST',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/AFbX8oGjGpmVFywbVouvhQSRmiW2aR1mohfahi4Y2AdB/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'green-satoshi-token' }
  },
  {
    address: 'FnKE9n6aGjQoNWRBZXy4RW6LZVao7qwBonUbiD7edUmZ',
    chainId: 101,
    decimals: 9,
    name: 'Sypool',
    symbol: 'SYP',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/b0e47e39f84cffb655f406eb569c57a88b5211cc/assets/mainnet/FnKE9n6aGjQoNWRBZXy4RW6LZVao7qwBonUbiD7edUmZ/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'sypool' }
  },
  {
    address: 'BtX7AfzEJLnU8KQR1AgHrhGH5s2AHUTbfjhUQP8BhPvi',
    chainId: 101,
    decimals: 10,
    name: 'Saber Wrapped renBTC (10 decimals)',
    symbol: 'srenBTC-10',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/BtX7AfzEJLnU8KQR1AgHrhGH5s2AHUTbfjhUQP8BhPvi/icon.png',
    tags: ['old-registry']
  },
  {
    address: '3f7wfg9yHLtGKvy75MmqsVT1ueTFoqyySQbusrX1YAQ4',
    chainId: 101,
    decimals: 9,
    name: 'Pixel By Pixel',
    symbol: 'PbP',
    logoURI: 'https://www.arweave.net/oM5esNEOkJrw6rElkNeg8I_ayWnf_ScNC8P9cgqNsms',
    tags: ['community']
  },
  {
    address: '6vUQsePjhpH67Db6p7Koj1wQsQP1UtovBkWXSrC1DkaA',
    chainId: 101,
    decimals: 9,
    name: 'dogwifscarf',
    symbol: 'WIFS',
    logoURI:
      'https://bafybeigzgek3mu5mobqo7kwk77g5ieliaqmsbdeav6qm6jj62mhdt6lw3q.ipfs.nftstorage.link',
    tags: ['community'],
    extensions: { coingeckoId: 'dogwifscarf' }
  },
  {
    address: 'Uuc6hiKT9Y6ASoqs2phonGGw2LAtecfJu9yEohppzWH',
    chainId: 101,
    decimals: 9,
    name: 'Baby Samo Coin',
    symbol: 'BABY',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Uuc6hiKT9Y6ASoqs2phonGGw2LAtecfJu9yEohppzWH/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'baby-samo-coin' }
  },
  {
    address: '3Gjckk5jXnJffBruUS2EEYhpiDEN6z5TPXLkFVHkSkkg',
    chainId: 101,
    decimals: 6,
    name: 'IMARO',
    symbol: 'IMARO',
    logoURI: 'https://arweave.net/DHesbj9OXu_a4xL9XYw27lxuG67IrG7Uv0WOuTwu9mo',
    tags: ['community']
  },
  {
    address: 'MERt85fc5boKw3BW1eYdxonEuJNvXbiMbs6hvheau5K',
    chainId: 101,
    decimals: 6,
    name: 'Mercurial(Deprecated)',
    symbol: 'MER',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/MERt85fc5boKw3BW1eYdxonEuJNvXbiMbs6hvheau5K/logo.png',
    tags: ['old-registry'],
    extensions: { coingeckoId: 'mercurial' }
  },
  {
    address: 'AbrMJWfDVRZ2EWCQ1xSCpoVeVgZNpq1U2AoYG98oRXfn',
    chainId: 101,
    decimals: 6,
    name: 'Cheese',
    symbol: 'Cheese',
    logoURI: 'https://bafybeidkucqooosed5ksrfetexnedmf4kts5yo3ioocallzktffa3gjm3y.ipfs.cf-ipfs.com',
    tags: ['community'],
    extensions: { coingeckoId: 'cheese-2' }
  },
  {
    address: '93NhryHqdN5eVz2n4Qoof7ELwnTcgHBw44tmGcLzxKXz',
    chainId: 101,
    decimals: 9,
    name: 'Habibi Come To Dubai',
    symbol: 'DUBAI',
    logoURI:
      'https://cdn.discordapp.com/attachments/912336086913679371/1203082217631260753/606344e0a14fa1.65973326-original.png?ex=65cfcca0&is=65bd57a0&hm=ce80eadae9234b0f02b0edbcb2a1c5f132afa0c14281783ff39085d95807bc63&',
    tags: ['community']
  },
  {
    address: 'remiG7sGaHWgrY7o6SXJW5CYi5A7kmKutyJz6x6hUsp',
    chainId: 101,
    decimals: 9,
    name: 'remilio',
    symbol: 'REMILIO',
    logoURI: 'https://arweave.net/NsC-eIEVyKfXDJ7JPtZzTJ4BMrkQNkmLDseP2IgeDZo',
    tags: ['community'],
    extensions: { coingeckoId: 'remilio' }
  },
  {
    address: '33MJjPS6H7P2nwD648uiTiUu8v5fJ1zKyjnVqeWZ344F',
    chainId: 101,
    decimals: 9,
    name: 'everwave',
    symbol: 'WVE',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/33MJjPS6H7P2nwD648uiTiUu8v5fJ1zKyjnVqeWZ344F/logo.jpg',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: '7dgHoN8wBZCc5wbnQ2C47TDnBMAxG4Q5L3KjP67z8kNi',
    chainId: 101,
    decimals: 8,
    name: 'Decentraland (Portal)',
    symbol: 'MANA',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/MANA_wh.png',
    tags: ['wormhole', 'old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'decentraland-wormhole' }
  },
  {
    address: 'Ce3PSQfkxT5ua4r2JqCoWYrMwKWC5hEzwsrT9Hb7mAz9',
    chainId: 101,
    decimals: 9,
    name: 'SolDate(DATE) Token',
    symbol: 'DATE',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Ce3PSQfkxT5ua4r2JqCoWYrMwKWC5hEzwsrT9Hb7mAz9/DATE.svg',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: '4uRn7vxRPWYP4HuAa4UNXwEPLRL8oQ71YByMhr6yBnL4',
    chainId: 101,
    decimals: 2,
    name: 'Playground Waves',
    symbol: 'WAVES',
    logoURI: 'https://i.imgur.com/CFSGSyE.png',
    tags: ['community', 'solana-fm'],
    extensions: { coingeckoId: 'playground-waves-floor-index' }
  },
  {
    address: 'FNMLmBPkhh7nBFyGHsdrmCuvgEf6ygpaVqFejimHEx9V',
    chainId: 101,
    decimals: 9,
    name: 'vBLSH',
    symbol: 'vBLSH',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FNMLmBPkhh7nBFyGHsdrmCuvgEf6ygpaVqFejimHEx9V/logo.png',
    tags: ['community', 'solana-fm']
  },
  {
    address: 'JxxWsvm9jHt4ah7DT9NuLyVLYZcZLUdPD93PcPQ71Ka',
    chainId: 101,
    decimals: 9,
    name: 'mockJUP',
    symbol: 'mockJUP',
    logoURI: 'https://i.pinimg.com/originals/cb/87/f6/cb87f6e8152961be45a5642ef72c391f.jpg',
    tags: ['community'],
    extensions: { coingeckoId: 'mockjup' }
  },
  {
    address: 'BYATmZ7ry2pewxW3213sczJYB7ZJzPr921uvcRcJYYZQ',
    chainId: 101,
    decimals: 9,
    name: 'Byat',
    symbol: 'BYAT',
    logoURI:
      'https://bafybeiebc4yrvojgwxcbhla4hgg6vswqapei4vos2wivdo5whpzh4kgybe.ipfs.nftstorage.link',
    tags: ['community'],
    extensions: { coingeckoId: 'byat' }
  },
  {
    address: '5goWRao6a3yNC4d6UjMdQxonkCMvKBwdpubU3qhfcdf1',
    chainId: 101,
    decimals: 6,
    name: 'Tether USD (PoS) (Portal from Polygon)',
    symbol: 'USDTpo',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/USDTpo_wh.png',
    tags: ['wormhole', 'old-registry'],
    extensions: { coingeckoId: 'tether-usd-pos-wormhole' }
  },
  {
    address: '2cJgFtnqjaoiu9fKVX3fny4Z4pRzuaqfJ3PBTMk2D9ur',
    chainId: 101,
    decimals: 6,
    name: 'Plutonian DAO',
    symbol: 'PLD',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/2cJgFtnqjaoiu9fKVX3fny4Z4pRzuaqfJ3PBTMk2D9ur/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'plutonian-dao' }
  },
  {
    address: 'Fa96VxtHsUwGbi8DtjXFjsUjAP6rm18AWw5ezsTN4sxw',
    chainId: 101,
    decimals: 9,
    name: 'ORYS',
    symbol: 'Orys',
    logoURI: 'https://arweave.net/biihR7IHkBTFIqirTaskPxbkUYfyYL0rUYMAgPhETeE',
    tags: ['community']
  },
  {
    address: '9hjZ8UTNrNWt3YUTHVpvzdQjNbp64NbKSDsbLqKR6BZc',
    chainId: 101,
    decimals: 9,
    name: 'URANUS',
    symbol: 'ANUS',
    logoURI: 'https://anusexplorer.com/web-logo.png',
    tags: ['community'],
    extensions: { coingeckoId: 'uranus-sol' }
  },
  {
    address: 'DM3Y4R7n1HGhP9AkNT6Ex4w1qQTpgq1TyujrMDX11FMT',
    chainId: 101,
    decimals: 9,
    name: 'BASC',
    symbol: 'BASC',
    logoURI: 'https://arweave.net/7qhG_tPq_PY6xc9yRamTq-o3tceb3z9iioH9383-rBk',
    tags: ['community']
  },
  {
    address: '5sM9xxcBTM9rWza6nEgq2cShA87JjTBx1Cu82LjgmaEg',
    chainId: 101,
    decimals: 9,
    name: 'Bamboo',
    symbol: 'BMBO',
    logoURI: 'https://raw.githubusercontent.com/rishkumaria/bamboo/main/bamboo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'bamboo-coin' }
  },
  {
    address: 'DuSyBCGuhPvyGu6cSvbZonvQvh8JLyGvXJn1TmkJh6Zn',
    chainId: 101,
    decimals: 0,
    name: 'NeonGame Credits',
    symbol: '$NEON',
    logoURI: 'https://arweave.net/VPS4BrOgXT4rg-mwGfCLqXL8vtbII0ianMBsw_L2CeE',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'FkCaFsprX7gySagFoQPHNbe9MRkjrvh21cokJo6C1e2T',
    chainId: 101,
    decimals: 6,
    name: 'JEFF',
    symbol: 'JEFF',
    logoURI: 'https://arweave.net/Pi-s2vzZT8pfYVvFbNjgC0kSrW45PXb1_VPb5HoHuyI',
    tags: ['community', 'token-2022']
  },
  {
    address: 'GkDg1ZfoFkroLAwLqtJNXhxCDg8gmKxHAGxSUZagYFfE',
    chainId: 101,
    decimals: 9,
    name: 'SOL100',
    symbol: 'SOL100',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/GkDg1ZfoFkroLAwLqtJNXhxCDg8gmKxHAGxSUZagYFfE/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'PhiLR4JDZB9z92rYT5xBXKCxmq4pGB1LYjtybii7aiS',
    chainId: 101,
    decimals: 5,
    name: 'Phil Overdrive | Youtube',
    symbol: 'POVT',
    logoURI: 'https://raw.githubusercontent.com/PhilOverdrive/Token/main/Logo.png',
    tags: ['community']
  },
  {
    address: 'FPymkKgpg1sLFbVao4JMk4ip8xb8C8uKqfMdARMobHaw',
    chainId: 101,
    decimals: 9,
    name: 'GrowSol',
    symbol: '$GRW',
    logoURI:
      'https://bafybeiaf23s4jadgatgzrmad3u3ahic4wdpsgcubl4ka2a2mleuq7j4eya.ipfs.nftstorage.link/',
    tags: ['community', 'token-2022']
  },
  {
    address: 'BvEj2MNMPsUrD4vSk7NHs4TtRcCcJd75Wx5HvVbY4rbK',
    chainId: 101,
    decimals: 9,
    name: 'Decimus Dynamics Token',
    symbol: 'DEDS',
    logoURI: 'https://github.com/DecimusDynamics/assets/blob/main/decimus-icon-1x1-black.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'ALQ9KMWjFmxVbew3vMkJj3ypbAKuorSgGst6svCHEe2z',
    chainId: 101,
    decimals: 6,
    name: 'MatrixETF DAO Finance',
    symbol: 'MDF',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/ALQ9KMWjFmxVbew3vMkJj3ypbAKuorSgGst6svCHEe2z/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'matrixetf' }
  },
  {
    address: '4tJZhSdGePuMEfZQ3h5LaHjTPsw1iWTRFTojnZcwsAU6',
    chainId: 101,
    decimals: 9,
    name: 'Elumia Crowns',
    symbol: 'ELU',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/4tJZhSdGePuMEfZQ3h5LaHjTPsw1iWTRFTojnZcwsAU6/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'elumia' }
  },
  {
    address: 'KNVfdSJyq1pRQk9AKKv1g5uyGuk6wpm4WG16Bjuwdma',
    chainId: 101,
    decimals: 9,
    name: 'Saber Wrapped Ether (Portal) (9 decimals)',
    symbol: 'swhETH-9',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/KNVfdSJyq1pRQk9AKKv1g5uyGuk6wpm4WG16Bjuwdma/icon.png',
    tags: ['old-registry']
  },
  {
    address: 'A8eYjpNQF6QYEE7DnM4F514MErFzV1pxVT69d7mdSsMk',
    chainId: 101,
    decimals: 9,
    name: 'Who',
    symbol: 'WHO',
    logoURI:
      'https://bafybeiaahcxwjk6ooyja3xzobfr7gteou6yxsxksyvb7qs7wlhp3mezxty.ipfs.nftstorage.link',
    tags: ['community', 'token-2022']
  },
  {
    address: 'MangoCzJ36AjZyKwVj3VnYU4GTonjfVEnJmvvWaxLac',
    chainId: 101,
    decimals: 6,
    name: 'Mango',
    symbol: 'MNGO',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/MangoCzJ36AjZyKwVj3VnYU4GTonjfVEnJmvvWaxLac/token.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'mango-markets' }
  },
  {
    address: '5YtGSyQ7YxFgDc9oj4SpZGTjoS5p5Fubkg8sMauQqXoS',
    chainId: 101,
    decimals: 9,
    name: 'PULP',
    symbol: 'PULP',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/5YtGSyQ7YxFgDc9oj4SpZGTjoS5p5Fubkg8sMauQqXoS/logo.png',
    tags: ['old-registry']
  },
  {
    address: 'AebrVZPfSH7KPAxPwnuqTZB9QNepdktk7HSSY4SNj7BM',
    chainId: 101,
    decimals: 9,
    name: 'Venture Coin',
    symbol: 'VC',
    logoURI: 'https://arweave.net/6HvW8RLbLhBbw09QDRpPd6HX-N3Sk9kF2vvdaZGHExU',
    tags: ['community'],
    extensions: { coingeckoId: 'venture-coin-2' }
  },
  {
    address: '9sjyR4GrozeV8a9xM3ykKPGPXJYASy9AuufzefCyaCnP',
    chainId: 101,
    decimals: 9,
    name: 'GOLAZO',
    symbol: 'GOL',
    logoURI: 'https://ipfs.io/ipfs/QmSfQtDaGgxWQ6mmyh3SY57nzgwm7oyWqp3atZgNpwP7hd',
    tags: ['community']
  },
  {
    address: 'bootyAfCh1eSQeKhFaDjN9Pu6zwPmAoQPoJWVuPasjJ',
    chainId: 101,
    decimals: 9,
    name: 'BOOTY',
    symbol: 'BOOTY',
    logoURI: 'https://arweave.net/N-9sTPFfUhoFzJ6prtY2hItNkVaHVAktRDiuQrHwWhQ',
    tags: ['community'],
    extensions: { coingeckoId: 'booty' }
  },
  {
    address: 'HJ39rRZ6ys22KdB3USxDgNsL7RKiQmsC3yL8AS3Suuku',
    chainId: 101,
    decimals: 9,
    name: "What's Updog?",
    symbol: 'UPDOG',
    logoURI: 'https://arweave.net/utcdLmTdNHmyD02oMfQn9Yc5L4UbwrtCtka3gpQQas4',
    tags: ['community'],
    extensions: { coingeckoId: 'what-s-updog' }
  },
  {
    address: 'E6UU5M1z4CvSAAF99d9wRoXsasWMEXsvHrz3JQRXtm2X',
    chainId: 101,
    decimals: 9,
    name: 'Dogelana',
    symbol: 'DGLN',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/E6UU5M1z4CvSAAF99d9wRoXsasWMEXsvHrz3JQRXtm2X/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'dogelana' }
  },
  {
    address: 'AUwugnCh1tFc5scRHLNqnHjfcRbHRsq7yrKFUe7Ysmgs',
    chainId: 101,
    decimals: 6,
    name: 'CZOLANA',
    symbol: 'CZOL',
    logoURI: 'https://arweave.net/Ltq2jLtJDONPhaWZKJvGWvJQAAea3eGrb5onwvjyMTM',
    tags: ['community'],
    extensions: { coingeckoId: 'czolana' }
  },
  {
    address: 'BDHqX9YfJE3M6caox3obUX5YpWHz2cjnGFiZJtRghdCo',
    chainId: 101,
    decimals: 9,
    name: 'Solpaka',
    symbol: 'SOLPAKA',
    logoURI: 'https://www.solpaka.com/solpaka-logo-transparent.png',
    tags: ['community'],
    extensions: { coingeckoId: 'solpaka' }
  },
  {
    address: '3FHpkMTQ3QyAJoLoXVdBpH4TfHiehnL2kXmv9UXBpYuF',
    chainId: 101,
    decimals: 9,
    name: 'STYLE',
    symbol: 'STYLE',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/3FHpkMTQ3QyAJoLoXVdBpH4TfHiehnL2kXmv9UXBpYuF/style.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'style' }
  },
  {
    address: '2Ry7AGS1w488LdSxhz2XvSrU1EVUzUGJo27DBP57couh',
    chainId: 101,
    decimals: 7,
    name: 'BEN',
    symbol: '$BEN',
    logoURI: 'https://arweave.net/vvRsvtg1dtVxoUL6XNeRp-cOIYp8BRbaDigmuKvLazk',
    tags: ['community']
  },
  {
    address: '2TybzwN2X1g7Y6GRbB4cRx4KPK7bqdK9tYCozBXxiTfr',
    chainId: 101,
    decimals: 6,
    name: 'Procreation AI',
    symbol: 'PAI',
    logoURI:
      'https://bafkreifcytddas5fcgeaatsxu4yx5wwu4ths7726qa7rw4c2njbyuvmhum.ipfs.nftstorage.link/',
    tags: ['community']
  },
  {
    address: '5doZSgpsKVJk9u58hsmDsq8N6oNtELvsycoFJ42P327p',
    chainId: 101,
    decimals: 6,
    name: 'The OG Cheems Inu',
    symbol: 'OGCINU',
    logoURI: 'https://i.im.ge/2024/03/08/8vC1Br.Profile02Artboard-62x.png',
    tags: ['community'],
    extensions: { coingeckoId: 'the-og-cheems-inu' }
  },
  {
    address: 'drakduQWnTS89CdTUdgHmZzEkN6reBLYqrk8rzVhU53',
    chainId: 101,
    decimals: 5,
    name: 'Drako',
    symbol: 'DRAKO',
    logoURI:
      'https://shdw-drive.genesysgo.net/BKajV6Kxs53iWNuBZW23CXKv2TWwHMtYYRLrTgUVXL6U/drako.jpg',
    tags: ['community'],
    extensions: { coingeckoId: 'drako' }
  },
  {
    address: '2ioyweEeV4xJCkFJvh868X9iP3L6Q31MVCawfbJLRTHq',
    chainId: 101,
    decimals: 9,
    name: 'DOGWIFOUTHAT',
    symbol: 'WIFOUT',
    logoURI: 'https://i.imgur.com/3642zZD.jpg',
    tags: ['community'],
    extensions: { coingeckoId: 'dogwifouthat' }
  },
  {
    address: '8PMHT4swUMtBzgHnh5U564N5sjPSiUz2cjEQzFnnP1Fo',
    chainId: 101,
    decimals: 9,
    name: 'Rope Token',
    symbol: 'ROPE',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/8PMHT4swUMtBzgHnh5U564N5sjPSiUz2cjEQzFnnP1Fo/logo.svg',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'rope-token' }
  },
  {
    address: 'to1yVXiNRMVVgS8i54Yjj3xB51MTorFrCMz7N8cirbK',
    chainId: 101,
    decimals: 9,
    name: 'Anatoly Coin',
    symbol: 'TOLY',
    logoURI:
      'https://shdw-drive.genesysgo.net/3YZtwGNZZisAUxKokcivJEwq2ag93APVXYqeyfaqb9Rq/toly-img.png',
    tags: ['community']
  },
  {
    address: 'DUALa4FC2yREwZ59PHeu1un4wis36vHRv5hWVBmzykCJ',
    chainId: 101,
    decimals: 6,
    name: 'Dual DAO Token',
    symbol: 'DUAL',
    logoURI: 'https://www.dual.finance/images/token-logos/dual.png',
    tags: ['community', 'solana-fm'],
    extensions: { coingeckoId: 'dual-finance' }
  },
  {
    address: 'FS66v5XYtJAFo14LiPz5HT93EUMAHmYipCfQhLpU4ss8',
    chainId: 101,
    decimals: 6,
    name: 'Smog',
    symbol: 'SMOG',
    logoURI: 'https://cloudflare-ipfs.com/ipfs/QmXXiyBNz4PWiP73JicWvQBPvsKJG2uwsvF5obyNvUvL9h',
    tags: ['community'],
    extensions: { coingeckoId: 'smog' }
  },
  {
    address: 'NEo3D6MXRXf2iAfaqvZYqSmFkfutLvNjm86xmfGWNh5',
    chainId: 101,
    decimals: 9,
    name: 'NEO3D TOKEN',
    symbol: 'NEO',
    logoURI:
      'https://raw.githubusercontent.com/minh-git/docusaurus-2/main/static/img/neo3d-logo.jpg',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: '3XwZtyP5g2ku5cNzLXYcBYygvToXKdjw73GSRq73QYLQ',
    chainId: 101,
    decimals: 2,
    name: 'Kreechures',
    symbol: 'KREECHURE',
    logoURI: 'https://cloudflare-ipfs.com/ipfs/QmQLfAMg5aDV2oLeeF5er4hTU5y8wQMB4CaEURxraG6SJd',
    tags: ['community']
  },
  {
    address: 'GS6E87SLTioRDG3uSVRwQmuKKMxDmWU7fktCTJ5xkEM8',
    chainId: 101,
    decimals: 9,
    name: 'Lost At Sea WAVE',
    symbol: 'WAVE',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/GS6E87SLTioRDG3uSVRwQmuKKMxDmWU7fktCTJ5xkEM8/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: '8EDaoeBqpcVACwvkYXh1vAcU29HiBiNhqoF4pRsuUsZS',
    chainId: 101,
    decimals: 9,
    name: 'SunnySideUp staked SOL (sSOL)',
    symbol: 'sSOL',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/8EDaoeBqpcVACwvkYXh1vAcU29HiBiNhqoF4pRsuUsZS/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: '31k88G5Mq7ptbRDf3AM13HAq6wRQHXHikR8hik7wPygk',
    chainId: 101,
    decimals: 9,
    name: 'Graphite',
    symbol: 'GP',
    logoURI: 'https://arweave.net/ALLzymnuIihFPhoNUJpPxQzbGI8LodXKhNzXzbRMPbA',
    tags: ['community'],
    extensions: { coingeckoId: 'graphite-protocol' }
  },
  {
    address: 'C3Vg7ps6dNPugYCpA52KETpdCytE6ki3oe8ccTsaY63i',
    chainId: 101,
    decimals: 9,
    name: 'Memeolorgy',
    symbol: 'LORGY',
    logoURI: 'https://ipfs.io/ipfs/Qman1J5CQ2Z3cFshVvsBk6FxzVHavHQgVbUJF49xEFcsJ6',
    tags: ['community']
  },
  {
    address: '9TE7ebz1dsFo1uQ2T4oYAKSm39Y6fWuHrd6Uk6XaiD16',
    chainId: 101,
    decimals: 9,
    name: 'Million Monke',
    symbol: 'MIMO',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/9TE7ebz1dsFo1uQ2T4oYAKSm39Y6fWuHrd6Uk6XaiD16/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'million-monke' }
  },
  {
    address: 'GsNzxJfFn6zQdJGeYsupJWzUAm57Ba7335mfhWvFiE9Z',
    chainId: 101,
    decimals: 6,
    name: 'Dexlab',
    symbol: 'DXL',
    logoURI:
      'https://raw.githubusercontent.com/dexlab-project/assets/master/dexlab/dexlab_symbol_logo.svg',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'dexlab' }
  },
  {
    address: 'WNZzxM1WqWFH8DpDZSqr6EoHKWXeMx9NLLd2R5RzGPA',
    chainId: 101,
    decimals: 4,
    name: 'Winerz',
    symbol: '$WNZ',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/WNZzxM1WqWFH8DpDZSqr6EoHKWXeMx9NLLd2R5RzGPA/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'winerz' }
  },
  {
    address: 'JET6zMJWkCN9tpRT2v2jfAmm5VnQFDpUBCyaKojmGtz',
    chainId: 101,
    decimals: 9,
    name: 'Jet Protocol',
    symbol: 'JET',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/JET6zMJWkCN9tpRT2v2jfAmm5VnQFDpUBCyaKojmGtz/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'jet' }
  },
  {
    address: '7j7H7sgsnNDeCngAPjpaCN4aaaru4HS7NAFYSEUyzJ3k',
    chainId: 101,
    decimals: 6,
    name: 'SolRazr',
    symbol: 'SOLR',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7j7H7sgsnNDeCngAPjpaCN4aaaru4HS7NAFYSEUyzJ3k/SOLR.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'solrazr' }
  },
  {
    address: 'kiNeKo77w1WBEzFFCXrTDRWGRWGP8yHvKC9rX6dqjQh',
    chainId: 101,
    decimals: 9,
    name: 'KKO Protocol',
    symbol: 'KKO',
    logoURI: 'https://www.arweave.net/lxCJWYgYzilFtAEzqbdvS9xN98-9cG4EvizAkgx1dCY?ext=png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'kineko' }
  },
  {
    address: '6gSmbxSfgJrqeGBYwuKGuSbShhbDLjcCLWqzivvPeG3i',
    chainId: 101,
    decimals: 2,
    name: 'Royal Crows',
    symbol: 'CROWS',
    logoURI:
      'https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://creator-hub-prod.s3.us-east-2.amazonaws.com/royal_crows_pfp_1654260294179.gif',
    tags: ['community']
  },
  {
    address: 'DHVUoxNqv3D7EgktBxUsxFF2Wx83hVDmD2wBBpUaw3jn',
    chainId: 101,
    decimals: 9,
    name: 'Crypto Health Plus',
    symbol: 'CHP',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/DHVUoxNqv3D7EgktBxUsxFF2Wx83hVDmD2wBBpUaw3jn/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: '6KnsFQzCrY1VdD9Qub1ZhRcFSnzQRqhMpT2Xn4X5P2cj',
    chainId: 101,
    decimals: 8,
    name: 'Cloned BNB',
    symbol: 'clBNB',
    logoURI: 'https://markets.clone.so/images/assets/on-bnb.svg',
    tags: ['community']
  },
  {
    address: 'KgV1GvrHQmRBY8sHQQeUKwTm2r2h8t4C8qt12Cw1HVE',
    chainId: 101,
    decimals: 8,
    name: 'AVAX (Portal)',
    symbol: 'AVAX',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/AVAX_wh.png',
    tags: ['wormhole', 'old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'avalanche-wormhole' }
  },
  {
    address: 'DcUoGUeNTLhhzyrcz49LE7z3MEFwca2N9uSw1xbVi1gm',
    chainId: 101,
    decimals: 9,
    name: 'K-Pop',
    symbol: 'KPOP',
    logoURI: 'https://arweave.net/rzUo3sj5mtF5Q1ceUp0R7X_BOdULgdbL9OhzaFoP11U',
    tags: ['community'],
    extensions: { coingeckoId: 'k-pop-on-solana' }
  },
  {
    address: '3dgCCb15HMQSA4Pn3Tfii5vRk7aRqTH95LJjxzsG2Mug',
    chainId: 101,
    decimals: 9,
    name: 'Honeyland',
    symbol: 'HXD',
    logoURI: 'https://arweave.net/NHZyHFvooDi_LKgs1BaHVPMsuRSOoHpE-J26fp1uHGQ',
    tags: ['community', 'solana-fm'],
    extensions: { coingeckoId: 'honeyland-honey' }
  },
  {
    address: 'HgMfSGndLq6vgLxCw4J33nJrwV2zTh81iEJNVwK9kcHD',
    chainId: 101,
    decimals: 9,
    name: "neverSURRENDERone's",
    symbol: 'NSO',
    logoURI: 'https://i.imghippo.com/files/HuWkT1710906839.jpg',
    tags: ['community']
  },
  {
    address: '4UuGQgkD3rSeoXatXRWwRfRd21G87d5LiCfkVzNNv1Tt',
    chainId: 101,
    decimals: 9,
    name: 'Solareum',
    symbol: 'XSB',
    logoURI: 'https://solareum.app/icons/XSB-G.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'solareum-wallet' }
  },
  {
    address: 'GdbyLsNKHKLXTZVEo8QrGKVmrexEeZUYvhpSfuZ9TdkC',
    chainId: 101,
    decimals: 5,
    name: 'ROD.AI',
    symbol: 'RODAI',
    logoURI: 'https://www.rodai.meme/logo.png',
    tags: ['community'],
    extensions: { coingeckoId: 'rod-ai' }
  },
  {
    address: '3Lec18q7nPM62LQwqXG2ddiBTDrFCiNw1NEA1ehBZPgB',
    chainId: 101,
    decimals: 1,
    name: 'SoylanaManletCaptainZ',
    symbol: 'ANSEM',
    logoURI: 'https://arweave.net/tJXiOAU5ZXS7PZbWGKrg5nNRCh5OUlr07iIY4FRWK0o',
    tags: ['community']
  },
  {
    address: 'PRSMNsEPqhGVCH1TtWiJqPjJyh2cKrLostPZTNy1o5x',
    chainId: 101,
    decimals: 6,
    name: 'PRISM',
    symbol: 'PRISM',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/PRSMNsEPqhGVCH1TtWiJqPjJyh2cKrLostPZTNy1o5x/logo.svg',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'prism' }
  },
  {
    address: '73xsLcBnLnc9bh81cqVKqj8uEyiarXng5ZwJuTbnVebG',
    chainId: 101,
    decimals: 4,
    name: 'Wuffi',
    symbol: 'WUF',
    logoURI: 'https://imgur.com/dfbH9sT',
    tags: ['community'],
    extensions: { coingeckoId: 'wuffi' }
  },
  {
    address: 'DNhZkUaxHXYvpxZ7LNnHtss8sQgdAfd1ZYS1fB7LKWUZ',
    chainId: 101,
    decimals: 6,
    name: 'Wrapped USDT (Allbridge from Polygon)',
    symbol: 'apUSDT',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/BQcdHdAQW1hczDbBi9hiegXAR7A98Q9jx3X3iBBBDiq4/logo.png',
    tags: ['old-registry'],
    extensions: { coingeckoId: 'wrapped-usdt-allbridge-from-polygon' }
  },
  {
    address: 'ASoLXbfe7cd6igh5yiEsU8M7FW64QRxPKkxk7sjAfond',
    chainId: 101,
    decimals: 9,
    name: 'aSOL Aggregate Solana Stake Pool',
    symbol: 'aSOL',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/ASoLXbfe7cd6igh5yiEsU8M7FW64QRxPKkxk7sjAfond/logo.svg',
    tags: ['old-registry']
  },
  {
    address: 'pathdXw4He1Xk3eX84pDdDZnGKEme3GivBamGCVPZ5a',
    chainId: 101,
    decimals: 9,
    name: 'Pathfinders SOL',
    symbol: 'pathSOL',
    logoURI:
      'https://raw.githubusercontent.com/igneous-labs/lst-offchain-metadata/master/pathSOL/pathSOL.png',
    tags: ['community'],
    extensions: { coingeckoId: 'pathfinders-staked-sol' }
  },
  {
    address: 'HHjoYwUp5aU6pnrvN4s2pwEErwXNZKhxKGYjRJMoBjLw',
    chainId: 101,
    decimals: 9,
    name: 'PIP',
    symbol: 'PIP',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/HHjoYwUp5aU6pnrvN4s2pwEErwXNZKhxKGYjRJMoBjLw/logo.svg',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'pip' }
  },
  {
    address: 'EgQ3yNtVhdHz7g1ZhjfGbxhFKMPPaFkz8QHXM5RBZBgi',
    chainId: 101,
    decimals: 9,
    name: 'Wrapped DAI (Allbridge from Avalanche)',
    symbol: 'aaDAI',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FYpdBuyAHSbdaAyD1sKkxyLWbAP8uUW9h6uvdhK74ij1/logo.png',
    tags: ['old-registry']
  },
  {
    address: '8W4qpyLx74vwBRewa3rVEPPVMnJ8VWMkCTWCTSYPQTDu',
    chainId: 101,
    decimals: 6,
    name: 'MemeCoinDAOai',
    symbol: 'MEMES',
    logoURI: 'https://arweave.net/hb9M20acG4rA6SFess40tLnhJ6RZkd0EmluNwzh11Wc?ext=png',
    tags: ['community'],
    extensions: { coingeckoId: 'memecoindao' }
  },
  {
    address: '6gnCPhXtLnUD76HjQuSYPENLSZdG8RvDB1pTLM5aLSJA',
    chainId: 101,
    decimals: 5,
    name: 'Basket',
    symbol: 'BSKT',
    logoURI: 'https://gateway.irys.xyz/69o2b3_ekRo4nosnyyXc9piS7d7-8u-h7MNviNzXFYA',
    tags: ['community']
  },
  {
    address: '8L8pDf3jutdpdr4m3np68CL9ZroLActrqwxi6s9Ah5xU',
    chainId: 101,
    decimals: 9,
    name: 'Frax (Wormhole v1)',
    symbol: 'wFRAX_v1',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/8L8pDf3jutdpdr4m3np68CL9ZroLActrqwxi6s9Ah5xU/logo.png',
    tags: ['old-registry']
  },
  {
    address: 'cozyLxNaoJvQ3KB5dCJdu7MoZiBpwBWGdvc4dkMXnqA',
    chainId: 101,
    decimals: 6,
    name: 'Cozy Pepe',
    symbol: 'COZY',
    logoURI: 'https://arweave.net/FZA5wylVpTtGf5B9mI9hk3xUB3CMVYvVlIOwbTlJiL8?ext=png',
    tags: ['community'],
    extensions: { coingeckoId: 'cozy-pepe' }
  },
  {
    address: 'Zippybh3S5xYYam2nvL6hVJKz1got6ShgV4DyD1XQYF',
    chainId: 101,
    decimals: 9,
    name: 'Zippy Staked SOL',
    symbol: 'zippySOL',
    logoURI: 'https://www.zippystake.org/mint.png',
    tags: ['community'],
    extensions: { coingeckoId: 'zippy-staked-sol' }
  },
  {
    address: '3LDAW7enNUZ4DjE1jCi1cDpXvXLrJ1rPiECPbcHpMgG2',
    chainId: 101,
    decimals: 2,
    name: 'FEED on ACF Game',
    symbol: 'FEED',
    logoURI: 'https://shop.alienchickenfarm.com/logos/feed-token.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'F3nefJBcejYbtdREjui1T9DPh5dBgpkKq7u2GAAMXs5B',
    chainId: 101,
    decimals: 6,
    name: 'ALL ART',
    symbol: 'AART',
    logoURI:
      'https://raw.githubusercontent.com/allartprotocol/token-list/main/assets/mainnet/F3nefJBcejYbtdREjui1T9DPh5dBgpkKq7u2GAAMXs5B/logo.jpg',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'all-art' }
  },
  {
    address: 'ELuv4btje7nZNLeMSw7foptfSiRzEXpNxYuet8cM27SN',
    chainId: 101,
    decimals: 6,
    name: 'MARVIN',
    symbol: '$MARVIN',
    logoURI:
      'https://bafkreid3syczq66zhpvdmrvktpw2aksmgk2maol2bt3i2zghwjhisvqnfe.ipfs.nftstorage.link',
    tags: ['community']
  },
  {
    address: 'B8vV6An7xFF3bARB1cmU7TMfKNjjes2WvY7jWqiRc6K6',
    chainId: 101,
    decimals: 6,
    name: 'PengyOS',
    symbol: 'POS',
    logoURI: 'https://cf-ipfs.com/ipfs/QmTPWpadD376oTXzoEWMYEcWEFkLocK48hpbmUvxTpoWrn',
    tags: ['community'],
    extensions: { coingeckoId: 'pengyos' }
  },
  {
    address: 'C8cNX2D1y3jqKpMFkQhP1gGbfvTEdeckZXLBKSN5z5KF',
    chainId: 101,
    decimals: 6,
    name: 'SolMail',
    symbol: 'Mail',
    logoURI: 'https://cf-ipfs.com/ipfs/QmcAtxKADTdcZvZxZj3Gkc5YR4Ket1TDodrwzhHt49u3Bn',
    tags: ['community'],
    extensions: { coingeckoId: 'solmail' }
  },
  {
    address: 'HCgybxq5Upy8Mccihrp7EsmwwFqYZtrHrsmsKwtGXLgW',
    chainId: 101,
    decimals: 6,
    name: 'StarLaunch',
    symbol: 'STARS',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/HCgybxq5Upy8Mccihrp7EsmwwFqYZtrHrsmsKwtGXLgW/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'starlaunch' }
  },
  {
    address: 'Dd6Pde7K4J7yB691gW8K177TWd1Huy6RkfTwrbkz8Fre',
    chainId: 101,
    decimals: 8,
    name: 'Cloned Doge',
    symbol: 'clDOGE',
    logoURI: 'https://markets.clone.so/images/assets/on-doge.svg',
    tags: ['community'],
    extensions: { coingeckoId: 'cloned-dogecoin' }
  },
  {
    address: '2uRFEWRBQLEKpLmF8mohFZGDcFQmrkQEEZmHQvMUBvY7',
    chainId: 101,
    decimals: 9,
    name: 'Solberg',
    symbol: 'SLB',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/2uRFEWRBQLEKpLmF8mohFZGDcFQmrkQEEZmHQvMUBvY7/logo.svg',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'solberg' }
  },
  {
    address: 'Basis9oJw9j8cw53oMV7iqsgo6ihi9ALw4QR31rcjUJa',
    chainId: 101,
    decimals: 6,
    name: 'basis',
    symbol: 'BASIS',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Basis9oJw9j8cw53oMV7iqsgo6ihi9ALw4QR31rcjUJa/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'basis-markets' }
  },
  {
    address: 'CgbJxXyaHeU8VsquBpySuFXA94b6LWXxioZ28wRr8fs9',
    chainId: 101,
    decimals: 6,
    name: 'Viral Inu',
    symbol: 'VINU',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/CgbJxXyaHeU8VsquBpySuFXA94b6LWXxioZ28wRr8fs9/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'viral-inu' }
  },
  {
    address: 'EBQ6gWBQNxA2zB4twR5GWP6CkeAhqZZZeDgeP7BTtdM3',
    chainId: 101,
    decimals: 2,
    name: 'PerpeTraders',
    symbol: 'PERP',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EBQ6gWBQNxA2zB4twR5GWP6CkeAhqZZZeDgeP7BTtdM3/logo.jpg',
    tags: ['old-registry']
  },
  {
    address: 'ELXRYrf8wd4DcyXDU9QPnMdD8jn2twg7o7qEtf5z2GBW',
    chainId: 101,
    decimals: 9,
    name: 'ELIXIR',
    symbol: 'ELIXIR',
    logoURI: 'https://raw.githubusercontent.com/zaptors/image/main/elixir.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'FYfQ9uaRaYvRiaEGUmct45F9WKam3BYXArTrotnTNFXF',
    chainId: 101,
    decimals: 9,
    name: 'Sola Token',
    symbol: 'SOLA',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FYfQ9uaRaYvRiaEGUmct45F9WKam3BYXArTrotnTNFXF/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'sola-token' }
  },
  {
    address: 'F9CpWoyeBJfoRB8f2pBe2ZNPbPsEE76mWZWme3StsvHK',
    chainId: 101,
    decimals: 6,
    name: 'Pepe',
    symbol: 'PEPE',
    logoURI:
      'https://shdw-drive.genesysgo.net/8XiSN28HJqb9czfsBYXsTkLtf4wgAupLpozEaUyA419K/pepecoin.png',
    tags: ['community', 'solana-fm'],
    extensions: { coingeckoId: 'pepesol' }
  },
  {
    address: 'B6aJ3TGfme3SMnLSouHXqWXjVFqYyqj7czzhzr8WJFAi',
    chainId: 101,
    decimals: 4,
    name: 'RAD',
    symbol: 'RAD',
    logoURI: 'https://raw.githubusercontent.com/NFTBrickLayer/zillaz-assets/main/RAD-logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'rad' }
  },
  {
    address: 'DYDWu4hE4MN3aH897xQ3sRTs5EAjJDmQsKLNhbpUiKun',
    chainId: 101,
    decimals: 8,
    name: 'pBTC (Parrot BTC)',
    symbol: 'pBTC',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/DYDWu4hE4MN3aH897xQ3sRTs5EAjJDmQsKLNhbpUiKun/logo.svg',
    tags: ['old-registry']
  },
  {
    address: '6DNSN2BJsaPFdFFc1zP37kkeNe4Usc1Sqkzr9C9vPWcU',
    chainId: 101,
    decimals: 8,
    name: 'Threshold Bitcoin',
    symbol: 'TBTC',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/TBTC_wh.png',
    tags: ['wormhole', 'community'],
    extensions: { coingeckoId: 'tbtc' }
  },
  {
    address: 'PRAxfbouRoJ9yZqhyejEAH6RvjJ86Y82vfiZTBSM3xG',
    chainId: 101,
    decimals: 6,
    name: 'prANA',
    symbol: 'PRANA',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/PRAxfbouRoJ9yZqhyejEAH6RvjJ86Y82vfiZTBSM3xG/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'nirvana-prana' }
  },
  {
    address: '7EW2NTuQFYKVxF3WTA1L1v62pxB7RFYmVC7veGxNDFis',
    chainId: 101,
    decimals: 6,
    name: 'Sonic Sniper',
    symbol: 'SONIC',
    logoURI: 'https://gateway.irys.xyz/4YjV9mHRSR89u80wMQm2-7cjvMsEJx47UyZE_JdZy-k',
    tags: ['community'],
    extensions: { coingeckoId: 'sonic-sniper-bot' }
  },
  {
    address: 'EPeUFDgHRxs9xxEPVaL6kfGQvCon7jmAWKVUHuux1Tpz',
    chainId: 101,
    decimals: 8,
    name: 'Basic Attention Token (Portal)',
    symbol: 'BAT',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/BAT_wh.png',
    tags: ['wormhole', 'old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'basic-attention-token' }
  },
  {
    address: '8Nd3TZJfxt9yYKiPiPmYp6S5DhLftG3bwSqdW3KJwArb',
    chainId: 101,
    decimals: 6,
    name: 'Spodermen',
    symbol: 'SPOODY',
    logoURI: 'https://raw.githubusercontent.com/deeeeeeeeeeeeeev/spodermen/main/spoody_logo.jpg',
    tags: ['community'],
    extensions: { coingeckoId: 'spodermen' }
  },
  {
    address: 'EVoLsbmQXT6R3b11WjPpGEXyCjw1zmmir271XqDbKRsg',
    chainId: 101,
    decimals: 9,
    name: 'Evolve',
    symbol: 'EVOL',
    logoURI:
      'https://bafkreidpaebbynfkp2zpljslaugedn2fkvlujoanerpcifgppxdxhm4kxm.ipfs.nftstorage.link',
    tags: ['community', 'token-2022'],
    extensions: { coingeckoId: 'evolve' }
  },
  {
    address: 'prmmgF5GJCSDNEcwZe2HWb5DsDsFngxTetZ95C4VKxX',
    chainId: 101,
    decimals: 6,
    name: 'PRM Token',
    symbol: 'PRM',
    logoURI:
      'https://shdw-drive.genesysgo.net/4vcTsRNEvNjaG5JLLvURuEM5V4y9RdBF1BVR4YrGNpem/PRM.png',
    tags: ['community'],
    extensions: { coingeckoId: 'prm-token' }
  },
  {
    address: 'ppVT3Vqb323UBEW3QuTvdNCpQm1spEZM8Bt1tv9WALW',
    chainId: 101,
    decimals: 6,
    name: 'Howdy',
    symbol: 'HOWDY',
    logoURI:
      'https://bafkreienmgbxxe6zqirt6th7hglhnf6nfo6easvdppvzb3vigdokjmrkcy.ipfs.nftstorage.link/',
    tags: ['community'],
    extensions: { coingeckoId: 'howdysol' }
  },
  {
    address: '7p6RjGNZ7HLHpfTo6nh21XYw4CZgxXLQPzKXG72pNd2y',
    chainId: 101,
    decimals: 9,
    name: 'CHUNGHWA',
    symbol: 'CIGGS',
    logoURI:
      'https://bafkreieagcborzxb4mkn37uvxjq7wzrxuuix76crpyym7by2bkkrik4jn4.ipfs.nftstorage.link/',
    tags: ['community']
  },
  {
    address: 'gso1xA56hacfgTHTF4F7wN5r4jbnJsKh99vR595uybA',
    chainId: 101,
    decimals: 9,
    name: 'Sunrise gSOL',
    symbol: 'GSOL',
    logoURI: 'https://arweave.net/46QNhUyat533ptVC2myiNVb5BvSP7PAFzM5ILCZTrGU',
    tags: ['community', 'solana-fm']
  },
  {
    address: 'FUTURETnhzFApq2TiZiNbWLQDXMx4nWNpFtmvTf11pMy',
    chainId: 101,
    decimals: 9,
    name: 'Future',
    symbol: 'FUTURE',
    logoURI: 'https://arweave.net/9HRtVucwSCY8fLiHBhiYoqDW9kgjoowdj9dIQfb1oY4?ext=png',
    tags: ['community'],
    extensions: { coingeckoId: 'futurespl' }
  },
  {
    address: 'A53BzB7297SXdF6mguQQ8kzqjVYt8pUeHW5m1i8pD6hf',
    chainId: 101,
    decimals: 6,
    name: 'anon coin',
    symbol: 'ANON',
    logoURI:
      'https://bafybeihnxkkwtjf2a5jfwmetcbqkzj7zedwf24pfaeqtvtog7raaext76a.ipfs.cf-ipfs.com/',
    tags: ['community']
  },
  {
    address: 'CKfatsPMUf8SkiURsDXs7eK6GWb4Jsd6UDbs7twMCWxo',
    chainId: 101,
    decimals: 5,
    name: 'BonkEarn',
    symbol: 'BERN',
    logoURI: 'https://i.imgur.com/nd9AVZ4.jpeg',
    tags: ['community', 'token-2022'],
    extensions: { coingeckoId: 'bonkearn' }
  },
  {
    address: 'Ch5JJQZspiJ9MCDURZAA8nnVvbiwD1tnPcfmkCcVPiDb',
    chainId: 101,
    decimals: 9,
    name: 'GRUMPY CAT',
    symbol: 'GRUMP',
    logoURI:
      'https://bafybeiclh3lsuq3bddebjez57c2ca3a52baxcqxhwuvscxf6j2y4dwwu2u.ipfs.nftstorage.link',
    tags: ['community']
  },
  {
    address: '4jE4VuqFWZfmSXjTDD5KUoN2qkVu96nPTPj4mhs5PA1W',
    chainId: 101,
    decimals: 5,
    name: 'YoloNolo Coin',
    symbol: 'YOLO',
    logoURI:
      'https://nftstorage.link/ipfs/bafybeiepttutbes4mzojtmlvx3iqgwvs673czt5g7k7uoficx4vmjunmie/YOLO LOGO.png',
    tags: ['community']
  },
  {
    address: 'LMFzmYL6y1FX8HsEmZ6yNKNzercBmtmpg2ZoLwuUboU',
    chainId: 101,
    decimals: 9,
    name: 'Lamas Finance',
    symbol: 'LMF',
    logoURI: 'https://www.lamas.co/resource/lmf_token.png',
    tags: ['community'],
    extensions: { coingeckoId: 'lamas-finance' }
  },
  {
    address: '7eJCLyW5KkvzdzkVXs1ukA1WfFjCcocXjVit64tYcown',
    chainId: 101,
    decimals: 9,
    name: 'SolanaLite',
    symbol: 'SLITE',
    logoURI:
      'https://raw.githubusercontent.com/SolanaLite/SolanaLite-Brand-Kit/main/SolanaLite%20(SLITE)%20Logo%20Solana%20Blockchain.svg',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: '7p6zGHdmWHvCH4Lsik2MoMBXqPGhFbSPSceSBXd8KNEC',
    chainId: 101,
    decimals: 6,
    name: 'Plutonium 238',
    symbol: 'PU238',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7p6zGHdmWHvCH4Lsik2MoMBXqPGhFbSPSceSBXd8KNEC/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'CmSryDa4mnDYUicq7qSESsTKAdgBP26jSYcg8zavVoJd',
    chainId: 101,
    decimals: 7,
    name: 'GM Solana',
    symbol: 'GM',
    logoURI: 'https://cdn.jsdelivr.net/gh/brendanhernou/gm/GMSolana.jpg',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'EHaEBhYHWA7HSphorXXosysJem6qF4agccoqDqQKCUge',
    chainId: 101,
    decimals: 8,
    name: 'WEYU',
    symbol: 'WEYU',
    logoURI: 'https://weyu.io/img/WEYU.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'weyu' }
  },
  {
    address: '56tNQ29XBrbovm5K5SThuQatjCy92w2wKUaUeQ8WCD9g',
    chainId: 101,
    decimals: 9,
    name: 'CRY Coin',
    symbol: 'CRYY',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/56tNQ29XBrbovm5K5SThuQatjCy92w2wKUaUeQ8WCD9g/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'FbtRb4zF2u52FSnjLB79yRg73hbMVgSw9rC897shqzb4',
    chainId: 101,
    decimals: 9,
    name: 'MOGGO',
    symbol: 'MOGGO',
    logoURI: 'https://moggo.club/wp-content/uploads/2024/04/moggoLogo200.png',
    tags: ['community'],
    extensions: { coingeckoId: 'moggo' }
  },
  {
    address: 'SUNNYWgPQmFxe9wTZzNK7iPnJ3vYDrkgnxJRJm1s3ag',
    chainId: 101,
    decimals: 6,
    name: 'Sunny Governance Token',
    symbol: 'SUNNY',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/SUNNYWgPQmFxe9wTZzNK7iPnJ3vYDrkgnxJRJm1s3ag/logo.svg',
    tags: ['old-registry'],
    extensions: { coingeckoId: 'sunny-aggregator' }
  },
  {
    address: 'EsirN3orp85uyvZyDrZnbe9cyo7N1114ynLFdwMPCQce',
    chainId: 101,
    decimals: 9,
    name: 'Aevum',
    symbol: 'AEVUM',
    logoURI: 'https://arweave.net/mqtxUgbHYOu4lEUzMZy5YFZtItQQZtjZWbFUIbcM6cU',
    tags: ['community'],
    extensions: { coingeckoId: 'aevum-ore' }
  },
  {
    address: 'htoHLBJV1err8xP5oxyQdV2PLQhtVjxLXpKB7FsgJQD',
    chainId: 101,
    decimals: 9,
    name: 'HTO',
    symbol: 'HTO',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/htoHLBJV1err8xP5oxyQdV2PLQhtVjxLXpKB7FsgJQD/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'heavenland-hto' }
  },
  {
    address: 'HxPoEHMt1vKeqjKCePcqTj6yYgn6Xqq1fKTY3Pjx4YrX',
    chainId: 101,
    decimals: 8,
    name: 'ZAP Token',
    symbol: 'ZAP',
    logoURI: 'https://www.zap.org/static/zapSplash.svg',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'zap' }
  },
  {
    address: '6iFUKWGDksVvmnSYJUGYnsu168xstni8xJkTF7QrpPAu',
    chainId: 101,
    decimals: 6,
    name: 'Candle Cat',
    symbol: 'CANDLE',
    logoURI:
      'https://nftstorage.link/ipfs/bafkreicihgr364leax2u77ltfcrsl7hnrkj2dew2innyekaepvigsta3rm',
    tags: ['community'],
    extensions: { coingeckoId: 'candle-cat' }
  },
  {
    address: '3Xi3EhKjnKAk2KTChzybUSWcLW6eAgTHyotHH1U6sJE1',
    chainId: 101,
    decimals: 8,
    name: 'Giveth Token (Wormhole)',
    symbol: 'GIV',
    logoURI:
      'https://raw.githubusercontent.com/Giveth/giveth-design-assets/master/02-logos/GIV%20Token/GIVToken_600x600.png',
    tags: ['community']
  },
  {
    address: 'SBTCB6pWqeDo6zGi9WVRMLCsKsN6JiR1RMUqvLtgSRv',
    chainId: 101,
    decimals: 8,
    name: 'Saber Wrapped Bitcoin (Sollet) (8 decimals)',
    symbol: 'sBTC-8',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/SBTCB6pWqeDo6zGi9WVRMLCsKsN6JiR1RMUqvLtgSRv/icon.png',
    tags: ['old-registry']
  },
  {
    address: '4sp2EUDrQf46rZun6sYAWzjrXwUpx2T3njuoKmV766RJ',
    chainId: 101,
    decimals: 9,
    name: 'HAMI',
    symbol: 'HAMI',
    logoURI:
      'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f697066732e696f2f697066732f516d526579545254426a4257524c746b6d6d4b416569444d5358694b7242796f574b5455454b3548315356583442',
    tags: ['community'],
    extensions: { coingeckoId: 'hami' }
  },
  {
    address: 'Fishy64jCaa3ooqXw7BHtKvYD8BTkSyAPh6RNE3xZpcN',
    chainId: 101,
    decimals: 6,
    name: 'FISHY by sharky.fi',
    symbol: 'FISHY',
    logoURI:
      'https://shdw-drive.genesysgo.net/CpRahRvMZad2VNTJDN24m4Bk6PsWRBm14w684RatY1bd/The%20winning%20logo.png',
    tags: ['community'],
    extensions: { coingeckoId: 'fishy' }
  },
  {
    address: '6hBry7w55A3NXDAXxjKqrx3oXfAatNkAJUSGt66ZRsZk',
    chainId: 101,
    decimals: 6,
    name: 'Sandy',
    symbol: 'SANDY',
    logoURI:
      'https://bafkreieur42wdbsrrlglcz6kp55kruavaxisd25o42fnydemcvp5qulf2i.ipfs.nftstorage.link',
    tags: ['community', 'token-2022']
  },
  {
    address: '6DSqVXg9WLTWgz6LACqxN757QdHe1sCqkUfojWmxWtok',
    chainId: 101,
    decimals: 7,
    name: 'Solanacorn',
    symbol: 'CORN',
    logoURI: 'https://arweave.net/c_Tbuf4_HSFuogvTV1_FaqqbQipml9YlAETM941s178',
    tags: ['community'],
    extensions: { coingeckoId: 'solanacorn' }
  },
  {
    address: 'F9BqFoWRML4Red6YPiL3xJBP7u9g8f61AKJMEYDB3wBR',
    chainId: 101,
    decimals: 9,
    name: 'Athens',
    symbol: 'ATH',
    logoURI: 'https://arweave.net/GNYZdT1icjRPLbRoivdtSU9_GqBM7LF6khrpV9qCBtM',
    tags: ['community']
  },
  {
    address: 'LFNTYraetVioAPnGJht4yNg2aUZFXR776cMeN9VMjXp',
    chainId: 101,
    decimals: 6,
    name: 'Lifinity',
    symbol: 'LFNTY',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/LFNTYraetVioAPnGJht4yNg2aUZFXR776cMeN9VMjXp/logo.svg',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'lifinity' }
  },
  {
    address: 'BUD1144GGYwmMRFs4Whjfkom5UHqC9a8dZHPVvR2vfPx',
    chainId: 101,
    decimals: 6,
    name: 'BunnyDucky Token',
    symbol: 'BUD',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/BUD1144GGYwmMRFs4Whjfkom5UHqC9a8dZHPVvR2vfPx/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'pawSXHWsonrTey4SX7tz1fM9ksuLpE13Y54K57ym4Rg',
    chainId: 101,
    decimals: 6,
    name: 'PayPaw',
    symbol: 'PAW',
    logoURI:
      'https://shdw-drive.genesysgo.net/83iEXvkKHm2n1J5wGTopwUHEG7DQbyxJcsH6UmKtVJD/ppaw.png',
    tags: ['community'],
    extensions: { coingeckoId: 'paypaw' }
  },
  {
    address: '5s4BYUXLuvs9ZcVDTxkTpKhThWFSpaU8GG55q2iySe2N',
    chainId: 101,
    decimals: 2,
    name: 'Enrex',
    symbol: 'ENRX',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/5s4BYUXLuvs9ZcVDTxkTpKhThWFSpaU8GG55q2iySe2N/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'enrex' }
  },
  {
    address: '7mmXL6Et4SbpDs2iXoZQ3oPEeXeAiyETxh1QjDNi5qnV',
    chainId: 101,
    decimals: 8,
    name: 'OmniCat (Wormhole)',
    symbol: 'OMNI',
    logoURI: 'https://raw.githubusercontent.com/mrmeowman/meow-assets/main/omni-logo.jpg',
    tags: ['community'],
    extensions: { coingeckoId: 'omnicat' }
  },
  {
    address: 'GtMtXoJiqSf8Gfp83cuunnDTiJTeTmv7cniVtJ6UAMWH',
    chainId: 101,
    decimals: 9,
    name: 'NovaDEX',
    symbol: 'NVX',
    logoURI: 'https://pbs.twimg.com/profile_images/1722623481987428352/b4gDEuuT_400x400.jpg',
    tags: ['community'],
    extensions: { coingeckoId: 'novadex' }
  },
  {
    address: 'CYuXNHURE8cF3rQc1687DZnmsWx9ATNG3mZPFmryu22S',
    chainId: 101,
    decimals: 9,
    name: 'PEPESOLANA',
    symbol: 'PEPE',
    logoURI:
      'https://shdw-drive.genesysgo.net/85Mup8SQSvcTXsykzNTAtypV2v3zYrYu9eFTRvUUwmXK/logopep200x200.png',
    tags: ['community']
  },
  {
    address: 'sin1uRe1cMCWR7VPLdZrGrvKs8UvKMsGzhvpJLg4Ld9',
    chainId: 101,
    decimals: 6,
    name: 'sinDAO',
    symbol: 'SIN',
    logoURI:
      'https://nftstorage.link/ipfs/bafkreibne6m5rh42mgvud2womqc2zordzqvki5w4c2yasa76klz7dzwuve',
    tags: ['community'],
    extensions: { coingeckoId: 'sin' }
  },
  {
    address: '2maDvG9nXGVstjdnsCZoSsNtjoda1SsZTLrHBVRgLR5F',
    chainId: 101,
    decimals: 9,
    name: 'CORE',
    symbol: 'CORE',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/2x4fH7kWNgSLpBjCuFBKKKiNHMcJb6fHs8ahQZUWJj1p/Core.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'JACSU5f2fCsQSCDNz1VX2Se4vmQyj8k5EYigD4RppvGV',
    chainId: 101,
    decimals: 9,
    name: 'Joel',
    symbol: 'JOEL',
    logoURI:
      'https://nftstorage.link/ipfs/bafkreifmylk4pzymdeshz27ui7h53gjaeiamu4oqs5fhacw66ub6uxcbda',
    tags: ['community'],
    extensions: { coingeckoId: 'joel' }
  },
  {
    address: 'BQ74oddoJCJKz9W4QaDzLFh1JvLbmXRCvdaC65P7anex',
    chainId: 101,
    decimals: 6,
    name: 'crustieno renaldo',
    symbol: 'SIUUU',
    logoURI: 'https://i.ibb.co/wKQYQgX/11.png',
    tags: ['community']
  },
  {
    address: 'DDti34vnkrCehR8fih6dTGpPuc3w8tL4XQ4QLQhc3xPa',
    chainId: 101,
    decimals: 9,
    name: 'Liquid Solana Derivative 42069',
    symbol: 'LSD',
    logoURI: 'https://arweave.net/b4cfT3yHTxVvuZc2jzmgzWUiEBiuAC9hkM7GhXZEklg',
    tags: ['community'],
    extensions: { coingeckoId: 'liquid-solana-derivative' }
  },
  {
    address: '8HJ81sHVsmJMzm6XBfTgywWQXwQTmVdmXaQHm7htGPH2',
    chainId: 101,
    decimals: 9,
    name: 'Spurdo Spärde',
    symbol: 'spurdo',
    logoURI:
      'https://bafkreiedrxet7nlt4bcqwkf6eeouhp3r2ioswagyn7dpb4eqao4lwweede.ipfs.nftstorage.link',
    tags: ['community'],
    extensions: { coingeckoId: 'spurdo-sparde' }
  },
  {
    address: 'CDJWUqTcYTVAKXAVXoQZFes5JUFc7owSeq7eMQcDSbo5',
    chainId: 101,
    decimals: 8,
    name: 'renBTC',
    symbol: 'renBTC',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/CDJWUqTcYTVAKXAVXoQZFes5JUFc7owSeq7eMQcDSbo5/logo.png',
    tags: ['old-registry']
  },
  {
    address: 'Fo6tfAkXj74X6j8hati8SxtwZHHcdGeqXVUPLP9Abvqu',
    chainId: 101,
    decimals: 6,
    name: 'Wally The Whale',
    symbol: 'WALLY',
    logoURI:
      'https://nftstorage.link/ipfs/bafkreiaeqwqeluwwjyrusaofikmi5vivhl65lynym5oruemf7i52wrooyq',
    tags: ['community'],
    extensions: { coingeckoId: 'wally-the-whale' }
  },
  {
    address: 'Gk2kRrwNMBU4Dn9JhC1Dks8G5X9nqi4ZE5jMvK6bdgEd',
    chainId: 101,
    decimals: 6,
    name: 'PepeTrump',
    symbol: '$PTRUMP',
    logoURI: 'https://bafybeihfyvc65n6lk7zh72ge6xuhdnjd6hyak6vzu2wabe7lttwv3njde4.ipfs.cf-ipfs.com',
    tags: ['community']
  },
  {
    address: '8JnNWJ46yfdq8sKgT1Lk4G7VWkAA8Rhh7LhqgJ6WY41G',
    chainId: 101,
    decimals: 6,
    name: 'Solana Ecosystem Index',
    symbol: 'SOLI',
    logoURI: 'https://cdn.lima.amun.com/solana/8jnnwj46yfdq8skgt1lk4g7vwkaa8rhh7lhqgj6wy41g.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'solana-ecosystem-index' }
  },
  {
    address: '5cvj5rEEocG5Wvh3oJuY6MoYj7gVZd8aoXSLZjDY6W4W',
    chainId: 101,
    decimals: 9,
    name: 'Dead Bear Inc',
    symbol: 'SCUM',
    logoURI: 'https://ipfs.io/ipfs/QmasP8ZTEGAc4gqkhKfzq9Qu2tUaN8JpzQE2EcNaE9avkM',
    tags: ['community']
  },
  {
    address: 'DeaKMzAeZja3Mh5okZE6WUvygLP3Lfuvm6Rg78HqXTz9',
    chainId: 101,
    decimals: 6,
    name: 'Solnic',
    symbol: 'SOLNIC',
    logoURI: 'https://gateway.irys.xyz/y0Hlgi1BbUfWCfJ2a407UrlViwN0Fa3cjLikgrVCpWI',
    tags: ['community']
  },
  {
    address: 'E4Q5pLaEiejwEQHcM9GeYSQfMyGy8DJ4bPWgeYthn24v',
    chainId: 101,
    decimals: 9,
    name: 'Ada',
    symbol: 'ADA',
    logoURI: 'https://gateway.irys.xyz/BFejxwOQrFxDnvG84t8kUf3PI_nCU3PEBrHBlu6g5ww',
    tags: ['community'],
    extensions: { coingeckoId: 'ada-the-dog' }
  },
  {
    address: 'FZgL5motNWEDEa24xgfSdBDfXkB9Ru9KxfEsey9S58bb',
    chainId: 101,
    decimals: 6,
    name: 'VentureCapital',
    symbol: 'VCC',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FZgL5motNWEDEa24xgfSdBDfXkB9Ru9KxfEsey9S58bb/logo.svg',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: '9xYeZDHEwyuqJmqrTourbFRaxN2qhkYesnz3iQ3FPz4r',
    chainId: 101,
    decimals: 5,
    name: 'ELMNT',
    symbol: 'ELMNT',
    logoURI: 'https://pbs.twimg.com/profile_images/1656328676768620549/ynTCpCiz_400x400.jpg',
    tags: ['community']
  },
  {
    address: 'sRLY3migNrkC1HLgqotpvi66qGkdNedqPZ9TJpAQhyh',
    chainId: 101,
    decimals: 9,
    name: 'sRLY (Rally Solana)',
    symbol: 'sRLY',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/RLYv2ubRMDLcGG2UyvPmnPmkfuQTsMbg4Jtygc7dmnq/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'rally-solana' }
  },
  {
    address: 'foodQJAztMzX1DKpLaiounNe2BDMds5RNuPC6jsNrDG',
    chainId: 101,
    decimals: 0,
    name: 'Food',
    symbol: 'FOOD',
    logoURI: 'https://storage.googleapis.com/nft-assets/items/FOOD.png',
    tags: ['community', 'solana-fm']
  },
  {
    address: '6cVgJUqo4nmvQpbgrDZwyfd6RwWw5bfnCamS3M9N1fd',
    chainId: 101,
    decimals: 6,
    name: 'Project SEED Token',
    symbol: 'SHILL',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/6cVgJUqo4nmvQpbgrDZwyfd6RwWw5bfnCamS3M9N1fd/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'shill-token' }
  },
  {
    address: '4v3UTV9jibkhPfHi5amevropw6vFKVWo7BmxwQzwEwq6',
    chainId: 101,
    decimals: 2,
    name: 'Ovols',
    symbol: 'OVOL',
    logoURI: 'https://elixir-site.s3.amazonaws.com/ovols-logo.png',
    tags: ['community', 'solana-fm'],
    extensions: { coingeckoId: 'ovols-floor-index' }
  },
  {
    address: 'EswgBj2hZKdgovX2ihWSUDnuBg9VNbGmSGoH5yjNsPRa',
    chainId: 101,
    decimals: 9,
    name: 'Physis',
    symbol: 'PHY',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EswgBj2hZKdgovX2ihWSUDnuBg9VNbGmSGoH5yjNsPRa/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'physis' }
  },
  {
    address: 'FcScaNdN3TRPMwcgqHj1E5GuEh1rNesBGVN5WtZuad1z',
    chainId: 101,
    decimals: 9,
    name: 'Twitter',
    symbol: 'TWTR',
    logoURI: 'https://ipfs.io/ipfs/QmcjVdSFfWsecrqusiviGb2HJri4PKJjLs8fa3hzycv3xL',
    tags: ['community']
  },
  {
    address: 'GRFKaABC518SqXMvBpAVYUZtVT3Nj4mYk7E7xU4gA5Rg',
    chainId: 101,
    decimals: 9,
    name: 'Silly Goose',
    symbol: 'GOO',
    logoURI:
      'https://bafkreiaorhiyiwevs2h6qnm4vdku64r6yjc7avbzwmdszgxcikcynjaknu.ipfs.nftstorage.link',
    tags: ['community'],
    extensions: { coingeckoId: 'silly-goose' }
  },
  {
    address: '8RGy4BZUEkW9dc2UEZ3QHYYdas66X63vazdZJezGJw5e',
    chainId: 101,
    decimals: 7,
    name: 'bul',
    symbol: 'bul',
    logoURI:
      'https://cloudflare-ipfs.com/ipfs/bafkreiezviw3lwrcxzh6dctn47unj5tsidgqgjmlzqicr3xhcpx7lxbasy',
    tags: ['community'],
    extensions: { coingeckoId: 'bul' }
  },
  {
    address: '31iQsahfa4CMiirU7REygBzuAWg4R4ah7Y4aDu9ZfXJP',
    chainId: 101,
    decimals: 4,
    name: 'Solzilla',
    symbol: 'SOLZILLA',
    logoURI: 'https://raw.githubusercontent.com/Solzilla/Solzilla/main/solzilla512x512.png',
    tags: ['community'],
    extensions: { coingeckoId: 'solzilla' }
  },
  {
    address: 'Bn113WT6rbdgwrm12UJtnmNqGqZjY4it2WoUQuQopFVn',
    chainId: 101,
    decimals: 9,
    name: 'Wrapped USDT (Allbridge from Ethereum)',
    symbol: 'aeUSDT',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB/logo.svg',
    tags: ['old-registry']
  },
  {
    address: '9cX8hMxZ2vW7pxYEPf2G5UHrcmMx83iTgGcxwwRKdarq',
    chainId: 101,
    decimals: 9,
    name: '$POINTS',
    symbol: '$POINTS',
    logoURI:
      'https://bafkreia7w7auilyxmky3ajrozqsdgexi42kakax3iueinz4asyyfumilky.ipfs.nftstorage.link',
    tags: ['community'],
    extensions: { coingeckoId: 'points-on-solana' }
  },
  {
    address: 'BLZEEuZUBVqFhj8adcCFPJvPVCiCyVmh3hkJMrU8KuJA',
    chainId: 101,
    decimals: 9,
    name: 'Blaze',
    symbol: 'BLZE',
    logoURI: 'https://solblaze.org/assets/blze.png',
    tags: ['community'],
    extensions: { coingeckoId: 'solblaze' }
  },
  {
    address: 'CAPYD6Lrm7bTZ6C7t7JvSxvpEcfKQ9YNB7kUjh6p6XBN',
    chainId: 101,
    decimals: 9,
    name: 'Capybara',
    symbol: 'CAPY',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/CAPYD6Lrm7bTZ6C7t7JvSxvpEcfKQ9YNB7kUjh6p6XBN/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'capybara' }
  },
  {
    address: 'G7eETAaUzmsBPKhokZyfbaT4tD9igdZSmfQGEYWem8Sw',
    chainId: 101,
    decimals: 6,
    name: 'NftEyez Coin',
    symbol: 'EYE',
    logoURI: 'https://raw.githubusercontent.com/NftEyez/assets/main/assets/eye-coin.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'nfteyez' }
  },
  {
    address: 'A3tCD8Q1yjdy3gRDJ4LFzpECnafW3sHNa3dJKHesG9Xf',
    chainId: 101,
    decimals: 9,
    name: 'Internal Retard Service',
    symbol: 'IRS',
    logoURI: 'https://ipfs.io/ipfs/bafkreie7ntaifs5iq2txyjmll4v4i7myivt6gpnu6fht5pd3ggc7sfv35m',
    tags: ['community']
  },
  {
    address: 'BHcPVARUJEV3rCAmbLgRm7QPmZotsCcHcKWwzvCSAHJi',
    chainId: 101,
    decimals: 9,
    name: 'JORAM POOWEL',
    symbol: 'POOWEL',
    logoURI: 'https://ipfs.io/ipfs/QmTsKAzWkoGfqgD6TUdzB843RzVsdTKG5JAxEreJ97dByN',
    tags: ['community'],
    extensions: { coingeckoId: 'joram-poowel' }
  },
  {
    address: 'GYCVdmDthkf3jSz5ns6fkzCmHub7FSZxjVCfbfGqkH7P',
    chainId: 101,
    decimals: 9,
    name: 'GameYoo Token',
    symbol: 'GYC',
    logoURI: 'https://raw.githubusercontent.com/gameyoo/materials/main/gyc.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: '22513u2QwiY6xaJn7nVFWGKy3aBdw6WfZsRPW2RRtCKj',
    chainId: 101,
    decimals: 6,
    name: 'Hunter Boden',
    symbol: 'HuntBoden',
    logoURI: 'https://cf-ipfs.com/ipfs/Qmdh9Jz5SEPKeRSmTu7Ey3BnFEqAPtGZ9nM6qKceJhk1Jv',
    tags: ['community'],
    extensions: { coingeckoId: 'hunter-boden' }
  },
  {
    address: 'kinXdEcpDQeHPEuQnqmUgtYykqKGVFq6CeVX5iAHJq6',
    chainId: 101,
    decimals: 5,
    name: 'KIN',
    symbol: 'KIN',
    logoURI: 'https://i.imgur.com/do6LTig.jpeg',
    tags: ['community', 'solana-fm'],
    extensions: { coingeckoId: 'kin' }
  },
  {
    address: 'a11bdAAuV8iB2fu7X6AxAvDTo1QZ8FXB3kk5eecdasp',
    chainId: 101,
    decimals: 9,
    name: 'Allbridge',
    symbol: 'ABR',
    logoURI: 'https://raw.githubusercontent.com/allbridge-io/media/main/token.svg',
    tags: ['old-registry'],
    extensions: { coingeckoId: 'allbridge' }
  },
  {
    address: '4cwVHQtwiK7r9aAUsu4cetk1JtLWPymopWcpTSsihCdL',
    chainId: 101,
    decimals: 8,
    name: 'Cloned Optimism',
    symbol: 'clOP',
    logoURI: 'https://markets.clone.so/images/assets/on-op.svg',
    tags: ['community'],
    extensions: { coingeckoId: 'clone-protocol-clop' }
  },
  {
    address: '7usVzynPTUJ9czdS96ezm9C6Z3hCsjb7j6TMKipURyyQ',
    chainId: 101,
    decimals: 6,
    name: 'Leia',
    symbol: 'LEIA',
    logoURI:
      'https://bafkreifjempcywq7od7svwed4ds4dieemifdy4tpguba2kv5zhmapi6ufm.ipfs.nftstorage.link',
    tags: ['community', 'token-2022'],
    extensions: { coingeckoId: 'leia-the-cat' }
  },
  {
    address: 'BDrL8huis6S5tpmozaAaT5zhE5A7ZBAB2jMMvpKEeF8A',
    chainId: 101,
    decimals: 9,
    name: 'NOVA FINANCE',
    symbol: 'NOVA',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/BDrL8huis6S5tpmozaAaT5zhE5A7ZBAB2jMMvpKEeF8A/logo.svg',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'nova-finance' }
  },
  {
    address: '3TWgDvYBL2YPET2LxnWAwsMeoA8aL4DutNuwat2pKCjC',
    chainId: 101,
    decimals: 8,
    name: 'Kitten Haimer',
    symbol: 'KHAI',
    logoURI:
      'https://bafkreihkv72pvkaaboxl5rc7g7r5jihqjycdy4cbrap25ilfvvlgefhca4.ipfs.nftstorage.link',
    tags: ['community'],
    extensions: { coingeckoId: 'kitten-haimer' }
  },
  {
    address: 'F8qtcT3qnwQ24CHksuRrSELtm5k9ob8j64xAzj3JjsMs',
    chainId: 101,
    decimals: 4,
    name: 'BURRRD',
    symbol: 'BURRRD',
    logoURI: 'https://arweave.net/5qQw9rLaDDQeFJ6-384p8yRmnl_8zK47JBwl3QYmD60',
    tags: ['community'],
    extensions: { coingeckoId: 'burrrd' }
  },
  {
    address: 'AqEHVh8J2nXH9saV2ciZyYwPpqWFRfD2ffcq5Z8xxqm5',
    chainId: 101,
    decimals: 9,
    name: 'Yaku',
    symbol: 'YAKU',
    logoURI: 'https://arweave.net/vBuoW86uFsjvQjilInux-5bL8rNI5sbehVBY16KmU5I',
    tags: ['community'],
    extensions: { coingeckoId: 'yaku' }
  },
  {
    address: 'Qikhhhg9Ta3Jg7WoDFbSYuCAE14hx9hPvdz1zVp3zUw',
    chainId: 101,
    decimals: 9,
    name: 'tudaBirds Token',
    symbol: 'BURD',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Qikhhhg9Ta3Jg7WoDFbSYuCAE14hx9hPvdz1zVp3zUw/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'tudabirds' }
  },
  {
    address: 'H53UGEyBrB9easo9ego8yYk7o4Zq1G5cCtkxD3E3hZav',
    chainId: 101,
    decimals: 6,
    name: 'MXM',
    symbol: 'MXM',
    logoURI: 'https://assets.mixmob.io/images/MXM_Token.png',
    tags: ['community'],
    extensions: { coingeckoId: 'mixmob' }
  },
  {
    address: 'EsPKhGTMf3bGoy4Qm7pCv3UCcWqAmbC1UGHBTDxRjjD4',
    chainId: 101,
    decimals: 9,
    name: 'FTM (Allbridge from Fantom)',
    symbol: 'FTM',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EsPKhGTMf3bGoy4Qm7pCv3UCcWqAmbC1UGHBTDxRjjD4/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: '2kARUpcjqKJdSTgZQKrzABLKbjvi2hNADYwHq7z52gGq',
    chainId: 101,
    decimals: 9,
    name: 'Andwu Tet',
    symbol: 'TopG',
    logoURI:
      'https://bafkreifktm2esm67rvurcqhnofh54ipnnqti2mzy3b2yfg65b2577yhrxi.ipfs.nftstorage.link',
    tags: ['community']
  },
  {
    address: '3hkAy2qcNJaxS3KebjNdugYbgakLvUZHRGZyRmGjSsbm',
    chainId: 101,
    decimals: 9,
    name: 'Capo Was Right',
    symbol: 'CWR',
    logoURI:
      'https://bafkreihp7yxlafl54d3tjjlvoyspd7sccwyzro4xj5mcqw7o6nysvoq74m.ipfs.nftstorage.link',
    tags: ['community'],
    extensions: { coingeckoId: 'capo-was-right' }
  },
  {
    address: 'ALKiRVrfLgzeAV2mCT7cJHKg3ZoPvsCRSV7VCRWnE8zQ',
    chainId: 101,
    decimals: 9,
    name: 'Maneki-neko',
    symbol: 'NEKI',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/ALKiRVrfLgzeAV2mCT7cJHKg3ZoPvsCRSV7VCRWnE8zQ/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'maneki-neko' }
  },
  {
    address: 'Aqjju8gCv3Uc2XsmF5x92ZarDo3hCnP7EgUeDkv1i7jK',
    chainId: 101,
    decimals: 9,
    name: 'Crochet World',
    symbol: 'CROCHET',
    logoURI:
      'https://image-cdn.solana.fm/images/?imageUrl=https://bafkreiegq57dmupyttnl6m3atkxd6zrpdy2gchal27gkkqttyqi5i3upmy.ipfs.nftstorage.link',
    tags: ['community'],
    extensions: { coingeckoId: 'crochet-world' }
  },
  {
    address: 'G9tt98aYSznRk7jWsfuz9FnTdokxS6Brohdo9hSmjTRB',
    chainId: 101,
    decimals: 9,
    name: 'PUFF',
    symbol: 'PUFF',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/G9tt98aYSznRk7jWsfuz9FnTdokxS6Brohdo9hSmjTRB/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'puff' }
  },
  {
    address: 'CiKu4eHsVrc1eueVQeHn7qhXTcVu95gSQmBpX4utjL9z',
    chainId: 101,
    decimals: 8,
    name: 'Shiba Inu (Portal)',
    symbol: 'SHIB',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/SHIB_wh.png',
    tags: ['wormhole', 'old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'shiba-inu-wormhole' }
  },
  {
    address: 'GjdreVe7iUG4hyESSweGyFzgekWufhEwGJqAaa1hr7pf',
    chainId: 101,
    decimals: 9,
    name: 'WATT token',
    symbol: 'WATT',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/GjdreVe7iUG4hyESSweGyFzgekWufhEwGJqAaa1hr7pf/logo.png',
    tags: ['old-registry']
  },
  {
    address: 'ARt4N4WY4PEdYUuBG7qENwuYSSiQUqP1RXFiahhwfzH9',
    chainId: 101,
    decimals: 9,
    name: 'EGIRL',
    symbol: 'EGIRL',
    logoURI:
      'https://bafkreid6lv4sec5o74hm2n43cjgoqt3g4ar3qx7fc3zw3niouxzbkudz24.ipfs.nftstorage.link',
    tags: ['community']
  },
  {
    address: '9iz45n44TQUPyoRymdZXEunqvZUksZyhzS6zQ7sLMadj',
    chainId: 101,
    decimals: 9,
    name: 'Positron',
    symbol: 'POT',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/9iz45n44TQUPyoRymdZXEunqvZUksZyhzS6zQ7sLMadj/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'DjPt6xxMoZx1DyyWUHGs4mwqWWX48Fwf6ZJgqv2F9qwc',
    chainId: 101,
    decimals: 9,
    name: 'VOID Token',
    symbol: 'VOID',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/DjPt6xxMoZx1DyyWUHGs4mwqWWX48Fwf6ZJgqv2F9qwc/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'void-games' }
  },
  {
    address: 'DMvsB8cjKXDQJs8cvoDtKxX7KEMVeZ31KzycszuinJUY',
    chainId: 101,
    decimals: 2,
    name: 'Hasuki',
    symbol: 'HASUKI',
    logoURI:
      'https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://creator-hub-prod.s3.us-east-2.amazonaws.com/hasuki_pfp_1664008129191.png',
    tags: ['community']
  },
  {
    address: '88YqDBWxYhhwPbExF966EdaCYBKP51xVm1oGBcbWzcf2',
    chainId: 101,
    decimals: 9,
    name: 'Garlic',
    symbol: 'GRLC',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/88YqDBWxYhhwPbExF966EdaCYBKP51xVm1oGBcbWzcf2/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'EdAhkbj5nF9sRM7XN7ewuW8C9XEUMs8P7cnoQ57SYE96',
    chainId: 101,
    decimals: 9,
    name: 'FABRIC',
    symbol: 'FAB',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EdAhkbj5nF9sRM7XN7ewuW8C9XEUMs8P7cnoQ57SYE96/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'fabric' }
  },
  {
    address: 'CTYiHf58UGShfHtpkTwx7vjPDA779dd6iVaeD281fEVx',
    chainId: 101,
    decimals: 9,
    name: 'Hunter Diamond',
    symbol: 'HUNT',
    logoURI: 'https://tokenhunters.app/assets/img/icons/chest-close.svg',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: '4h41QKUkQPd2pCAFXNNgZUyGUxQ6E7fMexaZZHziCvhh',
    chainId: 101,
    decimals: 6,
    name: 'The Suites Token',
    symbol: 'SUITE',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/4h41QKUkQPd2pCAFXNNgZUyGUxQ6E7fMexaZZHziCvhh/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: '7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj',
    chainId: 101,
    decimals: 9,
    name: 'Lido Staked SOL',
    symbol: 'stSOL',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj/logo.png',
    tags: ['old-registry'],
    extensions: { coingeckoId: 'lido-staked-sol' }
  },
  {
    address: '9cMWa1wuWcio3vgEpiFg7PqKbcoafuUw5sLYFkXJ2J8M',
    chainId: 101,
    decimals: 8,
    name: 'Cloned Arbitrum',
    symbol: 'clARB',
    logoURI: 'https://markets.clone.so/images/assets/on-arb.svg',
    tags: ['community'],
    extensions: { coingeckoId: 'clone-protocol-clarb' }
  },
  {
    address: 'DVzrCErBzydh92bBzSJX1dKwVvb4omwhrvNz8CwRyxxV',
    chainId: 101,
    decimals: 6,
    name: 'Andrea Von Speed',
    symbol: 'VONSPEED',
    logoURI: 'https://i.ibb.co/bmZ6pZP/8338-C1-BC-0745-4201-BE73-D39-ADCCE129-F.jpg',
    tags: ['community'],
    extensions: { coingeckoId: 'andrea-von-speed' }
  },
  {
    address: 'J9BcrQfX4p9D1bvLzRNCbMDv8f44a9LFdeqNE4Yk2WMD',
    chainId: 101,
    decimals: 6,
    name: 'International Stable Currency',
    symbol: 'ISC',
    logoURI: 'https://raw.githubusercontent.com/theISCTeam/isc_meta/master/logo.png',
    tags: ['community'],
    extensions: { coingeckoId: 'international-stable-currency' }
  },
  {
    address: 'yPRTUpLDftNej7p6QofNYgRArRXsm6Mvkzohj4bh4WM',
    chainId: 101,
    decimals: 6,
    name: 'yPRT (Parrot Yield Token)',
    symbol: 'yPRT',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/yPRTUpLDftNej7p6QofNYgRArRXsm6Mvkzohj4bh4WM/logo.svg',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'Eh1fXbAipe4k7CYR9UMb2bbWmBcpU3HcyX3LWuRVFBLz',
    chainId: 101,
    decimals: 4,
    name: 'Flowmatic',
    symbol: 'FM',
    logoURI:
      'https://nftstorage.link/ipfs/bafybeighw6z7wdbk73tezruawliwt622xic6r43wmzgpk22rsnmqvjvkrm/Brando_logo_of_F_on_a_black_background_in_the_style_of_light_te_42b8cbea-cc40-4c9f-a098-62c381d624df.png',
    tags: ['community'],
    extensions: { coingeckoId: 'flowmatic' }
  },
  {
    address: 'H5euuuZXAuFak2NVTMu53fckdkHFWuJzXXb3TfKTrLWK',
    chainId: 101,
    decimals: 9,
    name: 'DevCoin',
    symbol: 'DEV',
    logoURI: 'https://raw.githubusercontent.com/thedevdojo/devcoin/main/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'HaP8r3ksG76PhQLTqR8FYBeNiQpejcFbQmiHbg787Ut1',
    chainId: 101,
    decimals: 8,
    name: 'MAGA (Wormhole)',
    symbol: 'TRUMP',
    logoURI: 'https://magamemecoin.com/wp-content/uploads/cropped-MAGA-Memecoin-Favicon.png',
    tags: ['community'],
    extensions: { coingeckoId: 'bridged-maga-wormhole' }
  },
  {
    address: '9m9fmqJ2s7iUXZhFMsrdes1UcAtu3JyZXK3ZXfW3KPEw',
    chainId: 101,
    decimals: 5,
    name: 'BIRDIES',
    symbol: 'BIRDS',
    logoURI: 'https://raw.githubusercontent.com/ArashiSol/Birdies/main/photo1695208363.jpeg',
    tags: ['community'],
    extensions: { coingeckoId: 'birdies' }
  },
  {
    address: 'GfJ3Vq2eSTYf1hJP6kKLE9RT6u7jF9gNszJhZwo5VPZp',
    chainId: 101,
    decimals: 9,
    name: 'Solpad Finance',
    symbol: 'SOLPAD',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/GfJ3Vq2eSTYf1hJP6kKLE9RT6u7jF9gNszJhZwo5VPZp/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'solpad-finance' }
  },
  {
    address: '4ThReWAbAVZjNVgs5Ui9Pk3cZ5TYaD9u6Y89fp6EFzoF',
    chainId: 101,
    decimals: 8,
    name: '1sol.io (Portal)',
    symbol: '1SOL',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/1SOL_wh.png',
    tags: ['wormhole', 'old-registry']
  },
  {
    address: '5SwxhEunuUUcWe4ojybdDwky6dpLxAehNmF4AA71STNh',
    chainId: 101,
    decimals: 5,
    name: 'SWEETS',
    symbol: '$SWTS',
    logoURI: 'https://arweave.net/TIiNLtJtWuC0yxXPXXQpXalXyGaUFp4rT7h8WG5EwH4',
    tags: ['community'],
    extensions: { coingeckoId: 'sweets' }
  },
  {
    address: 'EkHr62PC6Y1axrLS7cR8YC4BZeW19mtHxQLCLMrf9vnq',
    chainId: 101,
    decimals: 3,
    name: 'You Looked',
    symbol: 'CIRCLE',
    logoURI: 'https://i.imgur.com/fEFVS51.png',
    tags: ['community'],
    extensions: { coingeckoId: 'you-looked' }
  },
  {
    address: 'SCSuPPNUSypLBsV4darsrYNg4ANPgaGhKhsA3GmMyjz',
    chainId: 101,
    decimals: 5,
    name: 'Solcasino Token',
    symbol: 'SCS',
    logoURI: 'https://files.solcasino.io/logo.png',
    tags: ['community'],
    extensions: { coingeckoId: 'solcasino-token' }
  },
  {
    address: 'HkNokfCXG33eu5vCcS49mq3jZcKZeQSQCyta964YxxYg',
    chainId: 101,
    decimals: 0,
    name: 'Breezy Bunnies Carrot',
    symbol: 'CRRT',
    logoURI: 'https://breezybunnies.com/images/3-p-500.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'DMqv9nGbEVAkQoz13ncKh5XJrFg2BQ5YTwd1XrGEKkaz',
    chainId: 101,
    decimals: 6,
    name: 'Flying Spaghetti Monster',
    symbol: 'FSM',
    logoURI:
      'https://bafybeibxoen5asgzdf7kz6jlac6656s3a2xpfc2m3t77m73pfwy6keh6gu.ipfs.nftstorage.link',
    tags: ['community']
  },
  {
    address: 'J1YnyKzmxBwFkPftvZexnHTm4Am7JnmWydhxtXdwEmMv',
    chainId: 101,
    decimals: 8,
    name: 'Open Ticketing Ecosystem',
    symbol: 'OPN',
    logoURI: 'https://arweave.net/4t-p2fZBHNMv7_9mwfFgN1ZWzbHGAUTdIJr399nRCgQ',
    tags: ['community', 'solana-fm'],
    extensions: { coingeckoId: 'open-ticketing-ecosystem' }
  },
  {
    address: 'BhPXDQio8xtNC6k5Bg5fnUVL9kGN8uvRDNwW8MZBu8DL',
    chainId: 101,
    decimals: 4,
    name: 'Shibana',
    symbol: 'BANA',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/BhPXDQio8xtNC6k5Bg5fnUVL9kGN8uvRDNwW8MZBu8DL/Shibana.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'shibana' }
  },
  {
    address: 'Cj2NAxiDDVvY79PLBdVQK3F3bjoHp7hvZv4kLL1vgtV3',
    chainId: 101,
    decimals: 2,
    name: 'Mad Lads',
    symbol: 'MADx',
    logoURI: 'https://creator-hub-prod.s3.us-east-2.amazonaws.com/mad_lads_pfp_1682211343777.png',
    tags: ['community']
  },
  {
    address: '54jVZGHyWURX5evBtZqUsJjwoKzcZJbVokDU93AUZf2h',
    chainId: 101,
    decimals: 9,
    name: 'Solstream',
    symbol: 'STREAM',
    logoURI: 'https://i.ibb.co/B6Qwtnb/LOGO-SOLSTREAM-100.jpg',
    tags: ['community'],
    extensions: { coingeckoId: 'solstream' }
  },
  {
    address: 'AURYydfxJib1ZkTir1Jn1J9ECYUtjb6rKQVmtYaixWPP',
    chainId: 101,
    decimals: 9,
    name: 'Aurory',
    symbol: 'AURY',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/AURYydfxJib1ZkTir1Jn1J9ECYUtjb6rKQVmtYaixWPP/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'aurory' }
  },
  {
    address: 'G7uYedVqFy97mzjygebnmmaMUVxWHFhNZotY6Zzsprvf',
    chainId: 101,
    decimals: 9,
    name: 'CoreStarter',
    symbol: 'CSTR',
    logoURI: 'https://raw.githubusercontent.com/CoreStarter/token-logo/main/corestarter_logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'corestarter' }
  },
  {
    address: '7raHqUrZXAqtxFJ2wcmtpH7SQYLeN9447vD4KhZM7tcP',
    chainId: 101,
    decimals: 2,
    name: 'DED',
    symbol: 'DED',
    logoURI:
      'https://cdn.bridgesplit.com/?fit=crop&height=400&width=400&image=https://www.arweave.net/nE_JLSoMnDq5bOuQLO7-UhTvlOmC6264v90IVB7ntjQ?ext=gif',
    tags: ['community']
  },
  {
    address: 'EATGZHJViJsk7nEKkrdJicwNbfpkJfAtmrEmrjXR8NBj',
    chainId: 101,
    decimals: 6,
    name: 'PopDog',
    symbol: 'POPDOG',
    logoURI: 'https://i.postimg.cc/SRb6fSps/SBZ5KM3L.png',
    tags: ['community'],
    extensions: { coingeckoId: 'popdog' }
  },
  {
    address: 'A6rSPi9JmJgVkW6BatsA6MjFYLseizPM2Fnt92coFjf4',
    chainId: 101,
    decimals: 8,
    name: 'MAGAIBA',
    symbol: 'MAGAIBA',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/29941.png',
    tags: ['community'],
    extensions: { coingeckoId: 'magaiba' }
  },
  {
    address: 'ACeWC77UeW2DBZMe7YBsuXoxLvk4dHMnPzneApau1Au6',
    chainId: 101,
    decimals: 8,
    name: 'Any Inu (Wormhole)',
    symbol: 'AI',
    logoURI:
      'https://raw.githubusercontent.com/anyinu/MediaAssets/849ced29c7614ad8193661e7faa8eaece31eb313/ailogo.png',
    tags: ['community'],
    extensions: { coingeckoId: 'any-inu' }
  },
  {
    address: 'HZNpqL7RT9gxf9eWoWsWzC5DfjzQ41XTQgEA7p3VzaaD',
    chainId: 101,
    decimals: 8,
    name: 'Trust Wallet (Portal)',
    symbol: 'TWT',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/HZNpqL7RT9gxf9eWoWsWzC5DfjzQ41XTQgEA7p3VzaaD/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'MLKmUCaj1dpBY881aFsrBwR9RUMoKic8SWT3u1q5Nkj',
    chainId: 101,
    decimals: 9,
    name: 'MILK',
    symbol: 'MILK',
    logoURI: 'https://www.arweave.net/HayHyYd_wWkVl0-LqTXKfBqxGTLnXkSB8wQwtbXe8c0?ext=png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'udder-chaos-milk' }
  },
  {
    address: '2MtPZqwNKTNsBoFCwm4ZTWk3ySz4LSd82ucDGeTk7VNu',
    chainId: 101,
    decimals: 2,
    name: 'Portals',
    symbol: 'IVRY',
    logoURI:
      'https://dl.airtable.com/.attachmentThumbnails/102af36cc30fec0b05ebb45406f20971/126d0320',
    tags: ['community', 'solana-fm']
  },
  {
    address: 'LAinEtNLgpmCP9Rvsf5Hn8W6EhNiKLZQti1xfWMLy6X',
    chainId: 101,
    decimals: 9,
    name: 'Laine Stake',
    symbol: 'laineSOL',
    logoURI:
      'https://shdw-drive.genesysgo.net/4DUkKJB966oMk8zq57KkAUxqg9HpuWtZ3BKobhmYph39/laineSOL.webp',
    tags: ['community', 'solana-fm'],
    extensions: { coingeckoId: 'laine-stake' }
  },
  {
    address: '5V9qpFo8NMFyhYHbrqY2c1TJrvzZSnRJAdj4ryPVB18n',
    chainId: 101,
    decimals: 6,
    name: 'croc cat',
    symbol: 'croc',
    logoURI: 'https://i.imgur.com/An0PFAu.jpeg',
    tags: ['community'],
    extensions: { coingeckoId: 'croc-cat' }
  },
  {
    address: '55bhM86E8brNHWy7sNz4chqtfQtrVGDvaeWyVczJs8RC',
    chainId: 101,
    decimals: 6,
    name: 'COINDASHBOARD',
    symbol: 'CDBD',
    logoURI:
      'https://image-cdn.solana.fm/images/?imageUrl=https://sapphire-lazy-macaw-504.mypinata.cloud/ipfs/QmdpPuYPshppAWLBSGHpWqzxQGaX2RnesTdqPeg4dE44Md',
    tags: ['community']
  },
  {
    address: 'FoRGERiW7odcCBGU1bztZi16osPBHjxharvDathL5eds',
    chainId: 101,
    decimals: 9,
    name: 'FORGE',
    symbol: 'FORGE',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FoRGERiW7odcCBGU1bztZi16osPBHjxharvDathL5eds/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'blocksmith-labs-forge' }
  },
  {
    address: 'AxaTJdRuuc3626FtPWdQCMcWPH6yzgxXKWbFCZN3TMgy',
    chainId: 101,
    decimals: 9,
    name: 'Asvoria',
    symbol: 'ASV',
    logoURI:
      'https://bafybeiap2jgce7xki7m6ei2ctkkdwczxgllo3gnueia63c6aipbka3opmu.ipfs.nftstorage.link/asvoria.png',
    tags: ['community', 'token-2022']
  },
  {
    address: '9V4x6ikFm9XKsnh3TiYJWPwQfFkJZDjifu7VSUqg3es1',
    chainId: 101,
    decimals: 9,
    name: 'Badger',
    symbol: 'Badger',
    logoURI:
      'https://bafybeid32j2uhizizt77t5au2xekwprplqn2k4thirubwkrvnb2cgadije.ipfs.nftstorage.link',
    tags: ['community', 'token-2022']
  },
  {
    address: 'GEYrotdkRitGUK5UMv3aMttEhVAZLhRJMcG82zKYsaWB',
    chainId: 101,
    decimals: 3,
    name: 'POTATO',
    symbol: 'POTATO',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/GEYrotdkRitGUK5UMv3aMttEhVAZLhRJMcG82zKYsaWB/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'potato' }
  },
  {
    address: 'icex2Fy2KtXjfiAAUEHLPHu7XKDLvwiyVUPP9PNpSkF',
    chainId: 101,
    decimals: 9,
    name: 'Infinity Diamonds ICE',
    symbol: 'ICE',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/icex2Fy2KtXjfiAAUEHLPHu7XKDLvwiyVUPP9PNpSkF/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'YtfMZ4jg2ubdz4GasY86iuGjHdo5rCPJnFqgSf8gxAz',
    chainId: 101,
    decimals: 9,
    name: 'Charactbit',
    symbol: 'CHB',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/6D4aGWykMymkFaeVzDS6MiH6QEujsHUze2pPGbJEyh7y/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'charactbit' }
  },
  {
    address: '9TPL8droGJ7jThsq4momaoz6uhTcvX2SeMqipoPmNa8R',
    chainId: 101,
    decimals: 9,
    name: 'VNX Gold',
    symbol: 'VNXAU',
    logoURI:
      'https://4183046207-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FsAJThQfNCJePE5h9iplX%2Fuploads%2FPtbQj02lkcRrWtIxo9jl%2FVNXAU%20256x256.png?alt=media&token=55ff0216-91fa-48e1-9426-0327ac43c4b8',
    tags: ['community'],
    extensions: { coingeckoId: 'vnx-gold' }
  },
  {
    address: 'z3dn17yLaGMKffVogeFHQ9zWVcXgqgf3PQnDsNs2g6M',
    chainId: 101,
    decimals: 6,
    name: 'Oxygen Protocol',
    symbol: 'OXY',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/z3dn17yLaGMKffVogeFHQ9zWVcXgqgf3PQnDsNs2g6M/logo.svg',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'oxygen' }
  },
  {
    address: 'DtgDZb83TqywcuBuWE89jx4k5Y7b6nQ4GYJq3Wd61JQQ',
    chainId: 101,
    decimals: 6,
    name: 'jeo rogen',
    symbol: 'rogen',
    logoURI: 'https://cf-ipfs.com/ipfs/QmZ5WeZCweWhbKbJ7Ux1ewxVVMrwz5dYL6szeBdT59f4AF',
    tags: ['community']
  },
  {
    address: '2zE5rJ2ctXMz9hVbk1AvJa78X7mh3kuR728SNzGXTEeu',
    chainId: 101,
    decimals: 9,
    name: 'TAOlie Coin',
    symbol: 'TAOLIE',
    logoURI: 'https://ibb.co/cgDNpnZ',
    tags: ['community'],
    extensions: { coingeckoId: 'taolie-coin' }
  },
  {
    address: 'V7ntWk4D9Frwaec2CUjMRMMsJG28Cd31HxDKNdP1qjM',
    chainId: 101,
    decimals: 9,
    name: 'ClownOnSolana',
    symbol: '$Clown',
    logoURI: 'https://arweave.net/q1EkX68UfbUnvjpA87GaRjGxVaP6f0lYMBeQXmFzN6w',
    tags: ['community']
  },
  {
    address: '7JhmUcZrrfhyt5nTSu3AfsrUq2L9992a7AhwdSDxdoL2',
    chainId: 101,
    decimals: 0,
    name: 'HampterFi',
    symbol: 'HMTR',
    logoURI: 'https://arweave.net/A6llvg1Lo9SXQYC4RQXVrTfwJ-eZpLl4_eZhJVGQfOg',
    tags: ['community']
  },
  {
    address: '9tzZzEHsKnwFL1A3DyFJwj36KnZj3gZ7g4srWp9YTEoh',
    chainId: 101,
    decimals: 6,
    name: 'ARB Protocol',
    symbol: 'ARB',
    logoURI: 'https://raw.githubusercontent.com/ARBProtocol/arbprotocol/main/IMG_3600.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'arb-protocol' }
  },
  {
    address: 'Dx1Lq5FjangW5ifRMEogAiakm24LyB5AoHmQifepvNjV',
    chainId: 101,
    decimals: 9,
    name: 'Baby Bonk',
    symbol: 'BabyBonk',
    logoURI: 'https://babybonk.pro/img/bonk-1.png',
    tags: ['community'],
    extensions: { coingeckoId: 'babybonk-2' }
  },
  {
    address: '5L2YboFbHAUpBDDJjvDB5M6pu9CW2FRjyDB2asZyvjtE',
    chainId: 101,
    decimals: 8,
    name: 'Pixels.so Token',
    symbol: 'PIXL',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/5L2YboFbHAUpBDDJjvDB5M6pu9CW2FRjyDB2asZyvjtE/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'kiGenopAScF8VF31Zbtx2Hg8qA5ArGqvnVtXb83sotc',
    chainId: 101,
    decimals: 9,
    name: 'Genopets Ki',
    symbol: 'KI',
    logoURI: 'https://arweave.net/WfPR8w5dEoerG_bI3S2o2_nuSfWY3p8M4YbQ6ijd1cQ?ext=png',
    tags: ['community', 'solana-fm'],
    extensions: { coingeckoId: 'genopet-ki' }
  },
  {
    address: '93RC484oMK5T9H89rzT5qiAXKHGP9jscXfFfrihNbe57',
    chainId: 101,
    decimals: 9,
    name: 'ZERO',
    symbol: 'ZERO',
    logoURI: 'https://gateway.irys.xyz/0qYdLixPAk4cYEpaf3ylqZ-JIbw8Vqg6R9xXZrH9SCc',
    tags: ['community'],
    extensions: { coingeckoId: 'analysoor' }
  },
  {
    address: 'ChVzxWRmrTeSgwd3Ui3UumcN8KX7VK3WaD4KGeSKpypj',
    chainId: 101,
    decimals: 8,
    name: 'SushiToken (Portal)',
    symbol: 'SUSHI',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/SUSHI_wh.png',
    tags: ['wormhole', 'old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'sushi' }
  },
  {
    address: '4YK1njyeCkBuXG6phNtidJWKCbBhB659iwGkUJx98P5Z',
    chainId: 101,
    decimals: 6,
    name: 'Dolan Duck',
    symbol: 'DOLAN',
    logoURI: 'https://pbs.twimg.com/profile_images/1749802424590798848/8Go1WkbK_400x400.jpg',
    tags: ['community'],
    extensions: { coingeckoId: 'dolan-duck' }
  },
  {
    address: '88881Hu2jGMfCs9tMu5Rr7Ah7WBNBuXqde4nR5ZmKYYy',
    chainId: 101,
    decimals: 8,
    name: 'Saber Wrapped USD Coin (8 decimals)',
    symbol: 'sUSDC-8',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/88881Hu2jGMfCs9tMu5Rr7Ah7WBNBuXqde4nR5ZmKYYy/icon.png',
    tags: ['old-registry']
  },
  {
    address: '2eu1K3wvfPC7gVj1CK8ohv4ggusdN6qxyxpjHyTCkjZT',
    chainId: 101,
    decimals: 6,
    name: 'Reward Protocol',
    symbol: 'REWD',
    logoURI:
      'https://bafkreic2ndn27fumdff4q3qht3a6dq44peoys7bf437n2rlcnci25tzkyi.ipfs.nftstorage.link',
    tags: ['community', 'token-2022'],
    extensions: { coingeckoId: 'reward-protocol' }
  },
  {
    address: '5nrAynqdsEyBc3GRc7hvM5QnDwjQVePNg9kn6bCvi4G3',
    chainId: 101,
    decimals: 5,
    name: 'SUPER TOKEN',
    symbol: 'SUPER',
    logoURI:
      'https://nftstorage.link/ipfs/bafkreibxcsqfuls3yiitufaid3wnjzrgx2gdswtteo33g6fojoxctob5na',
    tags: ['community']
  },
  {
    address: '5LSFpvLDkcdV2a3Kiyzmg5YmJsj2XDLySaXvnfP1cgLT',
    chainId: 101,
    decimals: 6,
    name: 'Dogemon',
    symbol: 'DOGO',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/5LSFpvLDkcdV2a3Kiyzmg5YmJsj2XDLySaXvnfP1cgLT/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'dogemon-go' }
  },
  {
    address: 'MMAx26JtJgSWv6yH48nEHCGZcVvRbf9Lt9ALa7jSipe',
    chainId: 101,
    decimals: 9,
    name: 'mma',
    symbol: 'MMA',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/MMAx26JtJgSWv6yH48nEHCGZcVvRbf9Lt9ALa7jSipe/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: '4dmKkXNHdgYsXqBHCuMikNQWwVomZURhYvkkX5c4pQ7y',
    chainId: 101,
    decimals: 6,
    name: 'Synthetify',
    symbol: 'SNY',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/4dmKkXNHdgYsXqBHCuMikNQWwVomZURhYvkkX5c4pQ7y/logo.png',
    tags: ['old-registry'],
    extensions: { coingeckoId: 'synthetify-token' }
  },
  {
    address: 'FYUkUybywqUUyrUwiAezbvhTp2DUgx1eg8tQNiKkXqJ9',
    chainId: 101,
    decimals: 9,
    name: 'Magic Crystal Coin',
    symbol: 'MC',
    logoURI: 'https://arweave.net/Nwami1xs2ciMI7mUcawKMkUTKf_UUrLjYvIqUSL1ShI',
    tags: ['community', 'solana-fm']
  },
  {
    address: 'AD27ov5fVU2XzwsbvnFvb1JpCBaCB5dRXrczV9CqSVGb',
    chainId: 101,
    decimals: 9,
    name: 'Realy Token',
    symbol: 'REAL',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/AD27ov5fVU2XzwsbvnFvb1JpCBaCB5dRXrczV9CqSVGb/logo.svg',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'realy-metaverse' }
  },
  {
    address: '83LGLCm7QKpYZbX8q4W2kYWbtt8NJBwbVwEepzkVnJ9y',
    chainId: 101,
    decimals: 6,
    name: 'Synthetic USD',
    symbol: 'xUSD',
    logoURI: 'https://www.synthetify.io/icons/xusd.svg',
    tags: ['old-registry'],
    extensions: { coingeckoId: 'synthetic-usd' }
  },
  {
    address: 'mmonechkLNdUxDbvP9Yntwo459QfUmqDdzV95DNvnr6',
    chainId: 101,
    decimals: 9,
    name: 'MUTANT',
    symbol: 'MUTANT',
    logoURI:
      'https://shdw-drive.genesysgo.net/893AmBr2P9NVydpWc2TAkR3prwBtWMZH2A8RniDmduhn/mmonToken.jpg',
    tags: ['community', 'token-2022']
  },
  {
    address: 'DdFPRnccQqLD4zCHrBqdY95D6hvw6PLWp9DEXj1fLCL9',
    chainId: 101,
    decimals: 9,
    name: 'Wrapped USDC (Allbridge from Ethereum)',
    symbol: 'aeUSDC',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png',
    tags: ['old-registry']
  },
  {
    address: 'A98UDy7z8MfmWnTQt6cKjje7UfqV3pTLf4yEbuwL2HrH',
    chainId: 101,
    decimals: 9,
    name: 'Modul',
    symbol: 'MODUL',
    logoURI:
      'https://raw.githubusercontent.com/parametrise/ParametriseLogo/main/Modul_Logomark_White_Pinky_Background.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'CF97pGa5aNhXYkERsYLbAZ1wyk6cSFrfKhd1ansRD3So',
    chainId: 101,
    decimals: 10,
    name: 'Dragon',
    symbol: 'MuShu',
    logoURI:
      'https://bafybeiesfkh2pusubfi4xjttjerzvuyhfp4qwjj24atubpi6zs4l3zvcoy.ipfs.nftstorage.link',
    tags: ['community']
  },
  {
    address: '5MAYDfq5yxtudAhtfyuMBuHZjgAbaS9tbEyEQYAhDS5y',
    chainId: 101,
    decimals: 6,
    name: 'Access Protocol',
    symbol: 'ACS',
    logoURI: 'https://ap-staging.fra1.digitaloceanspaces.com/1663691449945',
    tags: ['community', 'solana-fm'],
    extensions: { coingeckoId: 'access-protocol' }
  },
  {
    address: '4y3oUrsJfSp431R3wJrWiaLxRPsnYtpkVJmoV2bYpBiy',
    chainId: 101,
    decimals: 6,
    name: 'wifejak',
    symbol: 'WIFE',
    logoURI: 'https://wifejak.nyc3.cdn.digitaloceanspaces.com/wifejak-200x200.png',
    tags: ['community'],
    extensions: { coingeckoId: 'wifejak' }
  },
  {
    address: '3iG5NRc36xaVnWKdFKw9HwDjG2Bf58YitCJmGUm7hrFJ',
    chainId: 101,
    decimals: 6,
    name: 'Orcat',
    symbol: 'Orcat',
    logoURI:
      'https://bafybeiez523kblwpduyyhrtr2ne4xpmzk3fj2hiuzoalsnhu2qin23llvu.ipfs.nftstorage.link/',
    tags: ['community']
  },
  {
    address: 'TuLipcqtGVXP9XR62wM8WWCm6a9vhLs7T1uoWBk6FDs',
    chainId: 101,
    decimals: 6,
    name: 'Tulip',
    symbol: 'TULIP',
    logoURI: 'https://raw.githubusercontent.com/sol-farm/token-logos/main/tulip.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'solfarm' }
  },
  {
    address: 'CUwif1FiX5b3bwwb2n5Bm35AixvnR8LJjGUVmEwNZNgR',
    chainId: 101,
    decimals: 9,
    name: 'Solamander',
    symbol: 'SOLY',
    logoURI: 'https://img.solyonsol.io/soly.png',
    tags: ['community'],
    extensions: { coingeckoId: 'solamander' }
  },
  {
    address: 'HLwEJQVzs7SvjXuXpBTRHaLp5S6uWoWTUhLjJxBfy1c7',
    chainId: 101,
    decimals: 4,
    name: "Hunter Biden's Laptop",
    symbol: 'LAPTOP',
    logoURI: 'https://arweave.net/X_bM80bdYSZCCW_PaAZFO8JgVsHhq1jBYRUr60yME4o',
    tags: ['community']
  },
  {
    address: '6gx6Ph2ek73kF6EWDrG4GQ54pcLJB6CYpATuRyxKXumo',
    chainId: 101,
    decimals: 9,
    name: 'FillmorePHX',
    symbol: 'fPHX',
    logoURI: 'https://gateway.irys.xyz/lUbE3hfwk7lOAeHT5ct_u2TfhBQMe7q9wFG4G9baElI',
    tags: ['community']
  },
  {
    address: 'BygDd5LURoqztD3xETc99WCxLUbTi6WYSht9XiBgZ4HW',
    chainId: 101,
    decimals: 9,
    name: 'Whalemap',
    symbol: 'WMP',
    logoURI: 'https://raw.githubusercontent.com/ssi91/crypto/main/logo.svg',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: '2TxM6S3ZozrBHZGHEPh9CtM74a9SVXbr7NQ7UxkRvQij',
    chainId: 101,
    decimals: 6,
    name: 'DINOEGG',
    symbol: 'DINOEGG',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/2TxM6S3ZozrBHZGHEPh9CtM74a9SVXbr7NQ7UxkRvQij/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: '7qULVSb7XdoKBDDa7WnuUvoTx5ye4Vrj94iPcwibyQ1F',
    chainId: 101,
    decimals: 6,
    name: 'Frog Piss',
    symbol: 'PISS',
    logoURI:
      'https://shdw-drive.genesysgo.net/BLFjCRyZkaF9GGwiorXPRwYJVpxD7VrrKNH7XccWUCWF/frogpiss.png',
    tags: ['community']
  },
  {
    address: '3de2yRhtD4VbJBb8EQAQffYMPLU4EnSHT1eveBwiL3tn',
    chainId: 101,
    decimals: 6,
    name: 'LOAF CAT',
    symbol: 'LOAF',
    logoURI: 'https://loaf.cat/img/LOAFLOGO.png',
    tags: ['community'],
    extensions: { coingeckoId: 'loaf-cat' }
  },
  {
    address: '519W6ZZnduudeo6tp1YMgeWiNFeoq4kTVS4uMZggKE5r',
    chainId: 101,
    decimals: 9,
    name: 'Kleyne Gelt',
    symbol: 'KLGT',
    logoURI: 'https://raw.githubusercontent.com/klglt/Crypto/main/menorah.png',
    tags: ['old-registry']
  },
  {
    address: 'FjBedzf7WrWmo4yd3Tc2U6indeEQXtdewZ514hYxH5X9',
    chainId: 101,
    decimals: 2,
    name: 'The Heist',
    symbol: 'HEIST',
    logoURI:
      'https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://bafybeigch4m7rbec2l255powwbjmacnyj5n5o54qcboiwfgs2nnw6thimq.ipfs.nftstorage.link/',
    tags: ['community']
  },
  {
    address: 'GFX1ZjR2P15tmrSwow6FjyDYcEkoFb4p4gJCpLBjaxHD',
    chainId: 101,
    decimals: 9,
    name: 'GooseFX',
    symbol: 'GOFX',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/GFX1ZjR2P15tmrSwow6FjyDYcEkoFb4p4gJCpLBjaxHD/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'goosefx' }
  },
  {
    address: '4ACuWnJZjE1Q51589mBmmyfD82RZ4LNFVeuPdSRFPc3L',
    chainId: 101,
    decimals: 9,
    name: 'GLEEK',
    symbol: 'GLEEK',
    logoURI:
      'https://bafkreidxnygbex6dsrdz6xlqhtdzgub3vqrhx36sfzglfmstebktmn24um.ipfs.nftstorage.link',
    tags: ['community'],
    extensions: { coingeckoId: 'gleek' }
  },
  {
    address: '7kbnvuGBxxj8AG9qp8Scn56muWGaRaFqxg1FsRp3PaFT',
    chainId: 101,
    decimals: 6,
    name: 'UXD Stablecoin',
    symbol: 'UXD',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7kbnvuGBxxj8AG9qp8Scn56muWGaRaFqxg1FsRp3PaFT/uxd-icon-black.png',
    tags: ['old-registry'],
    extensions: { coingeckoId: 'uxd-stablecoin' }
  },
  {
    address: '4G86CMxGsMdLETrYnavMFKPhQzKTvDBYGMRAdVtr72nu',
    chainId: 101,
    decimals: 6,
    name: 'SNAP',
    symbol: '$NAP',
    logoURI:
      'https://image-cdn.solana.fm/images/?imageUrl=https://bafkreibmmrxk72fmcp3pxcrusm5hot44mwawyfhny4tp2jwc2sgjtjfa2y.ipfs.nftstorage.link',
    tags: ['community'],
    extensions: { coingeckoId: 'snap-kero' }
  },
  {
    address: 'A12XggFFk3b5GCd6ZYxuQ55cQbxarHL4h7Jxs3GQcdC3',
    chainId: 101,
    decimals: 9,
    name: 'Froggo',
    symbol: 'Froggo',
    logoURI: 'https://froggotoken.com/token_logo.png',
    tags: ['community']
  },
  {
    address: '2e7yNwrmTgXp9ABUmcPXvFJTSrEVLj4YMyrb4GUM4Pdd',
    chainId: 101,
    decimals: 6,
    name: 'Matrix Solana Index',
    symbol: 'MSI',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/2e7yNwrmTgXp9ABUmcPXvFJTSrEVLj4YMyrb4GUM4Pdd/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: '8TQdiAzdZZEtkWUR8Zj1tqDYGPv9TR1XjPqrew39Vq9V',
    chainId: 101,
    decimals: 7,
    name: 'HypeProxy',
    symbol: 'HYPE',
    logoURI: 'https://raw.githubusercontent.com/hypeproxy/hypeproxy/main/logo.png',
    tags: ['old-registry']
  },
  {
    address: 'Dn4noZ5jgGfkntzcQSUZ8czkreiZ1ForXYoV2H8Dm7S1',
    chainId: 101,
    decimals: 6,
    name: 'Tether USD (Portal from Ethereum)',
    symbol: 'USDTet',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/USDTet_wh.png',
    tags: ['wormhole', 'old-registry'],
    extensions: { coingeckoId: 'tether-usd-wormhole-from-ethereum' }
  },
  {
    address: 'ATRLuHph8dxnPny4WSNW7fxkhbeivBrtWbY6BfB4xpLj',
    chainId: 101,
    decimals: 9,
    name: 'Artrade Token',
    symbol: 'ATR',
    logoURI: 'https://artrade.app/logo.png',
    tags: ['community'],
    extensions: { coingeckoId: 'artrade' }
  },
  {
    address: '4vMsoUT2BWatFweudnQM1xedRLfJgJ7hswhcpz4xgBTy',
    chainId: 101,
    decimals: 9,
    name: 'HONEY',
    symbol: 'HONEY',
    logoURI:
      'https://hivemapper-marketing-public.s3.us-west-2.amazonaws.com/Hivemapper_HONEY_token.png',
    tags: ['community', 'solana-fm'],
    extensions: { coingeckoId: 'hivemapper' }
  },
  {
    address: 'sio28ienC3iABUKJFzkikHknbR3xyhjzhJE34tipyDP',
    chainId: 101,
    decimals: 9,
    name: 'SWOLE',
    symbol: 'SWOLE',
    logoURI:
      'https://image-cdn.solana.fm/images/?imageUrl=https://ipfs.io/ipfs/Qmf4Sb9NetKYYUAVGryfAxRXZcLdzkxEpKmoxjV5EvNz9N',
    tags: ['community']
  },
  {
    address: '5MRMqvLZyRQhrMn2a8vSL3Kv9vfjNhjRKRPHtTBz1VEB',
    chainId: 101,
    decimals: 7,
    name: 'Solana Meme',
    symbol: 'SOLMEME',
    logoURI: 'https://raw.githubusercontent.com/solmemetoken/solememe/main/logo.png',
    tags: ['community']
  },
  {
    address: 'DxtssVdyYe4wWE5f5zEgx2NqtDFbVL3ABGY62WCycHWg',
    chainId: 101,
    decimals: 9,
    name: 'Brett',
    symbol: 'BRETT',
    logoURI: 'https://node1.irys.xyz/Lc1vGYEY45eezP3nJcHDbUFOpn0jEQeTvoJ8akpRkXQ',
    tags: ['community'],
    extensions: { coingeckoId: 'brett' }
  },
  {
    address: '5JnZ667P3VcjDinkJFysWh2K2KtViy63FZ3oL5YghEhW',
    chainId: 101,
    decimals: 9,
    name: 'APYSwap',
    symbol: 'APYS',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/5JnZ667P3VcjDinkJFysWh2K2KtViy63FZ3oL5YghEhW/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'apyswap' }
  },
  {
    address: 'GTuDe5yneFKaWSsPqqKgu413KTk8WyDnUZcZUGxuNYsT',
    chainId: 101,
    decimals: 9,
    name: 'Dasch Coin',
    symbol: 'DASCH',
    logoURI: 'https://github.com/kennethoqs/dasch/blob/main/logo.png',
    tags: ['old-registry']
  },
  {
    address: '9mV4WUukVsva5wYcYW4veo34CNDiF44sh3Ji65JNdvh5',
    chainId: 101,
    decimals: 8,
    name: 'Elephant Money Stable (Wormhole)',
    symbol: 'TRUNK',
    logoURI: 'https://elephant.money/img/logo/trunk-logo.png',
    tags: ['community']
  },
  {
    address: 'BANXbTpN8U2cU41FjPxe2Ti37PiT5cCxLUKDQZuJeMMR',
    chainId: 101,
    decimals: 9,
    name: 'Banx',
    symbol: 'BANX',
    logoURI: 'https://arweave.net/5QRitQGPVjPwpjt43Qe_WISmys4dWwLMqQqQDT0oshg',
    tags: ['community'],
    extensions: { coingeckoId: 'banx' }
  },
  {
    address: 'HqLRjru6pD6GFGnQ7TwSSGQRuPhF8UZNey9T4yCsZzuq',
    chainId: 101,
    decimals: 6,
    name: 'SIZE',
    symbol: 'SIZE',
    logoURI:
      'https://bafybeidjk54m3p4mvfrvvgsyx6uszovxszwlvucupxfjbso3t3u2kfalja.ipfs.nftstorage.link',
    tags: ['community'],
    extensions: { coingeckoId: 'size' }
  },
  {
    address: '42KmnheUHt3UaQFoAKnipLgBJ1Zm427heJdQcHGPtnjc',
    chainId: 101,
    decimals: 7,
    name: 'TURBO on Solana',
    symbol: '$TURBO',
    logoURI: 'https://arweave.net/FVrzsx6r7mwCakD64Axt59qAB_g-nvYfA0wvWydw5u0',
    tags: ['community']
  },
  {
    address: '8vRnnknwERunJEEDtEFoxzaxbxGnEY61FPbx8uTVKsUD',
    chainId: 101,
    decimals: 6,
    name: 'pepewifhat',
    symbol: 'PIF',
    logoURI:
      'https://bafkreibicwzofriyvt5up33rhejeqspemtamuwgvg3hg6wfkcf4najoxb4.ipfs.nftstorage.link',
    tags: ['community'],
    extensions: { coingeckoId: 'pepewifhat' }
  },
  {
    address: 'RUpbmGF6p42AAeN1QvhFReZejQry1cLkE1PUYFVVpnL',
    chainId: 101,
    decimals: 8,
    name: 'Epep',
    symbol: 'EPEP',
    logoURI: 'https://ipfs.io/ipfs/QmQHhrbf5g3TkpYH5UYBjoXYY83EzA7cq9SZHR4sGmToN5',
    tags: ['community'],
    extensions: { coingeckoId: 'epep' }
  },
  {
    address: 'PoRTjZMPXb9T7dyU7tpLEZRQj7e6ssfAE62j2oQuc6y',
    chainId: 101,
    decimals: 6,
    name: 'Port Finance Token',
    symbol: 'PORT',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/PoRTjZMPXb9T7dyU7tpLEZRQj7e6ssfAE62j2oQuc6y/PORT.png',
    tags: ['old-registry'],
    extensions: { coingeckoId: 'port-finance' }
  },
  {
    address: 'CvB1ztJvpYQPvdPBePtRzjL4aQidjydtUz61NWgcgQtP',
    chainId: 101,
    decimals: 6,
    name: 'Epics Token',
    symbol: 'EPCT',
    logoURI:
      'https://bafybeibal7k2hz6frznyjbl4qcnzcwlsuzxmquatrsaly6ttmuppgmdvwe.ipfs.dweb.link/EpicsCoin.png',
    tags: ['community', 'solana-fm'],
    extensions: { coingeckoId: 'epics-token' }
  },
  {
    address: '2EBjqPYGLUExdWwJJRLqtGPawzb2aMjE1wTpUYKhy2UQ',
    chainId: 101,
    decimals: 9,
    name: 'birb',
    symbol: 'BIRB',
    logoURI: 'https://arweave.net/qkyn_nVLFuJx1mphiPH5pb5jSnnRc52ATLZXzwmqXGY',
    tags: ['community'],
    extensions: { coingeckoId: 'birb-3' }
  },
  {
    address: '21kbezaCxz9dG2NtXp7pW1hAmtKe6ykiJkeT1EiGXDyY',
    chainId: 101,
    decimals: 9,
    name: 'Exiled Dust Protocol',
    symbol: 'EDUST',
    logoURI: 'https://i.imgur.com/KPPBoDB.png',
    tags: ['community']
  },
  {
    address: '7njsg9BA1xvXX9DNpe5fERHK4zb7MbCHKZ6zsx5k3adr',
    chainId: 101,
    decimals: 9,
    name: 'Family',
    symbol: 'FAM',
    logoURI:
      'https://dd.dexscreener.com/ds-data/tokens/solana/7njsg9BA1xvXX9DNpe5fERHK4zb7MbCHKZ6zsx5k3adr.png?size=lg&key=188184',
    tags: ['community'],
    extensions: { coingeckoId: 'family-2' }
  },
  {
    address: 'EaiD1TvwaFavVTi9eroMDcovp1ok1dpRpbrKJmzeHfXM',
    chainId: 101,
    decimals: 4,
    name: 'dark boden',
    symbol: 'doben',
    logoURI:
      'https://bafybeigb654o3eagfyycscjgnwwnznpzvk6uvlt262s2yqvozpaivf5i7y.ipfs.nftstorage.link/',
    tags: ['community']
  },
  {
    address: 'Vjq9T5xmqRzLXQRyvigzyZzpHCGCsbYAJ7afLVuF8j9',
    chainId: 101,
    decimals: 9,
    name: 'Random Zaysan Raptors',
    symbol: 'rZOOM',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Vjq9T5xmqRzLXQRyvigzyZzpHCGCsbYAJ7afLVuF8j9/rZOOM.png',
    tags: ['old-registry']
  },
  {
    address: 'seedEDBqu63tJ7PFqvcbwvThrYUkQeqT6NLf81kLibs',
    chainId: 101,
    decimals: 9,
    name: 'Seeded Network',
    symbol: 'SEEDED',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/seedEDBqu63tJ7PFqvcbwvThrYUkQeqT6NLf81kLibs/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'seeded-network' }
  },
  {
    address: 'HDEqEpFgTrBawzDgTG1eyH8Go9PX84LCEC8Qjt8T4jFN',
    chainId: 101,
    decimals: 2,
    name: 'Skullbot Biker Gang',
    symbol: 'BOTS',
    logoURI:
      'https://cloudflare-ipfs.com/ipfs/bafybeifbl3x5iluraez46db4rdqdgay2z34s2bmqaydeszkej36xylljki/151.png',
    tags: ['community', 'solana-fm']
  },
  {
    address: '9kt93AW5QMjFL6ZxomnSq3FbWiU5ibNeTSgBz9UDFSB6',
    chainId: 101,
    decimals: 6,
    name: 'GOD',
    symbol: 'GOD',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/9kt93AW5QMjFL6ZxomnSq3FbWiU5ibNeTSgBz9UDFSB6/logo.png',
    tags: ['old-registry']
  },
  {
    address: 'Czt7Fc4dz6BpLh2vKiSYyotNK2uPPDhvbWrrLeD9QxhV',
    chainId: 101,
    decimals: 9,
    name: 'Nest Arcade',
    symbol: 'NESTA',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Czt7Fc4dz6BpLh2vKiSYyotNK2uPPDhvbWrrLeD9QxhV/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'nest-arcade' }
  },
  {
    address: 'EXA537HSBVpsFijENbt6Muuy9AADUN8dUmYKD4oKbjJE',
    chainId: 101,
    decimals: 9,
    name: 'Eggdog',
    symbol: 'EGG',
    logoURI:
      'https://bafybeietkiaw53lzurtiqayxujtuhfmfxkko5rh2xphmxxnyxhqddwy7tu.ipfs.nftstorage.link',
    tags: ['community'],
    extensions: { coingeckoId: 'eggdog' }
  },
  {
    address: '65nTNuJGHme4PQvKQyJykKp1bJAkK4A8Q66sd2yBWugf',
    chainId: 101,
    decimals: 6,
    name: 'RIBBIT',
    symbol: 'RBT',
    logoURI:
      'https://bafkreia3t3g3ecvvq7i5mgivvelysuhn5s6hzrulxmbkwgj5tgpsjtufge.ipfs.nftstorage.link',
    tags: ['community'],
    extensions: { coingeckoId: 'ribbit-2' }
  },
  {
    address: '2cZv8HrgcWSvC6n1uEiS48cEQGb1d3fiowP2rpa4wBL9',
    chainId: 101,
    decimals: 2,
    name: 'ACF Game',
    symbol: 'ACF',
    logoURI: 'https://shop.alienchickenfarm.com/logos/acf-token.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'alien-chicken-farm' }
  },
  {
    address: '7zBbQAPGgoKvqcK74Yua8qGwEkEjAZxUPb5m3kKvvHyF',
    chainId: 101,
    decimals: 6,
    name: 'Wall Street Baby',
    symbol: 'WSB',
    logoURI:
      ' https://bafkreidb3mjupdamjiyh3d64wrnbhuyqw4q65n32r4zswgkctaotincbnm.ipfs.nftstorage.link/',
    tags: ['community'],
    extensions: { coingeckoId: 'wall-street-baby-on-solana' }
  },
  {
    address: '6y8W5YwAuzostqrS4YDJufBvksosfSi47Pd8U4A5vrBC',
    chainId: 101,
    decimals: 9,
    name: 'Whole Earth Coin',
    symbol: 'WEC',
    logoURI: 'https://ipfs.moralis.io:2053/ipfs/QmStqd3JLmEA9bfcUzt2CWF2iPzt7tgPmnkgou7JxauUkz',
    tags: ['community', 'solana-fm'],
    extensions: { coingeckoId: 'whole-earth-coin' }
  },
  {
    address: 'F6v4wfAdJB8D8p77bMXZgYt8TDKsYxLYxH5AFhUkYx9W',
    chainId: 101,
    decimals: 6,
    name: 'LUNA (Portal)',
    symbol: 'LUNA',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/LUNA_wh.png',
    tags: ['wormhole', 'old-registry'],
    extensions: { coingeckoId: 'luna-wormhole' }
  },
  {
    address: 'BxXmDhM8sTF3QG4foaVM2v1EUvg9DLSVUsDRTjR8tMyS',
    chainId: 101,
    decimals: 6,
    name: 'TIMMI',
    symbol: 'TIMMI',
    logoURI: 'https://pbs.twimg.com/profile_images/1754820662550732800/SMcVuXll.jpg',
    tags: ['community'],
    extensions: { coingeckoId: 'timmi' }
  },
  {
    address: 'LUNGEjUXyP48nrC1GYY5o4eTAkwm4RdX8BxFUxWJBLB',
    chainId: 101,
    decimals: 9,
    name: 'Saber Wrapped LUNA (Portal) (9 decimals)',
    symbol: 'sLUNA-9',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/LUNGEjUXyP48nrC1GYY5o4eTAkwm4RdX8BxFUxWJBLB/icon.png',
    tags: ['old-registry']
  },
  {
    address: '7unYePWUHcpB28cnS65TpqT2qqmZaftRz9QABkdR8yN7',
    chainId: 101,
    decimals: 6,
    name: 'ZEBU',
    symbol: 'ZEBU',
    logoURI:
      'https://bafybeifi5wr2k5giyoikp7hnyx5zsdlt37ez3qzav6y5nssrjzaxuxnedi.ipfs.nftstorage.link',
    tags: ['community'],
    extensions: { coingeckoId: 'zebu' }
  },
  {
    address: 'EjmyN6qEC1Tf1JxiG1ae7UTJhUxSwk1TCWNWqxWV4J6o',
    chainId: 101,
    decimals: 8,
    name: 'DAI (Portal)',
    symbol: 'DAI',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/DAI_wh.png',
    tags: ['wormhole', 'old-registry']
  },
  {
    address: 'FtVugRqBcn5gakjzfDyA3Spms63fYDAbhke1YAFgLgLB',
    chainId: 101,
    decimals: 2,
    name: 'Coinfra Samurai',
    symbol: 'COINFRA',
    logoURI:
      'https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://creator-hub-prod.s3.us-east-2.amazonaws.com/coinfra_samurai_pfp_1662121480181.png',
    tags: ['community']
  },
  {
    address: 'iotEVVZLEywoTn1QdwNPddxPWszn3zFhEot3MfL9fns',
    chainId: 101,
    decimals: 6,
    name: 'Helium IOT',
    symbol: 'IOT',
    logoURI:
      'https://shdw-drive.genesysgo.net/CsDkETHRRR1EcueeN346MJoqzymkkr7RFjMqGpZMzAib/iot.png',
    tags: ['community', 'solana-fm'],
    extensions: { coingeckoId: 'helium-iot' }
  },
  {
    address: 'H7ed7UgcLp3ax4X1CQ5WuWDn6d1pprfMMYiv5ejwLWWU',
    chainId: 101,
    decimals: 6,
    name: 'CHONKY',
    symbol: 'CHONKY',
    logoURI:
      'https://f4xsxwnaxid37ojcze5qpc7p3ydfaj5dhynszhcjseeizelsa4mq.arweave.net/Ly8r2aC6B7-5Isk7B4vv3gZQJ6M-GyycSZEIjJFyBxk',
    tags: ['community'],
    extensions: { coingeckoId: 'chonky' }
  },
  {
    address: 'BQXDYWZdtXqeLXFWYeRhLrGh8gcTmDQZQc92ENMaXSry',
    chainId: 101,
    decimals: 2,
    name: 'Doge Capital',
    symbol: 'DCAP',
    logoURI:
      'https://dl.airtable.com/.attachmentThumbnails/5e07dff05059715ef2478b80cfee0c99/41bbd847',
    tags: ['community']
  },
  {
    address: 'Cx9oLynYgC3RrgXzin7U417hNY9D6YB1eMGw4ZMbWJgw',
    chainId: 101,
    decimals: 9,
    name: 'FOMO',
    symbol: 'FOMO',
    logoURI:
      'https://bt2uza2xywhm2tm5kjhm35xlxhtcqb3le272fir7rpnijpfbsnlq.arweave.net/DPVMg1fFjs1NnVJOzfbrueYoB2smv6KiP4vahLyhk1c',
    tags: ['community'],
    extensions: { coingeckoId: 'fomo-2' }
  },
  {
    address: 'DK6PWMyuZ4NMjsm9AWNCTMKrajQYrtfMjMJ3QauX2UH5',
    chainId: 101,
    decimals: 9,
    name: 'BITXBIT',
    symbol: 'BITXBIT',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/DK6PWMyuZ4NMjsm9AWNCTMKrajQYrtfMjMJ3QauX2UH5/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: '7hWcHohzwtLddDUG81H2PkWq6KEkMtSDNkYXsso18Fy3',
    chainId: 101,
    decimals: 3,
    name: 'Catcoin',
    symbol: 'CAT',
    logoURI: 'https://raw.githubusercontent.com/catcoincom/Audit/mastar/logo1.png',
    tags: ['community'],
    extensions: { coingeckoId: 'catcoin-cash' }
  },
  {
    address: 'xyzR4s6H724bUq6q7MTqWxUnhi8LM5fiKKUq38h8M1P',
    chainId: 101,
    decimals: 9,
    name: 'Shroom',
    symbol: 'SHROOM',
    logoURI:
      'https://bafkreigoe2lb5utcb4xcneknfgh4b37wptis2n43tuegjye4ydwpw273hm.ipfs.nftstorage.link',
    tags: ['community'],
    extensions: { coingeckoId: 'shroom' }
  },
  {
    address: '2SsU91ZE2dni5aD8i7bfTR4Bvf6UcGFBbLsvDucWUdw3',
    chainId: 101,
    decimals: 9,
    name: 'ket',
    symbol: 'ket',
    logoURI:
      'https://bafkreibzsa7dyrh7tdy7iiqauyzvb6bw42lpivt642i3rv7wm5enyomdca.ipfs.nftstorage.link',
    tags: ['community']
  },
  {
    address: 'EcQCUYv57C4V6RoPxkVUiDwtX1SP8y8FP5AEToYL8Az',
    chainId: 101,
    decimals: 9,
    name: 'Walken',
    symbol: 'WLKN',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EcQCUYv57C4V6RoPxkVUiDwtX1SP8y8FP5AEToYL8Az/logo.svg',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'walken' }
  },
  {
    address: '2FPyTwcZLUg1MDrwsyoP4D6s1tM7hAkHYRjkNb5w6Pxk',
    chainId: 101,
    decimals: 6,
    name: 'Wrapped Ethereum (Sollet)',
    symbol: 'soETH',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/2FPyTwcZLUg1MDrwsyoP4D6s1tM7hAkHYRjkNb5w6Pxk/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'wrapped-ethereum-sollet' }
  },
  {
    address: '7udMmYXh6cuWVY6qQVCd9b429wDVn2J71r5BdxHkQADY',
    chainId: 101,
    decimals: 3,
    name: 'COBAN',
    symbol: 'COBAN',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7udMmYXh6cuWVY6qQVCd9b429wDVn2J71r5BdxHkQADY/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'coban' }
  },
  {
    address: '5veVHPNDsmSxDW4Abpb368wLHpo32LP3fqhfJHnkSSwo',
    chainId: 101,
    decimals: 9,
    name: 'Phauntem',
    symbol: 'PHAUNTEM',
    logoURI:
      'https://rose-imperial-bug-423.mypinata.cloud/ipfs/Qmby3HKMXxR6Gx4qQJuy8BVyvw93jnZhQu3NV6wQk7x4QR',
    tags: ['community'],
    extensions: { coingeckoId: 'phauntem' }
  },
  {
    address: 'FbUy1NubUtCfoif7TAr6wAtJVJFapYUVWxRGmUwvKNyS',
    chainId: 101,
    decimals: 2,
    name: "𝝠ndre's Fleet Share",
    symbol: 'AFSeX',
    logoURI: 'https://arweave.net/l5d0WrtUcpUEqwknqjvxlo2QyGryLL3SDsRbigT9HA0',
    tags: ['community']
  },
  {
    address: 'GePFQaZKHcWE5vpxHfviQtH5jgxokSs51Y5Q4zgBiMDs',
    chainId: 101,
    decimals: 9,
    name: 'Jungle DeFi',
    symbol: 'JFI',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/GePFQaZKHcWE5vpxHfviQtH5jgxokSs51Y5Q4zgBiMDs/logo.png',
    tags: ['old-registry'],
    extensions: { coingeckoId: 'jungle-defi' }
  },
  {
    address: 'EavJDLh8cYTAnt3QDitpKGMsPL2hq1My5g9R2P6at6Lc',
    chainId: 101,
    decimals: 9,
    name: 'CATMAN',
    symbol: 'CATMAN',
    logoURI:
      'https://bafkreieawm4zgovoxfbgkifdyiyagsieaa6cns4jb4jafxolc5z3lqysju.ipfs.nftstorage.link',
    tags: ['community'],
    extensions: { coingeckoId: 'catman' }
  },
  {
    address: '2XPqoKfJitk8YcMDGBKy7CMzRRyF2X9PniZeCykDUZev',
    chainId: 101,
    decimals: 9,
    name: 'HUND',
    symbol: 'HUND',
    logoURI: 'https://ipfs.io/ipfs/QmVMuMjyfKkuVnb8rHFXYor1ezFp9xrecatMH7TizPWdKV',
    tags: ['community'],
    extensions: { coingeckoId: 'hund' }
  },
  {
    address: 'zebeczgi5fSEtbpfQKVZKCJ3WgYXxjkMUkNNx7fLKAF',
    chainId: 101,
    decimals: 9,
    name: 'ZEBEC',
    symbol: 'ZBC',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/zebeczgi5fSEtbpfQKVZKCJ3WgYXxjkMUkNNx7fLKAF/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'zebec-protocol' }
  },
  {
    address: 'xALGoH1zUfRmpCriy94qbfoMXHtK6NDnMKzT4Xdvgms',
    chainId: 101,
    decimals: 6,
    name: 'Wrapped ALGO',
    symbol: 'xALGO',
    logoURI: 'https://arweave.net/zZizaipiM5GvJ5upulPUzg9VW9bui0VaMCY6k1QyHgs',
    tags: ['community', 'solana-fm'],
    extensions: { coingeckoId: 'wrapped-algo' }
  },
  {
    address: 'AJ1W9A9N9dEMdVyoDiam2rV44gnBm2csrPDP7xqcapgX',
    chainId: 101,
    decimals: 9,
    name: 'Binance USD (Wormhole v1)',
    symbol: 'wBUSD_v1',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/AJ1W9A9N9dEMdVyoDiam2rV44gnBm2csrPDP7xqcapgX/logo.png',
    tags: ['old-registry']
  },
  {
    address: '7rrJLRar2WjZwRoF3iJKHKnA7d7d9YJT1X9HAJnwUH3Z',
    chainId: 101,
    decimals: 6,
    name: 'Project Wisdom',
    symbol: 'WIZE',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7rrJLRar2WjZwRoF3iJKHKnA7d7d9YJT1X9HAJnwUH3Z/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: '6wktcKujaFRKV9Sz455nHUNz34dEWht1gqKzR5KQ9Ljb',
    chainId: 101,
    decimals: 2,
    name: 'Soosh',
    symbol: 'SOOSH',
    logoURI:
      'https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://bafybeig5il3cq3c7wojc323d7kiex3pyoyxcxtufh4m7pvixarvcjiiqga.ipfs.dweb.link/',
    tags: ['community']
  },
  {
    address: '4xnxNjLkeVoJEAUFjj5xTvkdTLGYHtrdyyXThGDFhwmr',
    chainId: 101,
    decimals: 6,
    name: 'GOFURS Del Sol',
    symbol: 'GOFURS',
    logoURI: 'https://arweave.net/X9m1CVUfzInuKry4cjZrarZE_omTtbwPXrSeaHvkvWE',
    tags: ['community']
  },
  {
    address: 'EcK2evV2cDECVsmvY2FxU51eu3fp4w48zrZxuA92AAAN',
    chainId: 101,
    decimals: 9,
    name: 'Food Token',
    symbol: 'FOOD',
    logoURI: 'https://arweave.net/mq0Euf7EQja8Hr1s7TvhfzLi5GeDWMe3ryvnNJItP3c',
    tags: ['community'],
    extensions: { coingeckoId: 'food-token-2' }
  },
  {
    address: 'inL8PMVd6iiW3RCBJnr5AsrRN6nqr4BTrcNuQWQSkvY',
    chainId: 101,
    decimals: 9,
    name: 'Sol Invictus',
    symbol: 'IN',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/inL8PMVd6iiW3RCBJnr5AsrRN6nqr4BTrcNuQWQSkvY/logo-owl.png',
    tags: ['old-registry']
  },
  {
    address: '27nqFZqb2iPBeVA7bbE4KPZrJgi3dJdKV9VzhCguSy6Y',
    chainId: 101,
    decimals: 9,
    name: 'PozzCoin',
    symbol: 'POZZ',
    logoURI: 'https://raw.githubusercontent.com/dc215007/pozz1/main/logo1.png',
    tags: ['old-registry']
  },
  {
    address: 'PumPRGmZ56t3Vngxo6fCP7ZJQ14oUg3biKxXrEyQBSf',
    chainId: 101,
    decimals: 6,
    name: 'Pumpr',
    symbol: 'PUMPR',
    logoURI: 'https://arweave.net/Drsc75CkUoUY-4c_6iYXTUl2YCMt_0rz6xs8M9Mduq0',
    tags: ['community'],
    extensions: { coingeckoId: 'pumpr' }
  },
  {
    address: 'F6weWmuc1vwdL4u38Ro9jKXHEMjP9BoNdWMF5o5TvtJf',
    chainId: 101,
    decimals: 9,
    name: 'SOUL',
    symbol: 'SOUL',
    logoURI: 'https://arweave.net/ipj9IdEAQAXt0LS6lOt7jQY7W4iazsVFBkN60U7M4iQ',
    tags: ['community']
  },
  {
    address: 'DxRbkqB2cEqa4rnXJwq4z3GuksgpL2U27PWBw8QBcNv2',
    chainId: 101,
    decimals: 2,
    name: "Trippin' Ape Tribe Floor Index",
    symbol: 'TAPES',
    logoURI: 'https://i.imgur.com/iFgvQva.png',
    tags: ['community']
  },
  {
    address: '7SZUnH7H9KptyJkUhJ5L4Kee5fFAbqVgCHvt7B6wg4Xc',
    chainId: 101,
    decimals: 5,
    name: 'TheSolanDAO',
    symbol: 'SDO',
    logoURI: 'https://thesolandao.com/logohero.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'thesolandao' }
  },
  {
    address: '2jw1uFmc1hhfJH3EqGhaE2rfZMMC2YBpxkZcdUbPppMn',
    chainId: 101,
    decimals: 9,
    name: 'Vivaion Token',
    symbol: 'VIVAION',
    logoURI: 'https://arweave.net/Xz7ErS3TZYmBnoh3OPkIQM_O6TPotyEJb6H5WFOe_qc',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'RoLLn5qBN4juQ1D2KFpJyAcC7Deo3cYotXi4qDooHLU',
    chainId: 101,
    decimals: 6,
    name: 'ROL',
    symbol: 'ROL',
    logoURI: 'https://assets.blockstars.gg/static/ROL.svg',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'SNApmcWQqj3Ny2YFkQmkELQnNgaXRu6KmnYSPiFZcLn',
    chainId: 101,
    decimals: 6,
    name: 'SolSnap',
    symbol: 'SNAP',
    logoURI:
      'https://bafkreibzsiecgo2477x6fnfe24xt2bxzko35m43beexfnqvlqd4e4hgcqu.ipfs.nftstorage.link/',
    tags: ['community'],
    extensions: { coingeckoId: 'solsnap' }
  },
  {
    address: 'tooLsNYLiVqzg8o4m3L2Uetbn62mvMWRqkog6PQeYKL',
    chainId: 101,
    decimals: 0,
    name: 'Toolkit',
    symbol: 'TOOL',
    logoURI: 'https://storage.googleapis.com/nft-assets/items/TOOL.png',
    tags: ['community', 'solana-fm']
  },
  {
    address: '4WRST6Q2yyDP1p7Bqszg8PAAoj8j69cj7QY4QLn5Aq3o',
    chainId: 101,
    decimals: 6,
    name: 'ANT Coin',
    symbol: 'ANTC',
    logoURI: 'https://arweave.net/1rW4kHXhx8eW-YljQXGi1EhGdE6jCKZztlIWBrs-Fh4',
    tags: ['community'],
    extensions: { coingeckoId: 'kingdom-of-ants-ant-coins' }
  },
  {
    address: '5wU4tUcAbds7d5cmnGK2otHa9gbayYsD2mhz1reR6c91',
    chainId: 101,
    decimals: 6,
    name: 'Tongue Cat',
    symbol: 'LUIS',
    logoURI:
      'https://bafkreihtcqx42secvikbvwtqzcrc2fldtapwl6w4qwdfu4yxh43n6l243u.ipfs.nftstorage.link/',
    tags: ['community'],
    extensions: { coingeckoId: 'tongue-cat' }
  },
  {
    address: '9dwPiStDBwJJqC3QzMnjpJP7xohZbMVmHELFx3uy3KRq',
    chainId: 101,
    decimals: 9,
    name: 'NVIDIA',
    symbol: 'NVDA',
    logoURI: 'https://pbs.twimg.com/profile_images/1760839132958642176/nq18MRdb_400x400.jpg',
    tags: ['community']
  },
  {
    address: '2cpCdyVCpxzwYWFhFqgMJqxnMgEMDGohHUQuf4ppWuAH',
    chainId: 101,
    decimals: 6,
    name: 'Thug Frog',
    symbol: 'TROG',
    logoURI:
      'https://bafkreifdk5zl36v7fe5hn2ccbdbt3ot4x25l6l25hjqmb6lzfbpi23yh4q.ipfs.nftstorage.link',
    tags: ['community']
  },
  {
    address: '6VHL2vMKgrF1YQFSv29Rs1pj9VCRK29bD11NtDqerqHA',
    chainId: 101,
    decimals: 5,
    name: 'SSHIB',
    symbol: '$SSHIB',
    logoURI: 'https://solshib.space/resources/images/icons/logo.png',
    tags: ['community'],
    extensions: { coingeckoId: 'solana-shib' }
  },
  {
    address: '2wme8EVkw8qsfSk2B3QeX4S64ac6wxHPXb3GrdckEkio',
    chainId: 101,
    decimals: 9,
    name: 'sols',
    symbol: 'sols',
    logoURI: 'https://arweave.net/DjDIitc-424x1UlvJLElsmhfIK3QMuFlPnJKT3CVkWY?ext=png',
    tags: ['community'],
    extensions: { coingeckoId: 'sols' }
  },
  {
    address: 'GHtLF7drbYXGTHX73uSxqPKkJUzDqcBNe2M9fzjJzr3j',
    chainId: 101,
    decimals: 8,
    name: 'StarShip🚀',
    symbol: 'STSHIP',
    logoURI: 'https://gateway.irys.xyz/JUL1T_9NFtLEDZGtY-4pKopYplV7bszLhp5pCl2fKzc',
    tags: ['community'],
    extensions: { coingeckoId: 'starship-4' }
  },
  {
    address: 'EA4SyW5UDnntXwUyyogN9UgpLU4q71HWgjhJBFUHTqLY',
    chainId: 101,
    decimals: 9,
    name: 'Jorlps',
    symbol: 'Jorlps',
    logoURI: 'https://i.imgur.com/6T2GZ98.jpeg',
    tags: ['community']
  },
  {
    address: '6CNHDCzD5RkvBWxxyokQQNQPjFWgoHF94D7BmC73X6ZK',
    chainId: 101,
    decimals: 6,
    name: 'Gecko',
    symbol: 'GECKO',
    logoURI: 'https://gateway.irys.xyz/2MOw1dmYBMp7XL-JylfJBKFsDZid_1xyK4cRjGYkzUY',
    tags: ['community'],
    extensions: { coingeckoId: 'gecko-meme' }
  },
  {
    address: '5MBBsoCVddAuF8XixvCcXNbHAw6WfpZ8WyTKMmczxxRN',
    chainId: 101,
    decimals: 9,
    name: 'SHIBA INU',
    symbol: 'SHIB',
    logoURI: 'https://i.ibb.co/kh4h5xd/11.png',
    tags: ['community']
  },
  {
    address: '9vMJfxuKxXBoEa7rM12mYLMwTacLMLDJqHozw96WQL8i',
    chainId: 101,
    decimals: 6,
    name: 'UST (Portal)',
    symbol: 'UST',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/UST_wh.png',
    tags: ['wormhole', 'old-registry'],
    extensions: { coingeckoId: 'terrausd-wormhole' }
  },
  {
    address: 'PugAiDuaQ5hzicBHAW9qrQQ8qi4B6sh3n7PknKhyjeX',
    chainId: 101,
    decimals: 5,
    name: 'PUGAI',
    symbol: 'PUGAI',
    logoURI:
      'https://shdw-drive.genesysgo.net/CS412vMTyfY1J4u1Ve7UjAdhGu7V9jCJibkVussMnaKr/pug1%20(2).png',
    tags: ['community'],
    extensions: { coingeckoId: 'pug-ai' }
  },
  {
    address: 'EjzzyCSiLqjFDprpZj8e1zjXmcTG5HPGFRSEoWcJWHh9',
    chainId: 101,
    decimals: 9,
    name: 'INBRED CAT',
    symbol: 'INBRED',
    logoURI: 'https://arweave.net/iVf74QkkM6G7JfKjwkl37xbFEq0FCU4o5PLGH3--i2o',
    tags: ['community']
  },
  {
    address: '8RYSc3rrS4X4bvBCtSJnhcpPpMaAJkXnVKZPzANxQHgz',
    chainId: 101,
    decimals: 9,
    name: 'SolYard Finance',
    symbol: 'YARD',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/8RYSc3rrS4X4bvBCtSJnhcpPpMaAJkXnVKZPzANxQHgz/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'solyard-finance' }
  },
  {
    address: 'BgqjQdnnjRtcELAgkYpfKAxWRqSReWercDdRTH6uLoer',
    chainId: 101,
    decimals: 6,
    name: 'ᗪOᖇK ᒪOᖇᗪ',
    symbol: 'DORKL',
    logoURI:
      'https://bafkreicufnhs5evfdochjopzpjaeuxoh5s6uhyl54dlfeb2cm4bqjfi4dq.ipfs.nftstorage.link',
    tags: ['community']
  },
  {
    address: 'FabjHjc1druUQoHVtudpNiCpnf73rtLzMkRM1b5NSbb6',
    chainId: 101,
    decimals: 9,
    name: 'D/ACC',
    symbol: 'D/ACC',
    logoURI:
      'https://img.fotofolio.xyz/?url=https%3A%2F%2Fnftstorage.link%2Fipfs%2Fbafkreiaad6yxjxad6qpkb7taodfnbfv74hmgmnorqatab27r54jpgroqci%2F',
    tags: ['community']
  },
  {
    address: 'DSXWF79VQ3RzFBB67WeNfCzfzAQq5X6m97zi85bq1TRx',
    chainId: 101,
    decimals: 2,
    name: 'Catalina Whale Mixer Floor Index',
    symbol: 'WHALES',
    logoURI: 'https://bafkreicadecx3rbffm6tqtgtc67bi6r2xiibtmawcejje7pfu7id2zxwwy.ipfs.dweb.link/',
    tags: ['community', 'solana-fm'],
    extensions: { coingeckoId: 'catalina-whales-index' }
  },
  {
    address: 'J4ywFdm8H7hjwKzCaEQujhkDRfCnRviVnHMvFNDAoLNQ',
    chainId: 101,
    decimals: 6,
    name: 'Soul Scanner',
    symbol: 'SOUL',
    logoURI:
      'https://bafkreifwlzwmmrnt2pjp2w4frbdzkbv7ml224ukuv3uiuhahgqinqtluii.ipfs.nftstorage.link',
    tags: ['community'],
    extensions: { coingeckoId: 'soul-scanner' }
  },
  {
    address: 'xxxxa1sKNGwFtw2kFn8XauW9xq8hBZ5kVtcSesTT9fW',
    chainId: 101,
    decimals: 6,
    name: 'Solanium',
    symbol: 'SLIM',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/xxxxa1sKNGwFtw2kFn8XauW9xq8hBZ5kVtcSesTT9fW/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'solanium' }
  },
  {
    address: '3W52uCb8NW8ruMF9mmJX3oKiYAjdPai4633srsZFQCS6',
    chainId: 101,
    decimals: 6,
    name: 'Biao Coin',
    symbol: '$BIAO',
    logoURI: 'https://i.imgur.com/BNautKe.png',
    tags: ['community'],
    extensions: { coingeckoId: 'biao-coin' }
  },
  {
    address: 'Fxgdfsy1Z5Mvh53o69s2Ev6TGxtAJ1RQ5RJ5moCpKmQZ',
    chainId: 101,
    decimals: 9,
    name: 'sealwifhat',
    symbol: 'SI',
    logoURI:
      'https://bafybeiay63g7wqdbndfp6yxuvonuigsp4qrgm22ultyndxurnuu7tkkbbi.ipfs.nftstorage.link/',
    tags: ['community'],
    extensions: { coingeckoId: 'sealwifhat' }
  },
  {
    address: 'Ez2zVjw85tZan1ycnJ5PywNNxR6Gm4jbXQtZKyQNu3Lv',
    chainId: 101,
    decimals: 6,
    name: 'Fluid USDC',
    symbol: 'fUSDC',
    logoURI: 'https://static.fluidity.money/images/tokens/fUSDC.png',
    tags: ['community', 'solana-fm'],
    extensions: { coingeckoId: 'fluid-usdc' }
  },
  {
    address: '6Y7LbYB3tfGBG6CSkyssoxdtHb77AEMTRVXe8JUJRwZ7',
    chainId: 101,
    decimals: 6,
    name: 'DINO',
    symbol: 'DINO',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/6Y7LbYB3tfGBG6CSkyssoxdtHb77AEMTRVXe8JUJRwZ7/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'dino' }
  },
  {
    address: 'J2LWsSXx4r3pYbJ1fwuX5Nqo7PPxjcGPpUb2zHNadWKa',
    chainId: 101,
    decimals: 6,
    name: 'DePlan',
    symbol: 'DPLN',
    logoURI:
      'https://jprwutcw237zskmqfiyq72df2gx3o4r3imjdd2dx4ygfvyt524ua.arweave.net/S-NqTFbW_5kpkCoxD-hl0a-3cjtDEjHod-YMWuJ91yg',
    tags: ['community'],
    extensions: { coingeckoId: 'deplan' }
  },
  {
    address: '3acxNNmfdKKZj9i35P4VDBFm74Ufdt8ojKWceVGynwC5',
    chainId: 101,
    decimals: 4,
    name: 'GM',
    symbol: 'GM',
    logoURI: 'https://arweave.net/jhNqKLDDC2ZtanzmFt-OZZJLFEYRpzus3rzhl7MGiOU',
    tags: ['community'],
    extensions: { coingeckoId: 'gm-machine' }
  },
  {
    address: 'FEELeKVxHtsHHvu1ARySjETxnJMKbLC6wHCaMD68ipiR',
    chainId: 101,
    decimals: 9,
    name: 'FEEL',
    symbol: 'FEEL',
    logoURI: 'https://api.feel.market/static/feel.png',
    tags: ['community']
  },
  {
    address: 'CobcsUrt3p91FwvULYKorQejgsm5HoQdv5T8RUZ6PnLA',
    chainId: 101,
    decimals: 8,
    name: 'ConstitutionDAO (Portal)',
    symbol: 'PEOPLE',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/PEOPLE_wh.png',
    tags: ['wormhole', 'old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'constitutiondao-wormhole' }
  },
  {
    address: 'ammoK8AkX2wnebQb35cDAZtTkvsXQbi82cGeTnUvvfK',
    chainId: 101,
    decimals: 0,
    name: 'Ammunition',
    symbol: 'AMMO',
    logoURI: 'https://storage.googleapis.com/nft-assets/items/AMMO.png',
    tags: ['community']
  },
  {
    address: '3DHPqxdMXogNNnpqBMF8N4Zs4dn1WR31H7UjWq6FExwG',
    chainId: 101,
    decimals: 9,
    name: 'DAWG',
    symbol: 'DAWG',
    logoURI:
      'https://user-images.githubusercontent.com/15795037/143055147-72513c02-be9b-4639-bb30-3c1c037cb030.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'dawg' }
  },
  {
    address: '4ynyx6BzY2XGFgjjun9Cruj1bSRo8FLsAqNnPsW6jDsu',
    chainId: 101,
    decimals: 9,
    name: 'EGG',
    symbol: 'EGG',
    logoURI: 'https://gateway.irys.xyz/ar31vqcXlnD4hN5WZ5ha2xnKmYtMv9YXEtLY4BEpJxs',
    tags: ['community'],
    extensions: { coingeckoId: 'egg' }
  },
  {
    address: 'HxtRWx83K61KjsNu1iCB4uhX9cbUtcSizRjLXXSZyyEm',
    chainId: 101,
    decimals: 6,
    name: 'Dog Enforcement Agency',
    symbol: 'DEA',
    logoURI:
      'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f6261666b726569656568726a776d69723272736132366e767633667633787877346935797a64706268627076376f6f79716c7a646d7235656677792e697066732e6e667473746f726167652e6c696e6b',
    tags: ['community']
  },
  {
    address: 'GbBWwtYTMPis4VHb8MrBbdibPhn28TSrLB53KvUmb7Gi',
    chainId: 101,
    decimals: 9,
    name: 'FTT (Wormhole v1)',
    symbol: 'wFTT_v1',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/GbBWwtYTMPis4VHb8MrBbdibPhn28TSrLB53KvUmb7Gi/logo.png',
    tags: ['old-registry']
  },
  {
    address: 'inLbkByUvP9WGsLfMy1w9QX5pvaab5mkvLcz48DbkmF',
    chainId: 101,
    decimals: 9,
    name: 'GUUFY',
    symbol: 'GUUFY',
    logoURI:
      'https://bafybeiaispk3n6iclp4o4kjvwnrzze2jvlqkmw6slkkhrrbclblc7mxhvm.ipfs.nftstorage.link',
    tags: ['community'],
    extensions: { coingeckoId: 'guufy' }
  },
  {
    address: '8CSTYs264XFrGym2WLy6QGgq6isxU8G4Und9q1gVbbbB',
    chainId: 101,
    decimals: 8,
    name: 'Felt Gaming Labs',
    symbol: 'GMCOCK',
    logoURI:
      'https://cdn.discordapp.com/attachments/1026783859309809674/1188099299565908029/IMG_8491.png',
    tags: ['community']
  },
  {
    address: '7SEsxCsiNiYqCpYG16wx4c9u2YGLZphnEFTAU9ENAizD',
    chainId: 101,
    decimals: 9,
    name: 'RING',
    symbol: 'RING',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7SEsxCsiNiYqCpYG16wx4c9u2YGLZphnEFTAU9ENAizD/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'HLnTNCG5RD7jYVduFc1pMCHiuApoWGn9LveqEFanQFZb',
    chainId: 101,
    decimals: 9,
    name: 'TREN',
    symbol: 'TREN',
    logoURI:
      'https://bafkreifiuo2ciqowl57a7hkzs2cjq5zikwczbhh3wr4h2ub3xyhsjtnb6u.ipfs.nftstorage.link/',
    tags: ['community'],
    extensions: { coingeckoId: 'tren' }
  },
  {
    address: 'RLBxxFkseAZ4RgJH3Sqn8jXxhmGoz9jWxDNJMh8pL7a',
    chainId: 101,
    decimals: 2,
    name: 'Rollbit Coin',
    symbol: 'RLB',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/RLBxxFkseAZ4RgJH3Sqn8jXxhmGoz9jWxDNJMh8pL7a/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: '2FprjEk4MTSY9CxpKuENbGDdy69R15GHhtHpG5Durdbq',
    chainId: 101,
    decimals: 9,
    name: 'Horse Meat',
    symbol: 'HorseMeat',
    logoURI: 'https://i.imgur.com/uKfGicj.jpeg',
    tags: ['community']
  },
  {
    address: 'B5Fvzd2RL5ctrmFsvDafXiNGbBqbxapiryJo8JfoSEcA',
    chainId: 101,
    decimals: 5,
    name: 'KITTI TOKEN',
    symbol: 'KITTI',
    logoURI: 'https://arweave.net/I1RzcnSel2oghDkMBE-lZBV9b6AuyDJc0Ywo6QmDlSQ',
    tags: ['community', 'solana-fm'],
    extensions: { coingeckoId: 'kitti' }
  },
  {
    address: 'HrLx8MLKegpbmbmWePZiuvf3AbJNx1CJyjBwUHwicEgW',
    chainId: 101,
    decimals: 7,
    name: 'Nyxia Coin',
    symbol: 'NYXC',
    logoURI: 'http://nyxia.ai/NYXC_coin-200.png',
    tags: ['community'],
    extensions: { coingeckoId: 'nyxia-ai' }
  },
  {
    address: '7Cx1fMabGWgm86xvv73WzSAcwtLppKf39Ywe8e6Qq4T6',
    chainId: 101,
    decimals: 5,
    name: 'TurboMoon',
    symbol: 'TMOON',
    logoURI:
      'https://bafkreiejjzcetjeauph77cgxrrx73btwjvd6v2sbwwygnleg2mzir6k2zi.ipfs.nftstorage.link',
    tags: ['community', 'token-2022'],
    extensions: { coingeckoId: 'turbomoon' }
  },
  {
    address: 'SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt',
    chainId: 101,
    decimals: 6,
    name: 'Serum',
    symbol: 'SRM',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt/logo.png',
    tags: ['old-registry'],
    extensions: { coingeckoId: 'serum' }
  },
  {
    address: '3B3Zfs7eb46Re9GHWv6ccYRSBGy5EvQF2i2VXMD6tge6',
    chainId: 101,
    decimals: 6,
    name: 'Seal',
    symbol: 'SEAL',
    logoURI: 'https://i.ibb.co/3r7bnBW/vhlvnb.jpg',
    tags: ['community'],
    extensions: { coingeckoId: 'seal-sol' }
  },
  {
    address: 'Ea5SjE2Y6yvCeW5dYTn7PYMuW5ikXkvbGdcmSnXeaLjS',
    chainId: 101,
    decimals: 6,
    name: 'PAI (Parrot USD)',
    symbol: 'PAI',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Ea5SjE2Y6yvCeW5dYTn7PYMuW5ikXkvbGdcmSnXeaLjS/logo.svg',
    tags: ['old-registry'],
    extensions: { coingeckoId: 'parrot-usd' }
  },
  {
    address: 'DHpoYejUDqzByb6HAdaLWF7KZvwUv2vWYDY9cTENNZui',
    chainId: 101,
    decimals: 9,
    name: 'Wrapped USDC (Allbridge from Celo)',
    symbol: 'acUSDC',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png',
    tags: ['old-registry']
  },
  {
    address: 'HKYX2jvwkdjbkbSdirAiQHqTCPQa3jD2DVRkAFHgFXXT',
    chainId: 101,
    decimals: 6,
    name: 'Print Protocol',
    symbol: 'PRINT',
    logoURI:
      'https://bafkreiaepyesgvxkwkgy242tig5bdre65f4zcm2ohcqkv5yafcz3o3ijfy.ipfs.nftstorage.link',
    tags: ['community', 'token-2022'],
    extensions: { coingeckoId: 'print-protocol' }
  },
  {
    address: '7EYnhQoR9YM3N7UoaKRoA44Uy8JeaZV3qyouov87awMs',
    chainId: 101,
    decimals: 9,
    name: 'Silly Dragon',
    symbol: 'SILLY',
    logoURI: 'https://gateway.irys.xyz/quusRf1O-_WcCbrFwHkbIZ26vxQ1xJZeQdsaKRITVNQ',
    tags: ['community'],
    extensions: { coingeckoId: 'silly-dragon' }
  },
  {
    address: '76gDMbyohg6yHy6XJ2Rn9kxC22Q6v6uYpPXxkiwR5ota',
    chainId: 101,
    decimals: 6,
    name: 'MOAR GAINZ',
    symbol: 'MOAR',
    logoURI:
      'https://bafkreidv3a37niwg56nytrh2dijfs3vqzebedww6dt5fp2kr46pst7kyui.ipfs.nftstorage.link',
    tags: ['community', 'token-2022']
  },
  {
    address: 'EAefyXw6E8sny1cX3LTH6RSvtzH6E5EFy1XsE2AiH1f3',
    chainId: 101,
    decimals: 6,
    name: 'Republic Credits',
    symbol: 'RPC',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EAefyXw6E8sny1cX3LTH6RSvtzH6E5EFy1XsE2AiH1f3/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'republic-credits' }
  },
  {
    address: '8wzYfqeqkjBwYBHMacBVen8tSuJqXiDtsCgmjnUJDSKM',
    chainId: 101,
    decimals: 6,
    name: 'PORTNOY',
    symbol: 'PORTNOY',
    logoURI: 'https://i.ibb.co/K0M01Ws/image.png',
    tags: ['community']
  },
  {
    address: 'REdaoGk6EcBVgXW7vHs9FnzWmkr3ba6eHRBBgEtLNWo',
    chainId: 101,
    decimals: 9,
    name: 'REdao',
    symbol: '$RE',
    logoURI: 'https://arweave.net/mQfc83s1RVPeQumJ8O6TVS8h9QH1ToSwilJ9USNU1_E',
    tags: ['community']
  },
  {
    address: 'Gm6szibJfB1ZzUxNYf85nXwFchugqTqNyE5fDwWfBc7K',
    chainId: 101,
    decimals: 9,
    name: 'ILoveU Token',
    symbol: 'ILU',
    logoURI: 'https://raw.githubusercontent.com/rjdrar/crypto/main/symbol-1.png',
    tags: ['old-registry']
  },
  {
    address: 'Gz7VkD4MacbEB6yC5XD3HcumEiYx2EtDYYrfikGsvopG',
    chainId: 101,
    decimals: 8,
    name: 'MATIC (Portal from Polygon)',
    symbol: 'MATICpo',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/MATICpo_wh.png',
    tags: ['wormhole', 'solana-fm'],
    extensions: { coingeckoId: 'matic-wormhole' }
  },
  {
    address: 'H3QMCaMh5LxtS9oGDwaMaRXPSPSiXVqnY4YsfrQMRjqD',
    chainId: 101,
    decimals: 6,
    name: 'Lime Cat',
    symbol: 'LIME',
    logoURI:
      'https://bafybeihjj2t76pgdbyvrnxv47w27z4g5jssbupkf54eqcu4iic4sehtz2a.ipfs.nftstorage.link/',
    tags: ['community']
  },
  {
    address: 'ZScHuTtqZukUrtZS43teTKGs2VqkKL8k4QCouR2n6Uo',
    chainId: 101,
    decimals: 8,
    name: 'Lido Wrapped Staked ETH',
    symbol: 'wstETH',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/ZScHuTtqZukUrtZS43teTKGs2VqkKL8k4QCouR2n6Uo/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'FUCKuTfQVT9yCe3jPXdejBPhcPJpnceQy17uvcT9cLx8',
    chainId: 101,
    decimals: 9,
    name: 'White Solana',
    symbol: 'white',
    logoURI: 'https://raw.githubusercontent.com/loufly1/Birdies/main/photo1697130653.jpeg',
    tags: ['community']
  },
  {
    address: 'E3tHHRa9Y1TWAA1nPZo8FAyVFgBDnXrS8u8nmMShL3M3',
    chainId: 101,
    decimals: 8,
    name: 'Cramer Coin (Wormhole)',
    symbol: 'CRAMER',
    logoURI: 'https://i.imgur.com/6ERdMOo.png',
    tags: ['community']
  },
  {
    address: 'AK87oZM8ovFU14bq8mu4ufi5zsCPDbqqVvh5b6WHbUdL',
    chainId: 101,
    decimals: 9,
    name: 'Just The Tip',
    symbol: '$TIPS',
    logoURI: 'https://justthetipvip.com/wp-content/uploads/2024/02/comp-header.png',
    tags: ['community', 'token-2022'],
    extensions: { coingeckoId: 'just-the-tip' }
  },
  {
    address: 'sMEANebFMnd9uTYpyntGzBmTmzEukRFwCjEcnXT2E8z',
    chainId: 101,
    decimals: 6,
    name: 'Staked MEAN',
    symbol: 'sMEAN',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/sMEANebFMnd9uTYpyntGzBmTmzEukRFwCjEcnXT2E8z/logo.svg',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: '26bedy893CHqi5bcuUFhMgD6uTLw9V9iLWKAQjjDjpEA',
    chainId: 101,
    decimals: 9,
    name: 'Iced Out Bulls',
    symbol: 'ICEDOUT',
    logoURI: 'https://icedoutbulls.github.io/icedoutbulls/io_logo.png',
    tags: ['community']
  },
  {
    address: 'BRLsMczKuaR5w9vSubF4j8HwEGGprVAyyVgS4EX7DKEg',
    chainId: 101,
    decimals: 6,
    name: 'Cykura',
    symbol: 'CYS',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/BRLsMczKuaR5w9vSubF4j8HwEGGprVAyyVgS4EX7DKEg/logo.svg',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'cyclos' }
  },
  {
    address: '2zjmVX4KDWtNWQyJhbNXgpMmsAoXwftB7sGV4qvV18xa',
    chainId: 101,
    decimals: 9,
    name: 'Shear Ego Coin',
    symbol: 'EGO',
    logoURI: 'https://raw.githubusercontent.com/jcards26/sol/main/new-new.png',
    tags: ['old-registry']
  },
  {
    address: '9gwTegFJJErDpWJKjPfLr2g2zrE3nL1v5zpwbtsk3c6P',
    chainId: 101,
    decimals: 9,
    name: 'A Gently Used 2001 Honda Civic',
    symbol: 'USEDCAR',
    logoURI: 'https://gateway.irys.xyz/7TTPG48afTZE8Ioeaa4XlZ7F4Q5g4lLYkC7N1Yr1pFo',
    tags: ['community'],
    extensions: { coingeckoId: 'a-gently-used-2001-honda' }
  },
  {
    address: 'LPFiNAybMobY5oHfYVdy9jPozFBGKpPiEGoobK2xCe3',
    chainId: 101,
    decimals: 9,
    name: 'LP Finance DAO',
    symbol: 'LPFi',
    logoURI: 'https://raw.githubusercontent.com/LP-Finance-Inc/token-image/main/LPFiToken.png',
    tags: ['community', 'solana-fm']
  },
  {
    address: 'Hd8crL1e3KnYEWvHBx7B2TSsadkQuFr52CwXXxZJyCv1',
    chainId: 101,
    decimals: 6,
    name: 'HashBit',
    symbol: 'HBIT',
    logoURI:
      'https://hashbit.org/public/frontend/images/site-section/8eb8b623-457f-4e8f-be12-40a80cdc0111.webp',
    tags: ['community'],
    extensions: { coingeckoId: 'hashbit-2' }
  },
  {
    address: 'GmW12mAzyTj897Y3pgxDQzpnNid7q58E8T7V56rmaUdD',
    chainId: 101,
    decimals: 6,
    name: 'Community of Meme',
    symbol: 'COME',
    logoURI:
      'https://photos.pinksale.finance/file/pinksale-logo-upload/1710895928245-3b82d54c6607c34a0499ee540316e572.png',
    tags: ['community'],
    extensions: { coingeckoId: 'community-of-meme' }
  },
  {
    address: 'BJB5tHWAHboMAwti5AHbCNX17F3jL8ehkh4zuTUx99Zn',
    chainId: 101,
    decimals: 6,
    name: 'shork',
    symbol: 'shork',
    logoURI: 'https://cf-ipfs.com/ipfs/QmZ4PJT5qZ1MyMwaYz1dbDD3kpBE4bkskwmampKAQWuNRe',
    tags: ['community']
  },
  {
    address: 'FANTafPFBAt93BNJVpdu25pGPmca3RfwdsDsRrT3LX1r',
    chainId: 101,
    decimals: 6,
    name: 'Phantasia',
    symbol: 'FANT',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FANTafPFBAt93BNJVpdu25pGPmca3RfwdsDsRrT3LX1r/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: '427xvZVKbFj7ZyfFoYS9iFpNuNsrijm6T9VP8znfko9j',
    chainId: 101,
    decimals: 9,
    name: 'SAUCE',
    symbol: 'SAUCE',
    logoURI:
      'https://golxb67pwrvlfxe44zvsvl25lhkb6hhk3xwhwqasfgpwcovn62ba.arweave.net/M5dw---0arLcnOZrKq9dWdQfHOrd7HtAEimfYTqt9oI',
    tags: ['community'],
    extensions: { coingeckoId: 'sauce' }
  },
  {
    address: 'sonarX4VtVkQemriJeLm6CKeW3GDMyiBnnAEMw1MRAE',
    chainId: 101,
    decimals: 9,
    name: 'Sonar Watch',
    symbol: 'SONAR',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/sonarX4VtVkQemriJeLm6CKeW3GDMyiBnnAEMw1MRAE/logo.png',
    tags: ['old-registry'],
    extensions: { coingeckoId: 'sonarwatch' }
  },
  {
    address: 'AYtg18TFRQs1mCQ29zWY3aSwxwTcW1uTdZ65dL3WiBQu',
    chainId: 101,
    decimals: 2,
    name: 'Claynosaurz',
    symbol: 'CLAY',
    logoURI: 'https://i.imgur.com/dd9tpCS.png',
    tags: ['community']
  },
  {
    address: 'Gnca3UkjR4a1FFNZuGfEELmbaHkL6GteSC2swpdWRmf7',
    chainId: 101,
    decimals: 8,
    name: 'Devour',
    symbol: 'DPAY',
    logoURI:
      'https://tokens.debridge.finance/0x39b22d4e4dd2668575e36ed9ce554a1ed4a436f4cce8777c450ec0fc5187cb5e.png',
    tags: ['community'],
    extensions: { coingeckoId: 'devour-2' }
  },
  {
    address: 'ASNR8RxZ3wK8QiNxmVEvxXtFGCXCHRD8oiAaNihHJvLq',
    chainId: 101,
    decimals: 9,
    name: 'Cat Driving a Car',
    symbol: 'CDC',
    logoURI:
      'https://bafkreibckqkthhqv4kmbgpe564agczidyfncwk2wsplztizdppdnob3ipi.ipfs.nftstorage.link',
    tags: ['community']
  },
  {
    address: 'dab15vg2k8zGJPy4xM2DH2G2BY3khrqduXapzYAV3y8',
    chainId: 101,
    decimals: 8,
    name: 'DABLOONS',
    symbol: 'DABLNS',
    logoURI: 'https://arweave.net/AYbNmLsPhYrlgrVtCERbp7UysLGL-IXQQrTL826ai6Y',
    tags: ['community']
  },
  {
    address: 'AhhdRu5YZdjVkKR3wbnUDaymVQL2ucjMQ63sZ3LFHsch',
    chainId: 101,
    decimals: 9,
    name: 'VNX Swiss Franc',
    symbol: 'VCHF',
    logoURI:
      'https://4183046207-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FsAJThQfNCJePE5h9iplX%2Fuploads%2F2fiefVjQxDNLja1fPN7g%2FVCHF%20256x256.png?alt=media&token=b990889a-841a-49f8-9d54-cbe2bb83b7f7',
    tags: ['community'],
    extensions: { coingeckoId: 'vnx-swiss-franc' }
  },
  {
    address: 'smoEhMZMweWBnpd1QoU4ZjuVNBxMFchqy4NRMBbtW7V',
    chainId: 101,
    decimals: 6,
    name: 'SMORES',
    symbol: 'SMORES',
    logoURI:
      'https://shdw-drive.genesysgo.net/2iHNWQtfUsth1F7dy6Mtjr9dHmYPZN7TZS4W2GcEwNTE/smores.png',
    tags: ['community']
  },
  {
    address: 'FHfba3ov5P3RjaiLVgh8FTv4oirxQDoVXuoUUDvHuXax',
    chainId: 101,
    decimals: 6,
    name: 'USD Coin (Portal from Avalanche)',
    symbol: 'USDCav',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/USDCav_wh.png',
    tags: ['wormhole']
  },
  {
    address: 'GTgMjfKTBF9jVBogMnaiAVnHmvnF2wyGAv3zvtk5CBHq',
    chainId: 101,
    decimals: 9,
    name: 'CLUB',
    symbol: 'CLUB',
    logoURI: 'https://arweave.net/XSWZOeipKasgKjDKm54O2R0S3Rrld1B6gQV_rtIjfF4',
    tags: ['community']
  },
  {
    address: '4jZXkSNgTQKCDb36ECZ6a2aNzcUniGcDeXgTdtM2HxAX',
    chainId: 101,
    decimals: 9,
    name: 'Bork',
    symbol: 'BORK',
    logoURI: 'https://node1.irys.xyz/v7mjymWz2rjAHe1Sn3rUECDdjWjYx_MZ_zi5hhQsgOU',
    tags: ['community'],
    extensions: { coingeckoId: 'bork-2' }
  },
  {
    address: 'DEVwHJ57QMPPArD2CyjboMbdWvjEMjXRigYpaUNDTD7o',
    chainId: 101,
    decimals: 6,
    name: 'DevWifHat',
    symbol: 'DWH',
    logoURI: 'https://arweave.net/8axP5eu3H87THPNK3oWV0dJ_-z1zoZGhp-V8LgJ3IBU',
    tags: ['community']
  },
  {
    address: 'Lrxqnh6ZHKbGy3dcrCED43nsoLkM1LTzU2jRfWe8qUC',
    chainId: 101,
    decimals: 6,
    name: 'Larix',
    symbol: 'LARIX',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Lrxqnh6ZHKbGy3dcrCED43nsoLkM1LTzU2jRfWe8qUC/logo.jpg',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'larix' }
  },
  {
    address: '6VYF5jXq6rfq4QRgGMG6co7b1Ev1Lj7KSbHBxfQ9e1L3',
    chainId: 101,
    decimals: 8,
    name: 'Wrapped Dingocoin',
    symbol: 'wDingocoin',
    logoURI: 'https://wrap.dingocoin.org/wDingocoin.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'dingocoin' }
  },
  {
    address: 'BKipkearSqAUdNKa1WDstvcMjoPsSKBuNyvKDQDDu9WE',
    chainId: 101,
    decimals: 6,
    name: 'Hawksight',
    symbol: 'HAWK',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/BKipkearSqAUdNKa1WDstvcMjoPsSKBuNyvKDQDDu9WE/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'hawksight' }
  },
  {
    address: '4riQPy1yXQ2d1FfzgLy9eJy6yoUdZuQkMj7JsVKr4bGu',
    chainId: 101,
    decimals: 5,
    name: 'Lost',
    symbol: 'LOST',
    logoURI:
      'https://bafybeigqh27u3ug2pui56t3h6bhu7pkojozoqzwamnnj7rdix5avtujse4.ipfs.nftstorage.link/',
    tags: ['community'],
    extensions: { coingeckoId: 'lost' }
  },
  {
    address: 'AgnHzGspNu7F3nFM4izuPt5g7m1URjVaTaFNgvqSXcjC',
    chainId: 101,
    decimals: 9,
    name: 'Nectar',
    symbol: 'NCTR',
    logoURI: 'https://gateway.irys.xyz/dzNRpOihzq7F4MxL2J_WZbhRF_TOP0_qGz9Ea-312gs',
    tags: ['community'],
    extensions: { coingeckoId: 'dust-city-nectar' }
  },
  {
    address: 'jucy5XJ76pHVvtPZb5TKRcGQExkwit2P5s4vY8UzmpC',
    chainId: 101,
    decimals: 9,
    name: 'Juicy SOL',
    symbol: 'jucySOL',
    logoURI:
      'https://shdw-drive.genesysgo.net/5ohvXVJ7f3HxnwYGnXKdECWC3KFcU95dHu7S7x69Y1sA/logo_rev.svg',
    tags: ['community'],
    extensions: { coingeckoId: 'juicy-staked-sol' }
  },
  {
    address: '6FLsSkF4AqQeDuqEmGPyBZvVebc4WWWntnZP2QZyBzG8',
    chainId: 101,
    decimals: 9,
    name: 'JJC',
    symbol: 'JJJJC',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/6FLsSkF4AqQeDuqEmGPyBZvVebc4WWWntnZP2QZyBzG8/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'LSTxxxnJzKDFSLr4dUkPcmCf5VyryEqzPLz5j4bpxFp',
    chainId: 101,
    decimals: 9,
    name: 'Liquid Staking Token',
    symbol: 'LST',
    logoURI: 'https://storage.googleapis.com/static-marginfi/lst.png',
    tags: ['community'],
    extensions: { coingeckoId: 'liquid-staking-token' }
  },
  {
    address: 'AkhdZGVbJXPuQZ53u2LrimCjkRP6ZyxG1SoM85T98eE1',
    chainId: 101,
    decimals: 8,
    name: 'Starbots Token',
    symbol: 'BOT',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/AkhdZGVbJXPuQZ53u2LrimCjkRP6ZyxG1SoM85T98eE1/logo.png',
    tags: ['old-registry'],
    extensions: { coingeckoId: 'starbots' }
  },
  {
    address: '1F1sRpidpKBQjmCnHAu8vJpmktLVK3ZjKyxVwEy8XpC',
    chainId: 101,
    decimals: 6,
    name: 'SolGen',
    symbol: 'GEN',
    logoURI: 'https://cf-ipfs.com/ipfs/QmVNexv8GWNZ39We31Wk9fHZN2Aeu3HLmRn6KgAXC7qJAc',
    tags: ['community']
  },
  {
    address: 'pz8KjM9AHRu8MvjEbxHjZ6RwxQjTgxvTtRsaQtCUyQf',
    chainId: 101,
    decimals: 6,
    name: 'Fux Nous',
    symbol: 'FUX',
    logoURI: 'https://pump.mypinata.cloud/ipfs/QmZ6U95NQDey6atv55J4TCdcpTc7yZWwZmeiNwNg4LouYU',
    tags: ['community']
  },
  {
    address: 'buMnhMd5xSyXBssTQo15jouu8VhuEZJCfbtBUZgRcuW',
    chainId: 101,
    decimals: 6,
    name: 'NeoNomad',
    symbol: 'NNI',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/buMnhMd5xSyXBssTQo15jouu8VhuEZJCfbtBUZgRcuW/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'XBMuuVZKHd6u8GyX6JakhjgpCA6h7FG28bXaWX2s51P',
    chainId: 101,
    decimals: 9,
    name: 'Beast Meme',
    symbol: 'XBM',
    logoURI: 'https://arweave.net/WpHohYQqfwWlp14kMnOjwlcpEhoEibuUsW-MvtDz29A?ext=png',
    tags: ['community']
  },
  {
    address: 'Hg35Vd8K3BS2pLB3xwC2WqQV8pmpCm3oNRGYP1PEpmCM',
    chainId: 101,
    decimals: 9,
    name: 'Eversol staked SOL',
    symbol: 'eSOL',
    logoURI:
      'https://raw.githubusercontent.com/everstake/solana-program-library/master/stake-pool/static-content/images/esol_token.jpg',
    tags: ['old-registry']
  },
  {
    address: '8j3hXRK5rdoZ2vSpGLRmXtWmW6iYaRUw5xVk4Kzmc9Hp',
    chainId: 101,
    decimals: 9,
    name: 'SolChicks Shards',
    symbol: 'SHARDS',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/8j3hXRK5rdoZ2vSpGLRmXtWmW6iYaRUw5xVk4Kzmc9Hp/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'solchicks-shards' }
  },
  {
    address: 'chiPiQTvkQ7oPtAD7YLQaEeHmPqXCa2wcRQdwFNneTe',
    chainId: 101,
    decimals: 9,
    name: 'chipi',
    symbol: 'CHIPI',
    logoURI:
      'https://dd.dexscreener.com/ds-data/tokens/solana/chiPiQTvkQ7oPtAD7YLQaEeHmPqXCa2wcRQdwFNneTe.png?size=lg&key=d4255f',
    tags: ['community'],
    extensions: { coingeckoId: 'chipi' }
  },
  {
    address: 'HXkbUADfocGyz2WrzJpjEfry8qyNDm5Kwiiq3Mz3tTi1',
    chainId: 101,
    decimals: 6,
    name: 'Retire on Sol',
    symbol: '$RETIRE',
    logoURI: 'https://i.imgur.com/k1zkuJa.png',
    tags: ['community'],
    extensions: { coingeckoId: 'retire-on-sol' }
  },
  {
    address: 'Frog8vt6gmuuUuuerd7ispP6yavssBUtMpEP5DCEuUgD',
    chainId: 101,
    decimals: 9,
    name: 'Frog',
    symbol: '$FROG',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Frog8vt6gmuuUuuerd7ispP6yavssBUtMpEP5DCEuUgD/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'ETAtLmCmsoiEEKfNrHKJ2kYy3MoABhU6NQvpSfij5tDs',
    chainId: 101,
    decimals: 6,
    name: 'Media Network',
    symbol: 'MEDIA',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/ETAtLmCmsoiEEKfNrHKJ2kYy3MoABhU6NQvpSfij5tDs/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'media-network' }
  },
  {
    address: '96QoNkZLTKH7Gecf6dKMRXBQXW1wqh378uF9pnTejgAw',
    chainId: 101,
    decimals: 9,
    name: "Popo Pepe's Dog",
    symbol: '$POPO',
    logoURI: 'https://gateway.irys.xyz/NsqnWfvg7r-SmICp9Gy5fIEBFWYlshxcSiV92H39_k4',
    tags: ['community'],
    extensions: { coingeckoId: 'popo-pepe-s-dog' }
  },
  {
    address: '9SiKU8vnRiBYQSBff84K5zwG7habzwYVzn7KrtgCzNfg',
    chainId: 101,
    decimals: 9,
    name: 'Pedro the Raccoon',
    symbol: 'PEDRO',
    logoURI:
      'https://bafybeifphw5w3ygiod2abdd7oipul5uw4e5c74g2wo6btcou7yjosxapiq.ipfs.nftstorage.link/',
    tags: ['community'],
    extensions: { coingeckoId: 'pedro-the-raccoon' }
  },
  {
    address: '6dKCoWjpj5MFU5gWDEFdpUUeBasBLK3wLEwhUzQPAa1e',
    chainId: 101,
    decimals: 8,
    name: 'Chintai',
    symbol: 'CHEX',
    logoURI: 'https://chintai.io/images/icon.svg',
    tags: ['community'],
    extensions: { coingeckoId: 'chex-token' }
  },
  {
    address: 'Fefecfi5DhahY51XqQTP2qjFGhnuoSjrVivL6k9Ercw6',
    chainId: 101,
    decimals: 4,
    name: 'DegenerateFinance69Inu',
    symbol: 'DEFI',
    logoURI: 'https://github.com/0xViva/public-assets/blob/main/assets/DefiDogLogo.png?raw=true',
    tags: ['community']
  },
  {
    address: 'FYa25XnBsXQXAdTnsyKBKd5gZ1VZhChBRF57CqfRxJZX',
    chainId: 101,
    decimals: 6,
    name: 'monkeyhaircut',
    symbol: 'monk',
    logoURI:
      'https://bafybeifx7lchopsihh6qhw5nvq4tjbwl4wf2wy745mugvhdq5krk2bwsmi.ipfs.nftstorage.link',
    tags: ['community'],
    extensions: { coingeckoId: 'monkeyhaircut' }
  },
  {
    address: 'HLptm5e6rTgh4EKgDpYFrnRHbjpkMyVdEeREEa2G7rf9',
    chainId: 101,
    decimals: 6,
    name: 'Duko',
    symbol: 'DUKO',
    logoURI:
      'https://bafkreicncfoowhhwrvtkajpivg6lbi5qsktrsfhs3x264k4kgdil5hv26q.ipfs.nftstorage.link/',
    tags: ['community'],
    extensions: { coingeckoId: 'duko' }
  },
  {
    address: '6kwTqmdQkJd8qRr9RjSnUX9XJ24RmJRSrU1rsragP97Y',
    chainId: 101,
    decimals: 6,
    name: 'SAIL',
    symbol: 'SAIL',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/6kwTqmdQkJd8qRr9RjSnUX9XJ24RmJRSrU1rsragP97Y/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'CRMaDAzKCWYbhUfsKYA8448vaA1qUzCETd7gNBDzQ1ks',
    chainId: 101,
    decimals: 9,
    name: 'Crema',
    symbol: 'CRM',
    logoURI: 'https://www.arweave.net/E6II9rfGbg3zzLugMjtbPGf5sM-JKKky2iXGA5SoYjQ?ext=png',
    tags: ['community']
  },
  {
    address: 'BybpSTBoZHsmKnfxYG47GDhVPKrnEKX31CScShbrzUhX',
    chainId: 101,
    decimals: 8,
    name: 'HUSD Stablecoin (Wormhole v1)',
    symbol: 'wHUSD_v1',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/BybpSTBoZHsmKnfxYG47GDhVPKrnEKX31CScShbrzUhX/logo.png',
    tags: ['old-registry']
  },
  {
    address: 'LFG1ezantSY2LPX8jRz2qa31pPEhpwN9msFDzZw4T9Q',
    chainId: 101,
    decimals: 7,
    name: 'LessFnGas',
    symbol: 'LFG',
    logoURI:
      'https://mogos7pjgqvbf3z7kzixpv67uxngkrifdfoddttz2tu6ywphk33q.arweave.net/Y4zpfek0KhLvP1ZRd9ffpdplRQUZXDHOedTp7FnnVvc?ext=png',
    tags: ['community'],
    extensions: { coingeckoId: 'lessfngas' }
  },
  {
    address: '7GNyprqrpvJHNwzWSj4KVkqw9cKyV5aR3ehM2HeE5pw',
    chainId: 101,
    decimals: 0,
    name: 'Mikuko Token',
    symbol: 'Miku',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7GNyprqrpvJHNwzWSj4KVkqw9cKyV5aR3ehM2HeE5pw/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: '8wXtPeU6557ETkp9WHFY1n1EcU6NxDvbAggHGsMYiHsB',
    chainId: 101,
    decimals: 9,
    name: 'GameStop',
    symbol: 'GME',
    logoURI:
      'https://nftstorage.link/ipfs/bafybeiddrzeyne4n2hi7qkhyhqorc4jbs4565pset7fc3ifwvhvxfdrt7q/gamestop-logo.jpeg',
    tags: ['community'],
    extensions: { coingeckoId: 'gme' }
  },
  {
    address: '9niFQK8MsParjSxhYQ3Ys2a6zHmsEuKSB1M7wwdvZ7bj',
    chainId: 101,
    decimals: 0,
    name: 'crow with knife (Wormhole)',
    symbol: 'CAW',
    logoURI: 'https://www.crowwithknife.com/200px.png',
    tags: ['community'],
    extensions: { coingeckoId: 'crow-with-knife' }
  },
  {
    address: 'o1Mw5Y3n68o8TakZFuGKLZMGjm72qv4JeoZvGiCLEvK',
    chainId: 101,
    decimals: 2,
    name: 'Cope',
    symbol: 'Cope',
    logoURI:
      'https://shdw-drive.genesysgo.net/HNTiV9QS4UDrcxpucyKRGTKQTqKGLif61GwM6tpd5R5V/image.png',
    tags: ['community', 'solana-fm'],
    extensions: { coingeckoId: 'cope-token' }
  },
  {
    address: '3uNAevHamuZKKQdtdLzmHNvqD8r14tXUUXx5PN48UbYC',
    chainId: 101,
    decimals: 9,
    name: 'Nasi Lemak',
    symbol: 'NLTK',
    logoURI: 'https://raw.githubusercontent.com/avaelon/nltk/main/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'FkbWN4dcFQym2PgCELfThghQqLuA2e2jThMJyhZjfG4M',
    chainId: 101,
    decimals: 6,
    name: 'SBF',
    symbol: 'SBF',
    logoURI:
      'https://bafkreifhqihaiwyo4g2aogdu4qyfqftkxy3aq4xxbhoxdkbkufrobsnjwm.ipfs.nftstorage.link',
    tags: ['community'],
    extensions: { coingeckoId: 'sam-bankmeme-fried' }
  },
  {
    address: 'CsxCtA8usvWKdRhe7KhLU5GgwzYaLkoHsz1MKBVZ4W3M',
    chainId: 101,
    decimals: 8,
    name: 'WINR (Wormhole)',
    symbol: 'WINR',
    logoURI: 'https://jbassets.fra1.cdn.digitaloceanspaces.com/winr-logo.png',
    tags: ['community'],
    extensions: { coingeckoId: 'winr-protocol' }
  },
  {
    address: 'SHARKSYJjqaNyxVfrpnBN9pjgkhwDhatnMyicWPnr1s',
    chainId: 101,
    decimals: 6,
    name: 'Sharky',
    symbol: 'SHARK',
    logoURI:
      'https://shdw-drive.genesysgo.net/2F9tju1WHwocrTHj2iRoLhhVqbgQJusdUgkYNL84wKf4/$SHARK_logo_round.png',
    tags: ['community'],
    extensions: { coingeckoId: 'sharky-fi' }
  },
  {
    address: '3zE4Qmh9hrC4inHynT3aSRzHcWhnxPCHLeN9WWqvoRVz',
    chainId: 101,
    decimals: 9,
    name: 'Race Raiders Rewards',
    symbol: 'RRR',
    logoURI: 'https://arweave.net/SH106hrChudKjQ_c6e6yd0tsGUbFIScv2LL6Dp-LDiI',
    tags: ['community']
  },
  {
    address: 'Comp4ssDzXcLeu2MnLuGNNFC4cmLPMng8qWHPvzAMU1h',
    chainId: 101,
    decimals: 9,
    name: 'Compass SOL',
    symbol: 'compassSOL',
    logoURI: 'https://solanacompass.com/compass.png',
    tags: ['community'],
    extensions: { coingeckoId: 'solana-compass-staked-sol' }
  },
  {
    address: 'C7K4Tot6fnnNwhWpqw9H277QPcP56vHAEeXubRHDyCo9',
    chainId: 101,
    decimals: 6,
    name: 'Speero',
    symbol: 'Speero',
    logoURI: 'https://assets.coingecko.com/coins/images/34252/standard/speeroLOGO.png',
    tags: ['community'],
    extensions: { coingeckoId: 'speero' }
  },
  {
    address: 'DMCUFm2ZAnSU7UgsdVq23gRogMU3MEBjPgQF1gK53rEn',
    chainId: 101,
    decimals: 6,
    name: 'UncleMine',
    symbol: 'UM',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/DMCUFm2ZAnSU7UgsdVq23gRogMU3MEBjPgQF1gK53rEn/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'unclemine' }
  },
  {
    address: 'DZvuAtqMdWzDHMGDpTkRmW2QBxstjCNTcobMDMpVuRDa',
    chainId: 101,
    decimals: 8,
    name: 'COSTCO PIZZA',
    symbol: 'PIZZA',
    logoURI: 'https://gateway.irys.xyz/DMy8cbi1T5k-1dMUyT2TaGGmV_UHvz5D9whcItR706I',
    tags: ['community']
  },
  {
    address: '4LP5JKsyKC5pSAoodwcZnDCSK2ggsMcZvHKoo7HCPDCV',
    chainId: 101,
    decimals: 9,
    name: 'Snoopy',
    symbol: '$SNOOPY',
    logoURI:
      'https://bafkreih5phb36g46nyomg3gx6274wyhbgh4pyhax7noxpbhinirxtzcyum.ipfs.nftstorage.link',
    tags: ['community']
  },
  {
    address: '3jsFX1tx2Z8ewmamiwSU851GzyzM2DJMq7KWW5DM8Py3',
    chainId: 101,
    decimals: 8,
    name: 'CHAI (Portal)',
    symbol: 'CHAI',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/CHAI_wh.png',
    tags: ['wormhole']
  },
  {
    address: 'NFTUkR4u7wKxy9QLaX2TGvd9oZSWoMo4jqSJqdMb7Nk',
    chainId: 101,
    decimals: 6,
    name: 'Blockasset',
    symbol: 'BLOCK',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/NFTUkR4u7wKxy9QLaX2TGvd9oZSWoMo4jqSJqdMb7Nk/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'blockasset' }
  },
  {
    address: '4SZjjNABoqhbd4hnapbvoEPEqT8mnNkfbEoAwALf1V8t',
    chainId: 101,
    decimals: 6,
    name: 'Crypto Cavemen',
    symbol: 'CAVE',
    logoURI:
      'https://ftoblquxiunjey7bu4eevlz2u7kwg5s3yvou7adgge2jbihcu7qq.arweave.net/LNwVwpdFGpJj4acISq86p9VjdlvFXU-AZjE0kKDip-E/?ext=png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'cave' }
  },
  {
    address: 'AUgdt7wjBifF9vZpde7BjU6HLroCYh4SUHYc7yhheECW',
    chainId: 101,
    decimals: 9,
    name: 'Kitsune',
    symbol: 'KIT',
    logoURI:
      'https://bafkreialxzf3b3bghbqantzfohxw4n35hpoqgbsi2ffg4lfise7vg7jxju.ipfs.nftstorage.link',
    tags: ['community'],
    extensions: { coingeckoId: 'kitsune' }
  },
  {
    address: 'GV6n9Uow3XzMWSs8vwTCML8SvMA6ozbidaEfdPoSoraQ',
    chainId: 101,
    decimals: 9,
    name: 'Space Vizsla',
    symbol: 'SVIZ',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/GV6n9Uow3XzMWSs8vwTCML8SvMA6ozbidaEfdPoSoraQ/VizslaMoonLogo100x100.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'HJbNXx2YMRxgfUJ6K4qeWtjatMK5KYQT1QnsCdDWywNv',
    chainId: 101,
    decimals: 9,
    name: 'Atlas Dex',
    symbol: 'ATS',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/HJbNXx2YMRxgfUJ6K4qeWtjatMK5KYQT1QnsCdDWywNv/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'atlas-dex' }
  },
  {
    address: 'GS1VjXDZmDFsiqzBFYoACgRQBmXYuvdPJ88NQcXxg3qM',
    chainId: 101,
    decimals: 6,
    name: 'samo wif hat',
    symbol: 'SAMOWIF',
    logoURI:
      'https://bafybeigf4vhdjusff3au3piubpdiz2xq5lya67vt3ofp4afg5sfl3wweoe.ipfs.nftstorage.link',
    tags: ['community']
  },
  {
    address: '48AEwauAHsJibyt3WqjQ6EoHnFBcnyHASfo7vB2eCXPS',
    chainId: 101,
    decimals: 0,
    name: 'DragonWar',
    symbol: 'DRAW',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/48AEwauAHsJibyt3WqjQ6EoHnFBcnyHASfo7vB2eCXPS/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'dragon-war' }
  },
  {
    address: 'AMzmwvDRKdt5AQ3m1m28tWjzBxmQNe1PsmHnYitVZwzp',
    chainId: 101,
    decimals: 9,
    name: 'JUNK',
    symbol: 'JUNKz',
    logoURI: 'https://raw.githubusercontent.com/XAGBack/JUNKToken1/main/JunkToken.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'E1kvzJNxShvvWTrudokpzuc789vRiDXfXG3duCuY6ooE',
    chainId: 101,
    decimals: 9,
    name: 'Dither',
    symbol: 'DITH',
    logoURI:
      'https://zxejrbfcjk7fa67anpyuavtssrkgvbek4onzbza2v56flew72cta.arweave.net/zciYhKJKvlB74GvxQFZylFRqhIrjm5DkGq98VZLf0KY?ext=png',
    tags: ['community'],
    extensions: { coingeckoId: 'dither' }
  },
  {
    address: 'GPyzPHuFFGvN4yWWixt6TYUtDG49gfMdFFi2iniTmCkh',
    chainId: 101,
    decimals: 2,
    name: 'CHILI',
    symbol: 'CHILI',
    logoURI: 'https://iili.io/H5O87JS.png',
    tags: ['community', 'solana-fm'],
    extensions: { coingeckoId: 'chili' }
  },
  {
    address: 'E9bjYSAqabYAd2Zaev4qAMVNAiX7Z2Dp4Sn1JgsTn2b6',
    chainId: 101,
    decimals: 9,
    name: 'Chairman Chow',
    symbol: 'CCC',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/E9bjYSAqabYAd2Zaev4qAMVNAiX7Z2Dp4Sn1JgsTn2b6/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: '4Yz5zByTwnVe46AXD6hsrccbq4TKLyih2xRqPyLBDT1P',
    chainId: 101,
    decimals: 6,
    name: 'DONALD',
    symbol: 'DONALD',
    logoURI: 'https://gateway.irys.xyz/LQ9YCmIWoXtDUAxNQhPjpbGbTgLjkgnLFVQJfRn73o0',
    tags: ['community']
  },
  {
    address: 'HUBsveNpjo5pWqNkH57QzxjQASdTVXcSK7bVKTSZtcSX',
    chainId: 101,
    decimals: 9,
    name: 'SolanaHub staked SOL',
    symbol: 'hubSOL',
    logoURI: 'https://arweave.net/RI0OfNg4Ldn5RRdOp9lE60NqUmweGtJxF5N8JjU_Y0k',
    tags: ['community'],
    extensions: { coingeckoId: 'solanahub-staked-sol' }
  },
  {
    address: '5CqfXex1knfRiozwDtgFFNaiGR9TsmSUcWDNUTUGZQru',
    chainId: 101,
    decimals: 6,
    name: 'Theory Of Gravity',
    symbol: 'THOG',
    logoURI: 'https://www.arweave.net/EYICWnbpkym9JUouBKmvUxKP4WR-KvQtwYG42kUtZ8s/collection.gif',
    tags: ['community'],
    extensions: { coingeckoId: 'the-theory-of-gravity' }
  },
  {
    address: '7cb67ev3jvBKaAH1tnVM8FL8WfQ96sa2TYByEXajqx8N',
    chainId: 101,
    decimals: 6,
    name: 'Dawkoins',
    symbol: 'DAW',
    logoURI:
      'https://bafkreibbgyr7sq5rnvievhrocn56kiwxw7yp5ul2gqi7sfs6purdmrq3gu.ipfs.nftstorage.link',
    tags: ['community'],
    extensions: { coingeckoId: 'dawkoin' }
  },
  {
    address: '2mqi8iLJf9WaVRHd7nhRkqvCafxfb3Us7wshaJR73ykS',
    chainId: 101,
    decimals: 5,
    name: 'Poor token',
    symbol: 'POOR',
    logoURI:
      'https://shdw-drive.genesysgo.net/AZgm3Vdo1QLf8bKUjyearDC9NygpRHmmtzPaBNQcF4jt/IMG_1640.JPG',
    tags: ['community']
  },
  {
    address: 'wo1zgt8rfrYpvdVi4nidoj1SYfcR4pQx69bmNv2JLhQ',
    chainId: 101,
    decimals: 9,
    name: 'JustAnEgg',
    symbol: 'EGG',
    logoURI:
      'https://bafkreia6ogaqdzbirdorm2mekm25svpd3szrxf7lzdlpn344mysahecd2a.ipfs.nftstorage.link',
    tags: ['community'],
    extensions: { coingeckoId: 'justanegg-2' }
  },
  {
    address: '94XduSfSnyas7jAEFSJSXiCi1xQ4mENWcii1aCvjVuqu',
    chainId: 101,
    decimals: 9,
    name: 'JIMMY',
    symbol: 'JIMMY',
    logoURI: 'https://arweave.net/5NmSALkMrjr5p33OrjuQlA5a3LRPLv0Ta07SnEWt1fk',
    tags: ['community'],
    extensions: { coingeckoId: 'jimmy-on-solana' }
  },
  {
    address: '8mY8bif63v5vAHYaHPhpob71K4uJsDKXVx7h9h1XmJ6N',
    chainId: 101,
    decimals: 6,
    name: 'Caty Wuud',
    symbol: 'CATY',
    logoURI:
      'https://bafkreidcqfo53bp7455belk3l253woknmqtee3lvech4kyol4aohs4g4eq.ipfs.nftstorage.link',
    tags: ['community']
  },
  {
    address: '5p2zjqCd1WJzAVgcEnjhb9zWDU7b9XVhFhx4usiyN7jB',
    chainId: 101,
    decimals: 9,
    name: 'CATO',
    symbol: 'CATO',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/5p2zjqCd1WJzAVgcEnjhb9zWDU7b9XVhFhx4usiyN7jB/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'cato' }
  },
  {
    address: 'fujiCeCeP9AFDVCv27P5JRcKLoH7wfs2C9xmDECs24m',
    chainId: 101,
    decimals: 3,
    name: 'FUJI',
    symbol: 'FUJI',
    logoURI:
      'https://raw.githubusercontent.com/MarkSackerberg/token-list/main/assets/mainnet/fujiCeCeP9AFDVCv27P5JRcKLoH7wfs2C9xmDECs24m/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: '2VhjJ9WxaGC3EZFwJG9BDUs9KxKCAjQY4vgd1qxgYWVg',
    chainId: 101,
    decimals: 6,
    name: 'EUROe Stablecoin',
    symbol: 'EUROe',
    logoURI: 'https://dev.euroe.com/persistent/token-icon/png/256x256.png',
    tags: ['community'],
    extensions: { coingeckoId: 'euroe-stablecoin' }
  },
  {
    address: '8FU95xFJhUUkyyCLU13HSzDLs7oC4QZdXQHL6SCeab36',
    chainId: 101,
    decimals: 8,
    name: 'Uniswap (Portal)',
    symbol: 'UNI',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/UNI_wh.png',
    tags: ['wormhole', 'old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'uniswap-wormhole' }
  },
  {
    address: 'HonyeYAaTPgKUgQpayL914P6VAqbQZPrbkGMETZvW4iN',
    chainId: 101,
    decimals: 6,
    name: 'HONEY',
    symbol: '$HONEY',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/HonyeYAaTPgKUgQpayL914P6VAqbQZPrbkGMETZvW4iN/logo.svg',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'honey-finance' }
  },
  {
    address: 'AASdD9rAefJ4PP7iM89MYUsQEyCQwvBofhceZUGDh5HZ',
    chainId: 101,
    decimals: 9,
    name: 'Solex Finance',
    symbol: 'SLX',
    logoURI:
      'https://raw.githubusercontent.com/solexfin/token-list/main/assets/mainnet/AASdD9rAefJ4PP7iM89MYUsQEyCQwvBofhceZUGDh5HZ/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'solex-finance' }
  },
  {
    address: '8s9FCz99Wcr3dHpiauFRi6bLXzshXfcGTfgQE7UEopVx',
    chainId: 101,
    decimals: 6,
    name: 'ChikinCoin',
    symbol: 'CKC',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/8s9FCz99Wcr3dHpiauFRi6bLXzshXfcGTfgQE7UEopVx/logo.svg',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'chikincoin' }
  },
  {
    address: 'DLvWoNT1d5iSX2T1aUUBzRdGbSef2xW3MwJBKtewVW6h',
    chainId: 101,
    decimals: 6,
    name: 'gerta',
    symbol: '$gerta',
    logoURI: 'https://cf-ipfs.com/ipfs/QmWLHrrt6ah8WJWkn4rtmTKPeTkW1HScKaDde7sRCw3kFh',
    tags: ['community']
  },
  {
    address: '6fdCC8xfrXNy6PmNaVcxdEY5XNCTAha2V54zYYnmBCey',
    chainId: 101,
    decimals: 6,
    name: 'KOI',
    symbol: 'KOI',
    logoURI:
      'https://bafybeienmtuhyl7nhi47psrnap7glxyx4wgo462man4l3nyfrgs5lavsae.ipfs.nftstorage.link',
    tags: ['community'],
    extensions: { coingeckoId: 'koi' }
  },
  {
    address: 'Gz3u6eJaKEviYpPC5AwUziz891kNX76PNdsmJrnaNNY4',
    chainId: 101,
    decimals: 9,
    name: 'SouloCoin',
    symbol: 'SOULO',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Gz3u6eJaKEviYpPC5AwUziz891kNX76PNdsmJrnaNNY4/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'soulocoin' }
  },
  {
    address: 'E77cpQ4VncGmcAXX16LHFFzNBEBb2U7Ar7LBmZNfCgwL',
    chainId: 101,
    decimals: 9,
    name: 'Wrapped USDT (Allbridge from BSC)',
    symbol: 'abUSDT',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/BQcdHdAQW1hczDbBi9hiegXAR7A98Q9jx3X3iBBBDiq4/logo.png',
    tags: ['old-registry']
  },
  {
    address: 'FtgGSFADXBtroxq8VCausXRr2of47QBf5AS1NtZCu4GD',
    chainId: 101,
    decimals: 4,
    name: 'BRZ',
    symbol: 'BRZ',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FtgGSFADXBtroxq8VCausXRr2of47QBf5AS1NtZCu4GD/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'brz' }
  },
  {
    address: 'AoN2z7w7ccQJQiWS7rjS45dcyYkVkBddXDcrzmj69tqf',
    chainId: 101,
    decimals: 3,
    name: 'Robert',
    symbol: 'ROBERT',
    logoURI: 'https://raw.githubusercontent.com/scoops0/Robert-Logo/main/Robert%20Logo.webp',
    tags: ['community']
  },
  {
    address: '4vqYQTjmKjxrWGtbL2tVkbAU1EVAz9JwcYtd2VE3PbVU',
    chainId: 101,
    decimals: 6,
    name: 'Anita Max Wynn',
    symbol: 'WYNN',
    logoURI:
      'https://bafybeiepbscydfgvbfqq4augkwub2tsvbsm3e6uau3he2mmmbj4ebuyyym.ipfs.nftstorage.link/',
    tags: ['community'],
    extensions: { coingeckoId: 'anita-max-wynn' }
  },
  {
    address: 'So111DzVTTNpDq81EbeyKZMi4SkhU9yekqB8xmMpqzA',
    chainId: 101,
    decimals: 9,
    name: 'zSOL',
    symbol: 'zSOL',
    logoURI: 'https://raw.githubusercontent.com/LP-Finance-Inc/token-image/main/zSOL.png',
    tags: ['community', 'solana-fm'],
    extensions: { coingeckoId: 'zsol' }
  },
  {
    address: 'CNL2opdqaQDY7yudm5V4MAaTwuuY32LTKqNP93jZM8X6',
    chainId: 101,
    decimals: 8,
    name: 'HarambeCoin (Wormhole)',
    symbol: 'HARAMBE',
    logoURI:
      'https://enu6hxxdf2rvlczerdbramwgwbowknvkamy4wlglyahtnqycw2ha.arweave.net/I2nj3uMuo1WLJIjDEDLGsF1lNqoDMcssy8APNsMCto4',
    tags: ['community'],
    extensions: { coingeckoId: 'harambecoin' }
  },
  {
    address: 'DDRmuJ77t7d6pkBDXE47ZALjSZm3udVGJMgZjZBk41LH',
    chainId: 101,
    decimals: 9,
    name: 'Merted',
    symbol: 'MERTD',
    logoURI:
      'https://bafybeibpf5nm257i63j2ttxrnzsirmmavwn5fj5y24olh5a55ydlugekpe.ipfs.nftstorage.link',
    tags: ['community']
  },
  {
    address: 'FLUXBmPhT3Fd1EDVFdg46YREqHBeNypn1h4EbnTzWERX',
    chainId: 101,
    decimals: 5,
    name: 'FluxBot',
    symbol: 'FLUXB',
    logoURI:
      'https://bafybeiakyhwwesdvxpikjn4kyqddira3hjpjfcn26ycrrezt65bfa7r3gm.ipfs.nftstorage.link',
    tags: ['community', 'token-2022'],
    extensions: { coingeckoId: 'fluxbot' }
  },
  {
    address: 'McpgFn2CxFYFq6JLiBxeC6viNfebLsfsf9Sv5wcwKvL',
    chainId: 101,
    decimals: 2,
    name: 'Duck Punkz Universe',
    symbol: 'DPUNKZ',
    logoURI:
      'https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://creator-hub-prod.s3.us-east-2.amazonaws.com/duckpunkzuniverse_pfp_1650542071140.gif',
    tags: ['community', 'solana-fm']
  },
  {
    address: 'Doggoyb1uHFJGFdHhJf8FKEBUMv58qo98CisWgeD7Ftk',
    chainId: 101,
    decimals: 5,
    name: 'DOGGO',
    symbol: 'DOGGO',
    logoURI:
      'https://shdw-drive.genesysgo.net/BBwXjBB6LtWGjKW5GveUSau5z9KZv2CK5AWmb7FCDF6K/doggies_coin.png',
    tags: ['community', 'solana-fm'],
    extensions: { coingeckoId: 'doggo' }
  },
  {
    address: 'LGNDeXXXaDDeRerwwHfUtPBNz5s6vrn1NMSt9hdaCwx',
    chainId: 101,
    decimals: 9,
    name: 'Legends of SOL',
    symbol: 'LEGEND',
    logoURI: 'https://arweave.net/sCGvXDlbFn8p0s0cfqtznbjn9K_cyYY2aa9HGC1XWR8',
    tags: ['community'],
    extensions: { coingeckoId: 'legends-of-sol' }
  },
  {
    address: 'HZRCwxP2Vq9PCpPXooayhJ2bxTpo5xfpQrwB1svh332p',
    chainId: 101,
    decimals: 8,
    name: 'Lido DAO (Portal)',
    symbol: 'LDO',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/LDO_wh.png',
    tags: ['wormhole', 'old-registry'],
    extensions: { coingeckoId: 'lido-dao-wormhole' }
  },
  {
    address: 'AYABiqKuTh9Va5Aqc6AujFevHwDGmECGQiFmKW5g3K4Z',
    chainId: 101,
    decimals: 5,
    name: 'Nobiko Coin',
    symbol: 'LONG',
    logoURI: 'https://ibb.co/PNCn53H',
    tags: ['community'],
    extensions: { coingeckoId: 'nobiko-coin' }
  },
  {
    address: 'HWSqJdwemji7TNiKQPudUj86LXyF3vGAtWm5ePk5KzgD',
    chainId: 101,
    decimals: 9,
    name: 'Solana Eco Index',
    symbol: 'SIX',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/HWSqJdwemji7TNiKQPudUj86LXyF3vGAtWm5ePk5KzgD/logo.png',
    tags: ['old-registry']
  },
  {
    address: 'Eyhi3qZCW1hNgsLtv1geaeDgZJmRFCpEtbjABWfGcGx5',
    chainId: 101,
    decimals: 6,
    name: 'SolGPT',
    symbol: 'GPT',
    logoURI: 'https://cf-ipfs.com/ipfs/QmbzeT99i7YNMAXbjKbHq6zEuiPgEj7GwDvX5ZAz9cDYCo',
    tags: ['community']
  },
  {
    address: 'CpFE715P5DnDoJj9FbCRcuyHHeTXNdRnvzNkHvq1o23U',
    chainId: 101,
    decimals: 8,
    name: 'DARC Token',
    symbol: 'DARC',
    logoURI: 'https://raw.githubusercontent.com/Konstellation/DARC_token/main/256darctoken.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'darcmatter-coin' }
  },
  {
    address: 'AaAEw2VCw1XzgvKB8Rj2DyK2ZVau9fbt2bE8hZFWsMyE',
    chainId: 101,
    decimals: 9,
    name: 'Wrapped ETH (Allbridge from Ethereum)',
    symbol: 'aeWETH',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FeGn77dhg1KXRRFeSwwMiykZnZPw5JXW6naf2aQgZDQf/logo.png',
    tags: ['old-registry']
  },
  {
    address: 'Bqd2ujCTEzpKzfjb1FHL7FKrdM6n1rZSnRecJK57EoKz',
    chainId: 101,
    decimals: 9,
    name: 'HottoShotto',
    symbol: 'HOTTO',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Bqd2ujCTEzpKzfjb1FHL7FKrdM6n1rZSnRecJK57EoKz/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: '2HeykdKjzHKGm2LKHw8pDYwjKPiFEoXAz74dirhUgQvq',
    chainId: 101,
    decimals: 9,
    name: 'Sator',
    symbol: 'SAO',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/2HeykdKjzHKGm2LKHw8pDYwjKPiFEoXAz74dirhUgQvq/Sator_Logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'sator' }
  },
  {
    address: '4TGxgCSJQx2GQk9oHZ8dC5m3JNXTYZHjXumKAW3vLnNx',
    chainId: 101,
    decimals: 9,
    name: 'Oxbull Sol',
    symbol: 'OXS',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/4TGxgCSJQx2GQk9oHZ8dC5m3JNXTYZHjXumKAW3vLnNx/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: '9w6LpS7RU1DKftiwH3NgShtXbkMM1ke9iNU4g3MBXSUs',
    chainId: 101,
    decimals: 9,
    name: 'Wrapped DAI (Allbridge from Ethereum)',
    symbol: 'aeDAI',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FYpdBuyAHSbdaAyD1sKkxyLWbAP8uUW9h6uvdhK74ij1/logo.png',
    tags: ['old-registry']
  },
  {
    address: '3WoatNLfMffazu8aCSmRSdWFngpJQ4GUMFJxtSzoDqau',
    chainId: 101,
    decimals: 6,
    name: 'Kowalski',
    symbol: 'KOW',
    logoURI:
      'https://bafkreihdkgipc7nho7lix35i54gupf56hpnazx6d5jbqtxtmg34iifefga.ipfs.nftstorage.link/',
    tags: ['community']
  },
  {
    address: '4q5UBXJxE91BZKX548qhU8i5QBWvZdXzS3RZwfTgLQda',
    chainId: 101,
    decimals: 6,
    name: 'Hydrazine',
    symbol: 'N2H4',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/4q5UBXJxE91BZKX548qhU8i5QBWvZdXzS3RZwfTgLQda/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'SNSNkV9zfG5ZKWQs6x4hxvBRV6s8SqMfSGCtECDvdMd',
    chainId: 101,
    decimals: 9,
    name: 'SynesisOne',
    symbol: 'SNS',
    logoURI: 'https://raw.githubusercontent.com/Synesis-One/spl-token/main/icon.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'synesis-one' }
  },
  {
    address: 'HNm1VgnyhaMZZF71RjNFNiYLN76zyZTDcBZPjYveWFXX',
    chainId: 101,
    decimals: 6,
    name: 'Chimp Frens',
    symbol: 'FRENS',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/HNm1VgnyhaMZZF71RjNFNiYLN76zyZTDcBZPjYveWFXX/chimp.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'SarosY6Vscao718M4A778z4CGtvcwcGef5M9MEH1LGL',
    chainId: 101,
    decimals: 6,
    name: 'Saros',
    symbol: 'SAROS',
    logoURI: 'https://rapid.coin98.com/Currency/saros.png',
    tags: ['community'],
    extensions: { coingeckoId: 'saros-finance' }
  },
  {
    address: 'HB2pjBPuquh1XGEVC1GCKepdh4daoJnkJiHFmaorfBWu',
    chainId: 101,
    decimals: 9,
    name: 'Milady',
    symbol: 'Milady',
    logoURI:
      'https://bafkreiancqnp4k3varzynj4xuaigl3674r7ok4rkgwherzwkwqyevq23mi.ipfs.nftstorage.link',
    tags: ['community']
  },
  {
    address: '5RDHUiwLChkKfusxeu9kEDUtRfxsDWV8etoopnZMwVM7',
    chainId: 101,
    decimals: 6,
    name: 'Wall Street Bets Solana',
    symbol: 'WSBS',
    logoURI:
      'https://bafybeibvap6pkovsxqf2jpkbh4faaz7cifefmvcozs3v4ev475zv5m2mjq.ipfs.nftstorage.link',
    tags: ['community']
  },
  {
    address: 'BKydRTNdaMJ8B4zPva3YhwUQcpvAsyZaGJnKA6F44fX7',
    chainId: 101,
    decimals: 9,
    name: 'FakeBiz',
    symbol: 'FBZ',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/BKydRTNdaMJ8B4zPva3YhwUQcpvAsyZaGJnKA6F44fX7/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: '9999j2A8sXUtHtDoQdk528oVzhaKBsXyRGZ67FKGoi7H',
    chainId: 101,
    decimals: 9,
    name: 'Saber Wrapped Bitcoin (Sollet) (9 decimals)',
    symbol: 'sBTC-9',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/9999j2A8sXUtHtDoQdk528oVzhaKBsXyRGZ67FKGoi7H/icon.png',
    tags: ['old-registry']
  },
  {
    address: 'pumpkinsEq8xENVZE6QgTS93EN4r9iKvNxNALS1ooyp',
    chainId: 101,
    decimals: 9,
    name: "Pumpkin's Staked SOL",
    symbol: 'pumpkinSOL',
    logoURI:
      'https://raw.githubusercontent.com/bartenbach/pumpkins_pool/main/assets/img/pumpkintoken.png',
    tags: ['community'],
    extensions: { coingeckoId: 'pumpkin-staked-sol' }
  },
  {
    address: '9nEqaUcb16sQ3Tn1psbkWqyhPdLmfHWjKGymREjsAgTE',
    chainId: 101,
    decimals: 6,
    name: 'WOOF',
    symbol: 'WOOF',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/9nEqaUcb16sQ3Tn1psbkWqyhPdLmfHWjKGymREjsAgTE/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'woof-token' }
  },
  {
    address: '9yotbA6u4g2ZZoUajkyS8FntaFUwVRFyLn2Q4PSrfNik',
    chainId: 101,
    decimals: 9,
    name: 'Burnie Senders',
    symbol: 'SENDER',
    logoURI:
      'https://bafkreiemgihzqfd7bxbxjzwps4e5wf3swh46up2ls5c5fy3cmnzte44dey.ipfs.nftstorage.link',
    tags: ['community']
  },
  {
    address: 'FsPncBfeDV3Uv9g6yyx1NnKidvUeCaAiT2NtBAPy17xg',
    chainId: 101,
    decimals: 6,
    name: 'Glitter Finance',
    symbol: 'XGLI',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FsPncBfeDV3Uv9g6yyx1NnKidvUeCaAiT2NtBAPy17xg/logo.svg',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'glitter-finance' }
  },
  {
    address: 'GKNr1Gwf7AMvEMEyMzBoEALVBvCpKJue9Lzn9HfrYYhg',
    chainId: 101,
    decimals: 9,
    name: '611Coin',
    symbol: 'SIXY',
    logoURI: 'https://raw.githubusercontent.com/dc215007/611/main/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'C4Kkr9NZU3VbyedcgutU6LKmi6MKz81sx6gRmk5pX519',
    chainId: 101,
    decimals: 9,
    name: 'VNX Euro',
    symbol: 'VEUR',
    logoURI:
      'https://4183046207-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FsAJThQfNCJePE5h9iplX%2Fuploads%2FaZb0qZfNGNXHulNZRIko%2FVEUR%20256x256.png?alt=media&token=b6bad541-cee9-427d-8498-d4a4ea423c79',
    tags: ['community'],
    extensions: { coingeckoId: 'vnx-euro' }
  },
  {
    address: 'RLYv2ubRMDLcGG2UyvPmnPmkfuQTsMbg4Jtygc7dmnq',
    chainId: 101,
    decimals: 9,
    name: 'Rally (Legacy - deprecated)',
    symbol: 'sRLY',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/RLYv2ubRMDLcGG2UyvPmnPmkfuQTsMbg4Jtygc7dmnq/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'xnorPhAzWXUczCP3KjU5yDxmKKZi5cSbxytQ1LgE3kG',
    chainId: 101,
    decimals: 6,
    name: 'Serum (Portal from Ethereum)',
    symbol: 'SRMet',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/SRMet_wh.png',
    tags: ['wormhole', 'old-registry']
  },
  {
    address: '7qnTXCm7ZVMLdqNWzhfSm3RLKk8MrX3dYavB4hqJv5F9',
    chainId: 101,
    decimals: 9,
    name: 'Bully',
    symbol: 'BULLY',
    logoURI: 'https://i.imgur.com/ChfVh16.jpeg',
    tags: ['community'],
    extensions: { coingeckoId: 'bullysoltoken' }
  },
  {
    address: '6CBm8B8uoCUZWjs9n32BNy4z6LjGj4etBH2X48JWVhzf',
    chainId: 101,
    decimals: 6,
    name: 'BRAH SUPPS INTL.',
    symbol: 'BRAH',
    logoURI: 'https://brahsupps.com/res/misc/icon.png',
    tags: ['community']
  },
  {
    address: 'AYyYgh3i43s1QSpvG4vwhJ6s3gewfN7uteFwYrswgMGw',
    chainId: 101,
    decimals: 9,
    name: 'ps1 hagrid',
    symbol: 'HAGGORD',
    logoURI:
      'https://bafkreiak2a2gbdqqnz77xup3bi72lon5fe4ri4cpozxp5o4ekjnugm77wm.ipfs.nftstorage.link',
    tags: ['community'],
    extensions: { coingeckoId: 'haggord' }
  },
  {
    address: 'ErGB9xa24Szxbk1M28u2Tx8rKPqzL6BroNkkzk5rG4zj',
    chainId: 101,
    decimals: 8,
    name: 'FRAKT Token',
    symbol: 'FRKT',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/ErGB9xa24Szxbk1M28u2Tx8rKPqzL6BroNkkzk5rG4zj/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'frakt-token' }
  },
  {
    address: 'Ffjrfw9phxYYpQc9fyYq5uRV3K6943Wzo3t9a1L4vfoW',
    chainId: 101,
    decimals: 4,
    name: 'Pingu',
    symbol: 'PINGU',
    logoURI:
      'https://bafkreifpyinqj5cl7ioyqfj4gmozxryhxljvk75e5kytvdsbr2wtc4w77a.ipfs.nftstorage.link/',
    tags: ['community'],
    extensions: { coingeckoId: 'pingu-on-sol' }
  },
  {
    address: '66edZnAPEJSxnAK4SckuupssXpbu5doV57FUcghaqPsY',
    chainId: 101,
    decimals: 9,
    name: 'ProtoReality Games Token',
    symbol: 'PRGC',
    logoURI: 'https://www.protorealitygames.com/images/PRGC_Token.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'SLNDpmoWTVADgEdndyvWzroNL7zSi1dF9PC3xHGtPwp',
    chainId: 101,
    decimals: 6,
    name: 'Solend',
    symbol: 'SLND',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/SLNDpmoWTVADgEdndyvWzroNL7zSi1dF9PC3xHGtPwp/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'solend' }
  },
  {
    address: 'XwTZraiF1dVh69cZ2SpqyjDLmei2uVps5CYHD9vqK6d',
    chainId: 101,
    decimals: 2,
    name: 'Burrito Boyz',
    symbol: 'BURR',
    logoURI:
      'https://creator-hub-prod.s3.us-east-2.amazonaws.com/burrito_boyz_pfp_1653394754301.png',
    tags: ['community', 'solana-fm']
  },
  {
    address: '8bqjz8DeSuim1sEAsQatjJN4zseyxSPdhHQcuuhL8PCK',
    chainId: 101,
    decimals: 9,
    name: 'Synthetic ETH',
    symbol: 'xETH',
    logoURI: 'https://www.synthetify.io/icons/xeth.svg',
    tags: ['old-registry']
  },
  {
    address: 'FoXyMu5xwXre7zEoSvzViRk3nGawHUp9kUh97y2NDhcq',
    chainId: 101,
    decimals: 0,
    name: 'Famous Fox Federation',
    symbol: 'FOXY',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FoXyMu5xwXre7zEoSvzViRk3nGawHUp9kUh97y2NDhcq/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'famous-fox-federation' }
  },
  {
    address: '8XSsNvaKU9FDhYWAv7Yc7qSNwuJSzVrXBNEk7AFiWF69',
    chainId: 101,
    decimals: 9,
    name: 'Wrapped USDC (Allbridge from BSC)',
    symbol: 'abUSDC',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/BXXkv6z8ykpG1yuvUDPgh732wzVHB69RnB9YgSYh3itW/logo.png',
    tags: ['old-registry']
  },
  {
    address: 'Fm9rHUTF5v3hwMLbStjZXqNBBoZyGriQaFM6sTFz3K8A',
    chainId: 101,
    decimals: 6,
    name: 'MonkeyBucks',
    symbol: 'MBS',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Fm9rHUTF5v3hwMLbStjZXqNBBoZyGriQaFM6sTFz3K8A/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'monkeyball' }
  },
  {
    address: '5ritAPtFPqQtEFHcHVqNjR5oFNUJqcmgKtZyPd2AyLLy',
    chainId: 101,
    decimals: 9,
    name: 'KNOB$',
    symbol: 'KNOB',
    logoURI: 'https://i.postimg.cc/hPd4QCX6/knob-logo.jpg',
    tags: ['community'],
    extensions: { coingeckoId: 'knob' }
  },
  {
    address: '5KV2W2XPdSo97wQWcuAVi6G4PaCoieg4Lhhi61PAMaMJ',
    chainId: 101,
    decimals: 9,
    name: 'Kugle GU',
    symbol: 'GU',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/5KV2W2XPdSo97wQWcuAVi6G4PaCoieg4Lhhi61PAMaMJ/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'gu' }
  },
  {
    address: '5EbpXhW7t8ypBF3Q1X7odFaHjuh7XJfCohXR3VYAW32i',
    chainId: 101,
    decimals: 3,
    name: 'MetaMall',
    symbol: 'MALL',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/5EbpXhW7t8ypBF3Q1X7odFaHjuh7XJfCohXR3VYAW32i/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'metamall' }
  },
  {
    address: 'iVNcrNE9BRZBC9Aqf753iZiZfbszeAVUoikgT9yvr2a',
    chainId: 101,
    decimals: 6,
    name: 'Investin Protocol',
    symbol: 'IVN',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/iVNcrNE9BRZBC9Aqf753iZiZfbszeAVUoikgT9yvr2a/logo.png',
    tags: ['old-registry']
  },
  {
    address: 'CcFfGMU9Jodk6s5fSZM1vYGF3UNng7fZvTmPgzvU1ScF',
    chainId: 101,
    decimals: 6,
    name: 'Floki Cat',
    symbol: 'FCAT',
    logoURI:
      'https://image-cdn.solana.fm/images/?imageUrl=https://cf-ipfs.com/ipfs/QmZZwoQtSYAJWpwsc2sT1rA6zxxaeP3NJBu1vEr13KMt3W',
    tags: ['community'],
    extensions: { coingeckoId: 'floki-cat' }
  },
  {
    address: 'J9hBnna1TMySX9hA3FgiC5xYph5pYHmcLVq2Sp36hDkz',
    chainId: 101,
    decimals: 6,
    name: 'Sky Hause',
    symbol: 'SKYH',
    logoURI: 'https://i.imgur.com/68qAjC0.png',
    tags: ['community'],
    extensions: { coingeckoId: 'sky-hause' }
  },
  {
    address: '8rEEAvq6kujW2ukjYHfutH5eToAwsK4aaJ8p1ApoMs9g',
    chainId: 101,
    decimals: 6,
    name: 'Shark Dog',
    symbol: 'SD',
    logoURI: 'https://cf-ipfs.com/ipfs/QmeAuc8Cf34rUnmSDq9RXm8gFUeSxwFu1hWS5RgDAfb7J6',
    tags: ['community']
  },
  {
    address: 'F89doZeeUe9ajcU6gNR1F5RLaQWcJMdPDNSuLuvJUst9',
    chainId: 101,
    decimals: 6,
    name: 'Nard',
    symbol: 'NARD',
    logoURI: 'https://cf-ipfs.com/ipfs/bafybeie62um5xrgkk6ct7eljhxkuuejccao7br4joj2ncsv55j2oro6z7m',
    tags: ['community']
  },
  {
    address: '7ZCm8WBN9aLa3o47SoYctU6iLdj7wkGG5SV2hE5CgtD5',
    chainId: 101,
    decimals: 4,
    name: 'Dogelon (Portal)',
    symbol: 'ELON',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/ELON_wh.png',
    tags: ['wormhole', 'community'],
    extensions: { coingeckoId: 'dogelon-mars' }
  },
  {
    address: 'suPer8CPwxoJPQ7zksGMwFvjBQhjAHwUMmPV4FVatBw',
    chainId: 101,
    decimals: 9,
    name: 'Superfast Staked SOL',
    symbol: 'superSOL',
    logoURI:
      'https://shdw-drive.genesysgo.net/4gc2wnbccgLyMyoRajokp86EfWsmW8obkdUzNRmeHnDi/superSOLLogo.webp',
    tags: ['community'],
    extensions: { coingeckoId: 'superfast-staked-sol' }
  },
  {
    address: 'CgzdCjj5YNH51uFfQftFbuJKMrwgdWheVjwqjU84MV8y',
    chainId: 101,
    decimals: 6,
    name: 'Evermoon',
    symbol: ' EVERMOON',
    logoURI:
      'https://bafkreig3cc53og7bvr5yrvfunbws7nyjqezrw22jsrddti2sdajcpswziq.ipfs.nftstorage.link/',
    tags: ['community'],
    extensions: { coingeckoId: 'evermoon-sol' }
  },
  {
    address: 'PzuaVAUH2tfxGZcbBR6kMxeJsBngnsPLFotGJNCtcsd',
    chainId: 101,
    decimals: 8,
    name: 'ZynCoin (Wormhole)',
    symbol: 'ZYN',
    logoURI: 'https://pbs.twimg.com/profile_images/1734964928434294784/pjyf-A-E.jpg',
    tags: ['community'],
    extensions: { coingeckoId: 'zyncoin-2' }
  },
  {
    address: 'G33s1LiUADEBLzN5jL6ocSXqrT2wsUq9W6nZ8o4k1b4L',
    chainId: 101,
    decimals: 9,
    name: 'Magic Internet Money',
    symbol: 'MIM',
    logoURI:
      'https://bafkreict6ykbea4qa5ulzkkagkihqqvo33frgaqo4kzofgsuyxxjozcuii.ipfs.nftstorage.link',
    tags: ['community'],
    extensions: { coingeckoId: 'magic-internet-money-meme' }
  },
  {
    address: 'TKDrcm3n4mfXFfPKZoLp5soRSdFQSmyWLdomdKL3ktU',
    chainId: 101,
    decimals: 0,
    name: 'Tenkai Token',
    symbol: 'TENKAI',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/TKDrcm3n4mfXFfPKZoLp5soRSdFQSmyWLdomdKL3ktU/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'JAzesW3tU2VLDx99pwgkDMca2DTNsEhSWG8sj21B1niz',
    chainId: 101,
    decimals: 6,
    name: 'Phoenix',
    symbol: 'PHNX',
    logoURI:
      'https://bafybeicmwtzskjhcsnoymhsv5fmlruwoxgounmcweiei2qnxh6ayesupiq.ipfs.nftstorage.link',
    tags: ['community', 'token-2022']
  },
  {
    address: 'octo82drBEdm8CSDaEKBymVn86TBtgmPnDdmE64PTqJ',
    chainId: 101,
    decimals: 9,
    name: 'Octokn',
    symbol: 'OTK',
    logoURI: 'https://storage.googleapis.com/the-octos-nfts/icon-otk-big-filled.png',
    tags: ['community', 'solana-fm'],
    extensions: { coingeckoId: 'octo-gaming' }
  },
  {
    address: '8Wqbst4qAN2FqBCCh5gdXq2WJ7vTNWEY4oNLrpUg7Tya',
    chainId: 101,
    decimals: 8,
    name: 'Measurable Data Token (Wormhole)',
    symbol: 'MDT',
    logoURI: 'https://assets.coingecko.com/coins/images/2441/standard/mdt_logo.png',
    tags: ['community']
  },
  {
    address: 'bonegFPgrpZ4bfVn3kQK1aMbGYddWtfMAywNt5LsuVE',
    chainId: 101,
    decimals: 2,
    name: 'BONES Token',
    symbol: 'BONES',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/bonegFPgrpZ4bfVn3kQK1aMbGYddWtfMAywNt5LsuVE/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'soul-dog-city-bones' }
  },
  {
    address: '4ptcYkUypE7sDH82oXaeykaAJunuB4yeDJeiLJwS2nQc',
    chainId: 101,
    decimals: 8,
    name: 'SDrive Credit Token',
    symbol: 'CREDITS',
    logoURI: 'https://cdn.sdrive.pro/sdrive/credits_token.png',
    tags: ['community']
  },
  {
    address: 'BFpchrNVhyTRzMNAg9QkiZfRN2vqRBwcYoTX8qgkbDvm',
    chainId: 101,
    decimals: 9,
    name: 'Arab Cat',
    symbol: 'arab',
    logoURI: 'https://assets.coingecko.com/coins/images/34845/standard/arab_cat_cg.png',
    tags: ['community'],
    extensions: { coingeckoId: 'arab-cat' }
  },
  {
    address: '3tS6fbLh2P8tzxXuqCiHZpZhsxJpmrR3Xb9psmypnp69',
    chainId: 101,
    decimals: 9,
    name: 'pepecoin on SOL',
    symbol: 'pepe',
    logoURI: 'https://i.imgur.com/XzaFkn5.jpg',
    tags: ['community'],
    extensions: { coingeckoId: 'pepecoin-on-sol' }
  },
  {
    address: '9QgXH6RjuLx5izvgRU1ovzackRsbzQoe415mxHUZJkkH',
    chainId: 101,
    decimals: 6,
    name: 'Keif The Kat',
    symbol: '$KEIF',
    logoURI: 'https://cf-ipfs.com/ipfs/QmetHJ1RirB7vth3yznTvUcfqfuzgyWXAFKEFSd4B9P7uu',
    tags: ['community']
  },
  {
    address: 'ANqY8h3sRSwkC29FvGJenAh7VGRABVVx7Ls6Mq4BuGT',
    chainId: 101,
    decimals: 9,
    name: 'ZIG Coin',
    symbol: 'ZIG',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/ANqY8h3sRSwkC29FvGJenAh7VGRABVVx7Ls6Mq4BuGT/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'AJd5bi9wK4GupVf9XeftfrzQraQVthErLxEtdHv5qEHU',
    chainId: 101,
    decimals: 9,
    name: 'Smol Cat',
    symbol: 'SMOLCAT',
    logoURI:
      'https://bafkreigvfvqnfq7wvned2hbt6esd55iefkck2o7oookiyklgvmd2fmduzi.ipfs.nftstorage.link/',
    tags: ['community']
  },
  {
    address: 'AymKzSDznoLT7Vhsb4wSRnCj1gjcG3zkgYFY8fxsHHer',
    chainId: 101,
    decimals: 8,
    name: 'The Ticket Finance',
    symbol: 'TICKET',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/AymKzSDznoLT7Vhsb4wSRnCj1gjcG3zkgYFY8fxsHHer/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: '8Yv9Jz4z7BUHP68dz8E8m3tMe6NKgpMUKn8KVqrPA6Fr',
    chainId: 101,
    decimals: 9,
    name: 'Wrapped USDC (Allbridge from Avalanche)',
    symbol: 'aaUSDC',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png',
    tags: ['old-registry']
  },
  {
    address: 'vSoLxydx6akxyMD9XEcPvGYNGq6Nn66oqVb3UkGkei7',
    chainId: 101,
    decimals: 9,
    name: 'The Vault',
    symbol: 'vSOL',
    logoURI:
      'https://cloudflare-ipfs.com/ipfs/bafkreig55mf3lazzbgndiqyqvdmchdsykvvebww7cqlws6ywgog5xfdzta',
    tags: ['community'],
    extensions: { coingeckoId: 'the-vault-staked-sol' }
  },
  {
    address: '43m2ewFV5nDepieFjT9EmAQnc1HRtAF247RBpLGFem5F',
    chainId: 101,
    decimals: 8,
    name: 'USDK (Portal)',
    symbol: 'USDK',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/USDK_wh.png',
    tags: ['wormhole', 'old-registry']
  },
  {
    address: '8ymi88q5DtmdNTn2sPRNFkvMkszMHuLJ1e3RVdWjPa3s',
    chainId: 101,
    decimals: 0,
    name: 'SolDoge',
    symbol: 'SDOGE',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/8ymi88q5DtmdNTn2sPRNFkvMkszMHuLJ1e3RVdWjPa3s/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'soldoge' }
  },
  {
    address: '8qJSyQprMC57TWKaYEmetUR3UUiTP2M3hXdcvFhkZdmv',
    chainId: 101,
    decimals: 8,
    name: 'Tether USD (Portal from BSC)',
    symbol: 'USDTbs',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/USDTbs_wh.png',
    tags: ['wormhole', 'old-registry']
  },
  {
    address: '9zoqdwEBKWEi9G5Ze8BSkdmppxGgVv1Kw4LuigDiNr9m',
    chainId: 101,
    decimals: 9,
    name: 'Solster',
    symbol: 'STR',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/9zoqdwEBKWEi9G5Ze8BSkdmppxGgVv1Kw4LuigDiNr9m/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'solster' }
  },
  {
    address: 'GzQzkt2B4Jr6whWVBF7XqkzWvoUy1jEd5z9tczzGg1rH',
    chainId: 101,
    decimals: 6,
    name: 'DOBI',
    symbol: 'DOBI',
    logoURI: 'https://gateway.irys.xyz/099elCExuWO7iBY2_E-4mZVNLL21Hmj_nxHTGTdUxx0',
    tags: ['community'],
    extensions: { coingeckoId: 'dobi' }
  },
  {
    address: 'edge86g9cVz87xcpKpy3J77vbp4wYd9idEV562CCntt',
    chainId: 101,
    decimals: 9,
    name: 'Edgevana Staked SOL',
    symbol: 'edgeSOL',
    logoURI: 'https://arweave.net/JqUwm41OHf2jFLDognx7BKD6N9LiUDDRMTI8k2B7fHE',
    tags: ['community'],
    extensions: { coingeckoId: 'edgevana-staked-sol' }
  },
  {
    address: 'DeoP2swMNa9d4SGcQkR82j4RYYeNhDjcTCwyzEhKwfAf',
    chainId: 101,
    decimals: 9,
    name: 'Deo',
    symbol: 'DEO',
    logoURI: 'https://arweave.net/RuNPo7tAR05f_7g_Yz36NMyVKHAFrOXjIEKPtOZx2Qc',
    tags: ['community', 'solana-fm'],
    extensions: { coingeckoId: 'player-2' }
  },
  {
    address: 'BoZoQQRAmYkr5iJhqo7DChAs7DPDwEZ5cv1vkYC9yzJG',
    chainId: 101,
    decimals: 5,
    name: 'BOZO',
    symbol: '$BOZO',
    logoURI: 'https://arweave.net/QN7RFzy_OqPO_cAbBtBUzcUwObkDuvkRLS16oxJI-s0',
    tags: ['community'],
    extensions: { coingeckoId: 'bozo-collective' }
  },
  {
    address: 'FaxYQ3LVXP51rDP2yWGLWVrFAAHeSdFF8SGZxwj2dvor',
    chainId: 101,
    decimals: 2,
    name: 'swag coin',
    symbol: 'SWAG',
    logoURI:
      'https://lhh47k2s4fcnzgbccwh537aja2wpu7adocuilfh2fq465lfuttaq.arweave.net/Wc_Pq1LhRNyYIhWP3fwJBqz6fANwqIWU-iw57qy0nME',
    tags: ['community'],
    extensions: { coingeckoId: 'swag-coin' }
  },
  {
    address: 'RKT69NZHN5uovcan3q5hRbZzfJuXiGEuPmGANoBJLLz',
    chainId: 101,
    decimals: 5,
    name: 'Racket',
    symbol: '$RKT',
    logoURI: 'https://arweave.net/Vr36ys1neJyzyfhkxv1Cxt3QJF7LhuDd_iGmvSYjLkg',
    tags: ['community'],
    extensions: { coingeckoId: 'racket' }
  },
  {
    address: 'G3q2zUkuxDCXMnhdBPujjPHPw9UTMDbXqzcc2UHM3jiy',
    chainId: 101,
    decimals: 6,
    name: 'I CHOOSE RICH EVERYTIME!',
    symbol: 'NICK',
    logoURI:
      'https://bafkreigzternd6pcuni3d56amd5vrilsfp66jtg3nfdpafli6byz4nljhi.ipfs.nftstorage.link',
    tags: ['community']
  },
  {
    address: 'USDH1SM1ojwWUga67PGrgFWUHibbjqMvuMaDkRJTgkX',
    chainId: 101,
    decimals: 6,
    name: 'USDH Hubble Stablecoin',
    symbol: 'USDH',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/USDH1SM1ojwWUga67PGrgFWUHibbjqMvuMaDkRJTgkX/usdh.svg',
    tags: ['old-registry'],
    extensions: { coingeckoId: 'usdh' }
  },
  {
    address: 'CCKDRAd4Xwjoovtf2s1duu3d4TPTmFRyh1hfrb3ZUGR2',
    chainId: 101,
    decimals: 9,
    name: 'Tiddy Juice Coin',
    symbol: 'MILK',
    logoURI: 'https://arweave.net/S71DNASA5TYlrK9giRy7QgqFNw1m4mxqY6OdtgY1E7k',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'FwfrwnNVLGyS8ucVjWvyoRdFDpTY8w6ACMAxJ4rqGUSS',
    chainId: 101,
    decimals: 9,
    name: 'MMOSH: The Stoked Token',
    symbol: 'MMOSH',
    logoURI:
      'https://shdw-drive.genesysgo.net/7nPP797RprCMJaSXsyoTiFvMZVQ6y1dUgobvczdWGd35/MMoshCoin.png',
    tags: ['community']
  },
  {
    address: 'UST98bfV6EASdTFQrRwCBczpehdMFwYCUdLT5tEbhpW',
    chainId: 101,
    decimals: 9,
    name: 'Saber Wrapped UST (Portal) (9 decimals)',
    symbol: 'swtUST-9',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/UST98bfV6EASdTFQrRwCBczpehdMFwYCUdLT5tEbhpW/icon.png',
    tags: ['old-registry']
  },
  {
    address: 'ARg9wfeLN4qZTxgYTYeuGtGFMmYdk5zFhBuSnTfXXUvb',
    chainId: 101,
    decimals: 9,
    name: 'Project Paradise - CHI Token',
    symbol: 'CHI',
    logoURI:
      'https://raw.githubusercontent.com/benthebape/projekt-paradise-chi-token/main/Moneda_1.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: '7Q2afV64in6N6SeZsAAB81TJzwDoD6zpqmHkzi9Dcavn',
    chainId: 101,
    decimals: 9,
    name: 'JPOOL Solana Token',
    symbol: 'JSOL',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7Q2afV64in6N6SeZsAAB81TJzwDoD6zpqmHkzi9Dcavn/logo.svg',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'jpool' }
  },
  {
    address: 'BZKuDqzD4rb2puUV2cbSNd2kZzJ5JzKiQKwBzCk8hrLu',
    chainId: 101,
    decimals: 9,
    name: 'pipi the cat',
    symbol: 'pipi',
    logoURI: 'https://i.ibb.co/mChpPQK/photo-2024-01-14-01-32-58.jpg',
    tags: ['community'],
    extensions: { coingeckoId: 'pipi-the-cat' }
  },
  {
    address: 'C98A4nkJXhpVZNAZdHUA95RpTF3T4whtQubL3YobiUX9',
    chainId: 101,
    decimals: 6,
    name: 'Coin98',
    symbol: 'C98',
    logoURI: 'https://coin98.s3.ap-southeast-1.amazonaws.com/Coin/c98-512.svg',
    tags: ['old-registry'],
    extensions: { coingeckoId: 'coin98' }
  },
  {
    address: 'HbxiDXQxBKMNJqDsTavQE7LVwrTR36wjV2EaYEqUw6qH',
    chainId: 101,
    decimals: 9,
    name: 'GH0ST',
    symbol: 'GH0ST',
    logoURI:
      'https://bafybeievcwt2kef6olonvu4aaw2ud5tjezq567kqq7cijsquveim723fni.ipfs.nftstorage.link',
    tags: ['community', 'token-2022'],
    extensions: { coingeckoId: 'gh0stc0in' }
  },
  {
    address: '69SEPKGCzFzJLoSawb3xPfcqnZdiVm21Xu28AWZB5pzk',
    chainId: 101,
    decimals: 6,
    name: 'JizzLord',
    symbol: 'JIZZLORD',
    logoURI: 'https://raw.githubusercontent.com/Terminator0611/Jizz/main/jizzlord.png',
    tags: ['community']
  },
  {
    address: '3FoUAsGDbvTD6YZ4wVKJgTB76onJUKz7GPEBNiR5b8wc',
    chainId: 101,
    decimals: 4,
    name: 'Cheems',
    symbol: 'CHEEMS',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/3FoUAsGDbvTD6YZ4wVKJgTB76onJUKz7GPEBNiR5b8wc/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'cheems' }
  },
  {
    address: 'FR87nWEUxVgerFGhZM8Y4AggKGLnaXswr1Pd8wZ4kZcp',
    chainId: 101,
    decimals: 8,
    name: 'Frax (Portal)',
    symbol: 'FRAX',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/FRAX_wh.png',
    tags: ['wormhole', 'old-registry'],
    extensions: { coingeckoId: 'frax' }
  },
  {
    address: 'Fcvn3f5BTChSH53ixtURMmF5Vqj9yGsSYrRjFkf3wCX2',
    chainId: 101,
    decimals: 9,
    name: 'FreeSpeech',
    symbol: 'FREE',
    logoURI: 'https://arweave.net/Vx8TeG4z7LEvrRDnG8OCPzZuFC0aUbHvrgSbds4og80',
    tags: ['community']
  },
  {
    address: 'VP9UaBXLM4KYRvyjisu65rz8BU5xNAbewU7LVmyU2x4',
    chainId: 101,
    decimals: 9,
    name: 'Vibing Cat',
    symbol: 'VCAT',
    logoURI:
      'https://bafybeial7nesuvpbffl6mvptgf33abr762iojb634ig3p6o6cdo2mlwe6a.ipfs.nftstorage.link/',
    tags: ['community'],
    extensions: { coingeckoId: 'vibing-cat' }
  },
  {
    address: 'E8G4uo2i9d12aGnXDHXXcw6hU2fh2NytR5XR3qurTLBx',
    chainId: 101,
    decimals: 9,
    name: 'WNDO',
    symbol: 'WNDO',
    logoURI:
      'https://static1.squarespace.com/static/6252f1590fac8d79fb6d772e/t/627682f25295251e0967c29c/1651933939477/wndocoin.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: '6XWfkyg5mzGtKNftSDgYjyoPyUsLRf2rafj95XSFSFrr',
    chainId: 101,
    decimals: 9,
    name: 'Kitty Coin',
    symbol: 'KITTY',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/6XWfkyg5mzGtKNftSDgYjyoPyUsLRf2rafj95XSFSFrr/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'kitty-coin-solana' }
  },
  {
    address: 'unknXbA1bDg39nuBqVgMNZ5qSZa8pw5HditgkPe5eFA',
    chainId: 101,
    decimals: 9,
    name: 'UNKN',
    symbol: 'UNKN',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/unknXbA1bDg39nuBqVgMNZ5qSZa8pw5HditgkPe5eFA/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: '98ouGzbMV2DnHfn3Uc7oahwvDP4Cf7Ls77JsBiARdjvn',
    chainId: 101,
    decimals: 6,
    name: 'DBank Coin',
    symbol: 'DBC',
    logoURI: 'https://arweave.net/g4a4JTGvXRxWYFIkuJtyEIDdIp2b487R_2YdTSUreXM',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: '32gaR4rn9JyzoDVwMzZ5j3NgcHc5RQhMSJby55FFKnq3',
    chainId: 101,
    decimals: 9,
    name: 'RIBBET',
    symbol: 'RIBBET',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/32gaR4rn9JyzoDVwMzZ5j3NgcHc5RQhMSJby55FFKnq3/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'kiraZUmSnzgfVfhrdvNj6hxHFaPFTTUk8ioY98cbh6G',
    chainId: 101,
    decimals: 9,
    name: 'KIRA',
    symbol: 'KIRA',
    logoURI: 'https://www.arweave.net/71SbFojNuoFeQ_n4cfMYKzX87xPvsQvNr59R_ZM7ucQ?ext=png',
    tags: ['community']
  },
  {
    address: 'ELSnGFd5XnSdYFFSgYQp7n89FEbDqxN4npuRLW4PPPLv',
    chainId: 101,
    decimals: 8,
    name: 'HEX (Wormhole v1)',
    symbol: 'wHEX_v1',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/ELSnGFd5XnSdYFFSgYQp7n89FEbDqxN4npuRLW4PPPLv/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'bobaM3u8QmqZhY1HwAtnvze9DLXvkgKYk3td3t8MLva',
    chainId: 101,
    decimals: 6,
    name: 'Boba Oppa',
    symbol: 'BOBAOPPA',
    logoURI:
      'https://bafkreicrn3j6ausiwrw66jg22xxbrkypcgkjkux6xeaacw2wcxtj6t3lji.ipfs.nftstorage.link/',
    tags: ['community'],
    extensions: { coingeckoId: 'boba-oppa' }
  },
  {
    address: 'BABYsocP6cB95xvBDXnjXKX96VBNC37dmNWUtaV9Jk6v',
    chainId: 101,
    decimals: 2,
    name: 'SOL BABAY DOGE COIN',
    symbol: 'SBABYDOGE',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/BABYsocP6cB95xvBDXnjXKX96VBNC37dmNWUtaV9Jk6v/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'sol-baby-doge' }
  },
  {
    address: 'MarcoPaG4dV4qit3ZPGPFm4qt4KKNBKvAsm2rPGNF72',
    chainId: 101,
    decimals: 6,
    name: 'Gobi',
    symbol: 'GOBI',
    logoURI: 'https://arweave.net/uscHuZUd7GsiPIJz2zS_et6_boil-DhtF0zJdrX8hM8?ext=png',
    tags: ['community', 'solana-fm']
  },
  {
    address: 'HezGWsxSVMqEZy7HJf7TtXzQRLiDruYsheYWqoUVnWQo',
    chainId: 101,
    decimals: 9,
    name: 'HolyGrails',
    symbol: 'HOLY',
    logoURI: 'https://arweave.net/TDvr4xgh3VxmHG8GglxruoSwm41wkYOLPF7EBrhBiBY',
    tags: ['community', 'solana-fm'],
    extensions: { coingeckoId: 'holygrails-io' }
  },
  {
    address: 'DubwWZNWiNGMMeeQHPnMATNj77YZPZSAz2WVR5WjLJqz',
    chainId: 101,
    decimals: 9,
    name: 'CropperFinance',
    symbol: 'CRP',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/DubwWZNWiNGMMeeQHPnMATNj77YZPZSAz2WVR5WjLJqz/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'cropperfinance' }
  },
  {
    address: 'BLKFNuCET9ZnmhFczGXmcWKSap9kGtTFnosvA9P5majk',
    chainId: 101,
    decimals: 9,
    name: 'Blackfin AI',
    symbol: 'BLKFN',
    logoURI: 'https://i.imgur.com/8I4YAIl.png',
    tags: ['community']
  },
  {
    address: '2oMYg3aPHjFjxg1PRYLwvdRQayexUS8N4CjLXJ64GkLq',
    chainId: 101,
    decimals: 9,
    name: 'BOJI',
    symbol: 'BOJI',
    logoURI:
      'https://image-cdn.solana.fm/images/?imageUrl=https://ipfs.io/ipfs/QmejPmDXiuqJ3EG9zyNanLLjYWgycLwTso7EAWiPgFwUNF',
    tags: ['community']
  },
  {
    address: '53ctv3wwFXQbXruKWsbQcCe7sefowyu96pXK6FRLTjfv',
    chainId: 101,
    decimals: 4,
    name: 'Dog Of Wisdom',
    symbol: 'WISDM',
    logoURI: 'https://gateway.irys.xyz/aUIj5AIANJ9w7TIWSCDIws1UBtewzaz_ZRhDF5GbljI',
    tags: ['community'],
    extensions: { coingeckoId: 'dog-of-wisdom' }
  },
  {
    address: 'ULwSJmmpxmnRfpu6BjnK6rprKXqD5jXUmPpS1FxHXFy',
    chainId: 101,
    decimals: 9,
    name: 'Hege',
    symbol: 'HEGE',
    logoURI:
      'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f62616679626569636869373579337664777432686d6c346363797064647835746f7534796668707934327a336b346c686a3634766a3268696e6f612e697066732e6e667473746f726167652e6c696e6b',
    tags: ['community'],
    extensions: { coingeckoId: 'hege' }
  },
  {
    address: 'SL819j8K9FuFPL84UepVcFkEZqDUUvVzwDmJjCHySYj',
    chainId: 101,
    decimals: 8,
    name: 'Saber Wrapped Ethereum (Sollet) (8 decimals)',
    symbol: 'sETH-8',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/SL819j8K9FuFPL84UepVcFkEZqDUUvVzwDmJjCHySYj/icon.png',
    tags: ['old-registry']
  },
  {
    address: '7m2TUkpPZCScBhPJnGjWjbh75KkDNnwAdd7i74m8awad',
    chainId: 101,
    decimals: 6,
    name: 'World War 3',
    symbol: 'Ww3',
    logoURI:
      'https://bafybeibkq2ku7q3p6qsj24ac4s3dij4eu5jg47gjd4ra7ln5x77af66sty.ipfs.cf-ipfs.com/',
    tags: ['community']
  },
  {
    address: '9ae76zqD3cgzR9gvf5Thc2NN3ACF7rqqnrLqxNzgcre6',
    chainId: 101,
    decimals: 9,
    name: 'WipeMyAss',
    symbol: 'WIPE',
    logoURI: 'https://cdn.jsdelivr.net/gh/rxrxrxrx/WipeMyAss/wipemyass.jpg',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'wipemyass' }
  },
  {
    address: 'Taki7fi3Zicv7Du1xNAWLaf6mRK7ikdn77HeGzgwvo4',
    chainId: 101,
    decimals: 9,
    name: 'Taki',
    symbol: 'TAKI',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Taki7fi3Zicv7Du1xNAWLaf6mRK7ikdn77HeGzgwvo4/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'taki' }
  },
  {
    address: 'BdZPG9xWrG3uFrx2KrUW1jT4tZ9VKPDWknYihzoPRJS3',
    chainId: 101,
    decimals: 9,
    name: 'prtSOL (Parrot Staked SOL)',
    symbol: 'prtSOL',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/BdZPG9xWrG3uFrx2KrUW1jT4tZ9VKPDWknYihzoPRJS3/logo.svg',
    tags: ['old-registry']
  },
  {
    address: 'xLfNTYy76B8Tiix3hA51Jyvc1kMSFV4sPdR7szTZsRu',
    chainId: 101,
    decimals: 6,
    name: 'xLifinity',
    symbol: 'xLFNTY',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/xLfNTYy76B8Tiix3hA51Jyvc1kMSFV4sPdR7szTZsRu/logo.svg',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'Ce3dRaePi2PrcsHb45i8qcaeCpHacvjXbbzo2DTPfX8z',
    chainId: 101,
    decimals: 9,
    name: 'Yikes Dog',
    symbol: 'YIKES',
    logoURI: 'https://ipfs.io/ipfs/QmYGSVcj5Au1PsUKXC3bSZnAe1xk5psY2xvWYrz3QyrpzB',
    tags: ['community'],
    extensions: { coingeckoId: 'yikes-dog' }
  },
  {
    address: 'Gh1jKzmxf95cT5PQabNbfJskkQU8kQ5UugfpbHSnPq9z',
    chainId: 101,
    decimals: 3,
    name: 'Neon Rocket Coin',
    symbol: 'NRC',
    logoURI:
      'https://raw.githubusercontent.com/neontechanoah/neon_rocket_coin/main/asset/NRC_Logo_100px.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'ECy2miAgmx3UyYoGGHt15AHBkoA3twoZDQyNLwETzAUv',
    chainId: 101,
    decimals: 2,
    name: 'KRUGs',
    symbol: 'KRUG',
    logoURI:
      'https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://creator-hub-prod.s3.us-east-2.amazonaws.com/krug_pfp_1679408420983.png',
    tags: ['community']
  },
  {
    address: '6nuaX3ogrr2CaoAPjtaKHAoBNWok32BMcRozuf32s2QF',
    chainId: 101,
    decimals: 9,
    name: 'Wrapped BUSD (Allbridge from BSC)',
    symbol: 'abBUSD',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/AJ1W9A9N9dEMdVyoDiam2rV44gnBm2csrPDP7xqcapgX/logo.png',
    tags: ['old-registry'],
    extensions: { coingeckoId: 'wrapped-busd-allbridge-from-bsc' }
  },
  {
    address: '8JF4ekdgw7VTdrrdCABAKAxLc55mGu9ptasNiamih4a9',
    chainId: 101,
    decimals: 9,
    name: 'White Shark Coin',
    symbol: 'SHARK',
    logoURI: 'https://gateway.irys.xyz/t94Df4aOwJhBuAYoVqA4WFB78v8gJh9H8FRg-SBqmqQ',
    tags: ['community']
  },
  {
    address: 'PUhuAtMHsKavMTwZsLaDeKy2jb7ciETHJP7rhbKLJGY',
    chainId: 101,
    decimals: 9,
    name: 'USN (Allbridge from Near)',
    symbol: 'USN',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/PUhuAtMHsKavMTwZsLaDeKy2jb7ciETHJP7rhbKLJGY/logo.png',
    tags: ['old-registry']
  },
  {
    address: '9EaLkQrbjmbbuZG9Wdpo8qfNUEjHATJFSycEmw6f1rGX',
    chainId: 101,
    decimals: 9,
    name: 'pSOL (Parrot SOL)',
    symbol: 'pSOL',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/9EaLkQrbjmbbuZG9Wdpo8qfNUEjHATJFSycEmw6f1rGX/logo.svg',
    tags: ['old-registry']
  },
  {
    address: '8upjSpvjcdpuzhfR1zriwg5NXkwDruejqNE9WNbPRtyA',
    chainId: 101,
    decimals: 6,
    name: 'Grape',
    symbol: 'GRAPE',
    logoURI:
      'https://lh3.googleusercontent.com/y7Wsemw9UVBc9dtjtRfVilnS1cgpDt356PPAjne5NvMXIwWz9_x7WKMPH99teyv8vXDmpZinsJdgiFQ16_OAda1dNcsUxlpw9DyMkUk=s0',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'grape-2' }
  },
  {
    address: '5g6b3eCLHC4WvmUJRiTvE5mNCUMiaHbKxQyWKuJdmDi',
    chainId: 101,
    decimals: 9,
    name: 'mechel seyler',
    symbol: 'SEYLER',
    logoURI:
      'https://bafybeiddrvfbic7v73sruaqxkapvbz73vxzp4ebljzhywhwlugu76p44by.ipfs.nftstorage.link',
    tags: ['community']
  },
  {
    address: '2CMxmFb2nsNdw351TfZoawpN1DnDuVrH4Wn6fxH2EJT6',
    chainId: 101,
    decimals: 6,
    name: 'Barron Tremp',
    symbol: 'BarrTremp',
    logoURI:
      'https://bafkreiaxhbgj5l2cfziu66n5fipedkylcmw2di6ijtvhnw5q4fdp3d3eme.ipfs.nftstorage.link',
    tags: ['community']
  },
  {
    address: '9n4nbM75f5Ui33ZbPYXn59EwSgE8CGsHtAeTH5YFeJ9E',
    chainId: 101,
    decimals: 6,
    name: 'Wrapped Bitcoin (Sollet)',
    symbol: 'soBTC',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/9n4nbM75f5Ui33ZbPYXn59EwSgE8CGsHtAeTH5YFeJ9E/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'wrapped-bitcoin-sollet' }
  },
  {
    address: 'eqKJTf1Do4MDPyKisMYqVaUFpkEFAs3riGF3ceDH2Ca',
    chainId: 101,
    decimals: 6,
    name: 'Wrapped USDC (Allbridge from Polygon)',
    symbol: 'apUSDC',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/BXXkv6z8ykpG1yuvUDPgh732wzVHB69RnB9YgSYh3itW/logo.png',
    tags: ['old-registry']
  },
  {
    address: '4MPA8WbyYtKiufXDSdckEoMPdN5XK1Xw9S9LSLMjK5Y4',
    chainId: 101,
    decimals: 9,
    name: 'Wojak',
    symbol: 'Wojak',
    logoURI: 'https://i.bb.co/PDkqhfK/wojak-logo.png',
    tags: ['community']
  },
  {
    address: 'AGyUuFvYGnUUXWG6GUKga4B3MGmBuEZ9hGqY73n76XpJ',
    chainId: 101,
    decimals: 8,
    name: 'wagmicatgirlkanye420etfmoon1000x',
    symbol: 'HOOD',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/HOOD_wh.png',
    tags: ['wormhole'],
    extensions: { coingeckoId: 'wagmicatgirlkanye420etfmoon1000x' }
  },
  {
    address: 'E2VmbootbVCBkMNNxKQgCLMS1X3NoGMaYAsufaAsf7M',
    chainId: 101,
    decimals: 6,
    name: 'USD Coin (PoS) (Portal from Polygon)',
    symbol: 'USDCpo',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/USDCpo_wh.png',
    tags: ['wormhole', 'old-registry'],
    extensions: { coingeckoId: 'usd-coin-pos-wormhole' }
  },
  {
    address: '34pxeud2ajwJaq7XZrYdvUUGHKJP2dFrAg6k8zvSsigt',
    chainId: 101,
    decimals: 9,
    name: 'FURBY',
    symbol: 'FURBY',
    logoURI:
      'https://dd.dexscreener.com/ds-data/tokens/solana/34pxeud2ajwJaq7XZrYdvUUGHKJP2dFrAg6k8zvSsigt.png?size=lg&key=108564',
    tags: ['community']
  },
  {
    address: 'CCRJohp9bfQdhZCvCe7MzUQuXMJkKBi4XCjUq3A2YqN8',
    chainId: 101,
    decimals: 10,
    name: 'BOOP',
    symbol: 'BOOP',
    logoURI: 'https://arweave.net/2ArDrNlyF34gjZ7UdXmMVl_ET9igdcyDiAY-VFsw3ao',
    tags: ['community']
  },
  {
    address: '5gs8nf4wojB5EXgDUWNLwXpknzgV2YWDhveAeBZpVLbp',
    chainId: 101,
    decimals: 6,
    name: 'xHashtag Token',
    symbol: 'XTAG',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/5gs8nf4wojB5EXgDUWNLwXpknzgV2YWDhveAeBZpVLbp/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'xhashtag' }
  },
  {
    address: 'CFbdjaKonbBQTYG2GC6CmB7exofgDYGCDR8tp8KVGS7T',
    chainId: 101,
    decimals: 6,
    name: 'Cyborg Apes BORG',
    symbol: 'BORG',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/CFbdjaKonbBQTYG2GC6CmB7exofgDYGCDR8tp8KVGS7T/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'cyborg-apes' }
  },
  {
    address: 'SLRSSpSLUTP7okbCUBYStWCo1vUgyt775faPqz8HUMr',
    chainId: 101,
    decimals: 6,
    name: 'Solrise Finance',
    symbol: 'SLRS',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/SLRSSpSLUTP7okbCUBYStWCo1vUgyt775faPqz8HUMr/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'solrise-finance' }
  },
  {
    address: 'GHvFFSZ9BctWsEc5nujR1MTmmJWY7tgQz2AXE6WVFtGN',
    chainId: 101,
    decimals: 9,
    name: 'SolAPE Token',
    symbol: 'SOLAPE',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/GHvFFSZ9BctWsEc5nujR1MTmmJWY7tgQz2AXE6WVFtGN/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'solape-token' }
  },
  {
    address: 'J3hxVJtn3kGtr1tHkJSWXvMr2D4M8iBzxzB75zywxVzF',
    chainId: 101,
    decimals: 9,
    name: 'AumentoBULL',
    symbol: 'ABULL',
    logoURI:
      'https://api.degencdn.com/v1/nfts/J3hxVJtn3kGtr1tHkJSWXvMr2D4M8iBzxzB75zywxVzF/image.jpg',
    tags: ['community', 'token-2022']
  },
  {
    address: 'ENoD8J2J6wNHkcJkvVBkwq5JMiR1oNBfBZRkoHCQogyT',
    chainId: 101,
    decimals: 6,
    name: 'Abble',
    symbol: 'AABL',
    logoURI:
      'https://sapphire-lazy-macaw-504.mypinata.cloud/ipfs/Qmf6i1Rzz82xayVFtmWN8U4hUWtE2cQVqVWKoNE8gmchMz',
    tags: ['community'],
    extensions: { coingeckoId: 'abble' }
  },
  {
    address: 'Aw8qLRHGhMcKq7rxs5XBNCd9oe3BvoAhpNMVz7AdGmty',
    chainId: 101,
    decimals: 9,
    name: 'Panda Coin',
    symbol: 'PANDA',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Aw8qLRHGhMcKq7rxs5XBNCd9oe3BvoAhpNMVz7AdGmty/logo.png',
    tags: ['old-registry'],
    extensions: { coingeckoId: 'panda-coin' }
  },
  {
    address: 'DLUNTKRQt7CrpqSX1naHUYoBznJ9pvMP65uCeWQgYnRK',
    chainId: 101,
    decimals: 6,
    name: 'SolCard',
    symbol: 'SOLC',
    logoURI:
      'https://bafybeidyzyh3wmstgqsdyhbz4a2im4dx3qw6sveet2tvd2vch62vonnb2y.ipfs.nftstorage.link',
    tags: ['community'],
    extensions: { coingeckoId: 'solcard' }
  },
  {
    address: 'FdGoS1Dok5CLnS8fVSmj5A92uY1yhzdTC2ZxuLJdkwgs',
    chainId: 101,
    decimals: 6,
    name: 'Spooky The Phantom',
    symbol: 'SPOOKY',
    logoURI: 'https://i.ibb.co/mHzqCPP/Spooky-logo-rounded-100px.png',
    tags: ['community'],
    extensions: { coingeckoId: 'spooky-the-phantom' }
  },
  {
    address: '9hD434AapfbidD6hret16hHGMqKh9z3WrkicL5Cvcsz8',
    chainId: 101,
    decimals: 8,
    name: 'DFTU',
    symbol: 'DFTU',
    logoURI: 'https://ipfs.io/ipfs/QmQnoSCfKDNs1KvUhYp2YvX2ffShwzG7M1t92mdPmXBaQR',
    tags: ['community']
  },
  {
    address: '3K6rftdAaQYMPunrtNRHgnK2UAtjm2JwyT2oCiTDouYE',
    chainId: 101,
    decimals: 0,
    name: 'XCOPE',
    symbol: 'XCOPE',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/3K6rftdAaQYMPunrtNRHgnK2UAtjm2JwyT2oCiTDouYE/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'EctmRn2jMAdTDvQdG7mxadyiTvhGZiGYNrt9PWe6zioG',
    chainId: 101,
    decimals: 9,
    name: 'Santaclaus',
    symbol: 'SANTA',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EctmRn2jMAdTDvQdG7mxadyiTvhGZiGYNrt9PWe6zioG/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: '45EgCwcPXYagBC7KqBin4nCFgEZWN7f3Y6nACwxqMCWX',
    chainId: 101,
    decimals: 6,
    name: 'Moutai',
    symbol: 'Moutai',
    logoURI:
      'https://bafybeihn5s2ykzqwpmb6d4dbowecovc7vo2wjx7zjltur7sl4ykfhbmoaq.ipfs.nftstorage.link/',
    tags: ['community'],
    extensions: { coingeckoId: 'moutai' }
  },
  {
    address: 'AGFEad2et2ZJif9jaGpdMixQqvW5i81aBdvKe7PHNfz3',
    chainId: 101,
    decimals: 6,
    name: 'Wrapped FTT (Sollet)',
    symbol: 'soFTT',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/AGFEad2et2ZJif9jaGpdMixQqvW5i81aBdvKe7PHNfz3/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'ftx-token' }
  },
  {
    address: 'F47vvwFYuLioQsqEVAjqdY6Yihc8wVRiUcfHGcBR9XUs',
    chainId: 101,
    decimals: 6,
    name: 'el gato',
    symbol: 'ELGATO',
    logoURI:
      'https://dd.dexscreener.com/ds-data/tokens/solana/F47vvwFYuLioQsqEVAjqdY6Yihc8wVRiUcfHGcBR9XUs.png',
    tags: ['community'],
    extensions: { coingeckoId: 'el-gato' }
  },
  {
    address: '5yxNbU8DgYJZNi3mPD9rs4XLh9ckXrhPjJ5VCujUWg5H',
    chainId: 101,
    decimals: 5,
    name: 'Fronk',
    symbol: 'FRONK',
    logoURI:
      'https://shdw-drive.genesysgo.net/8tfWzweVe7MAfi8qwiKFnzLq6wuLT7WAPMoQC7DH47Fq/fronk.gif',
    tags: ['community', 'solana-fm'],
    extensions: { coingeckoId: 'fronk' }
  },
  {
    address: 'A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6',
    chainId: 101,
    decimals: 6,
    name: 'Ondo US Dollar Yield',
    symbol: 'USDY',
    logoURI:
      'https://hq3wjgefwtje2kue7bvqlevhns2udaharnibucrgui3lhgy4aniq.arweave.net/PDdkmIW00k0qhPhrBZKnbLVBgOCLUBoKJqI2s5scA1E',
    tags: ['community'],
    extensions: { coingeckoId: 'ondo-us-dollar-yield' }
  },
  {
    address: 'HBB111SCo9jkCejsZfz8Ec8nH7T6THF8KEKSnvwT6XK6',
    chainId: 101,
    decimals: 6,
    name: 'Hubble Protocol Token',
    symbol: 'HBB',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/HBB111SCo9jkCejsZfz8Ec8nH7T6THF8KEKSnvwT6XK6/logo.svg',
    tags: ['old-registry'],
    extensions: { coingeckoId: 'hubble' }
  },
  {
    address: 'AEUT5uFm1D575FVCoQd5Yq891FJEqkncZUbBFoFcAhTV',
    chainId: 101,
    decimals: 9,
    name: 'Saber Wrapped USDT (9 decimals)',
    symbol: 'sUSDT-9',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/AEUT5uFm1D575FVCoQd5Yq891FJEqkncZUbBFoFcAhTV/icon.png',
    tags: ['old-registry']
  },
  {
    address: 'EVDQN4P1YTTD1Y3eLBDBoALWnR4aMBC9y2xUYCrbGbuy',
    chainId: 101,
    decimals: 9,
    name: 'MOCHICAT',
    symbol: 'MOCHICAT',
    logoURI:
      'https://bafkreics2dftf4c72rk5kwc6eupuxvjv6b3tt2gpsg4ovmbyby7ctirsom.ipfs.nftstorage.link',
    tags: ['community'],
    extensions: { coingeckoId: 'mochicat' }
  },
  {
    address: '4h4LvS6NsVjZ87uBwrYyTeppTm1ii5PtRN9A6Ld2kZjw',
    chainId: 101,
    decimals: 6,
    name: 'StayFly',
    symbol: '$FLY',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/4h4LvS6NsVjZ87uBwrYyTeppTm1ii5PtRN9A6Ld2kZjw/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: '3XTp12PmKMHxB6YkejaGPUjMGBLKRGgzHWgJuVTsBCoP',
    chainId: 101,
    decimals: 9,
    name: 'Bird Dog',
    symbol: 'BIRDDOG',
    logoURI:
      'https://dd.dexscreener.com/ds-data/tokens/solana/3XTp12PmKMHxB6YkejaGPUjMGBLKRGgzHWgJuVTsBCoP.png?size=md',
    tags: ['community'],
    extensions: { coingeckoId: 'bird-dog-on-sol' }
  },
  {
    address: 'coqRkaaKeUygDPhuS3mrmrj6DiHjeQJc2rFbT2YfxWn',
    chainId: 101,
    decimals: 5,
    name: 'BLACK COQINU',
    symbol: 'BCOQ',
    logoURI: 'https://arweave.net/nU1lZL13C5Kf4nTGqUYsqdWy43mXP9WeP7eOag61ZK4',
    tags: ['community'],
    extensions: { coingeckoId: 'bcoq-inu' }
  },
  {
    address: 'DBAzBUXaLj1qANCseUPZz4sp9F8d2sc78C4vKjhbTGMA',
    chainId: 101,
    decimals: 9,
    name: 'Stable Coin',
    symbol: 'SBC',
    logoURI: 'https://brale.xyz/assets/stablecoins/sbc-logo.svg',
    tags: ['community']
  },
  {
    address: '3JoKpqE4kowVTR3Po3gr3sxzLF6vKCvjGx48g8DRx9oN',
    chainId: 101,
    decimals: 9,
    name: 'Dragy',
    symbol: 'DRAGY',
    logoURI: 'https://imgur.com/3XfriZN',
    tags: ['community'],
    extensions: { coingeckoId: 'dragy' }
  },
  {
    address: 'GGEMxCsqM74URiXdY46VcaSW73a4yfHfJKrJrUmDVpEF',
    chainId: 101,
    decimals: 9,
    name: 'Guild Saga Gems',
    symbol: '$GGEM',
    logoURI:
      'https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://gs-token.s3.us-west-2.amazonaws.com/guild-saga-gems-logo.png',
    tags: ['community', 'solana-fm']
  },
  {
    address: 'J3NKxxXZcnNiMjKw9hYb2K4LUxgwB6t1FtPtQVsv3KFr',
    chainId: 101,
    decimals: 8,
    name: 'SPX6900',
    symbol: 'SPX',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/SPX6900_wh.png',
    tags: ['wormhole'],
    extensions: { coingeckoId: 'spx6900' }
  },
  {
    address: 'DMbb79fgxR3fKKVKWcbetMCuxNNtJnfjY3qqAE4G4wJf',
    chainId: 101,
    decimals: 3,
    name: 'Dusk',
    symbol: 'DUSK',
    logoURI:
      'https://firebasestorage.googleapis.com/v0/b/mom-prod-625e5.appspot.com/o/TokensNoBG%2FDusk_Coin_INV.png?alt=media&token=66709e38-8d35-40b0-8c0d-9499372f421f',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: '8HfNu2EfwFQz2srSNDvPsjaWV3G65ZWP3pDC67mcNv6J',
    chainId: 101,
    decimals: 9,
    name: 'Neural Octopus',
    symbol: 'NOCT',
    logoURI: 'https://raw.githubusercontent.com/Neural-Octopus-Token/noct-metadata/main/logo.png',
    tags: ['community']
  },
  {
    address: 'GyuP7chtXSRB6erApifBxFvuTtz94x3zQo3JdWofBTgy',
    chainId: 101,
    decimals: 3,
    name: 'D2',
    symbol: 'D2X',
    logoURI: 'https://scpri.me/files/logo.png',
    tags: ['community'],
    extensions: { coingeckoId: 'd2' }
  },
  {
    address: 'A6JVLMAjR1aeCfz3X2z4vVQ9GafYWVT75tC5V5qefja2',
    chainId: 101,
    decimals: 9,
    name: 'BULB Token',
    symbol: 'BULB',
    logoURI: 'https://www.arweave.net/3UIriLHyPZSzz637FQjn5kNm72Sc-2DG5vK45Vkmx3o?ext=png',
    tags: ['community', 'solana-fm']
  },
  {
    address: '7a4cXVvVT7kF6hS5q5LDqtzWfHfys4a9PoK6pf87RKwf',
    chainId: 101,
    decimals: 9,
    name: 'Luna Yield',
    symbol: 'LUNY',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7a4cXVvVT7kF6hS5q5LDqtzWfHfys4a9PoK6pf87RKwf/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'BykkD9369RvXuEDbR7pTRz49b7cfLRTzHgSVoqK8gc15',
    chainId: 101,
    decimals: 6,
    name: 'White Coffee Cat',
    symbol: 'WCC',
    logoURI: 'https://bafybeigm6bjva5igzsz56xb24gbiq3ynu5l2tuxnkbi437hplbw3fu5vxq.ipfs.cf-ipfs.com',
    tags: ['community'],
    extensions: { coingeckoId: 'white-coffee-cat' }
  },
  {
    address: '3WV4fTWGvtWNvQb8oVU4t99By8KztDLtExqHnkPfHAA9',
    chainId: 101,
    decimals: 9,
    name: 'CopyCats token',
    symbol: 'PAW',
    logoURI:
      'https://imagedelivery.net/aAmca-Po70V1nH4n9cT-uA/98c9b68b-1494-43d1-0c2c-31e5d0129a00/public',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'Pz1b7iALFqzsgdL9ca6P3NZvTXwSF1koaQqnNohVFcT',
    chainId: 101,
    decimals: 6,
    name: 'Garf',
    symbol: 'GARF',
    logoURI: 'https://pbs.twimg.com/profile_images/1770950513913139200/7WTpGIxH_400x400.jpg',
    tags: ['community']
  },
  {
    address: 'Kz1csQA91WUGcQ2TB3o5kdGmWmMGp8eJcDEyHzNDVCX',
    chainId: 101,
    decimals: 6,
    name: 'Tether USD (Portal from Avalanche)',
    symbol: 'USDTav',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/USDTav_wh.png',
    tags: ['wormhole']
  },
  {
    address: 'BB33fYoeBVA2uv119be9tKvmXeuwtcx1W25N9KFNd2ca',
    chainId: 101,
    decimals: 9,
    name: 'Godz Token',
    symbol: 'GODZ',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/BB33fYoeBVA2uv119be9tKvmXeuwtcx1W25N9KFNd2ca/logo.jpg',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'BWXrrYFhT7bMHmNBFoQFWdsSgA3yXoAnMhDK6Fn1eSEn',
    chainId: 101,
    decimals: 9,
    name: 'Hades',
    symbol: 'HADES',
    logoURI: 'https://arweave.net/dvKu5BgpSo6j-iGzQOyVXYZ8OU7iyfhHNpkkJ_8qkkQ',
    tags: ['community', 'solana-fm'],
    extensions: { coingeckoId: 'hades' }
  },
  {
    address: 'GtLBsmS6Z4FC9gmnCFS2ZzCKmb9vYL3kELnjVmxHurnh',
    chainId: 101,
    decimals: 2,
    name: 'ENG Token',
    symbol: 'ENG',
    logoURI: 'https://www.arweave.net/N_pDeYTYERWexWo2E3-mzZhqMtqdcqA_ZktPva4ImnY?ext=png',
    tags: ['community']
  },
  {
    address: 'FLrgwxXaX8q8ECF18weDf3PLAYorXST5orpY34d8jfbm',
    chainId: 101,
    decimals: 9,
    name: 'Chinu',
    symbol: 'CHINU',
    logoURI: 'https://chinu.vip/wp-content/uploads/2024/01/chinuHeadLogo100.png',
    tags: ['community'],
    extensions: { coingeckoId: 'chinu-2' }
  },
  {
    address: 'Dso1bDeDjCQxTrWHqUUi63oBvV7Mdm6WaobLbQ7gnPQ',
    chainId: 101,
    decimals: 9,
    name: 'Drift Staked SOL',
    symbol: 'dSOL',
    logoURI: 'https://drift-public.s3.eu-central-1.amazonaws.com/dSOL.svg',
    tags: ['community'],
    extensions: { coingeckoId: 'drift-staked-sol' }
  },
  {
    address: 'HtbhBYdcfXbbD2JiH6jtsTt2m2FXjn7h4k6iXfz98k5W',
    chainId: 101,
    decimals: 9,
    name: 'DeadKnight Token',
    symbol: 'DKM',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/HtbhBYdcfXbbD2JiH6jtsTt2m2FXjn7h4k6iXfz98k5W/dkmlogo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'GDzfemoYR5GkbK4YupYpyq3E8Du9fSfKXxKDpkdrqGjs',
    chainId: 101,
    decimals: 6,
    name: 'Klausen Art',
    symbol: 'KART',
    logoURI: 'https://arweave.net/X9ohmd49MmOEYi4dfMyOv_M24NnnyzQXZEoALTuQ0ao',
    tags: ['community']
  },
  {
    address: '3Ztt53vwGhQGoEp3n1RjSu4CFnGRfqzwo6L8KN8gmXfd',
    chainId: 101,
    decimals: 9,
    name: 'METASEER',
    symbol: 'METAS',
    logoURI: 'https://metaseer.io/img/home-one/logo256.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr',
    chainId: 101,
    decimals: 6,
    name: 'EURC',
    symbol: 'EURC',
    logoURI: 'https://www.circle.com/hubfs/Brand/EURC/EURC-icon_128x128.png',
    tags: ['community'],
    extensions: { coingeckoId: 'euro-coin' }
  },
  {
    address: 'EZGvDFqrMSAxTt3Ud2bcguASaPKwGExiDzHVLqT3STZm',
    chainId: 101,
    decimals: 6,
    name: 'PRE-TOKEN',
    symbol: 'PRE-',
    logoURI:
      'https://bafybeiceqp3ezfenvetlirrtqzpyeagbafzuabsr3klzfaev4bpzqbccke.ipfs.nftstorage.link/PRE-logo.png',
    tags: ['community']
  },
  {
    address: '4Hx6Bj56eGyw8EJrrheM6LBQAvVYRikYCWsALeTrwyRU',
    chainId: 101,
    decimals: 8,
    name: 'dYdX (Portal)',
    symbol: 'DYDX',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/DYDX_wh.png',
    tags: ['wormhole', 'old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'dydx-wormhole' }
  },
  {
    address: '3Rcc6tMyS7ZEa29dxV4g3J5StorS9J1dn98gd42pZTk1',
    chainId: 101,
    decimals: 6,
    name: 'MIMANY',
    symbol: 'MIMANY',
    logoURI:
      'https://bafybeicmv6htlk6vqunx4jifj52txzebkmvxiq3ph66igoqwbqnzkcbntq.ipfs.cf-ipfs.com/',
    tags: ['community'],
    extensions: { coingeckoId: 'mimany' }
  },
  {
    address: '8shTEDxbwvM2C9ELXNHsh8pmkoWovzJ3xgazQFWFapMx',
    chainId: 101,
    decimals: 6,
    name: 'PUPPA',
    symbol: '$PUPPA',
    logoURI: 'https://cf-ipfs.com/ipfs/QmNcspmaF4jHVz9dL4iM5b3eNRmFmNFDHYEqFPowyqSBYs',
    tags: ['community']
  },
  {
    address: 'G6mc7tiVSym3zrmmxekF3HYSc9c2hiKnGk7idoHqHTUK',
    chainId: 101,
    decimals: 9,
    name: 'pre',
    symbol: 'pre',
    logoURI: 'https://arweave.net/pLKQdikCbGGkmHQ2y4ePS3M2czrLNJB2OgSRg8K71TQ',
    tags: ['community'],
    extensions: { coingeckoId: 'pre' }
  },
  {
    address: 'sunSBR8hRLZy13HCHdrT3hjJZVRpkVfXF3QaaJYjxZ2',
    chainId: 101,
    decimals: 6,
    name: 'sunSBR',
    symbol: 'sunSBR',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/sunSBR8hRLZy13HCHdrT3hjJZVRpkVfXF3QaaJYjxZ2/logo.svg',
    tags: ['community']
  },
  {
    address: 'Aymdf5Fp2URJNcsHpEF2NqEqFHiqvvhrDvYQtyZFw7zn',
    chainId: 101,
    decimals: 4,
    name: 'Water Bears',
    symbol: 'WTRBR',
    logoURI: 'https://arweave.net/GZNQl83S1kK5kvak1yvMrI8muuPVm80fdliPcgwsWfw',
    tags: ['community']
  },
  {
    address: 'FmoKY2ERGmE9NzrYphAJcqH5BPRy2Hs4VomRfu8Qgt7Y',
    chainId: 101,
    decimals: 2,
    name: 'Solana Monkey Business',
    symbol: 'MONKES',
    logoURI:
      'https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://i.imgur.com/bMH6qNc.png',
    tags: ['community', 'solana-fm']
  },
  {
    address: 'DUSTawucrTsGU8hcqRdHDCbuYhCPADMLM2VcCb8VnFnQ',
    chainId: 101,
    decimals: 9,
    name: 'DUST Protocol',
    symbol: 'DUST',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/DUSTawucrTsGU8hcqRdHDCbuYhCPADMLM2VcCb8VnFnQ/logo.jpg',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'dust-protocol' }
  },
  {
    address: '9MjAmgHXbu5drkNa9XpzfozgsM5Dcq6bSnKZzdNrwscC',
    chainId: 101,
    decimals: 9,
    name: 'Force',
    symbol: '$FORCE',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/9MjAmgHXbu5drkNa9XpzfozgsM5Dcq6bSnKZzdNrwscC/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'Aogv6j1wWiBAZcqRNN1Y89eozda2ke6rkc4CYy7c4iCi',
    chainId: 101,
    decimals: 9,
    name: 'Jungle',
    symbol: 'JUNGLE',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Aogv6j1wWiBAZcqRNN1Y89eozda2ke6rkc4CYy7c4iCi/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'jungle' }
  },
  {
    address: '4onzDs1X6ubktirorHB8iYbve3K4bBtkGpYehqzGm9So',
    chainId: 101,
    decimals: 9,
    name: 'BIJU',
    symbol: 'BIJU',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/4onzDs1X6ubktirorHB8iYbve3K4bBtkGpYehqzGm9So/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'FDKBUXKxCdNQnDrqP7DLe8Kri3hzFRxcXyoskoPa74rk',
    chainId: 101,
    decimals: 9,
    name: 'YETI',
    symbol: '$YETI',
    logoURI: 'https://raw.githubusercontent.com/yet777/tokenlogo/main/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: '8CkiSHHJDHJV4LUoiRMLUhqG58cUkbyJRtcP4Z3mCXNf',
    chainId: 101,
    decimals: 9,
    name: 'POWSCHE',
    symbol: 'POWSCHE',
    logoURI:
      'https://dd.dexscreener.com/ds-data/tokens/solana/8CkiSHHJDHJV4LUoiRMLUhqG58cUkbyJRtcP4Z3mCXNf.png',
    tags: ['community']
  },
  {
    address: 'METADDFL6wWMWEoKTFJwcThTbUmtarRJZjRpzUvkxhr',
    chainId: 101,
    decimals: 9,
    name: 'META',
    symbol: 'META',
    logoURI:
      'https://6hgaiayuroxlfrn3djpb7mx4ocwielgo2ovpj4ka4v47jsxj2p2a.arweave.net/8cwEAxSLrrLFuxpeH7L8cKyCLM7TqvTxQOV59Mrp0_Q?ext=png',
    tags: ['community'],
    extensions: { coingeckoId: 'meta-2' }
  },
  {
    address: 'pWrSoLAhue6jUxUkbWgmEy5rD9VJzkFmvfTDV5KgNuu',
    chainId: 101,
    decimals: 9,
    name: 'Power Staked SOL',
    symbol: 'pwrSOL',
    logoURI: 'https://arweave.net/vmJI1aPZNfTTIWH7ZLFxBP1VK7ptapg1hBukoDDNPME',
    tags: ['community'],
    extensions: { coingeckoId: 'power-staked-sol' }
  },
  {
    address: 'DjzG1gPn2cotdV9cvkho4KxD3Poy2VjJeghCivv8U8Wj',
    chainId: 101,
    decimals: 2,
    name: 'Chads',
    symbol: 'CHADS',
    logoURI: 'https://pbs.twimg.com/profile_images/1644310237896114183/c0KZkqJ3_400x400.jpg',
    tags: ['community']
  },
  {
    address: 'UXPhBoR3qG4UCiGNJfV7MqhHyFqKN68g45GoYvAeL2M',
    chainId: 101,
    decimals: 9,
    name: 'UXP Governance Token',
    symbol: 'UXP',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/UXPhBoR3qG4UCiGNJfV7MqhHyFqKN68g45GoYvAeL2M/uxp-icon-black.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'uxd-protocol-token' }
  },
  {
    address: '4xBEoJFNxRY7ZyUPEFmWwHrGzYN5uqzsAH94DTvBv3b1',
    chainId: 101,
    decimals: 6,
    name: 'Solboard',
    symbol: 'Board',
    logoURI: 'https://cf-ipfs.com/ipfs/QmY8PoXxkRGCP8giAv5RbCTznDaYyWfYF6xu8RGY3GXdfo',
    tags: ['community']
  },
  {
    address: 'CWE8jPTUYhdCTZYWPTe1o5DFqfdjzWKc9WKz6rSjQUdG',
    chainId: 101,
    decimals: 6,
    name: 'Wrapped Chainlink (Sollet)',
    symbol: 'soLINK',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/CWE8jPTUYhdCTZYWPTe1o5DFqfdjzWKc9WKz6rSjQUdG/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: '88tmABf1s3A6jbLD2yLR1tgbGjz68fz3EDrbeSB1JPPc',
    chainId: 101,
    decimals: 9,
    name: 'BONKLANA',
    symbol: 'BOK',
    logoURI: 'https://gateway.irys.xyz/oJvtfp7SYicoLG72x16OgkU5YK0SXK-krvF5k8_q0jI',
    tags: ['community'],
    extensions: { coingeckoId: 'bonklana' }
  },
  {
    address: 'EchesyfXePKdLtoiZSL8pBe8Myagyy8ZRqsACNCFGnvp',
    chainId: 101,
    decimals: 6,
    name: 'Bonfida',
    symbol: 'FIDA',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EchesyfXePKdLtoiZSL8pBe8Myagyy8ZRqsACNCFGnvp/logo.svg',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'bonfida' }
  },
  {
    address: 'gmdu3snwW28DmmxCseChp9owWLUhamH9eS3hWfHG8Vg',
    chainId: 101,
    decimals: 9,
    name: 'We Say gm',
    symbol: 'GMSOL',
    logoURI: 'https://github.com/icnivadmai/gm-logo/blob/master/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'BqVHWpwUDgMik5gbTciFfozadpE2oZth5bxCDrgbDt52',
    chainId: 101,
    decimals: 9,
    name: 'Only Possible On Solana',
    symbol: 'OPOS',
    logoURI: 'https://arweave.net/k8uU2yLoYwL4zTBZ-TO-7bs6hgtLNaHhzP4FLUMuaS0',
    tags: ['community'],
    extensions: { coingeckoId: 'only-possible-on-solana' }
  },
  {
    address: '4mJ6N65rD9w6sFPQ17UDWot2H64UtzR31biVLaKpZT6J',
    chainId: 101,
    decimals: 0,
    name: 'AlienUniverse Token',
    symbol: 'ALIEN',
    logoURI: 'https://raw.githubusercontent.com/alien-universe/assets/main/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'H1G6sZ1WDoMmMCFqBKAbg9gkQPCo1sKQtaJWz9dHmqZr',
    chainId: 101,
    decimals: 9,
    name: 'SHIBONK',
    symbol: 'SBONK',
    logoURI: 'https://raw.githubusercontent.com/Sperlo64/SHIBONK/main/bonklogo2.png',
    tags: ['community', 'solana-fm'],
    extensions: { coingeckoId: 'shibonk-311f81df-a4ea-4f31-9e61-df0af8211bd7' }
  },
  {
    address: '2adqrK24G2iu2mmEijzKPKg69DUwGk3fUWAQx7Y1kSSK',
    chainId: 101,
    decimals: 6,
    name: 'botman',
    symbol: 'BOTMAN',
    logoURI: 'https://thebotman.xyz/images/botman_pfp.png',
    tags: ['community']
  },
  {
    address: '5K1JtWpdSksVKaL6R2DuLpCDAjzxK6sq2CpXaXDWHVLg',
    chainId: 101,
    decimals: 9,
    name: 'Yorkipoo',
    symbol: 'YORK',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/5K1JtWpdSksVKaL6R2DuLpCDAjzxK6sq2CpXaXDWHVLg/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: '3vHSsV6mgvpa1JVuuDZVB72vYbeUNzW4mBxiBftwzHEA',
    chainId: 101,
    decimals: 9,
    name: 'Final Frontier',
    symbol: 'FRNT',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/3vHSsV6mgvpa1JVuuDZVB72vYbeUNzW4mBxiBftwzHEA/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'final-frontier' }
  },
  {
    address: 'APTtJyaRX5yGTsJU522N4VYWg3vCvSb65eam5GrPT5Rt',
    chainId: 101,
    decimals: 6,
    name: 'Apricot',
    symbol: 'APT',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/APTtJyaRX5yGTsJU522N4VYWg3vCvSb65eam5GrPT5Rt/logo.svg',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'apricot' }
  },
  {
    address: '8m9fjYycXAFva1kScttQgsESVZT7yELhjZASqfHBuMa5',
    chainId: 101,
    decimals: 6,
    name: 'alux jownes',
    symbol: 'JOWNES',
    logoURI:
      'https://bafkreig7kpsty6rokwswaysqfjq576eell335236tzztmpv6p536mvfida.ipfs.nftstorage.link',
    tags: ['community'],
    extensions: { coingeckoId: 'alux-jownes' }
  },
  {
    address: 'Dwri1iuy5pDFf2u2GwwsH2MxjR6dATyDv9En9Jk8Fkof',
    chainId: 101,
    decimals: 9,
    name: '2080',
    symbol: '2080',
    logoURI: 'https://raw.githubusercontent.com/resources-pub/token-info/main/fidelion_logo.png',
    tags: ['community'],
    extensions: { coingeckoId: '2080' }
  },
  {
    address: 'aBvs3Zv9JYmvUCKqRJvGctDQSCt6R7NAMELid3FeqsQ',
    chainId: 101,
    decimals: 6,
    name: 'happi cat',
    symbol: 'HAPPI',
    logoURI:
      'https://bafybeiemgqcqgeu4mqvrmdncrlch7zhwbvb2xlsfnovuqcp4hb4jhsjsfm.ipfs.nftstorage.link',
    tags: ['community'],
    extensions: { coingeckoId: 'happi-cat' }
  },
  {
    address: '6frkvZf72wiz3uqRWhBqLftNU4PS6XXYCoNrW9P4CFdK',
    chainId: 101,
    decimals: 6,
    name: 'QUACK',
    symbol: 'QUACK',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/GP9zY2D8CgMreoUdYQjyn7Fo7XCq9ubVnX3u4ot1wpgt/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'FyNuYGBBry5LAtPEkh8Y73izjTUNT2td2J3sGCK7E9Ju',
    chainId: 101,
    decimals: 9,
    name: 'VIBEZ',
    symbol: 'VIBEZ',
    logoURI:
      'https://github.com/ArthurPaivaT/token-list/blob/main/assets/mainnet/FyNuYGBBry5LAtPEkh8Y73izjTUNT2td2J3sGCK7E9Ju/logo.png?raw=true',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'T8KdT8hDzNhbGx5sjpEUxepnbDB1TZoCa7vtC5JjsMw',
    chainId: 101,
    decimals: 8,
    name: 'Saber Wrapped USDT (8 decimals)',
    symbol: 'sUSDT-8',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/T8KdT8hDzNhbGx5sjpEUxepnbDB1TZoCa7vtC5JjsMw/icon.png',
    tags: ['old-registry']
  },
  {
    address: 'phaseZSfPxTDBpiVb96H4XFSD8xHeHxZre5HerehBJG',
    chainId: 101,
    decimals: 9,
    name: 'Phase Labs SOL',
    symbol: 'phaseSOL',
    logoURI:
      'https://raw.githubusercontent.com/phaselabscrypto/.github/main/profile/public/phaseSOL.png',
    tags: ['community']
  },
  {
    address: '76aYNHbDfHemxSS7vmh6eJGfjodK8m7srCxiYCrKxzY1',
    chainId: 101,
    decimals: 6,
    name: 'HRHC Token',
    symbol: 'ROLL',
    logoURI: 'https://hrhc.io/images/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'high-roller-hippo-clique' }
  },
  {
    address: 'D8TFo4FsDF9CnejkezEZtwdhdmwaiNgLRDAQUTwWQuBU',
    chainId: 101,
    decimals: 6,
    name: 'TEST',
    symbol: '$TEST',
    logoURI:
      'https://bafkreia7lr4higfpv6xc5owc3m2vjgcq2zzb7nqoaeut2lqcfy4pplpy5u.ipfs.nftstorage.link',
    tags: ['community']
  },
  {
    address: '42Y3CgJQLnHjdScYMu8VS4TbeZMUNVdBMKYbf7hz7aum',
    chainId: 101,
    decimals: 6,
    name: 'Gamify Club',
    symbol: 'GMFC',
    logoURI: 'https://pbs.twimg.com/profile_images/1444964749897175046/wdz26CzM_400x400.jpg',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'SENBBKVCM7homnf5RX9zqpf1GFe935hnbU4uVzY1Y6M',
    chainId: 101,
    decimals: 9,
    name: 'Sentre',
    symbol: 'SNTR',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/SENBBKVCM7homnf5RX9zqpf1GFe935hnbU4uVzY1Y6M/logo.png',
    tags: ['old-registry'],
    extensions: { coingeckoId: 'sentre' }
  },
  {
    address: 'EZF2sPJRe26e8iyXaCrmEefrGVBkqqNGv9UPGG9EnTQz',
    chainId: 101,
    decimals: 9,
    name: 'FUMoney',
    symbol: 'FUM',
    logoURI:
      'https://raw.githubusercontent.com/FUMoney801/token-list/main/assets/mainnet/EZF2sPJRe26e8iyXaCrmEefrGVBkqqNGv9UPGG9EnTQz/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'JzwfZvJGdsqbrKZQUvzJpWhbHcZUix7CYcCaoiNpjxg',
    chainId: 101,
    decimals: 8,
    name: 'Cloned Sui',
    symbol: 'clSUI',
    logoURI: 'https://markets.clone.so/images/assets/on-sui.svg',
    tags: ['community'],
    extensions: { coingeckoId: 'cloned-sui' }
  },
  {
    address: 'YAWtS7vWCSRPckx1agB6sKidVXiXiDUfehXdEUSRGKE',
    chainId: 101,
    decimals: 6,
    name: 'Yawww',
    symbol: 'YAW',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/YAWtS7vWCSRPckx1agB6sKidVXiXiDUfehXdEUSRGKE/yaw.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'yawww' }
  },
  {
    address: '7sWMHQaJJPn1rkeizq41iPiW5gG7Ry7PXYAVHaUwY4qu',
    chainId: 101,
    decimals: 9,
    name: 'EDO',
    symbol: 'EDO',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7sWMHQaJJPn1rkeizq41iPiW5gG7Ry7PXYAVHaUwY4qu/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'AT79ReYU9XtHUTF5vM6Q4oa9K8w7918Fp5SU7G1MDMQY',
    chainId: 101,
    decimals: 9,
    name: 'SpiderSwap',
    symbol: 'SPDR',
    logoURI: 'https://arweave.net/PAVQPYRQzq2g4O2X7hDzOniW4aBE9PJ19U56MRVpIfA',
    tags: ['community'],
    extensions: { coingeckoId: 'spiderswap' }
  },
  {
    address: 'F14Cp89oAXMrNnaC4mKMNKHPWw2p2R4DRFAZEdJhUBkD',
    chainId: 101,
    decimals: 6,
    name: 'MOONBURN',
    symbol: 'MOONBURN',
    logoURI: 'https://raw.githubusercontent.com/Joblo197/Crypto/main/Shroom%20Logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: '3byG6HEKhG5gUZ5PZU9zKkFaEHYPveGEtvs68LYR8R5N',
    chainId: 101,
    decimals: 4,
    name: 'OPOS Coin',
    symbol: 'OPOS',
    logoURI: 'https://arweave.net/fivrynPZdJv5ajd4d1TXW1yHArDA-RvkYYfDoh-_4EU',
    tags: ['community']
  },
  {
    address: '4B619RbcXbXrKTzNVgDSRiUn9wfxWgA1w1oFLveGacNy',
    chainId: 101,
    decimals: 3,
    name: 'Hydrogencoin',
    symbol: 'HCOIN',
    logoURI:
      'https://raw.githubusercontent.com/dataalg/Hydrogen/main/4B619RbcXbXrKTzNVgDSRiUn9wfxWgA1w1oFLveGacNy/logo.png',
    tags: ['old-registry']
  },
  {
    address: 'FjK6rqU6QzUeNtmK6QQ78cCuS5AHAhcm4HgJkdsvXaep',
    chainId: 101,
    decimals: 8,
    name: 'YOUR AI (Wormhole)',
    symbol: 'YOURAI',
    logoURI: 'https://s3.eu-central-2.wasabisys.com/your-production/yourai-ticker-50x50.png',
    tags: ['community'],
    extensions: { coingeckoId: 'your-ai' }
  },
  {
    address: 'HmKqChBkZEvqFnH8sxja694n77ziYMBWaucZRKfJDRr2',
    chainId: 101,
    decimals: 5,
    name: 'WOLF SOLANA',
    symbol: 'WOLF',
    logoURI: 'https://arweave.net/vqdJ1M-3GLpOKuMKZLXNbd-odMLzGrXdgVis8wSEt-M',
    tags: ['community'],
    extensions: { coingeckoId: 'wolf-solana' }
  },
  {
    address: 'oreoN2tQbHXVaZsr3pf66A48miqcBXCDJozganhEJgz',
    chainId: 101,
    decimals: 9,
    name: 'Ore',
    symbol: 'ORE',
    logoURI: 'https://ore.supply/icon.png',
    tags: ['community'],
    extensions: { coingeckoId: 'ore' }
  },
  {
    address: '3bRTivrVsitbmCTGtqwp7hxXPsybkjn4XLNtPsHqa3zR',
    chainId: 101,
    decimals: 9,
    name: 'Only1 (LIKE)',
    symbol: 'LIKE',
    logoURI:
      'https://zbdf6pvmksjpci7njnig2cal2d4smxivlmhuyzdik2otbf5focdq.arweave.net/yEZfPqxUkvEj7UtQbQgL0PkmXRVbD0xkaFadMJelcIc',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'only1' }
  },
  {
    address: 'he1iusmfkpAdwvxLNGV8Y1iSbj4rUy6yMhEA3fotn9A',
    chainId: 101,
    decimals: 9,
    name: 'Helius Staked SOL',
    symbol: 'hSOL',
    logoURI:
      'https://raw.githubusercontent.com/igneous-labs/lst-offchain-metadata/master/hSOL/hSOL.png',
    tags: ['community'],
    extensions: { coingeckoId: 'helius-staked-sol' }
  },
  {
    address: 'CdkXjsEokNWMabBn2HCrPcXNmSDE59QKtseLh1j9tEwd',
    chainId: 101,
    decimals: 6,
    name: 'BULLZ',
    symbol: 'BULLZ',
    logoURI:
      'https://img.fotofolio.xyz/?url=https%3A%2F%2Fbafkreida4wh6oubxpjxdhldhhdirjdjhiebkyvdilvdshofsxwizmw4gba.ipfs.nftstorage.link',
    tags: ['community']
  },
  {
    address: 'AmgUMQeqW8H74trc8UkKjzZWtxBdpS496wh4GLy2mCpo',
    chainId: 101,
    decimals: 3,
    name: 'Mycelium McToken',
    symbol: 'TOKE',
    logoURI: 'https://arweave.net/kVddfi0QG_NfS_cRQQ0vehEt7n25wVk3O4ilHaeidqY',
    tags: ['community']
  },
  {
    address: '8iSagwHZNj4Hx4CMeoZwLLMVbWt4mUT6qk42TxiHkRtn',
    chainId: 101,
    decimals: 6,
    name: 'DegenAlley',
    symbol: 'DGNA',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/8iSagwHZNj4Hx4CMeoZwLLMVbWt4mUT6qk42TxiHkRtn/DGNA.png',
    tags: ['old-registry']
  },
  {
    address: 'CzLWmvjtj5bp9YEWkzzBnuWovVtogeuchFu5GeFh68hB',
    chainId: 101,
    decimals: 9,
    name: 'Puri',
    symbol: 'Puri',
    logoURI: 'https://gateway.irys.xyz/ILXdxJTexpeuGPKMjPtP4wBmvg4x3GlI3nc0n4V9RIU',
    tags: ['community']
  },
  {
    address: '2Kc38rfQ49DFaKHQaWbijkE7fcymUMLY5guUiUsDmFfn',
    chainId: 101,
    decimals: 6,
    name: 'Kurobi',
    symbol: 'KURO',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/2Kc38rfQ49DFaKHQaWbijkE7fcymUMLY5guUiUsDmFfn/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'kurobi' }
  },
  {
    address: 'BYPsjxa3YuZESQz1dKuBw1QSFCSpecsm8nCQhY5xbU1Z',
    chainId: 101,
    decimals: 9,
    name: 'NEAR (Allbridge from Near)',
    symbol: 'NEAR',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/BYPsjxa3YuZESQz1dKuBw1QSFCSpecsm8nCQhY5xbU1Z/logo.png',
    tags: ['old-registry', 'solana-fm']
  },
  {
    address: 'GKZbA2gDzw3MoxbfRsnrJTNi5uBDrnrz9bq1pNnx6kv',
    chainId: 101,
    decimals: 9,
    name: 'GameBoy',
    symbol: 'GBOY',
    logoURI:
      'https://images.squarespace-cdn.com/content/v1/65bd61a6fc592e7b51a773a7/72d9c35c-2b02-498b-b406-4cf5f6d06067/d2b08cecea46e8dac3603b9c57c4659c.png',
    tags: ['community'],
    extensions: { coingeckoId: 'gameboy' }
  },
  {
    address: 'EWMfSJgDCE7CXDAYz3hbCaA7NsFHTnddySXx3shco2Hs',
    chainId: 101,
    decimals: 6,
    name: 'STASH INU',
    symbol: 'STASH',
    logoURI:
      'https://bafybeifodskw7mbbsygrad4oebwy5yh5qscrur5w4ltvximvxrrbrroiw4.ipfs.nftstorage.link',
    tags: ['community'],
    extensions: { coingeckoId: 'stash-inu' }
  },
  {
    address: '5jFnsfx36DyGk8uVGrbXnVUMTsBkPXGpx6e69BiGFzko',
    chainId: 101,
    decimals: 9,
    name: 'Solana INU',
    symbol: 'INU',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/5jFnsfx36DyGk8uVGrbXnVUMTsBkPXGpx6e69BiGFzko/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: { coingeckoId: 'solana-inu' }
  },
  {
    address: '4TUNzcgp2fPD48fcW4seRjyqyDZMrPj4ZubnXFEsKeYk',
    chainId: 101,
    decimals: 7,
    name: 'PRNT',
    symbol: 'PRNT',
    logoURI:
      'https://shdw-drive.genesysgo.net/EYH4kEfffWwRnF63G6Sx68sHdhkue4trzuSeUji9UJSe/prnt.jpg',
    tags: ['community'],
    extensions: { coingeckoId: 'prnt' }
  },
  {
    address: 'BuAL6Qt1CJbfa6wnHnYNqj572nQpKGR7C5xe4jn3icBp',
    chainId: 101,
    decimals: 9,
    name: 'For The Culture',
    symbol: 'Culture',
    logoURI: 'https://i.ibb.co/x6gxSQN/IMG-20240404-012003-903.png',
    tags: ['community']
  }
]
