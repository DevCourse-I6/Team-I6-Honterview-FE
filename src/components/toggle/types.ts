export interface IToggle {
  labelText?: string;
  defaultOn?: boolean;
  disabled?: boolean;
  className?: string;
  onChange?: (value: boolean) => void;
}
