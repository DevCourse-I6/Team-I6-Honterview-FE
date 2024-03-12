import { IResponseInterview } from '@/types/Response/interview';
import { apiClient } from '@/utils/apiClient';
import { apiServer } from '@/utils/apiServer';

import { reissueAccessToken } from '../actions/auth';
import { IPatchInterviewVisibilityPayload } from '../types/payload';
import {
  IGetInterviewInformation,
  IPatchInterviewVisibility,
} from '../types/response';

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

export const patchInterviewVisibility = async (
  interviewId: number,
  body: IPatchInterviewVisibilityPayload[],
): Promise<IPatchInterviewVisibility> => {
  const response = await apiClient.patch(
    `api/v1/interviews/${interviewId}/visibility`,
    {
      body: JSON.stringify(body),
      cache: 'no-store',
    },
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

export const getInterviewResult = async (
  interviewId: number,
): Promise<IGetInterviewInformation> => {
  const response = await apiServer.get(`api/v1/interviews/${interviewId}`, {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};
