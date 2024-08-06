import EventEmitter from 'eventemitter3';
import * as CanvasInterface from '@dscvr-one/canvas-interface';

export class CanvasClient {
  private sourceOrigin: string;
  private initResponseMessage:
    | CanvasInterface.Lifecycle.InitResponseMessage
    | undefined = undefined;
  private initialInteractionRegistered = false;
  private eventBus = new EventEmitter<
    string,
    CanvasInterface.BaseHostMessage
  >();

  constructor() {
    if (typeof window === 'undefined') {
      throw new CanvasInterface.WindowNotDefinedError();
    }
    window.addEventListener('message', this.handleReceiveMessage);
    window.addEventListener('click', this.handleInitialInteraction);
    window.addEventListener('focus', this.handleInitialInteraction);

    if (!document.referrer) {
      throw new CanvasInterface.ReferrerNotDefinedError();
    }
    this.sourceOrigin = document.referrer;
  }

  destroy() {
    this.initResponseMessage = undefined;
    window.removeEventListener('message', this.handleReceiveMessage);
    this.removeInitialInteractionListeners();
  }

  get isReady() {
    return !!this.initResponseMessage;
  }

  async ready(onClose?: () => void) {
    if (onClose) {
      this.eventBus.on('lifecycle:close', onClose);
    }
    if (this.initResponseMessage) {
      return this.initResponseMessage;
    } else {
      this.sendHandshake();
      return await this.subscribeOnce(
        CanvasInterface.Lifecycle.InitResponseMessageSchema,
      );
    }
  }

  subscribe<S extends CanvasInterface.BaseClientMessageSchemaType>(
    schema: S,
    callback: (message: CanvasInterface.BaseClientMessage<S>) => void,
  ) {
    const responseType = schema.shape.type.value;
    this.eventBus.on(
      responseType,
      (message: CanvasInterface.BaseClientMessage<S>) => {
        const parsedMessage = schema.safeParse(message);
        if (!parsedMessage.success) {
          return;
        }
        callback(message);
      },
    );
  }

  subscribeOnce<S extends CanvasInterface.BaseClientMessageSchemaType>(
    schema: S,
  ): Promise<CanvasInterface.BaseClientMessage<S>> {
    const responseType = schema.shape.type.value;
    return new Promise<CanvasInterface.BaseClientMessage<S>>((resolve) => {
      this.eventBus.once(
        responseType,
        (message: CanvasInterface.BaseClientMessage<S>) => {
          const parsedMessage = schema.safeParse(message);
          if (!parsedMessage.success) {
            return;
          }
          resolve(message);
        },
      );
    });
  }

  sendMessage(message: CanvasInterface.BaseClientMessage) {
    window.parent.postMessage(message, this.sourceOrigin);
  }

  sendMessageAndWait<S extends CanvasInterface.BaseClientMessageSchemaType>(
    message: CanvasInterface.BaseClientMessage,
    responseSchema: S,
  ): Promise<CanvasInterface.BaseClientMessage<S>> {
    const responsePromise = this.subscribeOnce<S>(responseSchema);
    this.sendMessage(message);
    return responsePromise;
  }

  openLink(url: string) {
    this.sendMessage({
      type: 'user:open-link-request',
      payload: {
        url,
      },
    });
  }

  resize(newPayload?: CanvasInterface.User.ResizeRequestMessage['payload']) {
    const payload = newPayload ?? this.getWindowSize();
    if (payload.width <= 0 || payload.height <= 0) {
      return;
    }
    this.sendMessage({
      type: 'user:resize-request',
      payload,
    });
  }

  connectWallet(
    chainId: string,
  ): Promise<CanvasInterface.User.ConnectWalletResponseMessage> {
    return this.sendMessageAndWait(
      {
        type: 'user:connect-wallet-request',
        payload: {
          chainId,
        },
      },
      CanvasInterface.User.ConnectWalletResponseMessageSchema,
    );
  }

  signAndSendTransaction(
    payload: CanvasInterface.User.UnsignedTransaction & {
      chainId: string;
    },
  ) {
    return this.sendMessageAndWait(
      {
        type: 'user:sign-send-transaction-request',
        payload,
      },
      CanvasInterface.User.SignAndSendTransactionResponseMessageSchema,
    );
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

  private handleReceiveMessage = (
    event: MessageEvent<CanvasInterface.BaseHostMessage>,
  ) => {
    const messageData = event.data;

    const message = CanvasInterface.parseHostMessage(messageData);
    if (!message) {
      return;
    }

    const parsedInitMessage =
      CanvasInterface.Lifecycle.InitResponseMessageSchema.safeParse(
        messageData,
      );
    if (parsedInitMessage.success) {
      if (this.initResponseMessage) {
        throw new CanvasInterface.ClientAlreadyInitializedError();
      }
      this.initResponseMessage = parsedInitMessage.data;
    } else if (!this.initResponseMessage) {
      throw new CanvasInterface.ClientNotInitializedError();
    }

    this.eventBus.emit(message.type, message);
  };

  private handleInitialInteraction = () => {
    this.removeInitialInteractionListeners();
    if (!this.initialInteractionRegistered) {
      this.initialInteractionRegistered = true;
      this.sendMessage({
        type: 'user:initial-interaction-request',
      });
    }
  };

  private removeInitialInteractionListeners() {
    window.removeEventListener('click', this.handleInitialInteraction);
    window.removeEventListener('focus', this.handleInitialInteraction);
  }

  private getWindowSize() {
    return {
      width: window.document.body.clientWidth,
      height: window.document.body.clientHeight,
    };
  }
}
