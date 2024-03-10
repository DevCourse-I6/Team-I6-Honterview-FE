import { getQuestionById } from '@/container/questions/services';

import CheckBoxWrapper from '../CheckBoxWrapper';
import TitleWidthModal from '../TitleWidthModal';
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

  return (
    <div>
      {answerType === 'RECORD' && (
        <div className="mb-5 aspect-video rounded bg-slate-50">
          <VideoPlayer src={videoId} />
        </div>
      )}

      <div className="flex w-full justify-between">
        <TitleWidthModal
          questionContent={questionContent}
          questionInitialData={questionInitialData}
          questionId={questionId}
        />
        <CheckBoxWrapper answerId={answerId} />
      </div>
      <div className="rounded-lg bg-[#F2F2F2] px-11 py-9">
        <p className="text-large ">{answerContent}</p>
      </div>
    </div>
  );
};

export default QuestionAndAnswer;
