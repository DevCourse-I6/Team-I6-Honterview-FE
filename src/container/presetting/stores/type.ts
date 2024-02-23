export interface StepState {
  currentStep: number;
  isNextButtonOn: boolean;
  increaseStep: () => void;
  decreaseStep: () => void;
  setNextButton: (checked: boolean) => void;
}
