import { setupServer } from 'msw/node';

import { handlers } from './handlers';

export const server = setupServer(...handlers);

server.events.on('request:start', ({ request }) => {
  // eslint-disable-next-line no-console
  console.log('MSW intercepted:', request.method, request.url);
});
