# @dscvr-one/canvas-client-sdk

This SDK can be used by DSCVR Canvas Applications to communicate with the DSCVR Frontend.

Current features include:

- Get the current user and content.
- Prompt the user to open an external link.
- Execute wallet transactions.

## Installation

Install with your favorite package manager:

```bash
npm install @dscvr-one/canvas-client-sdk
```

yarn

```bash
yarn add @dscvr-one/canvas-client-sdk
```

## Usage

To use the SDK:

1. Import `CanvasClient` and `CanvasInterface` into your typescript project:

```typescript
import { CanvasInterface, CanvasClient } from '@dscvr-one/canvas-client-sdk';
```

2. Instantiate the `CanvasClient`:

```typescript
const canvasClient = new CanvasClient();
```

3. Start the handshake:

```typescript
const response = await canvasClient.ready();
//
if (response) {
  // The handshake allows access to the user and the content that the application is embedded in.
  const user: CanvasInterface.Handshake.User = response.untrusted.user;
  const content: CanvasInterface.Handshake.Content = response.untrusted.content;
  // ...
}
```

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, feel free to open an issue or submit a pull request.
