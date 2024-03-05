import { v4 as uuidv4 } from 'uuid';

import Button from '@/components/button';
import Tag from '@/components/tag';

import { clickQuestionHeart } from '../../services';
import HeaderButton from './components/HeaderButton';
import { IProps } from './types';

const TitleWithInterviewStart = async ({
  children,
  categoryNames,
  questionId,
}: IProps) => {
  const {
    data: { isHearted, questionHeartCount },
  } = await clickQuestionHeart(questionId);

  return (
    <div>
      <HeaderButton
        questionId={questionId}
        isHearted={isHearted}
        questionHeartCount={questionHeartCount}
      />
      <div className="relative flex flex-col gap-7">
        <h1 className="text-[3.2rem] font-medium leading-tight text-[#3C4654]">
          {children}
        </h1>
        <ul className="flex w-1/2 flex-wrap gap-4">
          {categoryNames.map((category) => (
            <li key={uuidv4()}>
              <Tag
                style={{
                  backgroundColor: 'rgb(227, 228, 231)',
                  color: 'black',
                  borderRadius: '1.5rem',
                  fontWeight: '600',
                }}
              >
                {category}
              </Tag>
            </li>
          ))}
        </ul>
        <Button
          className="bottom-0 right-0 text-xl"
          style={{ position: 'absolute', fontSize: '1.5rem' }}
        >
          모의 면접 시작
        </Button>
      </div>
    </div>
  );
};

export default TitleWithInterviewStart;
