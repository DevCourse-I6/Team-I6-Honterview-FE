import { categoriesHandler } from '@/mocks/handlers/questionsList/categories';
import { questionsListHandler } from '@/mocks/handlers/questionsList/questionsList';

export const questionsListHandlers = [
  ...categoriesHandler,
  ...questionsListHandler,
];
