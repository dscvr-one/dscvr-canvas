# Nuxt Boilerplate

This template should help get you started DSCVR canvas iframes with Nuxt.

The step by step guid on how to create this project is provided here.

## Step by step guide

### Setup project with DSCVR Canvas

1. First install the nextjs project using the bootstrap command

```sh
npx nuxi@latest init <project-name>
```

2. Add canvas required header

Edit the file `app.vue` to add the required canvas header

```vue
<script setup lang="ts">
useHead({
  /// ...
  meta: [
    {
      name: 'dscvr:canvas:version',
      content: 'vNext',
    },
  ],
});
</script>
```

3. Og Image (Optional)

If you add a custom image, you can replace the default image tha on your canvas preview state

```vue
<Head>
  <meta property="" content="" />
</Head>
<script setup lang="ts">
useHead({
  /// ...
  meta: [
    /// ...
    {
      name: 'og:image',
      content: '/preview.png',
    },
  ],
});
</script>
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

Here we will use a custom plugin for Vue.

1. Install Canvas SDK

```sh
 npm i @dscvr-one/canvas-client-sdk
 # or
 yarn i @dscvr-one/canvas-client-sdk
 # or
 pnpm i @dscvr-one/canvas-client-sdk
```

2. Create a canvas plugin for Nuxt

Create a file named `plugins/canvas.client.ts`, by having the `.client.ts` prefix nuxt knows it only runs on the client

```ts
import { CanvasClient } from '@dscvr-one/canvas-client-sdk';

export default defineNuxtPlugin(async (nuxtApp) => {
  const canvasClient = new CanvasClient();

  const initResponse = await canvasClient?.ready();

  return {
    provide: {
      canvasClient,
      canvasUser: initResponse?.untrusted.user,
      canvasContent: initResponse?.untrusted.content,
    },
  };
});
```

3. Use the new canvas client in a child component

Now that we have the provider, we can use it in our app.

Create a component `components/intro.vue`

```vue
<template>
  <div>
    <div v-if="!$canvasClient?.isReady">Loading ...</div>
    <div v-else-if="$canvasUser">
      <b>Username </b>
      <span>
        {{ $canvasUser.username }}
      </span>
    </div>
  </div>
</template>
```

4. Use the component on the client side

Use your new component in the `app.vue` on the client side, using the `ClientOnly` Nuxt component.

```vue
<template>
  <ClientOnly>
    <intro />
  </ClientOnly>
</template>
```

5. Review your changes on your https://dscvr.one post

Since Nuxt does **Hot Reload**, you will see your changes immediately.

client:535 Refused to connect to 'ws://2044802944.canvas-app.dscvr.one/\_nuxt/' because it violates the following Content Security Policy directive: "connect-src 'self' https://api.dscvr.one https://api1.stg.dscvr.one https://\*.helius-rpc.com".

6. Basic functions

We have already seen that with the context, you get the current user information as well as the current content (post).

But with canvasClient now you can do some basic functions to connect to DSCVR host

- `openLink`: hyperlinks are restricted by canvas, so in order to open an external link use this code

```ts
$canvasClient.openLink('httpsL//your-link.com');
```

- `resize`: your canvas height can be changed by calling this function. even though the `width` is required, is only used to calculate the aspect-ratio of the canvas.

```ts
$canvasClient.resize({ width, height });
```

In the next section we can see how to handle resize for the entire application using a resize observer.

- `createPost`: allows you to open the create post modal for the user with an initial html content.

```ts
const html = `<h1>New canvas post!</h1>`;
$canvasClient.createPost(html);
```

- `copyToClipboard`: clipboard cannot be accessed directly through the canvas, so the SDK provides a function for it

```ts
$canvasClient.copyToClipboard('Some text!');
```

- `onContentReaction`: your app can be notified when a user has reacted to your canvas post.

```ts
$canvasClient.onContentReaction((response) => {
  if (response.untrusted.status === 'cleared') {
    console.log('Reaction cleared');
  } else {
    console.log('User reacted', response.untrusted.reaction);
  }
});
```

### Resize Observer

Even though the `client.resize` function can be called manually, the most common case is to react to your entire window resizing.

To do that we can use the `ResizeObserver` class in our canvas plugin `plugins/canvas.client.ts`.

```ts
export default defineNuxtPlugin(async (nuxtApp) => {
  /// ...
  if (canvasClient) {
    const resizeObserver = new ResizeObserver(() => canvasClient?.resize());
    resizeObserver.observe(document.body);
  }
});
```

This way when your canvas changes height, it updates on the post as well.
Maximum Limit is `1200px`, with a min aspect ratio of `1/1.91`

### Canvas Wallet

If you desire to interact with a [solana wallet](https://github.com/lorisleiva/solana-wallets-vue), you'll find that some extensions does not work on iframes, even though they get installed.

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

2. Provide the Custom Canvas Wallet on the plugin `plugins/canvas.client.ts`

```tsx
import { registerCanvasWallet } from '@dscvr-one/canvas-wallet-adapter';
// ...
export default defineNuxtPlugin(async (nuxtApp) => {
  const canvasClient = new CanvasClient();
  /// ...

  if (canvasClient) {
    /// ...
    registerCanvasWallet(canvasClient);
  }
});
```

This function will allow a custom wallet adapter to appear in the discover process of standard wallets.

2. Install any standard wallet package of your choice, in this example we will use `solana-wallets-vue`

```sh
 npm i @solana/web3.js @solana/wallet-adapter-base solana-wallets-vue
 # or
 yarn i @solana/web3.js @solana/wallet-adapter-base solana-wallets-vue
 # or
 pnpm i @solana/web3.js @solana/wallet-adapter-base solana-wallets-vue
```

3. Provide the wallets

On the plugin `plugins/canvas.client.ts` add the `SolanaWallets` plugin to the client side

```tsx
import SolanaWallets from 'solana-wallets-vue';

export default defineNuxtPlugin(async (nuxtApp) => {
  /// ...
  nuxtApp.vueApp.use(SolanaWallets);
});
```

- `console.log` the wallets on your component to verify `DSCVR Canvas` is on the list

```ts
import { useWallet } from 'solana-wallets-vue';
// ...

const { wallets } = useWallet();

onMounted(() => {
  console.log('Available Wallets', wallets.value);
});
```

#### Use solana wallets standard

Now that the canvas wallet is provided, it can be used through the `useWallet` hook from `useWallet`

Lets prepare a simple transaction example

1. Create a component called `components/send-sol.vue`

```vue
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
  <div v-if="successfulSignedTx">
    <p>Transaction sent successfully</p>

    <a @click="openTransactionLink"> Open in Solana.fm </a>
    <button @click="clear">Close</button>
  </div>
  <form v-else @submit.prevent="submit">
    <h2>Send Transaction</h2>
    <template v-if="publicKey">
      <div>
        <label>Source Address</label>
        <span>{{ publicKey.toString() }}</span>
      </div>

      <div>
        <label for="target">Target address</label>
        <input type="text" name="target" v-model="targetAddress" />
      </div>

      <div>
        <label for="amount">Amount (SOL)</label>
        <input
          type="number"
          name="amount"
          step="0.000000001"
          v-model="amount"
        />
      </div>
    </template>

    <p v-if="errorMessage">
      <i>{{ errorMessage }}</i>
    </p>

    <button v-if="publicKey" type="submit">Send</button>
    <button v-else type="button" @click="connect">Connect</button>
  </form>
</template>
```

2. Make sure to import it in your app somewhere. e.g `components/intro.vue`

```vue
<send-sol v-if="$canvasClient?.isReady" />
```

3. You need to update your CSP headers for the new RPC endpoint you are using. This is a restriction all canvas have, where they need to specify the CSP explicitly to connect to external sites.

Install Nuxt security module

```sh
npx nuxi@latest module add security
```

Edit your `nuxt.config.ts` file adding custom headers

```ts
export default defineNuxtConfig({
  /// ...
  modules: ['nuxt-security'],
  security: {
    headers: {
      xFrameOptions: false,
      contentSecurityPolicy: {
        'connect-src': 'https://api.devnet.solana.com/',
      },
    },
  },
});
```

4. In order to create a transaction, you'll need access to the `Buffer` library, for that we need a polyfill
   To add it to `nuxt.config.ts` use [clientNodeCompat](https://nuxt.com/docs/guide/going-further/experimental-features#clientnodecompat) experimental feature

```ts
export default defineNuxtConfig({
  /// ...
  experimental: {
    clientNodeCompat: true,
  },
});
```

Then on our plugin `plugins/canvas.client.ts` add the next two lines

```ts
import { Buffer } from 'node:buffer';
/// ...
globalThis.Buffer = globalThis.Buffer || Buffer;
```

### Transactions without canvas wallet

As an alternative to canvas wallet package (`@dscvr-one/canvas-wallet-adapter`) you can `connect` to a wallet and `send transactions` using the canvas client directly.

This are 3 methods that provide a way for you to send a transaction using the host RPC:

1. `canvasClient.connectWallet ( chainId: string)`: establish a connection to the wallet, `chainId` values are in the format `solana:101` or `solana:103`
2. `canvasClient.signAndSendTransaction ({ unsignedTx: string; awaitCommitment: 'confirmed' | 'finalized' | 'none' })`: sign and send a transaction using the established connection
3. `canvasClient.connectWalletAndSendTransaction (chainId: string, callback...)`: do both connect/signAndSend on one function

This process is not compatible with the standard wallets by default, but provides an easy way to perform transactions.

## Deployment

For all deployments make sure you have deployed your changes to a github branch

### Deploy on Vercel

1. [Create a Vercel account](https://Vercel.com/signup) if you don't have one
2. Import your github repo to [create a new project ](https://Vercel.com/new/), following [this steps](https://Vercel.com/docs/getting-started-with-Vercel/import):
   2.1 Select your github repo and click import
   2.2 Select a `Project Name` that suits your project
   2.2 On `Framework Preset`, select **NuxtJs**
   2.3 Select the `Root Directory` if your project is not on the main root. Note: if yo don't see your branch folder structure, its because Vercel deploys to `main` branch, but don't worry, this can be changed latter
   2.4 Click `Deploy` button
   2.5 If your deployment was required on a different branch, you can change your [production branch](https://vercel.com/guides/can-i-use-a-non-default-branch-for-production) and your [root directory](https://vercel.com/docs/deployments/configure-a-build#root-directory)
3. Once deployed you might copy your project deployment url and use it in a [dscvr.one](https://dscvr.one/?post=Paste%20your%20url%20here) post.

#### Custom `vercel.json`

If your project is not Nuxt but pure Vue or any other, or you just want to configure your CSP http headers using vercel, create a `vercel.json` file on the root of your project with a content similar to this:

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
2. [Create a new web service](https://dashboard.render.com/web/new) from your repository using [this guide ](https://docs.render.com/deploy-nuxtjs#deploy-as-a-node-server)
   2.1 the start command for Nuxt is `pnpm preview`, `yarn preview` or `npm preview`

#### Custom `CSP` on static sites

Note: only for static sites, not for `web service`

If your project is not Nextjs but pure React or any other, deploy using a [static site approach](https://dashboard.render.com/static/new), then go to your [static site deployment Headers section](https://docs.render.com/static-site-headers) and add a new header with the fields:

- `Request Path` as `/*`
- `Header Name` as `Content-Security-Policy`
- `Header Value` as `connect-src https://api.devnet.solana.com/;`

### Deploy on Cloudflare

1. Create a new [Cloudflare](https://www.cloudflare.com/) account
2. Create a new Github Page using [this guide](https://developers.cloudflare.com/pages/get-started/git-integration/). Make sure to select `Nuxt.js` as the `Framework preset`. The default settings should work.
3. Click `Save and Deploy`.

You might encounter an error saying:

`Node.JS Compatibility Error` `no nodejs_compat compatibility flag set`

You should go to the Pages project's [Compatibility Flags settings](https://dash.cloudflare.com/?to=/:account/pages/view/:pages-project/settings/functions#compatibility_flags_section) section and add the `nodejs_compat` flag to both your prod

#### Custom `CSP`

you can manually [attach a header](https://developers.cloudflare.com/pages/configuration/headers/#attach-a-header) by creating a `_headers` with the next content

```
/*
  Content-Security-Policy: connect-src https://api.devnet.solana.com/;
```
