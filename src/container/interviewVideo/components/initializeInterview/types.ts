import { ReactNode } from 'react';

import { IInterview } from '@/types/interview';

export interface IProps {
  interviewId: string;
  interviewData: IInterview;
  children: ReactNode;
}
