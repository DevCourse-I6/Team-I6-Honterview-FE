import Image from 'next/image';

import {
  TailQuestions,
  TitleWithInterviewStart,
} from '@/container/questions/components';
import AnswerList from '@/container/questions/components/AnswerList';
import { IProps } from '@/container/questions/types';
import { getCategories } from '@/libs/services/categories';
import { getQuestionById } from '@/libs/services/questions';

const Page = async ({ params }: IProps) => {
  const { questionId } = params;
  const questionIdAsNumber = Number(questionId);
  const { data: categories } = await getCategories();

  const questionInitialData = await getQuestionById({
    questionId: questionIdAsNumber,
    page: 1,
    size: 5,
  });

  const {
    data: {
      content: questionTitle,
      categoryNames,
      heartsCount,
      isHearted,
      isBookmarked,
    },
  } = questionInitialData;

  return (
    <>
      <div className=" mb-20">
        <TitleWithInterviewStart
          questionTitle={questionTitle}
          categoryNames={categoryNames}
          questionId={questionIdAsNumber}
          heartsCount={heartsCount}
          categories={categories}
          isHearted={isHearted}
          isBookmarked={isBookmarked}
        >
          {questionTitle}
        </TitleWithInterviewStart>
      </div>
      {questionInitialData.data.answers.data.length === 0 ? (
        <div className="flex flex-col items-center gap-5 opacity-10">
          <Image
            quality={100}
            src="/images/logo-removebg.png"
            alt="혼터뷰 로고"
            width={150}
            height={150}
          />
          <h2 className="text-large">답변이 존재하지 않습니다...</h2>
        </div>
      ) : (
        <div className="flex flex-col gap-8">
          <AnswerList
            initialData={questionInitialData}
            questionId={questionIdAsNumber}
            isModalLoad={false}
          />
        </div>
      )}

      <TailQuestions questionId={questionIdAsNumber} />
    </>
  );
};

export default Page;
