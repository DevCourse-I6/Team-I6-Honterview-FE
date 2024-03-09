import { apiClient } from '@/utils/apiClient';

export const getInterviewInfo = async (interviewId: string) => {
  try {
    const response = await apiClient.get(`api/v1/interviews/${interviewId}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }

    throw new Error(String(error));
  }
};

export const postUploadMediaBlob = async (
  uploadUrl: string,
  mediaBlobUrl: Blob[],
) => {
  try {
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
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }

    throw new Error(String(error));
  }
};
