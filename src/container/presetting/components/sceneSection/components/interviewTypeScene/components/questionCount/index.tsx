import Select from '@/components/select';
import usePresettingDataStore from '@/container/presetting/stores/usePresettingDataStore';

import { countData } from './constants';
import { QuestionCountSectionProps } from './type';

const QuestionCountSection = ({ setNextItemOn }: QuestionCountSectionProps) => {
  const { setQuestionCount, questionCount } = usePresettingDataStore();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNextItemOn();
    if (e.target.value === '선택') {
      setQuestionCount(0);
      return;
    }
    setQuestionCount(parseInt(e.target.value, 10));
  };

  return (
    <div>
      <h1 className="text-large font-semibold">질문 개수</h1>
      <p className="mb-[1rem] w-[20rem] text-extraSmall text-text-60">
        연습을 진행할 질문의 개수를 선택해주세요
      </p>
      <Select
        options={countData}
        value={`${questionCount}개`}
        onChange={handleChange}
        className="w-[8.5rem] px-[1rem] py-[0.5rem]"
      />
    </div>
  );
};

export default QuestionCountSection;
