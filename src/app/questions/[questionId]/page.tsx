import {
  AnotherQuestions,
  TitleWithInterviewStart,
} from '@/container/questions/components';
import AnswerList from '@/container/questions/components/AnswerList';
import { getQuestionById } from '@/container/questions/services';

const Page = async ({ params }: { params: { questionId: string } }) => {
  const { questionId } = params;
  const initialData = await getQuestionById({
    questionId,
    page: 1,
    size: 5,
  });

  const {
    data: { content: questionTitle },
  } = initialData;

  return (
    <div className="m-auto max-w-[800px]">
      <div className=" mb-20">
        <TitleWithInterviewStart>{questionTitle}</TitleWithInterviewStart>
      </div>
      <div className="flex flex-col gap-16">
        <AnswerList
          initialData={initialData}
          questionId={questionId}
        />
      </div>
      <hr className="my-20" />
      <AnotherQuestions />
    </div>
  );
};

export default Page;
