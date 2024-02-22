import { useEffect, useState } from 'react';

import useStepStore from '@/container/presetting/stores/useStepStore';

import { TERMS_AGREE_TEXT } from '../../constants';

const TermsAgreeSection = () => {
  const [isChecked, setIsChecked] = useState(false);
  const { setNextButton } = useStepStore();

  const handleCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target) {
      return;
    }
    const { checked } = e.target;
    setIsChecked(checked);
  };

  useEffect(() => {
    setNextButton(isChecked);
  }, [isChecked, setNextButton]);

  return (
    <label
      htmlFor="agree"
      className="flex w-full items-center justify-center gap-[1rem]"
    >
      <input
        type="checkbox"
        className="h-[1.5rem] w-[1.5rem] font-semibold"
        id="agree"
        onChange={handleCheckChange}
      />
      {TERMS_AGREE_TEXT}
    </label>
  );
};

export default TermsAgreeSection;
