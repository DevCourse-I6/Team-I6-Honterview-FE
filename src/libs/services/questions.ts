import { apiClient } from '@/utils/apiClient';
import { apiServer } from '@/utils/apiServer';

import { IGetQuestionByIdParams } from '../types/params';
import { IPatchQuestionPayload } from '../types/payload';
import {
  IClickQuestionBookmark,
  IClickQuestionHeart,
  IGetQuestionById,
  IGetRandomQuestionsByCategories,
} from '../types/response';

export const getQuestionById = async ({
  questionId,
  page,
  size,
}: IGetQuestionByIdParams): Promise<IGetQuestionById> => {
  const response = await apiServer.get(
    `api/v1/questions/${questionId}?page=${page}&size=${size}`,
    {
      cache: 'no-store',
    },
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

export const getQuestionByIdClient = async ({
  questionId,
  page,
  size,
}: IGetQuestionByIdParams): Promise<IGetQuestionById> => {
  const response = await apiClient.get(
    `api/v1/questions/${questionId}?page=${page}&size=${size}`,
    {
      cache: 'no-store',
    },
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

export const getRandomQuestionsByCategories = async (
  questionId: number,
): Promise<IGetRandomQuestionsByCategories> => {
  const response = await apiServer.get(
    `api/v1/questions/${questionId}/random`,
    {
      cache: 'no-store',
    },
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

export const clickQuestionHeart = async (
  questionId: number,
): Promise<IClickQuestionHeart> => {
  const response = await apiClient.post(
    `api/v1/questions/${questionId}/hearts`,
    {
      cache: 'no-store',
    },
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

export const clickQuestionBookmark = async (
  questionId: number,
): Promise<IClickQuestionBookmark> => {
  const response = await apiClient.post(
    `api/v1/questions/${questionId}/bookmarks`,
    {
      cache: 'no-store',
    },
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

export const patchQuestion = async (
  questionId: number,
  body: IPatchQuestionPayload,
) => {
  const response = await apiClient.patch(`api/v1/questions/${questionId}`, {
    body: JSON.stringify(body),
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
};

export const deleteQuestion = async (questionId: number) => {
  const response = await apiClient.delete(`api/v1/questions/${questionId}`, {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
};
