import {
  TailQuestions,
  TitleWithInterviewStart,
} from '@/container/questions/components';
import AnswerList from '@/container/questions/components/AnswerList';
import {
  getQuestionById,
  getRandomQuestionsByCategories,
} from '@/container/questions/services';

const Page = async ({ params }: { params: { questionId: string } }) => {
  const { questionId } = params;

  // getQuestionById
  const questionInitialData = await getQuestionById({
    questionId,
    page: 1,
    size: 5,
  });

  const {
    data: { content: questionTitle },
  } = questionInitialData;

  // getRandomQuestionsByCategories
  const { data: tailQuestionData } =
    await getRandomQuestionsByCategories(questionId);

  return (
    <div className="m-auto max-w-[800px]">
      <div className=" mb-20">
        <TitleWithInterviewStart>{questionTitle}</TitleWithInterviewStart>
      </div>
      <div className="flex flex-col gap-16">
        <AnswerList
          initialData={questionInitialData}
          questionId={questionId}
        />
      </div>
      <hr className="my-20" />
      <TailQuestions tailQuestionData={tailQuestionData} />
    </div>
  );
};

export default Page;
