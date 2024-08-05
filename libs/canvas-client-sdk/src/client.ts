import EventEmitter from 'eventemitter3';
import * as CanvasInterface from '@dscvr-one/canvas-interface';
import { CanvasPlugin } from './plugin';

type GenericCanvasPlugin = CanvasPlugin<
  CanvasInterface.BaseClientMessage,
  CanvasInterface.BaseHostMessage
>;

export type CanvasClientOptions = {
  plugins: GenericCanvasPlugin[];
};

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
  private plugins: GenericCanvasPlugin[] = [];

  constructor(options?: CanvasClientOptions) {
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
    if (options) {
      this.setOptions(options);
    }
  }

  setOptions(config: CanvasClientOptions) {
    for (const plugin of config.plugins) {
      this.addPlugin(plugin);
    }
  }

  getPlugin<T extends GenericCanvasPlugin>(name: string): T | undefined {
    return this.plugins.find((p) => p.name === name) as T | undefined;
  }

  destroy() {
    this.initResponseMessage = undefined;
    window.removeEventListener('message', this.handleReceiveMessage);
    this.removeInitialInteractionListeners();
    this.plugins.forEach((plugin) => {
      plugin.destroy();
    });
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

  private sendMessage(message: CanvasInterface.BaseClientMessage) {
    window.parent.postMessage(message, this.sourceOrigin);
  }

  private handleReceiveMessage = (
    event: MessageEvent<CanvasInterface.BaseHostMessage>,
  ) => {
    const messageData = event.data;

    const parsedMessage =
      CanvasInterface.HostMessageSchema.safeParse(messageData);
    if (!parsedMessage.success) {
      this.handleReceivePluginMessage(messageData);
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

  private handleReceivePluginMessage(
    messageData: CanvasInterface.BaseHostMessage,
  ) {
    for (const plugin of this.plugins) {
      const success = plugin.handleReceiveMessage(messageData);
      if (success) {
        return;
      }
    }
  }

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

  private addPlugin(plugin: GenericCanvasPlugin) {
    const existingPlugin = this.getPlugin(plugin.name);
    if (existingPlugin) {
      throw new CanvasInterface.PluginAlreadyExistsError(existingPlugin.name);
    }
    plugin.initialize((message) => this.sendMessage(message));
    this.plugins.push(plugin);
  }
}
