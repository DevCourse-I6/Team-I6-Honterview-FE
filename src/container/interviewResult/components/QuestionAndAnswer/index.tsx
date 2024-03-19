import { getQuestionById } from '@/libs/services/questions';

import CheckBoxWrapper from '../CheckBoxWrapper';
import QuestionWidthModal from '../QuestionWidthModal';
import { IProps } from './types';

const QuestionAndAnswer = async ({ questionAndAnswerData }: IProps) => {
  const { questionContent, questionId, answerId, answerContent } =
    questionAndAnswerData;
  const questionInitialData = await getQuestionById({
    questionId,
    page: 1,
    size: 5,
  });

  return (
    <div className="rounded-lg border-[1px] border-dashed border-gray-300 p-5">
      <div className="flex w-full justify-between">
        <QuestionWidthModal
          questionContent={questionContent}
          questionInitialData={questionInitialData}
          questionId={questionId}
        />
        <div className="flex gap-4">
          <CheckBoxWrapper answerId={answerId} />
        </div>
      </div>
      <div className="rounded-lg bg-slate-50 px-11 py-9">
        <p className="text-large ">{answerContent}</p>
      </div>
    </div>
  );
};

export default QuestionAndAnswer;
