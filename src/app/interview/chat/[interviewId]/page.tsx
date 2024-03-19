import InterviewCamera from '@/container/interviewChat/components/interviewCamera';
import QuestionChat from '@/container/interviewChat/components/questionChat';
import QuestionEndButton from '@/container/interviewChat/components/questionChat/components/qeustionEndButton';

import { IProps } from './types';

const InterviewChatPage = ({ params }: IProps) => {
  return (
    <section>
      <form className="fit-wrap flex min-w-[30rem] gap-8 px-10 py-8 md:px-[25%]">
        <div className="flex grow flex-col items-center gap-4 bg-white">
          <InterviewCamera />
          <div className="flex w-[90%] basis-4/6 flex-col gap-4 overflow-y-scroll">
            <QuestionChat interviewId={params.interviewId} />
          </div>
          <div className="flex justify-center gap-8">
            <QuestionEndButton interviewId={params.interviewId} />
          </div>
        </div>
      </form>
    </section>
  );
};

export default InterviewChatPage;
