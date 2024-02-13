const initServer = async () => {
  const { server } = await import('@/mocks/server');

  server.listen();
};

const initWorker = async () => {
  const { worker } = await import('@/mocks/browser');

  worker.start();
};

export const initializeMocking = async () => {
  typeof window === 'undefined' ? await initServer() : await initWorker();
};
