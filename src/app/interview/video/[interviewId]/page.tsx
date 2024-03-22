import { revalidateTag } from 'next/cache';

import ReissueAccessTokenComponent from '@/components/reissueAccessTokenComponent';
import AnswerContent from '@/container/interviewVideo/components/answerContent';
import AnswerFinishButton from '@/container/interviewVideo/components/answerFinishButton';
import AnswerTimeProgressGroup from '@/container/interviewVideo/components/answerTimeProgressGroup';
import InitializeInterview from '@/container/interviewVideo/components/initializeInterview';
import InterviewCamera from '@/container/interviewVideo/components/interviewCamera';
import InterviewEndedButton from '@/container/interviewVideo/components/interviewEndedButton';
import LoadingWrapper from '@/container/interviewVideo/components/loadingWrapper';
import QuestionContent from '@/container/interviewVideo/components/questionContent';
import { IProps } from '@/container/interviewVideo/types';
import { getInterviewInfo } from '@/libs/services/interview';

const InterviewVideoPage = async ({ params }: IProps) => {
  const { interviewId } = params;
  const {
    status,
    data: { data },
  } = await getInterviewInfo(interviewId);

  if (status === 401) {
    return (
      <ReissueAccessTokenComponent<Promise<void>, Promise<void>>
        status={status}
        callback={async () => {
          'use server';

          revalidateTag('interviewInfo');
        }}
      />
    );
  }

  return (
    <section>
      <InitializeInterview
        interviewId={interviewId}
        interviewData={data}
      />
      <LoadingWrapper />
      <form className="fit-wrap flex min-w-[30rem] flex-col gap-8 px-10 py-8 md:px-[10%]">
        <AnswerTimeProgressGroup />
        <div className="flex grow flex-col gap-4 md:flex-row">
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
      </form>
    </section>
  );
};

export default InterviewVideoPage;
