import { notFound } from 'next/navigation';

import { IResponseGetInterview } from '@/types/Response/interview';
import { apiServer } from '@/utils/apiServer';

import { reissueAccessToken } from '../actions/auth';

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
  const videoBlob = new Blob(mediaBlobUrl, { type: 'video/webm' });
  const formData = new FormData();

  formData.append('video', videoBlob);

  const response = await fetch(uploadUrl, {
    body: videoBlob,
    method: 'PUT',
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
};
