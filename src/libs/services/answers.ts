import { apiClient } from '@/utils/apiClient';

import { IClickAnswerHeart } from '../types/response';

export const clickAnswerHeart = async (
  answerId: number,
): Promise<IClickAnswerHeart> => {
  const response = await apiClient.post(`api/v1/answers/${answerId}/hearts`, {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};
