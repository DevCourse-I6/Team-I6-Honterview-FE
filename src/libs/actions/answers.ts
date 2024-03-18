'use server';

import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

import { apiServer } from '@/utils/apiServer';

import { IClickAnswerHeart } from '../types/response';
import { reissueAccessToken } from './auth';

export const clickAnswerHeart = async (
  answerId: number,
): Promise<IClickAnswerHeart> => {
  const response = await apiServer.post(`api/v1/answers/${answerId}/hearts`, {
    cache: 'no-store',
  });

  if (response.status === 401) {
    return reissueAccessToken(() => clickAnswerHeart(answerId));
  }

  if (!response.ok) {
    const errorData = await response.json();
    cookies().set('errorMessage', errorData.errorMessage, {
      maxAge: 5,
    });
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  revalidatePath('/questions/[questionId]', 'page');
  return response.json();
};
