export interface StepState {
  currentStep: number;
  increaseStep: () => void;
  decreaseStep: () => void;
}
