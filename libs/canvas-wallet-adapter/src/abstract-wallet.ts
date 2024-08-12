import type {
  StandardEventsListeners,
  StandardEventsNames,
  StandardEventsOnMethod,
  Wallet,
  WalletAccount,
} from '@wallet-standard/core';

// source: https://github.com/wallet-standard/wallet-standard/blob/master/packages/example/wallets/src/abstractWallet.ts
export abstract class AbstractWallet implements Wallet {
  #listeners: { [E in StandardEventsNames]?: StandardEventsListeners[E][] } =
    {};

  protected _accounts: WalletAccount[];

  get version() {
    return '1.0.0' as const;
  }

  abstract get name(): Wallet['name'];
  abstract get icon(): Wallet['icon'];
  abstract get chains(): Wallet['chains'];
  abstract get features(): Wallet['features'];

  get accounts() {
    return this._accounts.slice();
  }

  constructor() {
    this._accounts = [];
  }

  protected _on: StandardEventsOnMethod = (event, listener) => {
    this.#listeners[event]?.push(listener) ||
      (this.#listeners[event] = [listener]);
    return (): void => this._off(event, listener);
  };

  protected _emit<E extends StandardEventsNames>(
    event: E,
    ...args: Parameters<StandardEventsListeners[E]>
  ): void {
    // eslint-disable-next-line prefer-spread
    this.#listeners[event]?.forEach((listener) => listener.apply(null, args));
  }

  protected _off<E extends StandardEventsNames>(
    event: E,
    listener: StandardEventsListeners[E],
  ): void {
    this.#listeners[event] = this.#listeners[event]?.filter(
      (existingListener) => listener !== existingListener,
    );
  }
}
