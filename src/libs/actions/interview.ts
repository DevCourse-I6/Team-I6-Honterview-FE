'use server';

import { IRequestInterviewForm } from '@/types/interview';
import {
  IResponseGetUploadUrl,
  IResponsePostInterview,
} from '@/types/Response/interview';
import { apiServer } from '@/utils/apiServer';

import { reissueAccessToken } from './auth';

export const getUploadUrl = async (
  interviewId: number,
): Promise<IResponseGetUploadUrl> => {
  const response = await apiServer.get(
    `api/v1/videos/upload-url?interviewId=${interviewId}`,
  );

  if (response.status === 401) {
    return reissueAccessToken(() => getUploadUrl(interviewId));
  }

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

export const postInterview = async (
  interviewId: number,
  interviewForm: IRequestInterviewForm,
): Promise<IResponsePostInterview> => {
  const response = await apiServer.post(`api/v1/interviews/${interviewId}`, {
    body: JSON.stringify(interviewForm),
  });

  if (response.status === 401) {
    return reissueAccessToken(() => postInterview(interviewId, interviewForm));
  }

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

export const patchInterviewStatus = async (
  interviewId: number,
): Promise<void> => {
  const { status, ok } = await apiServer.patch(
    `api/v1/interviews/${interviewId}`,
  );

  if (status === 401) {
    return reissueAccessToken(() => patchInterviewStatus(interviewId));
  }

  if (!ok) {
    throw new Error(`HTTP error! status: ${status}`);
  }
};
