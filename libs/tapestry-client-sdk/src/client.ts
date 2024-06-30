import EventEmitter from 'eventemitter3';
import * as TapestryInterface from '@dscvr-one/tapestry-interface';

export class TapestryClient {
  private sourceOrigin = '*';
  private initResponseMessage: TapestryInterface.Handshake.InitResponseMessage | null =
    null;
  private eventBus = new EventEmitter<
    TapestryInterface.HostMessageType,
    TapestryInterface.HostMessage
  >();

  constructor() {
    if (typeof window === 'undefined') {
      throw new Error('TapestryClient: window is not defined');
    }
    // TODO: destructor to remove event listeners
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
      this.eventBus.on('close', onClose);
    }
    if (this.initResponseMessage) {
      return this.initResponseMessage;
    } else {
      this.sendHandshake();
      return await new Promise<TapestryInterface.Handshake.InitResponseMessage>(
        (resolve) => {
          this.eventBus.once('init-response', resolve);
        },
      );
    }
  }

  openLink(url: string) {
    this.sendMessage({
      type: 'open-link-request',
      payload: {
        url,
      },
    });
  }

  connectWallet(
    chainId: string,
  ): Promise<TapestryInterface.Transactions.ConnectWalletResponseMessage> {
    const responsePromise =
      new Promise<TapestryInterface.Transactions.ConnectWalletResponseMessage>(
        (resolve) => {
          this.eventBus.once('connect-wallet-response', resolve);
        },
      );
    this.sendMessage({
      type: 'connect-wallet-request',
      payload: {
        chainId,
      },
    });
    return responsePromise;
  }

  signTransaction(chainId: string, unsignedTx: string) {
    const responsePromise =
      new Promise<TapestryInterface.Transactions.SignTransactionResponseMessage>(
        (resolve) => {
          this.eventBus.once('sign-transaction-response', resolve);
        },
      );
    this.sendMessage({
      type: 'sign-transaction-request',
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
      connectResponse: TapestryInterface.Transactions.ConnectWalletResponseMessage,
    ) => Promise<string>,
  ): Promise<TapestryInterface.Transactions.SignTransactionResponseMessage> {
    const walletResponse = await this.connectWallet(chainId);
    if (!walletResponse.untrusted.success) {
      return {
        ...walletResponse,
        untrusted: {
          ...walletResponse.untrusted,
        },
        type: 'sign-transaction-response',
      };
    }

    const unsignedTx = await createTx(walletResponse);
    return await this.signTransaction(chainId, unsignedTx);
  }

  private handleClose() {
    this.initResponseMessage = null;
    console.log('Client: shutdown');
  }

  private sendHandshake() {
    this.sendMessage({
      type: 'init-request',
      payload: {
        version: '0.0.1', // TODO
        // TODO: instanceId: '123',
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
    console.log('TapestryClient: handleReceiveMessage', event);
    const messageData = event.data;

    const parsedMessage =
      TapestryInterface.HostMessageSchema.safeParse(messageData);
    if (!parsedMessage.success) {
      throw new Error('TapestryClient: Invalid message object');
    }

    const message = parsedMessage.data;

    if (message.type === 'init-response') {
      if (this.initResponseMessage) {
        throw new Error('TapestryClient: Client is already marked as ready');
      }
      this.initResponseMessage = message;
    } else if (!this.initResponseMessage) {
      throw new Error('TapestryClient: Client is not ready');
    } else if (message.type === 'close') {
      this.handleClose();
    }

    this.eventBus.emit(message.type, message);
  };
}
