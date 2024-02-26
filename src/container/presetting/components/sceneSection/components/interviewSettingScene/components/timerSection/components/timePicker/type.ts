export interface TimePickerProps {
  type: 'minute' | 'second';
  timeRange: number[];
  index: number;
  isArrowDisabled?: boolean;
  onChange: (num: number) => void;
}
