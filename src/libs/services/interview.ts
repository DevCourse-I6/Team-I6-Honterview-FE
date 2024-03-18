import { notFound } from 'next/navigation';

import { IResponseGetInterview } from '@/types/Response/interview';
import { apiServer } from '@/utils/apiServer';

import { reissueAccessToken } from '../actions/auth';
import { IGetInterviewInformation } from '../types/response';

export const getInterviewInfo = async (
  interviewId: string,
): Promise<IResponseGetInterview> => {
  const response = await apiServer.get(`api/v1/interviews/${interviewId}`, {
    cache: 'no-store',
  });

  if (response.status === 404) {
    notFound();
  }

  if (response.status === 401) {
    return reissueAccessToken(() => getInterviewInfo(interviewId));
  }

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

export const putUploadMediaBlob = async (
  uploadUrl: string,
  mediaBlobUrl: Blob[],
) => {
  const videoFile = new File(mediaBlobUrl, 'video.webm', {
    type: 'video/webm',
    lastModified: new Date().getTime(),
  });

  const response = await fetch(uploadUrl, {
    body: videoFile,
    method: 'PUT',
    headers: {
      'Content-Type': 'video/webm',
    },
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
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
