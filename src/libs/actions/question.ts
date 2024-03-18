'use server';

import { cookies } from 'next/headers';

import {
  IResponsePostTailQuestion,
  IResponseRePostTailQuestion,
} from '@/types/Response/questions';
import { apiServer } from '@/utils/apiServer';

import { IClickQuestionBookmark, IClickQuestionHeart } from '../types/response';
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

export const clickQuestionHeartAction = async (
  questionId: number,
): Promise<IClickQuestionHeart> => {
  const response = await apiServer.post(
    `api/v1/questions/${questionId}/hearts`,
    {
      cache: 'no-store',
    },
  );

  if (response.status === 401) {
    return reissueAccessToken(() => clickQuestionHeartAction(questionId));
  }

  if (!response.ok) {
    const errorData = await response.json();
    cookies().set('errorMessage', errorData.errorMessage, {
      maxAge: 5,
    });
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

export const clickQuestionBookmarkAction = async (
  questionId: number,
): Promise<IClickQuestionBookmark> => {
  const response = await apiServer.post(
    `api/v1/questions/${questionId}/bookmarks`,
    {
      cache: 'no-store',
    },
  );

  if (response.status === 401) {
    return reissueAccessToken(() => clickQuestionBookmarkAction(questionId));
  }

  if (!response.ok) {
    const errorData = await response.json();
    cookies().set('errorMessage', errorData.errorMessage, {
      maxAge: 5,
    });
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};
