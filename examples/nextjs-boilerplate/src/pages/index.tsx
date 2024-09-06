import { Inter } from 'next/font/google';
import { useCanvasContext } from '@/context/canvas';
import SendSol from '@/components/send-sol';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const canvasContext = useCanvasContext();

  if (!canvasContext.client?.isReady) {
    return (
      <main
        className={`flex flex-col items-center justify-center p-24 ${inter.className}`}
      >
        <h1 className="text-3xl font-semibold text-center">Loading...</h1>
      </main>
    );
  }

  return (
    <main
      className={`flex flex-col items-center justify-between p-24 ${inter.className}`}
    >
      {canvasContext.user && (
        <div>
          <b>User Name: </b>
          <span className="text-gray-300 group-hover:text-indigo-300">
            {canvasContext.user.username}
          </span>
        </div>
      )}
      <SendSol />
    </main>
  );
}
