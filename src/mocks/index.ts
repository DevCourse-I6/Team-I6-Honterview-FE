export const initMocks = async () => {
  const isServer = typeof window === 'undefined';

  if (isServer) {
    const { server } = await import('@/mocks/server');

    server.listen({ onUnhandledRequest: 'bypass' });
  } else {
    const { worker } = await import('@/mocks/browser');

    worker.start({ onUnhandledRequest: 'bypass' });
  }
};
