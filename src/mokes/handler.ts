import { http, HttpResponse } from 'msw';

const API_BASE_URL = process.env.API_BASE_URL;

export const handler = [
  http.get(`${API_BASE_URL}/posts`, ({ cookies }) => {
    const { session } = cookies;

    return HttpResponse.json({ id: 'elonmusk', session }, { status: 200 });
  }),
  http.post(`${API_BASE_URL}/posts`, async ({ request }) => {
    const newPost = await request.json();

    return HttpResponse.json(newPost, { status: 200 });
  }),
  http.delete('/posts/:id', ({ params }) => {
    const { id } = params;

    return HttpResponse.json({ id }, { status: 200 });
  }),
];
