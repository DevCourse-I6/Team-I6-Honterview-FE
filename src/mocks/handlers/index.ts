import interviewsHandlers from './interview';
import questionHandlers from './questions';
import { questionsListHandlers } from './questionsList';

export const handlers = [
  ...interviewsHandlers,
  ...questionHandlers,
  ...questionsListHandlers,
];
