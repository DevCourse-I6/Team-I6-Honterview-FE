import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

import Button from '@/components/button';
import Tag from '@/components/tag';

import HeaderButton from './components/HeaderButton';
import { IProps } from './types';

const TitleWithInterviewStart = async ({
  children,
  categoryNames,
  questionId,
  heartsCount,
}: IProps) => {
  // TODO: 유저 정보 isHearted 적용하기

  return (
    <div>
      <HeaderButton
        questionId={questionId}
        isHearted={false}
        questionHeartCount={heartsCount}
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
        <Link
          className="absolute bottom-0 right-0 text-[1.5rem] text-xl"
          href={`/interview/presetting/${questionId}`}
        >
          <Button>모의 면접 시작</Button>
        </Link>
      </div>
    </div>
  );
};

export default TitleWithInterviewStart;
