export interface TimePickerProps {
  type: 'min' | 'sec';
  timeRange: number[];
  onChange: (num: number) => void;
  value: number;
}
