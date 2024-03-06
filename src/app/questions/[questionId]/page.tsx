import {
  TailQuestions,
  TitleWithInterviewStart,
} from '@/container/questions/components';
import AnswerList from '@/container/questions/components/AnswerList';
import { getQuestionById } from '@/container/questions/services';
import { IProps } from '@/container/questions/types';

const Page = async ({ params }: IProps) => {
  const { questionId } = params;
  const questionIdAsNumber = Number(questionId);

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
