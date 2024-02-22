export interface StepCircleProps {
  number: number;
  isPassed: boolean;
  title: string;
  isCurrent: boolean;
}

export interface StepBarProps {
  isPassed: boolean;
}

export type StepNumber = 1 | 2 | 3 | 4;
