export class ClientAlreadyInitializedError extends Error {
  name = 'ClientAlreadyInitializedError';
  message: string = 'Client is already initialized';
}

export class ClientNotInitializedError extends Error {
  name = 'ClientNotInitializedError';
  message: string = 'Client is not yet initialized';
}

export class WindowNotDefinedError extends Error {
  name = 'WindowNotDefinedError';
  message: string = 'Window is not defined';
}

export class ReferrerNotDefinedError extends Error {
  name = 'ReferrerNotDefinedError';
  message: string = 'Referrer is not defined';
}
