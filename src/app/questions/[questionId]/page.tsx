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
      <div className="flex flex-col gap-8">
        <AnswerList
          initialData={questionInitialData}
          questionId={questionIdAsNumber}
          isModalLoad={false}
        />
      </div>
      <TailQuestions questionId={questionIdAsNumber} />
    </>
  );
};

export default Page;
