import { v4 as uuidv4 } from 'uuid';

import ButtonWrapper from '@/container/interviewResult/components/ButtonWrapper';
import DownLoadWrapper from '@/container/interviewResult/components/DownLoadWrapper';
import QuestionAndAnswer from '@/container/interviewResult/components/QuestionAndAnswer';
import VideoPlayer from '@/container/interviewResult/components/VideoPlayer';
import { getInterviewVideoUrl } from '@/libs/services/files';
import { getInterviewResult } from '@/libs/services/interview';
import { IGetVideoDownLoadUrl } from '@/libs/types/response';

import { IProps } from './types';

const InterviewResultPage = async ({ params }: IProps) => {
  const { interviewId } = params;
  const interviewIdAsNumber = Number(interviewId);

  const {
    data: { questionsAndAnswers, answerType, videoId },
  } = await getInterviewResult(interviewIdAsNumber);
  const isRecord = answerType === 'RECORD';

  const interviewVideoUrl =
    isRecord && videoId && (await getInterviewVideoUrl(videoId!));

  return (
    <>
      <div className="mb-20 flex items-center gap-5">
        <h1 className=" text-tripleLarge font-semibold">면접 결과</h1>
      </div>
      {isRecord && videoId && (
        <div>
          <div className="mb-5 aspect-video rounded bg-slate-50">
            <VideoPlayer
              src={(interviewVideoUrl as IGetVideoDownLoadUrl).data.downloadUrl}
            />
          </div>
          <DownLoadWrapper
            interviewVideoUrl={
              (interviewVideoUrl as IGetVideoDownLoadUrl).data?.downloadUrl
            }
          />
        </div>
      )}
      <div className="flex max-w-7xl flex-col gap-10">
        {questionsAndAnswers.map((questionAndAnswerData) => (
          <QuestionAndAnswer
            key={uuidv4()}
            questionAndAnswerData={questionAndAnswerData}
            answerType={answerType}
          />
        ))}
        <div className="flex justify-center gap-20">
          <ButtonWrapper interviewId={interviewIdAsNumber} />
        </div>
      </div>
    </>
  );
};

export default InterviewResultPage;
