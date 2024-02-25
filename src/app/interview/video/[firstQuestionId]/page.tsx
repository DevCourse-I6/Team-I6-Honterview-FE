import AnswerContent from '@/container/interviewVideo/components/answerContent';
import AnswerFinishButton from '@/container/interviewVideo/components/answerFinishButton';
import AnswerTimerProgressGroup from '@/container/interviewVideo/components/answerTimerProgressGroup';
import InterviewCamera from '@/container/interviewVideo/components/interviewCamera';
import InterviewEndedButton from '@/container/interviewVideo/components/interviewEndedButton';
import QuestionContent from '@/container/interviewVideo/components/questionContent';

const InterviewVideoPage = () => {
  return (
    <section className="fit-wrap flex min-w-[40rem] flex-col gap-8 px-20 py-8">
      <AnswerTimerProgressGroup />
      <div className="flex grow flex-col gap-4 md:flex-row">
        <InterviewCamera />
        <div className="flex h-1/2 flex-col gap-4 md:h-full md:basis-1/2">
          <QuestionContent />
          <AnswerContent />
        </div>
      </div>
      <div className="flex justify-center gap-8">
        <AnswerFinishButton />
        <InterviewEndedButton />
      </div>
    </section>
  );
};

export default InterviewVideoPage;
