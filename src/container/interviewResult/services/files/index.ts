import fetchAPI from '@/container/questions/libs/fetchAPI';

import { IGetInterviewVideoUrl } from '../../types/files';

export const getInterviewVideoUrl = (
  videoId: number,
): Promise<IGetInterviewVideoUrl> => {
  const url = `api/files/download-url/${videoId}`;
  return fetchAPI(url);
};
