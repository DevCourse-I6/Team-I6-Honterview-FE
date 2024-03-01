import { v4 as v4uuid } from 'uuid';

import Button from '@/components/button';

import QuestionSort from './components/questionSort';
import QuestionTag from './components/questionTag';
import QuestionTitle from './components/questionTitle';
import { IProps } from './types';

const QuestionList = ({ handleTagClick }: IProps) => {
  const data = [
    {
      content: '인생이란 무엇일까',
      name: ['Next.js', 'JavaScript'],
      id: 1,
    },
    { content: '속도가 아닌 방향성', name: ['JavaScript'], id: 2 },
  ];

  return (
    <div>
      <QuestionSort />

      <div className="my-[6rem]">
        {data.map(({ content, name }) => (
          <div key={v4uuid()}>
            <div className="my-[3rem]  flex justify-between">
              <QuestionTitle content={content} />
              <Button className="h-[4rem] flex-none px-6 py-6">
                모의 면접 시작
              </Button>
            </div>
            {name.map((tag) => (
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
