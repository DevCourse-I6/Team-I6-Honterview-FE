import '../style.css';

import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { notify } from '@/components/toast';
import { getMyInterview } from '@/services/mypage';

import ResultItem from './components/ResultItem';
import { MyPageResultDataSectionProps, MyPageResultDataType } from './type';

const ResultSection = ({
  setItemCount,
  currentPage,
  isVisible,
}: MyPageResultDataSectionProps) => {
  const [resultDatas, setResultDatas] = useState<MyPageResultDataType[] | null>(
    null,
  );

  useEffect(() => {
    getMyInterview(currentPage)
      .then(({ data }) => {
        setResultDatas(data.data);
        setItemCount(data.totalElements);
      })
      .catch((e) => notify('error', e.message));
  }, [currentPage, setItemCount]);

  return (
    <div
      className={`flex w-screen flex-1 flex-col items-center gap-[2rem] p-[1rem] pb-[3rem] tablet:w-[50rem] ${!isVisible && 'hidden'}`}
    >
      {resultDatas?.map((content) => (
        <div
          className="mypage_card_item flex w-full flex-col gap-[1rem] rounded-xl border border-dashed border-gray-300"
          key={uuidv4()}
        >
          <ResultItem
            interviewId={content.interviewId}
            firstQuestionContent={content.firstQuestionContent}
            categoryNames={content.categoryNames}
            createdAt={content.createdAt}
            answerType={content.answerType}
          />
        </div>
      ))}
    </div>
  );
};

export default ResultSection;
