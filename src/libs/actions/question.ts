'use server';

import {
  IResponsePostTailQuestion,
  IResponseRePostTailQuestion,
} from '@/types/Response/questions';
import { apiServer } from '@/utils/apiServer';

import { reissueAccessToken } from './auth';

export const postTailQuestion = async (
  interviewId: number,
  prevQuestion: string,
  prevAnswer: string,
): Promise<IResponsePostTailQuestion> => {
  const response = await apiServer.post(`api/v1/gpt/${interviewId}`, {
    body: JSON.stringify({ prevQuestion, prevAnswer }),
    cache: 'no-store',
  });

  if (response.status === 401) {
    return reissueAccessToken(() =>
      postTailQuestion(interviewId, prevQuestion, prevAnswer),
    );
  }

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

export const rePostTailQuestion = async (
  interviewId: number,
  prevQuestion: string,
): Promise<IResponseRePostTailQuestion> => {
  const response = await apiServer.post(`api/v1/gpt/${interviewId}/new`, {
    body: JSON.stringify({ prevQuestion }),
    cache: 'no-store',
  });

  if (response.status === 401) {
    return reissueAccessToken(() =>
      rePostTailQuestion(interviewId, prevQuestion),
    );
  }

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};
