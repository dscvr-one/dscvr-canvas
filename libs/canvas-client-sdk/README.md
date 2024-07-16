# @dscvr-one/canvas-client-sdk

canvas-client-sdkxx is a small typescript library that can be used by iframe Apps to communicate with DSCVR's canvas hosts.

The library provides a `CanvasClient` class with methods to establish communication with DSCVR to get the current context (user and content) as well as to execute wallet transactions.

## Installation

You can install Frames Adapter via npm:

```bash
npm install @dscvr-one/canvas-client-sdk
```

yarn

```bash
yarn add @dscvr-one/canvas-client-sdk
```

## Usage

To use the CanvasClient, simply import it into your typescript project:

```typescript
import { CanvasInterface, CanvasClient } from '@dscvr-one/canvas-client-sdk';
```

Then, instantiate `CanvasClient`

```typescript
const canvasClient = new CanvasClient();
```

Use `CanvasInterface` to access the communication messages types and schemas.

```typescript
const user: CanvasInterface.Handshake.User = response.untrusted.user;
const content: CanvasInterface.Handshake.Content = response.untrusted.content;
```

### Example

```typescript
import {
  CanvasInterface,
  CanvasClient,
} from '@dscvr-one/canvas-client-sdk';

const canvasClient = new CanvasClient();

const startHandshake = async () => {
  const response = await canvasClient.ready();
  // make sure to validate response.trustedBytes using @dscvr-one/canvas-server-sdk so the app is not used by platforms other than DSCVR
  if (response) {
    const user: CanvasInterface.Handshake.User = response.untrusted.user;
    const content: CanvasInterface.Handshake.Content = response.untrusted.content;
    // ...
  }
};

// Open an external link on DSCVR host
const openLink = () => {
  const url = 'https://...';
  canvasClient.openLink(url);
};

// Execute a wallet transaction
const createTx = async (response: CanvasInterface.User.ConnectWalletResponseMessage) => {
  if (!response.success) {
    console.error('Failed to connect wallet')
    return
  }
  // make sure to validate response.trustedBytes using @dscvr-one/canvas-server-sdk so the app is not used by platforms other than DSCVR
  const unsignedTx = // ...
  return unsignedTx;
}

const sendTransaction = async () => {
  const response = await canvasClient.connectWalletAndSignTransaction(
    'solana:101',
    createTx
  );
  if (!response) {
    console.error('Transaction not created');
    return;
  }
  // make sure to validate response.trustedBytes using @dscvr-one/canvas-server-sdk so the app is not used by platforms other than DSCVR
  if (response.untrusted.success) {
    const signedTx = response.untrusted.signedTx;
    // ....
  } else {
    console.error('Transaction failed', response);
  }
}
```

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, feel free to open an issue or submit a pull request.

_Note_:

1. Please contribute using [GitHub Flow](https://web.archive.org/web/20191104103724/https://guides.github.com/introduction/flow/)
2. Commits & PRs will be allowed only if the commit messages & PR titles follow the [conventional commit standard](https://www.conventionalcommits.org/), _read more about it [here](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional#type-enum)_
3. PS. Ensure your commits are signed. _[Read why](https://withblue.ink/2020/05/17/how-and-why-to-sign-git-commits.html)_
