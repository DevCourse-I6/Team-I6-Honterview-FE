import { apiClient } from '@/utils/apiClient';

export const getCategories = async () => {
  const res = await apiClient.get(`api/v1/categories`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

export const getQuestionsList = async ({
  page = 1,
  size = 5,
  query = '',
  categories = [] as string[],
  order = '최신순', // 기본값을 한글 문자열로 지정
}) => {
  let normalizedOrder = order;

  if (order === '좋아요순') {
    normalizedOrder = 'hearts';
  } else if (order === '최신순') {
    normalizedOrder = 'recent';
  } else {
    normalizedOrder = 'recent';
  }

  const categoriesString = categories.join(',');

  const res = await apiClient.get(
    `api/v1/questions?page=${page}&size=${size}&query=${query}&categories=${categoriesString}&order=${normalizedOrder}`,
    {
      cache: 'no-store',
    },
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};
