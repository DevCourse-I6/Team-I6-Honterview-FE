import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

import Button from '@/components/button';
import Tag from '@/components/tag';

import HeaderButton from './components/HeaderButton';
import { IProps } from './types';

// TODO: sangmin // 북마크 아이콘 하트 아이콘으로 변경 or 추가
// TODO: sangmin // 수정 삭제에 대한 권한 UI 적용
// TODO: sangmin // 삭제 구현
// TODO: sangmin // 수정 성공 후 모달 종료

const TitleWithInterviewStart = async ({
  children,
  questionTitle,
  categoryNames,
  questionId,
  heartsCount,
  categories,
}: IProps) => {
  return (
    <div>
      <HeaderButton
        questionId={questionId}
        isHearted={false}
        questionHeartCount={heartsCount}
        questionTitle={questionTitle}
        categoryNames={categoryNames}
        categories={categories}
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
