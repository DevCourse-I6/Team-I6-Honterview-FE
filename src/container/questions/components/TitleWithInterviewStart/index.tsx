import { v4 as uuidv4 } from 'uuid';

import Button from '@/components/button';
import { BookmarkIcon } from '@/components/icon';
import Tag from '@/components/tag';

import { IProps } from './types';

const TitleWithInterviewStart = ({ children, categoryNames }: IProps) => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex gap-4">
          <button
            type="button"
            className="rounded-3xl bg-slate-100 px-5 py-2"
          >
            수정
          </button>
          <button
            type="button"
            className="rounded-3xl bg-slate-100 px-5 py-2"
          >
            삭제
          </button>
        </div>
        <div>
          <BookmarkIcon />
        </div>
      </div>
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
