import EventEmitter from 'eventemitter3';
import type {
  BaseClientMessage,
  BaseHostMessage,
} from '@dscvr-one/canvas-interface';
import { CanvasInterface } from '.';

type SendMessageListener = (message: BaseClientMessage) => void;

export abstract class CanvasPlugin<
  CM extends BaseClientMessage,
  HM extends BaseHostMessage,
> {
  protected eventBus = new EventEmitter<string, HM>();
  private _sendMessageListener: SendMessageListener | undefined = undefined;

  constructor(private _name: string) {}

  get name() {
    return this._name;
  }

  get initialized() {
    return !!this._sendMessageListener;
  }

  initialize(listener: SendMessageListener) {
    this._sendMessageListener = listener;
  }

  handleReceiveMessage = (event: BaseHostMessage) => {
    const parsedMessage = this.parseHostMessage(event);
    if (!parsedMessage) {
      return false;
    }
    this.eventBus.emit(parsedMessage.type, parsedMessage);
    return true;
  };

  destroy() {
    this._sendMessageListener = undefined;
    this.eventBus.removeAllListeners();
    this.onDestroy();
  }

  protected sendMessage(message: CM) {
    if (!this._sendMessageListener) {
      throw new CanvasInterface.PluginNotInstalledError(this.name);
    }
    this._sendMessageListener(message);
  }

  protected abstract parseHostMessage(message: BaseHostMessage): HM | undefined;
  protected abstract onDestroy(): void;
}
