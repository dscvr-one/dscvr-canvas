# @dscvr-one/canvas-wallet-adapter

Custom canvas wallet that provides a bridge between the canvas client sdk and the managed host wallets.

Current features include:

- register a custom canvas wallet into the standard wallet discovery process.

## Installation

Install with your favorite package manager:

```bash
npm install @dscvr-one/canvas-wallet-adapter
```

yarn

```bash
yarn add @dscvr-one/canvas-wallet-adapter
```

## Usage

To use the SDK:

1. Import `registerCanvasWallet` function into your typescript project:

```typescript
import { registerCanvasWallet } from '@dscvr-one/canvas-wallet-adapter';
```

2. Apply function tp the `CanvasClient` instance:

```typescript
const canvasClient = new CanvasClient();
if (canvasClient) {
  registerCanvasWallet(canvasClient);
}
```

3. Use a package of your chose to access the installed wallets:
   e.g (for Vue):

```typescript
import { useWallet } from 'solana-wallets-vue';

const { wallets } = useWallet();

onMounted(() => {
  // you should be able to see `Dscvr Canvas` detected as installed
  console.log(wallets.value);
});
```

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, feel free to open an issue or submit a pull request.
