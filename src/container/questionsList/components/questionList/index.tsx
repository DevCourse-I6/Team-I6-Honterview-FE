import { v4 as v4uuid } from 'uuid';

import Button from '@/components/button';

import QuestionSort from './components/questionSort';
import QuestionTag from './components/questionTag';
import QuestionTitle from './components/questionTitle';
import { IProps } from './types';

const QuestionList = ({ handleTagClick, questionsList }: IProps) => {
  return (
    <div>
      <QuestionSort />

      <div className="my-[6rem]">
        {questionsList.map(({ content, categoryNames }) => (
          <div
            key={v4uuid()}
            className="rounded-lg px-[2rem] py-[2rem] hover:bg-gray-100"
          >
            <div className="flex justify-between pb-[2rem]">
              <QuestionTitle content={content} />
              <Button className="h-[4rem] flex-none px-6 py-6">
                모의 면접 시작
              </Button>
            </div>
            {categoryNames.map((tag) => (
              <QuestionTag
                key={v4uuid()}
                handleTagClick={handleTagClick}
                tag={tag}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionList;
