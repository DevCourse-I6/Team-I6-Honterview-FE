import AnswerContent from '@/container/interviewVideo/components/answerContent';
import AnswerFinishButton from '@/container/interviewVideo/components/answerFinishButton';
import AnswerTimerProgressGroup from '@/container/interviewVideo/components/answerTimerProgressGroup';
import InterviewCamera from '@/container/interviewVideo/components/interviewCamera';
import InterviewEndedButton from '@/container/interviewVideo/components/interviewEndedButton';
import QuestionContent from '@/container/interviewVideo/components/questionContent';

const InterviewVideoPage = () => {
  return (
    <section className="fit-wrap flex flex-col gap-8 px-20 py-8 md:p-20">
      <AnswerTimerProgressGroup />
      <div className="flex grow flex-col items-stretch gap-4 md:flex-row">
        <InterviewCamera />
        <div className="flex grow basis-3/6 flex-col gap-4">
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
