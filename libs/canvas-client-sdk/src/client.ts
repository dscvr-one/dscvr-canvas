import EventEmitter from 'eventemitter3';
import * as CanvasInterface from '@dscvr-one/canvas-interface';

export class CanvasClient {
  private sourceOrigin: string;
  private initialized = false;
  private awaitingHandshake = false;
  private initResponse: CanvasInterface.Lifecycle.InitResponse | undefined =
    undefined;
  private initialInteractionRegistered = false;
  private eventBus = new EventEmitter<
    string,
    CanvasInterface.BaseHostMessage
  >();

  /**
   * @deprecated since version 2.0.0. Use `createCanvasClient` instead
   */
  constructor() {
    if (typeof window === 'undefined') {
      throw new CanvasInterface.WindowNotDefinedError();
    }

    if (!document.referrer) {
      throw new CanvasInterface.ReferrerNotDefinedError();
    }
    this.sourceOrigin = document.referrer;
  }

  destroy() {
    this.initialized = false;
    this.initResponse = undefined;
    window.removeEventListener('message', this.handleReceiveMessage);
    window.removeEventListener('click', this.handleInitialInteraction);
    window.removeEventListener('focus', this.handleInitialInteraction);
    this.removeInitialInteractionListeners();
  }

  get isReady() {
    return !!this.initResponse;
  }

  async ready(onClose?: () => void) {
    if (onClose) {
      this.eventBus.on('lifecycle:close', onClose);
    }

    if (this.initResponse) {
      return this.initResponse;
    }
    if (!this.initialized) {
      window.addEventListener('message', this.handleReceiveMessage);
      window.addEventListener('click', this.handleInitialInteraction);
      window.addEventListener('focus', this.handleInitialInteraction);
      this.sendHandshake();
      this.initialized = true;
    }
    return await this.subscribeOnce(
      CanvasInterface.Lifecycle.initResponseSchema,
    );
  }

  subscribe<S extends CanvasInterface.BaseHostMessageSchema>(
    schema: S,
    callback: (message: CanvasInterface.BaseHostMessage<S>) => void,
  ) {
    const responseType = schema.shape.type.value;
    this.eventBus.on(
      responseType,
      (message: CanvasInterface.BaseHostMessage<S>) => {
        const parsedMessage = schema.safeParse(message);
        if (!parsedMessage.success) {
          return;
        }
        callback(message);
      },
    );
  }

  subscribeOnce<S extends CanvasInterface.BaseHostMessageSchema>(
    schema: S,
  ): Promise<CanvasInterface.BaseHostMessage<S>> {
    const responseType = schema.shape.type.value;
    return new Promise<CanvasInterface.BaseHostMessage<S>>((resolve) => {
      this.eventBus.once(
        responseType,
        (message: CanvasInterface.BaseHostMessage<S>) => {
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

  sendMessageAndWaitResponse<
    T extends CanvasInterface.BaseClientMessage,
    S extends CanvasInterface.BaseHostMessageSchema,
  >(
    message: T,
    responseSchema: S,
  ): Promise<CanvasInterface.BaseHostMessage<S>> {
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

  resize(newPayload?: CanvasInterface.User.ResizeRequest['payload']) {
    const payload = newPayload ?? this.getWindowSize();
    if (payload.width <= 0 || payload.height <= 0) {
      return;
    }
    this.sendMessage({
      type: 'user:resize-request',
      payload,
    });
  }

  createPost(
    htmlContent: string,
  ): Promise<CanvasInterface.User.CreatePostResponse> {
    return this.sendMessageAndWaitResponse(
      {
        type: 'user:create-post-request',
        payload: {
          htmlContent,
        },
      },
      CanvasInterface.User.createPostResponseSchema,
    );
  }

  createShareLink(
    urlData: string,
  ): Promise<CanvasInterface.User.CreateShareLinkResponse> {
    return this.sendMessageAndWaitResponse(
      {
        type: 'user:create-share-link-request',
        payload: {
          urlData,
        },
      },
      CanvasInterface.User.createShareLinkResponseMessageSchema,
    );
  }

  copyToClipboard(
    content: string,
  ): Promise<CanvasInterface.User.CopyToClipboardResponse> {
    return this.sendMessageAndWaitResponse(
      {
        type: 'user:copy-to-clipboard-request',
        payload: {
          content,
        },
      },
      CanvasInterface.User.copyToClipboardResponseSchema,
    );
  }

  onContentReaction(
    callback: (reaction: CanvasInterface.User.ContentReactionResponse) => void,
  ) {
    this.subscribe(
      CanvasInterface.User.contentReactionResponseSchema,
      callback,
    );
  }

  connectWallet(
    chainId: string,
  ): Promise<CanvasInterface.User.ConnectWalletResponse> {
    return this.sendMessageAndWaitResponse(
      {
        type: 'user:connect-wallet-request',
        payload: {
          chainId,
        },
      },
      CanvasInterface.User.connectWalletResponseSchema,
    );
  }

  signAndSendTransaction(
    payload: CanvasInterface.User.UnsignedTransaction & {
      chainId: string;
    },
  ) {
    return this.sendMessageAndWaitResponse(
      {
        type: 'user:sign-send-transaction-request',
        payload,
      },
      CanvasInterface.User.signAndSendTransactionResponseSchema,
    );
  }

  async connectWalletAndSendTransaction(
    chainId: string,
    createTx: (
      connectResponse: CanvasInterface.User.ConnectWalletResponse,
    ) => Promise<CanvasInterface.User.UnsignedTransaction | undefined>,
  ): Promise<CanvasInterface.User.SignAndSendTransactionResponse | undefined> {
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
    if (this.awaitingHandshake) {
      return;
    }
    this.awaitingHandshake = true;
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

    const message = CanvasInterface.parseBaseHostMessage(messageData);
    if (!message) {
      return;
    }

    const parsedInitMessage =
      CanvasInterface.Lifecycle.initResponseSchema.safeParse(messageData);
    if (parsedInitMessage.success) {
      if (this.initResponse) {
        throw new CanvasInterface.ClientAlreadyInitializedError(
          'Use `destroy` method to reset the client',
        );
      }
      this.initResponse = parsedInitMessage.data;
      this.awaitingHandshake = false;
    } else if (!this.initResponse) {
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
