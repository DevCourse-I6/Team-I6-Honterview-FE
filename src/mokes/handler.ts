import { http, HttpResponse } from 'msw';

const API_BASE_URL = process.env.API_BASE_URL;

export const handler = [
  http.get(`${API_BASE_URL}/posts`, () => {
    return HttpResponse.json({ id: 'elonmusk' }, { status: 200 });
  }),
];
