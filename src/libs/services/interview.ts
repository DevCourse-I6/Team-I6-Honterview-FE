import { notFound } from 'next/navigation';

import { apiServer } from '@/utils/apiServer';

import { IGetInterviewInformation } from '../types/response';

export const getInterviewInfo = async (interviewId: string) => {
  const response = await apiServer.get(`api/v1/interviews/${interviewId}`, {
    cache: 'no-store',
    next: { tags: ['interviewInfo'] },
  });

  if (response.status === 404) {
    notFound();
  }

  if (response.status === 401) {
    return { status: 401, data: null };
  }

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();

  return { status: 200, data };
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
      'Cache-Control': 'no-cache',
    },
    cache: 'no-store',
  });

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
