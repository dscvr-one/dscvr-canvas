import EventEmitter from 'eventemitter3';
import * as CanvasInterface from '@dscvr-one/canvas-interface';

export class CanvasClient {
  private sourceOrigin: string;
  private initResponseMessage: CanvasInterface.Lifecycle.InitResponseMessage | null =
    null;
  private eventBus = new EventEmitter<
    CanvasInterface.HostMessageType,
    CanvasInterface.HostMessage
  >();

  constructor() {
    if (typeof window === 'undefined') {
      throw new CanvasInterface.WindowNotDefinedError();
    }
    window.addEventListener('message', this.handleReceiveMessage);

    if (!document.referrer) {
      throw new CanvasInterface.ReferrerNotDefinedError();
    }
    this.sourceOrigin = document.referrer;
  }

  destroy() {
    window.removeEventListener('message', this.handleReceiveMessage);
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
      return await new Promise<CanvasInterface.Lifecycle.InitResponseMessage>(
        (resolve) => {
          this.eventBus.once('lifecycle:init-response', resolve);
        },
      );
    }
  }

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
  ): Promise<CanvasInterface.User.ConnectWalletResponseMessage> {
    const responsePromise =
      new Promise<CanvasInterface.User.ConnectWalletResponseMessage>(
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

  signAndSendTransaction(
    payload: CanvasInterface.User.UnsignedTransaction & {
      chainId: string;
    },
  ) {
    const responsePromise =
      new Promise<CanvasInterface.User.SignAndSendTransactionResponseMessage>(
        (resolve) => {
          this.eventBus.once('user:sign-send-transaction-response', resolve);
        },
      );
    this.sendMessage({
      type: 'user:sign-send-transaction-request',
      payload,
    });
    return responsePromise;
  }

  async connectWalletAndSendTransaction(
    chainId: string,
    createTx: (
      connectResponse: CanvasInterface.User.ConnectWalletResponseMessage,
    ) => Promise<CanvasInterface.User.UnsignedTransaction | undefined>,
  ): Promise<
    CanvasInterface.User.SignAndSendTransactionResponseMessage | undefined
  > {
    const walletResponse = await this.connectWallet(chainId);
    if (!walletResponse.untrusted.success) {
      return {
        ...walletResponse,
        untrusted: {
          ...walletResponse.untrusted,
        },
        type: 'user:sign-send-transaction-response',
      };
    }

    const payload = await createTx(walletResponse);
    if (!payload) {
      return;
    }
    return await this.signAndSendTransaction({
      chainId,
      ...payload,
    });
  }

  private sendHandshake() {
    this.sendMessage({
      type: 'lifecycle:init-request',
      payload: {
        version: CanvasInterface.VERSION,
      },
    });
  }

  private sendMessage(message: CanvasInterface.ClientMessage) {
    window.parent.postMessage(message, this.sourceOrigin);
  }

  private handleReceiveMessage = (
    event: MessageEvent<CanvasInterface.HostMessage>,
  ) => {
    const messageData = event.data;

    const parsedMessage =
      CanvasInterface.HostMessageSchema.safeParse(messageData);
    if (!parsedMessage.success) {
      return;
    }

    const message = parsedMessage.data;

    if (message.type === 'lifecycle:init-response') {
      if (this.initResponseMessage) {
        throw new CanvasInterface.ClientAlreadyInitializedError();
      }
      this.initResponseMessage = message;
    } else if (!this.initResponseMessage) {
      throw new CanvasInterface.ClientNotInitializedError();
    }

    this.eventBus.emit(message.type, message);
  };
}
