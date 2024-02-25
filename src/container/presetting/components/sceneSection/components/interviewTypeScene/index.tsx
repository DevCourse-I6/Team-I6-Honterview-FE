import React, { useEffect } from 'react';

import Select from '@/components/select';
import useStepStore from '@/container/presetting/stores/useStepStore';

const InterviewTypeScene = () => {
  const { setNextButton } = useStepStore();

  useEffect(() => {
    setNextButton(true);
  }, [setNextButton]);

  return (
    <Select
      value=""
      options={[]}
    />
  );
};

export default InterviewTypeScene;
