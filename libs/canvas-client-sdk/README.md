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
import {
  CanvasClient,
  type CanvasInterface,
} from '@dscvr-one/canvas-client-sdk';
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

4. Destruction

If the client is being instantiated in a react hook or in a vue component/composable (anything with a lifecycle),
we recommend to destroy the client on hot refreshes to avoid `CanvasInterface.ClientAlreadyInitializedError` while on localhost.

e.g `Vue`

```typescript
onMounted(() => {
  canvasClient = new CanvasClient();
  if (!canvasClient) return;
  response = await canvasClient.ready();
});

onUnmounted(() => {
  canvasClient?.destroy();
});
```

e.g `React`

```typescript
useEffect(() => {
  canvasClient = new CanvasClient();
  if (canvasClient) {
    response = await canvasClient.ready();
  }

  // Destroy the client on effect cleanup
  return () => {
    canvasClient?.destroy();
  };
});
```

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, feel free to open an issue or submit a pull request.
