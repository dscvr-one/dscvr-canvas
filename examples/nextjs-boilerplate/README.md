# NextJs Boilerplate

This template should help get you started DSCVR canvas iframes with nextjs.

The step by step guid on how to create this project is provided here.

## Step by step guide

### Setup project with DSCVR Canvas

1. First install the nextjs project using the bootstrap command

```sh
npx create-next-app@latest <project-name>
```

2. Add canvas required header

Edit the file `pages/_document.tsx` to add the required canvas header

```tsx
<Head>
  <meta property="dscvr:canvas:version" content="vNext" />
</Head>
```

3. Og Image (Optional)

If you add a custom image, you can replace the default image tha on your canvas preview state

```tsx
<Head>
  <meta property="og:image" content="/preview.png" />
</Head>
```

4. Run the development server:

```sh
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

5. Test your canvas

5.1 run the command `npx cloudflared tunnel --url http://localhost:3000`

(Use the port your project is running on)

5.2 Login https://dscvr.one and create a post and paste the given cloudflare tunnel url

Voila! your canvas should be visible.
Now it won't have access to the current DSCVR user or post yet, but we are getting there.

### Getting started with Canvas SDK

Provide Canvas SDK

There are several ways to provide a canvasClient instance, the most important part is that there should be only one canvasClient instance.

Here we will use the Provider Pattern for React

1. Install Canvas SDK

```sh
 npm i @dscvr-one/canvas-client-sdk
 # or
 yarn i @dscvr-one/canvas-client-sdk
 # or
 pnpm i @dscvr-one/canvas-client-sdk
```

2. Fix Canvas Restriction (unsafe-eval)
   If you see the error in the console: `Uncaught EvalError: Refused to evaluate a string as JavaScript because 'unsafe-eval' is not an allowed source of script in the following Content Security Policy directive: "script-src 'self' 'wasm-unsafe-eval' 'unsafe-inline'".`

Is because canvas are not allowed to have `'unsafe-eval'`. to fix this in NextJS, add the next piece of code to your `nextConfig` in `next.config.mjs`

```ts
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { dev }) => {
    if (dev) {
      Object.defineProperty(config, 'devtool', {
        get() {
          return 'cheap-source-map';
        },
        set() {},
      });
    }
    return config;
  },
};

export default nextConfig;
```

3. Create a file named `context/canvas.tsx` that will provide the canvas for the entire app using the [React Provider Pattern](https://medium.com/@vitorbritto/react-design-patterns-provider-pattern-b273ba665158)

Copy this contents into the file

```ts
import React, { useState, createContext, useEffect, useContext } from 'react';
import {
  createCanvasClient,
  type CanvasClient,
  type CanvasInterface,
} from '@dscvr-one/canvas-client-sdk';

// 1. Create the context
type CanvasContextType = {
  client?: CanvasClient;
  user?: CanvasInterface.Lifecycle.User;
  content?: CanvasInterface.Lifecycle.Content;
};

const CanvasContext = createContext<CanvasContextType>({});

// 2. Create the context provider for `pages/_app.tsx` (or `app/layout.tsx`)
export const CanvasProvider = ({ children }: { children: React.ReactNode }) => {
  const [canvasContext, setCanvasContext] = useState<CanvasContextType>({});

  const initialize = async (canvasClient: CanvasClient) => {
    try {
      const response = await canvasClient.ready();
      if (isValidResponse) {
        setCanvasContext({
          client: canvasClient,
          user: response.untrusted.user,
          content: response.untrusted.content,
        });
      }
    } catch (error) {
      console.error('Failed to initialize canvas', error);
    }
  };

  useEffect(() => {
    const canvasClient = createCanvasClient();
    setCanvasContext({ client: canvasClient });
    if (!canvasClient) return;

    initialize(canvasClient);

    return () => {
      canvasClient?.destroy();
    };
  }, []);

  return (
    <CanvasContext.Provider value={{ ...canvasContext }}>
      {children}
    </CanvasContext.Provider>
  );
};

// 3. Export the hook for components to use
export const useCanvasContext = () => {
  const context = useContext(CanvasContext);
  if (context === undefined) {
    throw new Error(
      'useCanvasClientContext must be used within a CanvasClientProvider',
    );
  }
  return context;
};

export default CanvasContext;

```

4. Use the provider in `pages/_app.tsx` (or `app/layout.tsx`)

```tsx
import { CanvasProvider } from '@/context/canvas';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CanvasProvider>
      <Component {...pageProps} />
    </CanvasProvider>
  );
}
```

5. Use the new canvas context in a child component

Now that we have the provider, we can use it in `pages/index.tsx` for example

```tsx
import { useCanvasContext } from '@/context/canvas';

export default function Home() {
  const canvasContext = useCanvasContext();

  if (!canvasContext.client?.isReady) {
    return (
      <main className={'flex flex-col items-center justify-center p-24'}>
        <h1 className="text-3xl font-semibold text-center">Loading...</h1>
      </main>
    );
  }

  return (
    <main className={'flex flex-col items-center justify-between p-24'}>
      {canvasContext.user && (
        <div>
          <b>User Name: </b>
          <span className="text-gray-300 group-hover:text-indigo-300">
            {canvasContext.user.username}
          </span>
        </div>
      )}
    </main>
  );
}
```

6. Review your changes on your https://dscvr.one post

Since Nextjs does **Hot Reload**, you will see your changes immediately.

7. Basic functions

We have already seen that with the context, you get the current user information as well as the current content (post).

But with canvasClient now you can do some basic functions to connect to DSCVR host

- `openLink`: hyperlinks are restricted by canvas, so in order to open an external link use this code

```ts
canvasContext.client.openLink('httpsL//your-link.com');
```

- `resize`: your canvas height can be changed by calling this function. even though the `width` is required, is only used to calculate the aspect-ratio of the canvas.

```ts
canvasContext.client.resize({ width, height });
```

In the next section we can see how to handle resize for the entire application using a resize observer.

- `createPost`: allows you to open the create post modal for the user with an initial html content.

```ts
const html = `<h1>New canvas post!</h1>`;
canvasContext.client.createPost(html);
```

- `copyToClipboard`: clipboard cannot be accessed directly through the canvas, so the SDK provides a function for it

```ts
canvasContext.client.copyToClipboard('Some text!');
```

- `onContentReaction`: your app can be notified when a user has reacted to your canvas post.

```ts
canvasClient.onContentReaction((response) => {
  if (response.untrusted.status === 'cleared') {
    console.log('Reaction cleared');
  } else {
    console.log('User reacted', response.untrusted.reaction);
  }
});
```

### Resize Observer

Even though the `client.resize` function can be called manually, the most common case is to react to your entire window resizing.

To do that we can use the `ResizeObserver` class in our canvas context `context/canvas.tsx`.

```tsx
useEffect(() => {
  if (canvasContext.client) {
    resizeObserverRef.current = new ResizeObserver(() =>
      canvasContext.client?.resize(),
    );
    resizeObserverRef.current.observe(document.body);

    return () => {
      resizeObserverRef.current?.disconnect();
    };
  }
}, [canvasContext.client]);
```

This way when your canvas changes height, it updates on the post as well.
Maximum Limit is `1200px`, with a min aspect ratio of `1/1.91`

### Canvas Wallet

If you desire to interact with a [solana wallet](https://solana.com/developers/cookbook/wallets/connect-wallet-react), you'll find that some extensions does not work on iframes, even though they get installed.

For this we provide a standard wallet that wraps around canvas. This is a more advanced functionality and ofr this it requires another package.

This are the steps to use it:

1. Install Canvas the wallet package

```sh
 npm i @dscvr-one/canvas-wallet-adapter
 # or
 yarn i @dscvr-one/canvas-wallet-adapter
 # or
 pnpm i @dscvr-one/canvas-wallet-adapter
```

2. Provide the Custom Canvas Wallet on file `context/canvas.tsx`

```tsx
import { registerCanvasWallet } from '@dscvr-one/canvas-wallet-adapter';
  // ...
  const initialize = async (canvasClient: CanvasClient) => {
    registerCanvasWallet(canvasClient);
    // ...
```

This function will allow a custom wallet adapter to appear in the discover process of standard wallets.

3. Install any standard wallet package of your choice, in this example we will use `@solana/wallet-adapter-react`

```sh
 npm i @solana/web3.js @solana/wallet-adapter-base @solana/wallet-adapter-react
 # or
 yarn i @solana/web3.js @solana/wallet-adapter-base @solana/wallet-adapter-react
 # or
 pnpm i @solana/web3.js @solana/wallet-adapter-base @solana/wallet-adapter-react
```

4. Provide the wallets

On the file `pages/_app.tsx` (or `app/layout.tsx`) add the `ConnectionProvider` and `WalletProvider` by solana

```tsx
import type { AppProps } from 'next/app';
import { useMemo } from 'react';
import { clusterApiUrl } from '@solana/web3.js';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react';
import { CanvasProvider } from '@/context/canvas';

export default function App({ Component, pageProps }: AppProps) {
  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
  const network = WalletAdapterNetwork.Devnet;

  // You can also provide a custom RPC endpoint.
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  return (
    <CanvasProvider>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={[]}>
          <Component {...pageProps} />
        </WalletProvider>
      </ConnectionProvider>
    </CanvasProvider>
  );
}
```

IMPORTANT: `CanvasProvider` must be a parent of `WalletProvider` otherwise the wallets wont pick upon the `Canvas Wallet` adapter.

- `console.log` the wallets on your component to verify `DSCVR Canvas` is on the list

```tsx
import { useWallet } from '@solana/wallet-adapter-react';
// ...

const walletContext = useWallet();

useEffect(() => {
  console.log('Available Wallets', walletContext.wallets);
}, [walletContext.wallets]);
```

#### Use solana wallets standard

Now that the canvas wallet is provided, it can be used through the `useWallet` hook from `useWallet`

Lets prepare a simple transaction example

1. Create a component called `components/send-sol.tsx`

```tsx
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [walletContext.wallets, walletContext.wallet]);

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
          className="flex flex-col justify-center items-center gap-6  p-10"
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
```

5. Make sure to import it in your app somewhere

```tsx
import SendSol from '@/components/send-sol';
//...
<SendSol />;
```

6. You need to update your CSP headers for the new RPC endpoint you are using. This is a restriction all canvas have, where they need to specify the CSP explicitly to connect to external sites.

Edit your `ext.config.mjs` file adding custom headers

```ts
const nextConfig = {
  // ...
  async headers() {
    return [
      {
        // matching all API routes
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: 'connect-src https://api.devnet.solana.com/;',
          },
        ],
      },
    ];
  },
};
```

7. tsconfig `target`
   If you get an error saying `Type error: Private identifiers are only available when targeting ECMAScript 2015 and higher.` it might be because in order to use the canvas wallet, you need to setup `"target": "es2022"` (or just greater than `es2015`) on your `tsconfig.json` file

### Transactions without canvas wallet

As an alternative to canvas wallet package (`@dscvr-one/canvas-wallet-adapter`) you can `connect` to a wallet and `send transactions` using the canvas client directly.

This are 3 methods that provide a way for you to send a transaction using the host RPC:

1. `canvasClient.connectWallet ( chainId: string)`: establish a connection to the wallet, `chainId` values are in the format `solana:101` or `solana:103`
2. `canvasClient.signAndSendTransaction ({ unsignedTx: string; awaitCommitment: 'confirmed' | 'finalized' | 'none' })`: sign and send a transaction using the established connection
3. `canvasClient.connectWalletAndSendTransaction (chainId: string, callback...)`: do both connect/signAndSend on one function

This process is not compatible with the standard wallets by default, but provides an easy way to perform transactions.

## Deployment

### Deploy on Vercel

1. [Create a Vercel account](https://Vercel.com/signup) if you don't have one
2. Import your github repo to [create a new project ](https://Vercel.com/new/), following [this steps](https://Vercel.com/docs/getting-started-with-Vercel/import):
   2.1 Select your github repo and click import
   2.2 Select a `Project Name` that suits your project
   2.2 On `Framework Preset`, select **NextJs**
   2.3 Select the `Root Directory` if your project is not on the main root. Note: if yo don't see your branch folder structure, its because Vercel deploys to `main` branch, but don't worry, this can be changed latter
   2.4 Click `Deploy` button
   2.5 If your deployment was required on a different branch, you can change your [production branch](https://vercel.com/guides/can-i-use-a-non-default-branch-for-production) and your [root directory](https://vercel.com/docs/deployments/configure-a-build#root-directory)
3. Once deployed you might copy your project deployment url and use it in a [dscvr.one](https://dscvr.one/?post=Paste%20your%20url%20here) post.

#### Custom `vercel.json`

If your project is not Nextjs but pure React or any other, or you just want to configure your CSP http headers using vercel, create a `vercel.json` file on the root of your project with a content similar to this:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Content-Security-Policy",
          "value": "connect-src https://api.devnet.solana.com/;"
        }
      ]
    }
  ]
}
```

### Deploy on Render

1. [Create a render account](https://dashboard.render.com/register) if you son't have one
2. [Create a new web service](https://dashboard.render.com/web/new) from your repository using [this guide ](https://docs.render.com/deploy-nextjs-app#deploy-as-a-node-server)
   2.1 the start command for NextJs is `pnpm start`, `yarn start` or `npm start`

#### Custom `CSP` on static sites

Note: only for static sites, not for `web service`

If your project is not Nextjs but pure Vue or any other, deploy using a [static site approach](https://dashboard.render.com/static/new), then go to your [static site deployment Headers section](https://docs.render.com/static-site-headers) and add a new header with the fields:

- `Request Path` as `/*`
- `Header Name` as `Content-Security-Policy`
- `Header Value` as `connect-src https://api.devnet.solana.com/;`

### Deploy on Cloudflare

1. Create a new [Cloudflare](https://www.cloudflare.com/) account
2. Create a new Github Page using [this guide](https://developers.cloudflare.com/pages/get-started/git-integration/). Make sure to select `Nextjs` as the `Framework preset`
3. Click `Save and Deploy`.

You might encounter an error saying:

`Node.JS Compatibility Error` `no nodejs_compat compatibility flag set`

You should go to the Pages project's [Compatibility Flags settings](https://dash.cloudflare.com/?to=/:account/pages/view/:pages-project/settings/functions#compatibility_flags_section) section and add the `nodejs_compat` flag to both your prod

#### Custom `CSP`

you can manually [attach a header](https://developers.cloudflare.com/pages/configuration/headers/#attach-a-header) by creating a `_headers` file and makings sure it is copied to the output directory, with the next content:

```
/*
  Content-Security-Policy: connect-src https://api.devnet.solana.com/;
```
