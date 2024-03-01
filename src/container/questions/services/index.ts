import fetchAPI from '../libs/fetchAPI';
import { IGetQuestionById, IGetRandomQuestionsByCategories } from '../types';
import { IGetQuestionByIdParams } from './types';

export const getQuestionById = ({
  questionId,
  page,
  size,
}: IGetQuestionByIdParams): Promise<IGetQuestionById> => {
  const url = `questions/${questionId}?page=${page}&size=${size}`;
  return fetchAPI(url);
};

export const getRandomQuestionsByCategories = (
  questionId: string,
): Promise<IGetRandomQuestionsByCategories> => {
  const url = `questions/${questionId}/random`;
  return fetchAPI(url);
};
