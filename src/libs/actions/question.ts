'use server';

import { apiClient } from '@/utils/apiClient';

export const postTailQuestion = async (
  interviewId: number,
  prevQuestion: string,
  prevAnswer: string,
) => {
  try {
    const response = await apiClient.post(`api/v1/gpt/${interviewId}`, {
      body: JSON.stringify({ prevQuestion, prevAnswer }),
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

export const rePostTailQuestion = async (
  interviewId: number,
  prevQuestion: string,
) => {
  try {
    const response = await apiClient.post(`api/v1/gpt/${interviewId}/new`, {
      body: JSON.stringify({ prevQuestion }),
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
