import Link from 'next/link';
import { v4 as v4uuid } from 'uuid';

import { FavoriteIcon } from '@/components/icon';

import QuestionInterviewButton from './components/questionInterviewButton';
import QuestionSort from './components/questionSort';
import QuestionTag from './components/questionTag';
import QuestionTitle from './components/questionTitle';
import { IProps } from './types';

const QuestionList = ({ handleTagClick, questionsList }: IProps) => {
  return (
    <div>
      <QuestionSort />

      <div className="my-[6rem]">
        {questionsList.map(({ id, content, categoryNames, heartsCount }) => (
          <div
            key={v4uuid()}
            className="rounded-lg px-[2rem] py-[2rem] hover:bg-gray-100"
          >
            <Link href={`/questions/${id}`}>
              <div className="flex pb-[2rem]">
                <QuestionTitle content={content} />
                <QuestionInterviewButton id={id} />
              </div>
              <div className="flex">
                {categoryNames.map((tag) => (
                  <QuestionTag
                    key={v4uuid()}
                    handleTagClick={handleTagClick}
                    tag={tag}
                  />
                ))}
                <div className="ml-auto flex items-center gap-2 px-[1.5rem] text-extraLarge text-text-60">
                  <FavoriteIcon className="fill-slate-300" />
                  {heartsCount}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionList;
