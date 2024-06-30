# @dscvr-one/tapestry-client-sdk

tapestry-client-sdkxx is a small typescript library that can be used by iframe Apps to communicate with DSCVR's tapestry hosts.

The library provides a `TapestryClient` class with methods to establish communication with DSCVR to get the current context (user and content) as well as to execute wallet transactions.

## Installation

You can install Frames Adapter via npm:

```bash
npm install @dscvr-one/tapestry-client-sdk
```

yarn

```bash
yarn add @dscvr-one/tapestry-client-sdk
```

## Usage

To use the TapestryClient, simply import it into your typescript project:

```typescript
import {
  TapestryInterface,
  TapestryClient,
} from '@dscvr-one/tapestry-client-sdk';
```

Then, instantiate `TapestryClient`

```typescript
const tapestryClient = new TapestryClient();
```

Use `TapestryInterface` to access the communication messages types and schemas.

```typescript
const user: TapestryInterface.Handshake.User = response.untrusted.user;
const content: TapestryInterface.Handshake.Content = response.untrusted.content;
```

### Example

```typescript
import {
  TapestryInterface,
  TapestryClient,
} from '@dscvr-one/tapestry-client-sdk';

const tapestryClient = new TapestryClient();

const startHandshake = async () => {
  const response = await tapestryClient.ready();
  // make sure to validate response.trustedBytes using @dscvr-one/tapestry-server-sdk so the app is not used by platforms other than DSCVR
  if (response) {
    const user: TapestryInterface.Handshake.User = response.untrusted.user;
    const content: TapestryInterface.Handshake.Content =
      response.untrusted.content;
    // ...
  }
};

// Open an external link on DSCVR host
const openLink = () => {
  const url = 'https://...';
  tapestryClient.openLink(url);
};

// Execute a wallet transaction

const createTx = async (response: TapestryInterface.Transactions.ConnectWalletResponseMessage) => {
  // make sure to validate response.trustedBytes using @dscvr-one/tapestry-server-sdk so the app is not used by platforms other than DSCVR
  const unsignedTx = // ...
  return unsignedTx;
}

const sendTransaction = async () => {
  const response = await tapestryClient.connectWalletAndSignTransaction(
    'solana:101',
    createTx
  )
  // make sure to validate response.trustedBytes using @dscvr-one/tapestry-server-sdk so the app is not used by platforms other than DSCVR
  if (response?.untrusted.success) {
    console.log('Transaction sent successfully', response.untrusted.signedTx)
  } else {
    console.log('Transaction failed', response)
  }
}
```

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, feel free to open an issue or submit a pull request.

_Note_:

1. Please contribute using [GitHub Flow](https://web.archive.org/web/20191104103724/https://guides.github.com/introduction/flow/)
2. Commits & PRs will be allowed only if the commit messages & PR titles follow the [conventional commit standard](https://www.conventionalcommits.org/), _read more about it [here](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional#type-enum)_
3. PS. Ensure your commits are signed. _[Read why](https://withblue.ink/2020/05/17/how-and-why-to-sign-git-commits.html)_
