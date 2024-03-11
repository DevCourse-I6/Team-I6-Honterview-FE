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

// TODO: sangmin // 랜덤 질문 조회 api 꼬리질문으로 변경
// TODO: sangmin // api 전체적으로 정리, 팀원들과 맞추기

export const getQuestionById = ({
  questionId,
  page,
  size,
}: IGetQuestionByIdParams): Promise<IGetQuestionById> => {
  const url = `api/v1/questions/${questionId}?page=${page}&size=${size}`;
  return fetchAPI(url);
};

export const getRandomQuestionsByCategories = (
  questionId: number,
): Promise<IGetRandomQuestionsByCategories> => {
  const url = `api/v1/questions/${questionId}/random`;
  return fetchAPI(url);
};

export const clickQuestionHeart = (
  questionId: number,
): Promise<IClickQuestionHeart> => {
  const url = `api/v1/questions/${questionId}/hearts`;
  return fetchAPI(url, 'post');
};

export const clickAnswerHeart = (
  answerId: number,
): Promise<IClickAnswerHeart> => {
  const url = `api/v1/answers/${answerId}/hearts`;
  return fetchAPI(url, 'post');
};

export const getCategories = (): Promise<IGetCategories> => {
  const url = `api/v1/categories`;
  return fetchAPI(url);
};

export const patchQuestion = (
  questionId: number,
  body: IPatchQuestionRequestBody,
) => {
  const url = `api/v1/questions/${questionId}`;
  return fetchAPI(url, 'patch', { body: JSON.stringify(body) });
};
