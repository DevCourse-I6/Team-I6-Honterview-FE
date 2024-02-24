import { create } from 'zustand';

import { StepState } from './type';

const useStepStore = create<StepState>((set) => ({
  currentStep: 1,
  isNextButtonOn: false,
  increaseStep: () =>
    set(({ currentStep }) => ({ currentStep: currentStep + 1 })),
  decreaseStep: () =>
    set(({ currentStep }) => ({ currentStep: currentStep - 1 })),
  setNextButton: (checked) => set(() => ({ isNextButtonOn: checked })),
}));

export default useStepStore;
