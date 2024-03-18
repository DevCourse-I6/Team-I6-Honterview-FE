'use server';

import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

import { apiServer } from '@/utils/apiServer';

import { IPatchQuestionPayload } from '../types/payload';
import { reissueAccessToken } from './auth';

export const patchQuestion = async (
  questionId: number,
  body: IPatchQuestionPayload,
): Promise<unknown> => {
  const response = await apiServer.patch(
    `api/v1/admin/questions/${questionId}`,
    {
      body: JSON.stringify(body),
      cache: 'no-store',
    },
  );

  if (response.status === 401) {
    return reissueAccessToken(() => patchQuestion(questionId, body));
  }

  if (!response.ok) {
    const errorData = await response.json();
    cookies().set('errorMessage', errorData.errorMessage, {
      maxAge: 5,
    });
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  revalidatePath('/questions/[questionId]', 'page');
};

export const deleteQuestion = async (questionId: number): Promise<unknown> => {
  const response = await apiServer.delete(
    `api/v1/admin/questions/${questionId}`,
    {
      cache: 'no-store',
    },
  );

  if (response.status === 401) {
    return reissueAccessToken(() => deleteQuestion(questionId));
  }

  if (!response.ok) {
    const errorData = await response.json();
    cookies().set('errorMessage', errorData.errorMessage, {
      maxAge: 5,
    });
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  revalidatePath('/questions', 'page');
};
