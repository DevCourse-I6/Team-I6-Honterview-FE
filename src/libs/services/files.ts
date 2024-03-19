import { apiServer } from '@/utils/apiServer';

import { IGetVideoDownLoadUrl } from '../types/response';

export const getInterviewVideoUrl = async (
  videoId: number,
): Promise<IGetVideoDownLoadUrl> => {
  const response = await apiServer.get(
    `api/v1/videos/download-url/${videoId}`,
    {
      cache: 'no-store',
    },
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};
