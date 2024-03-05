import fetchAPI from '../libs/fetchAPI';
import {
  IClickAnswerHeart,
  IClickQuestionHeart,
  IGetQuestionById,
  IGetRandomQuestionsByCategories,
} from '../types';
import { IGetQuestionByIdParams } from './types';

export const getQuestionById = ({
  questionId,
  page,
  size,
}: IGetQuestionByIdParams): Promise<IGetQuestionById> => {
  const url = `api/questions/${questionId}?page=${page}&size=${size}`;
  return fetchAPI(url);
};

export const getRandomQuestionsByCategories = (
  questionId: string,
): Promise<IGetRandomQuestionsByCategories> => {
  const url = `api/questions/${questionId}/random`;
  return fetchAPI(url);
};

export const clickQuestionHeart = (
  questionId: string,
): Promise<IClickQuestionHeart> => {
  const url = `api/questions/${questionId}/hearts`;
  return fetchAPI(url, 'post');
};

export const clickAnswerHeart = (
  answerId: number,
): Promise<IClickAnswerHeart> => {
  const url = `api/answers/${answerId}/hearts`;
  return fetchAPI(url, 'post');
};
