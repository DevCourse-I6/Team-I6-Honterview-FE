import { create } from 'zustand';

import { StepState } from './type';

const useStepStore = create<StepState>((set) => ({
  totalStep: 4,
  currentStep: 1,
  isNextButtonOn: false,
  increaseStep: () =>
    set(({ currentStep }) => ({ currentStep: currentStep + 1 })),
  decreaseStep: () =>
    set(({ currentStep }) => ({ currentStep: currentStep - 1 })),
  setCameraStep: () => set(() => ({ totalStep: 4 })),
  setChattingStep: () => set(() => ({ totalStep: 2 })),
  setNextButtonOn: () => set(() => ({ isNextButtonOn: true })),
  setNextButtonOff: () => set(() => ({ isNextButtonOn: false })),
}));

export default useStepStore;
