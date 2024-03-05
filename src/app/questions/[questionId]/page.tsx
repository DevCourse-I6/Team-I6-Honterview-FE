import {
  TailQuestions,
  TitleWithInterviewStart,
} from '@/container/questions/components';
import AnswerList from '@/container/questions/components/AnswerList';
import { getQuestionById } from '@/container/questions/services';
import { IProps } from '@/container/questions/types';

const Page = async ({ params }: IProps) => {
  const { questionId } = params;

  const questionInitialData = await getQuestionById({
    questionId,
    page: 1,
    size: 5,
  });

  const {
    data: { content: questionTitle, categoryNames },
  } = questionInitialData;

  return (
    <div className="m-auto max-w-[800px]">
      <div className=" mb-20">
        <TitleWithInterviewStart
          categoryNames={categoryNames}
          questionId={questionId}
        >
          {questionTitle}
        </TitleWithInterviewStart>
      </div>
      <div className="flex flex-col gap-16">
        <AnswerList
          initialData={questionInitialData}
          questionId={questionId}
        />
      </div>
      <hr className="my-20" />
      <TailQuestions questionId={questionId} />
    </div>
  );
};

export default Page;
