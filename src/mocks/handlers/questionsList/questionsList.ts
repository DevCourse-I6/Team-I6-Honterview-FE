import { http, HttpResponse } from 'msw';

import { questionsList } from '@/mocks/fixtures/questionsList/questionsList';

export const questionsListHandler = [
  http.get('/api/questions/list', () => {
    // http.get('/api/questions/list', ({ request }) => {
    // const url = new URL(request.url);

    // const page = Number(url.searchParams.get('page')) || 1;
    // const size = Number(url.searchParams.get('size')) || 5;

    // const query = url.searchParams.get('query') || '';
    // const categories = url.searchParams.get('categories') || '';
    // const order = url.searchParams.get('order') || 'recent';

    // 콘솔 로그 제거
    // console.log(
    //   `Page: ${page}, Size: ${size}, Query: ${query}, Categories: ${categories}, Order: ${order}`,
    // );

    return HttpResponse.json(questionsList);
  }),
];
