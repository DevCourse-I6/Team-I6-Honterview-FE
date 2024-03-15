import { apiServer } from '@/utils/apiServer';

import { IGetCategories } from '../types/response';

export const getCategories = async (): Promise<IGetCategories> => {
  const response = await apiServer.get(`api/v1/categories`, {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};
