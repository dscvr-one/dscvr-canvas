# frames-adapter

frames-adapter is a small typescript library that can be used as an adapter to DSCVR's protocol from different frames frameworks.

The library provides a couple of helper methods to validate the trusted message data of a frame action and also to determine if a frame is using the DSCVR protocol.

## Installation

You can install Frames Adapter via npm:

```bash
npm install @dscvr-one/frames-adapter
```

yarn

```bash
yarn add @dscvr-one/frames-adapter
```

## Usage

To use Frames Adapter, simply import it into your typescript project:

```typescript
import {
  type DscvrFramesRequest,
  type DscvrClientProtocol,
  type DscvrFrameActionData,
  validateClientProtocol,
  validateFramesPost,
} from '@dscvr-one/frames-adapter';
```

Then, you can use the functions provided by Frames Adapter to validate a Frame Post payload.

### Example

```typescript
import {
  type DscvrFramesRequest,
  type DscvrClientProtocol,
  type DscvrFrameActionData,
  validateClientProtocol,
  validateFramesPost,
} from '@dscvr-one/frames-adapter';

export const isDscvrFrameActionPayload = (
  frameActionPayload: FrameActionPayload,
): frameActionPayload is DscvrFramesRequest => {
  return (
    !!frameActionPayload.clientProtocol &&
    validateClientProtocol(frameActionPayload.clientProtocol)
  );
};

export const getDscvrFrameMessage = async (
  frameActionPayload: DscvrFramesRequest,
) => {
  const result = await validateFramesPost({
    ...frameActionPayload,
    clientProtocol: frameActionPayload.clientProtocol as DscvrClientProtocol,
  });

  return result;
};
```

Expected payload should have the next structure

```json
{
  "clientProtocol": "dscvr@...",
  "untrustedData": {
    "dscvrId": "...",
    "contentId": 123,
    "state": "...",
    "url": "...",
    "timestamp": 123,
    "buttonIndex": 1,
    "inputText": "..."
  },
  "trustedData": {
    "messageBytes": "..."
  }
}
```

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, feel free to open an issue or submit a pull request.

_Note_:

1. Please contribute using [GitHub Flow](https://web.archive.org/web/20191104103724/https://guides.github.com/introduction/flow/)
2. Commits & PRs will be allowed only if the commit messages & PR titles follow the [conventional commit standard](https://www.conventionalcommits.org/), _read more about it [here](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional#type-enum)_
3. PS. Ensure your commits are signed. _[Read why](https://withblue.ink/2020/05/17/how-and-why-to-sign-git-commits.html)_

### Take in count

- type `DscvrUntrustedData` in file **src/types.ts** should be a type with the `&&` operator and not an interface with extend, otherwise a [type predicate](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates) wont work e.g:

```typescript
const fn = (payload: T): payload is DscvrFramesRequest
```
