import { create } from 'zustand';

import { StepState } from './type';

const useStepStore = create<StepState>((set) => ({
  currentStep: 1,
  increaseStep: () =>
    set(({ currentStep }) => ({ currentStep: currentStep + 1 })),
  decreaseStep: () =>
    set(({ currentStep }) => ({ currentStep: currentStep - 1 })),
}));

export default useStepStore;
