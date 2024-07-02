import EventEmitter from 'eventemitter3';
import * as TapestryInterface from '@dscvr-one/tapestry-interface';

export class TapestryClient {
  private sourceOrigin = '*';
  private initResponseMessage: TapestryInterface.Lifecycle.InitResponseMessage | null =
    null;
  private eventBus = new EventEmitter<
    TapestryInterface.HostMessageType,
    TapestryInterface.HostMessage
  >();

  constructor() {
    if (typeof window === 'undefined') {
      throw new Error('TapestryClient: window is not defined');
    }
    // We don't remove the event listener, because it should get removed when the
    // iframe is removed from the DOM.
    window.addEventListener('message', this.handleReceiveMessage);

    if (document.referrer) {
      // TODO: referrer?
      this.sourceOrigin = document.referrer;
    }
  }

  get isReady() {
    return this.initResponseMessage !== null;
  }

  async ready(onClose?: () => void) {
    if (onClose) {
      this.eventBus.on('lifecycle:close', onClose);
    }
    if (this.initResponseMessage) {
      return this.initResponseMessage;
    } else {
      this.sendHandshake();
      return await new Promise<TapestryInterface.Lifecycle.InitResponseMessage>(
        (resolve) => {
          this.eventBus.once('lifecycle:init-response', resolve);
        },
      );
    }
  }

  // TODO: show toast message
  // TODO: show confirmation dialog
  // TODO: set PFP ...
  openLink(url: string) {
    this.sendMessage({
      type: 'user:open-link-request',
      payload: {
        url,
      },
    });
  }

  connectWallet(
    chainId: string,
  ): Promise<TapestryInterface.User.ConnectWalletResponseMessage> {
    const responsePromise =
      new Promise<TapestryInterface.User.ConnectWalletResponseMessage>(
        (resolve) => {
          this.eventBus.once('user:connect-wallet-response', resolve);
        },
      );
    this.sendMessage({
      type: 'user:connect-wallet-request',
      payload: {
        chainId,
      },
    });
    return responsePromise;
  }

  signTransaction(chainId: string, unsignedTx: string) {
    const responsePromise =
      new Promise<TapestryInterface.User.SignTransactionResponseMessage>(
        (resolve) => {
          this.eventBus.once('user:sign-transaction-response', resolve);
        },
      );
    this.sendMessage({
      type: 'user:sign-transaction-request',
      payload: {
        chainId,
        unsignedTx,
      },
    });
    return responsePromise;
  }

  async connectWalletAndSignTransaction(
    chainId: string,
    createTx: (
      connectResponse: TapestryInterface.User.ConnectWalletResponseMessage,
    ) => Promise<string | undefined>,
  ): Promise<
    TapestryInterface.User.SignTransactionResponseMessage | undefined
  > {
    const walletResponse = await this.connectWallet(chainId);
    if (!walletResponse.untrusted.success) {
      return {
        ...walletResponse,
        untrusted: {
          ...walletResponse.untrusted,
        },
        type: 'user:sign-transaction-response',
      };
    }

    const unsignedTx = await createTx(walletResponse);
    if (!unsignedTx) {
      return;
    }
    return await this.signTransaction(chainId, unsignedTx);
  }

  private sendHandshake() {
    this.sendMessage({
      type: 'lifecycle:init-request',
      payload: {
        version: TapestryInterface.VERSION,
      },
    });
  }

  private sendMessage(message: TapestryInterface.ClientMessage) {
    console.log('TapestryClient: sendMessage', message);
    window.parent.postMessage(message, '*'); // this.sourceOrigin);
  }

  private handleReceiveMessage = (
    event: MessageEvent<TapestryInterface.HostMessage>,
  ) => {
    const messageData = event.data;

    const parsedMessage =
      TapestryInterface.HostMessageSchema.safeParse(messageData);
    if (!parsedMessage.success) {
      return;
    }
    console.log('TapestryClient: handleReceiveMessage', parsedMessage);

    const message = parsedMessage.data;

    if (message.type === 'lifecycle:init-response') {
      if (this.initResponseMessage) {
        throw new Error('TapestryClient: Client is already marked as ready');
      }
      this.initResponseMessage = message;
    } else if (!this.initResponseMessage) {
      throw new Error('TapestryClient: Client is not ready');
    }

    this.eventBus.emit(message.type, message);
  };
}
