import { useEffect, useState } from 'react';

import AutocompleteSearch from '@/components/autocompleteSearch';
import { AutocompleteDataType } from '@/components/autocompleteSearch/type';
import { XIcon } from '@/components/icon';
import Loading from '@/components/loading';
import Tag from '@/components/tag';
import usePresettingDataStore from '@/container/presetting/stores/usePresettingDataStore';
import { getQuestionListByCategories } from '@/services/presetting';

import { QuestionAPIType } from './type';

const QuestionSection = () => {
  const { setFirstQuestion, firstQuestion, firstQuestionTags } =
    usePresettingDataStore();
  const [questionList, setQuestionList] = useState<AutocompleteDataType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const categories = firstQuestionTags.map(({ name }) => name).join(',');

    getQuestionListByCategories(categories).then(({ data }) => {
      const questions = data.map((item: QuestionAPIType) => ({
        id: item.id,
        name: item.content,
      }));
      setQuestionList(questions);
    });
    setIsLoading(false);
  }, [firstQuestionTags, firstQuestionTags.length]);

  return (
    <div className="flex w-[40rem] flex-col gap-[1rem]">
      <div>
        <h2 className="text-large font-semibold">질문 선택</h2>
      </div>
      <div className="h-[4rem] w-full">
        {isLoading ? (
          <Loading />
        ) : (
          <AutocompleteSearch
            totalDatas={questionList}
            selectedList={firstQuestion ? [firstQuestion] : []}
            onSelectItem={(question) => {
              setFirstQuestion(question);
            }}
            placeholder="예) React의 라이프 사이클에 대해 설명해주세요"
            canCreate
          />
        )}
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
