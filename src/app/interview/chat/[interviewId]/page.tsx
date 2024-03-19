import InterviewCamera from '@/container/interviewChat/components/interviewCamera';
import QuestionChat from '@/container/interviewChat/components/questionChat';
import QuestionEndButton from '@/container/interviewChat/components/questionChat/components/qeustionEndButton';
import { getInterviewResult } from '@/libs/services/interview';

import { IProps } from './types';

const InterviewChatPage = async ({ params }: IProps) => {
  const { interviewId } = params;
  const { data } = await getInterviewResult(interviewId);

  return (
    <section>
      <form className="fit-wrap flex min-w-[30rem] gap-8 px-10 py-8 md:px-[25%]">
        <div className="flex grow flex-col items-center gap-4 bg-white">
          <InterviewCamera />
          <div className="flex w-[90%] basis-4/6 flex-col gap-4 overflow-y-scroll">
            <QuestionChat
              interviewId={interviewId}
              interviewData={data}
            />
          </div>
          <div className="flex justify-center gap-8">
            <QuestionEndButton interviewId={interviewId} />
          </div>
        </div>
      </form>
    </section>
  );
};

export default InterviewChatPage;
