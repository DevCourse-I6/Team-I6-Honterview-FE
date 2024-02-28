import { apiClient } from '@/utils/apiClient';

export const getInterviewInfo = async (interviewId: string) => {
  try {
    const response = await apiClient.get(`interview/${interviewId}`, {
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
