import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

import { MyPageResultDataType } from '../type';

const ResultItem = ({
  interviewId: id,
  firstQuestionContent: title,
  categoryNames: categoryList,
  createdAt: createdDate,
}: MyPageResultDataType) => {
  return (
    <Link
      href={`/interview/result/${id}`}
      className="flex flex-col p-[1rem]"
    >
      {createdDate && (
        <div className="mb-[1rem] flex gap-[0.3rem] text-[1.8rem] laptop:text-[1.8rem]">
          <span className="font-semibold">
            {createdDate.slice(0, 4)}년 {createdDate.slice(5, 7)}월{' '}
            {createdDate.slice(8, 10)}일 {createdDate.slice(11, 16)}
          </span>
          의 기록
        </div>
      )}
      <div className="flex flex-col gap-[0.8rem] rounded-lg bg-slate-50 p-[1rem]">
        <div className="flex gap-[1rem]">
          {categoryList?.map((category) => (
            <div
              key={uuidv4()}
              className="inline-flex items-center justify-center gap-1 rounded-lg bg-background-20 px-[1rem] py-[0.5rem] text-[1rem] text-black tablet:text-[1.2rem]"
            >
              {category}
            </div>
          ))}
        </div>
        <div className="pl-[0.5rem] text-[1.5rem]">
          <span className="whitespace-pre text-text-60">Q. </span>
          {title}
        </div>
      </div>
    </Link>
  );
};

export default ResultItem;
