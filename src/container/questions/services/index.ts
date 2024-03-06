import fetchAPI from '../libs/fetchAPI';
import {
  IClickAnswerHeart,
  IClickQuestionHeart,
  IGetCategories,
  IGetQuestionById,
  IGetRandomQuestionsByCategories,
  IPatchQuestionRequestBody,
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
  questionId: number,
): Promise<IGetRandomQuestionsByCategories> => {
  const url = `api/questions/${questionId}/random`;
  return fetchAPI(url);
};

export const clickQuestionHeart = (
  questionId: number,
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

export const getCategories = (): Promise<IGetCategories> => {
  const url = `api/categories`;
  return fetchAPI(url);
};

export const patchQuestion = (
  questionId: number,
  body: IPatchQuestionRequestBody,
) => {
  const url = `api/questions/${questionId}`;
  return fetchAPI(url, 'patch', { body: JSON.stringify(body) });
};
