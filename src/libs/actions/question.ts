'use server';

import { apiClient } from '@/utils/apiClient';

export const changeQuestionByAnswer = async (answerContent: string) => {
  try {
    const response = await apiClient.post(`api/question/answer`, {
      body: JSON.stringify({ answerContent }),
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

export const changeQuestionByCategories = async (categories: string[]) => {
  try {
    const response = await apiClient.post(`api/question/category`, {
      body: JSON.stringify({ categories }),
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
