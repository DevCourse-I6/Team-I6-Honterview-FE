import { http, HttpResponse } from 'msw';

import { categories } from '@/mocks/fixtures/questionsList/categories';

export const categoriesHandler = [
  http.get('/api/categories', () => {
    return HttpResponse.json(categories);
  }),
];
