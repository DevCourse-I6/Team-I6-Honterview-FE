import { useEffect } from 'react';

import Input from '@/components/input';
import useStepStore from '@/container/presetting/stores/useStepStore';

const QuestionScene = () => {
  const { setNextButton } = useStepStore();

  useEffect(() => {
    setNextButton(true);
  }, [setNextButton]);
  return <Input>질문을 선택하세요</Input>;
};

export default QuestionScene;
