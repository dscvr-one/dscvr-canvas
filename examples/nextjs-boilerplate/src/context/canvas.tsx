import React, {
  useState,
  createContext,
  useEffect,
  useContext,
  useRef,
} from 'react';
import {
  createCanvasClient,
  type CanvasClient,
  type CanvasInterface,
} from '@dscvr-one/canvas-client-sdk';
import { registerCanvasWallet } from '@dscvr-one/canvas-wallet-adapter';
import { validateHostMessage } from '@/api/dscvr';

type CanvasContextType = {
  client?: CanvasClient;
  user?: CanvasInterface.Lifecycle.User;
  content?: CanvasInterface.Lifecycle.Content;
};

const CanvasContext = createContext<CanvasContextType>({});

export const CanvasProvider = ({ children }: { children: React.ReactNode }) => {
  const [canvasContext, setCanvasContext] = useState<CanvasContextType>({});
  const resizeObserverRef = useRef<ResizeObserver>();

  const initialize = async (canvasClient: CanvasClient) => {
    registerCanvasWallet(canvasClient);
    try {
      const response = await canvasClient.ready();
      const isValidResponse = await validateHostMessage(response);
      if (isValidResponse) {
        setCanvasContext({
          client: canvasClient,
          user: response.untrusted.user,
          content: response.untrusted.content,
        });
      }
    } catch (error) {
      console.error('Failed to initialize canvas', error);
    }
  };

  useEffect(() => {
    const canvasClient = createCanvasClient();
    setCanvasContext({ client: canvasClient });

    if (!canvasClient) return;
    initialize(canvasClient);

    return () => {
      canvasClient?.destroy();
    };
  }, []);

  useEffect(() => {
    if (canvasContext.client) {
      resizeObserverRef.current = new ResizeObserver(() =>
        canvasContext.client?.resize(),
      );
      resizeObserverRef.current.observe(document.body);

      return () => {
        resizeObserverRef.current?.disconnect();
      };
    }
  }, [canvasContext.client]);

  return (
    <CanvasContext.Provider value={{ ...canvasContext }}>
      {children}
    </CanvasContext.Provider>
  );
};

export const useCanvasContext = () => {
  const context = useContext(CanvasContext);
  if (context === undefined) {
    throw new Error(
      'useCanvasClientContext must be used within a CanvasClientProvider',
    );
  }
  return context;
};

export default CanvasContext;
