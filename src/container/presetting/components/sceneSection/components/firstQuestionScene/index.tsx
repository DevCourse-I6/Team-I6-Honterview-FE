import { useEffect } from 'react';

import Input from '@/components/input';
import useStepStore from '@/container/presetting/stores/useStepStore';

const FirstQuestionScene = () => {
  const { setNextButtonOn } = useStepStore();

  useEffect(() => {
    setNextButtonOn();
  }, [setNextButtonOn]);
  return <Input>질문을 선택하세요</Input>;
};

export default FirstQuestionScene;
