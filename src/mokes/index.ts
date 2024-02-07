const initServer = async () => {
  const { server } = await import('@/mokes/server');

  console.log('MSW 서버 연결');
  server.listen();
};

const initWorker = async () => {
  const { worker } = await import('@/mokes/browser');

  console.log('MSW 브라우저 연결');
  worker.start();
};

export const initializeMocking = () => {
  typeof window === 'undefined' ? initServer() : initWorker();
};
