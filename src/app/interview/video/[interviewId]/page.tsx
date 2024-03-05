import AnswerContent from '@/container/interviewVideo/components/answerContent';
import AnswerFinishButton from '@/container/interviewVideo/components/answerFinishButton';
import AnswerTimeProgressGroup from '@/container/interviewVideo/components/answerTimeProgressGroup';
import InterviewCamera from '@/container/interviewVideo/components/interviewCamera';
import InterviewEndedButton from '@/container/interviewVideo/components/interviewEndedButton';
import QuestionContent from '@/container/interviewVideo/components/questionContent';
import { IProps } from '@/container/interviewVideo/types';
import { getInterviewInfo } from '@/libs/services/interview';

const InterviewVideoPage = async ({ params }: IProps) => {
  const { interviewId } = params;
  const { data } = await getInterviewInfo(interviewId);
  const { questionContent, questionCount, timer, questions, categories } = data;

  return (
    <section>
      <form className="fit-wrap flex min-w-[30rem] flex-col gap-8 px-10 py-8 md:px-[10%]">
        <AnswerTimeProgressGroup
          questionCount={questionCount}
          timer={timer}
          questions={questions}
        />
        <div className="flex grow flex-col gap-4 md:flex-row">
          <InterviewCamera />
          <div className="flex grow basis-3/6 flex-col gap-4">
            <QuestionContent
              categories={categories}
              questions={questions}
              firstQuestion={questionContent}
            />
            <AnswerContent />
          </div>
        </div>
        <div className="flex justify-center gap-8">
          <AnswerFinishButton />
          <InterviewEndedButton />
        </div>
      </form>
    </section>
  );
};

export default InterviewVideoPage;
