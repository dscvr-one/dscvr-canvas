import { CanvasClient } from './client';
import { isIframeContext } from './context';

let canvasClient: CanvasClient | undefined = undefined;

export const createCanvasClient = (): CanvasClient | undefined => {
  if (!isIframeContext()) {
    console.warn('CanvasClient must be created in an iframe context');
    return;
  }

  if (canvasClient) {
    return canvasClient;
  }

  // this is deprecated only for external use, is safe to use here
  canvasClient = new CanvasClient();
  return canvasClient;
};
