import {
  TailQuestions,
  TitleWithInterviewStart,
} from '@/container/questions/components';
import AnswerList from '@/container/questions/components/AnswerList';
import { IProps } from '@/container/questions/types';
import { getCategories } from '@/libs/services/categories';
import { getQuestionById } from '@/libs/services/questions';

// TODO: sangmin // 초기 좋아요에 대한 데이터 상태 적용하기
// TODO: sangmin // 프롭스드릴링 해결, 서버데이터, 클라이언트 상태 리팩토링
// TODO: sangmin // 꼬리질문 없을 경우 아이콘 추가

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
    data: { content: questionTitle, categoryNames, heartsCount },
  } = questionInitialData;

  return (
    <div className="m-auto max-w-[800px]">
      <div className=" mb-20">
        <TitleWithInterviewStart
          questionTitle={questionTitle}
          categoryNames={categoryNames}
          questionId={questionIdAsNumber}
          heartsCount={heartsCount}
          categories={categories}
        >
          {questionTitle}
        </TitleWithInterviewStart>
      </div>
      <div className="flex flex-col gap-16">
        <AnswerList
          initialData={questionInitialData}
          questionId={questionIdAsNumber}
        />
      </div>
      <hr className="my-20" />
      <TailQuestions questionId={questionIdAsNumber} />
    </div>
  );
};

export default Page;
