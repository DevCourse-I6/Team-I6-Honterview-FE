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

export const getQuestionsList = async () => {
  const res = await apiClient.get(`api/v1/questions`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};
