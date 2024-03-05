import AutocompleteSearch from '@/components/autocompleteSearch';
import { XIcon } from '@/components/icon';
import Tag from '@/components/tag';
import usePresettingDataStore from '@/container/presetting/stores/usePresettingDataStore';

import { dummyQuestions } from '../../dummydata';

const QuestionSection = () => {
  const { setFirstQuestion, firstQuestion } = usePresettingDataStore();

  return (
    <div className="flex w-[40rem] flex-col gap-[1rem]">
      <div>
        <h2 className="text-large font-semibold">질문 선택</h2>
      </div>
      <div className="h-[4rem] w-full">
        <AutocompleteSearch
          totalDatas={dummyQuestions}
          selectedList={firstQuestion ? [firstQuestion] : []}
          onSelectItem={(question) => {
            setFirstQuestion(question);
          }}
          placeholder="예) React의 라이프 사이클에 대해 설명해주세요"
          canCreate
        />
      </div>

      <div className="flex min-h-[2em] w-full gap-[1rem]">
        {firstQuestion && (
          <Tag className="border border-primaries-primary bg-white text-primaries-primary hover:bg-white active:bg-white">
            {firstQuestion.name}
            <button
              type="button"
              onClick={() => {
                setFirstQuestion(undefined);
              }}
            >
              <XIcon className="h-[1.5rem] stroke-primaries-primary" />
            </button>
          </Tag>
        )}
      </div>
    </div>
  );
};

export default QuestionSection;
