import { apiServer } from '@/utils/apiServer';

import { IGetInterviewVideoUrl } from '../types/response';

export const getInterviewVideoUrl = async (
  videoId: number,
): Promise<IGetInterviewVideoUrl> => {
  const response = await apiServer.get(`api/files/download-url/${videoId}`, {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};
