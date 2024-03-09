'use server';

import { IRequestInterviewForm } from '@/types/interview';
import { apiClient } from '@/utils/apiClient';

export const getUploadUrl = async (interviewId: number) => {
  try {
    const response = await apiClient.get(
      `api/v1/files/upload-url?interviewId=${interviewId}`,
      {
        cache: 'no-store',
      },
    );

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

export const postInterview = async (
  interviewId: number,
  interviewForm: IRequestInterviewForm,
) => {
  try {
    const response = await apiClient.post(`api/v1/interviews/${interviewId}`, {
      body: JSON.stringify(interviewForm),
      cache: 'no-store',
    });

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
