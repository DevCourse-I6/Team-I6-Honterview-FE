import fetchAPI from '../libs/fetchAPI';
import { IGetQuestionByIdParams } from './types';

export const getQuestionById = ({
  questionId,
  page,
  size,
}: IGetQuestionByIdParams) => {
  const url = `questions/${questionId}?page=${page}&size=${size}`;
  return fetchAPI(url);
};

export const getRandomQuestionsByCategories = (questionId: string) => {
  const url = `questions/${questionId}/random`;
  return fetchAPI(url);
};
