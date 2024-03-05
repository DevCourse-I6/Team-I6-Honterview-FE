import { IInterview } from '@/types/interview';

export interface IProps
  extends Pick<IInterview, 'questionCount' | 'timer' | 'questions'> {}
