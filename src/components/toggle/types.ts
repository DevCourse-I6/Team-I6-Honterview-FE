export interface IToggle {
  labelText?: string;
  defaultOn?: boolean;
  disabled?: boolean;
  addStyleClassName?: string;
  onChange?: (value: boolean) => void;
}
