const initServer = async () => {
  const { server } = await import('@/mokes/server');

  server.listen();
};

const initWorker = async () => {
  const { worker } = await import('@/mokes/browser');

  worker.start();
};

export const initializeMocking = async () => {
  typeof window === 'undefined' ? await initServer() : await initWorker();
};
