import { setupServer } from 'msw/node';
import { handler } from './handler';

export const server = setupServer(...handler);

server.events.on('request:start', ({ request }) => {
  console.log('MSW intercepted:', request.method, request.url);
});
