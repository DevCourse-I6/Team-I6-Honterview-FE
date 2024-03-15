import { getInterviewVideoUrl } from '@/libs/services/files';
import { getQuestionById } from '@/libs/services/questions';
import { IGetVideoDownLoadUrl } from '@/libs/types/response';

import CheckBoxWrapper from '../CheckBoxWrapper';
import DownLoadWrapper from '../DownLoadWrapper';
import QuestionWidthModal from '../QuestionWidthModal';
import VideoPlayer from '../VideoPlayer';
import { IProps } from './types';

const QuestionAndAnswer = async ({
  questionAndAnswerData,
  answerType,
}: IProps) => {
  const { videoId, questionContent, questionId, answerId, answerContent } =
    questionAndAnswerData;
  const questionInitialData = await getQuestionById({
    questionId,
    page: 1,
    size: 5,
  });

  const isRecord = answerType === 'RECORD';
  const interviewVideoUrl = isRecord && (await getInterviewVideoUrl(videoId!));

  return (
    <div>
      {isRecord && (
        <div className="mb-5 aspect-video rounded bg-slate-50">
          <VideoPlayer
            src={(interviewVideoUrl as IGetVideoDownLoadUrl).data.downloadUrl}
          />
        </div>
      )}

      <div className="flex w-full justify-between">
        <QuestionWidthModal
          questionContent={questionContent}
          questionInitialData={questionInitialData}
          questionId={questionId}
        />
        <div className="flex gap-4">
          {!isRecord && (
            <DownLoadWrapper
              interviewVideoUrl={
                (interviewVideoUrl as IGetVideoDownLoadUrl).data?.downloadUrl
              }
            />
          )}
          <CheckBoxWrapper answerId={answerId} />
        </div>
      </div>
      <div className="rounded-lg bg-[#F2F2F2] px-11 py-9">
        <p className="text-large ">{answerContent}</p>
      </div>
    </div>
  );
};

export default QuestionAndAnswer;
