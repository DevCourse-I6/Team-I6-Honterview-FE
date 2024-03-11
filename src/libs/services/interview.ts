import { IResponseInterview } from '@/types/Response/interview';
import { apiServer } from '@/utils/apiServer';

import { reissueAccessToken } from '../actions/auth';

export const getInterviewInfo = async (
  interviewId: string,
): Promise<IResponseInterview> => {
  const response = await apiServer.get(`api/v1/interviews/${interviewId}`, {
    cache: 'no-store',
  });

  if (response.status === 401) {
    return reissueAccessToken(() => getInterviewInfo(interviewId));
  }

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};
