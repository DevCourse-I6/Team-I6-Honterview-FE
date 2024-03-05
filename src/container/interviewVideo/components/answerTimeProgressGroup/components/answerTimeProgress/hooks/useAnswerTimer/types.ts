import { IInterview } from '@/types/interview';

export interface IProps extends Pick<IInterview, 'timer'> {
  defaultTime: number;
  enabled: boolean;
  onEnded?: (time: number) => void;
}
