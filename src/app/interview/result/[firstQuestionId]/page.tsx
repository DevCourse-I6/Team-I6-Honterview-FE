import { v4 as uuidv4 } from 'uuid';

import Divider from '@/components/divider';
import { CheckBox, TitleWidthModal } from '@/container/interviewResult';
import { getInterviewResult } from '@/container/interviewResult/services/interviews';
import { getQuestionById } from '@/container/questions/services';
import { IGetQuestionById } from '@/container/questions/types';

import { IProps } from './types';

const InterviewResultPage = async ({ params }: IProps) => {
  const { firstQuestionId } = params;
  const firstQuestionIdAsNumber = Number(firstQuestionId);

  const {
    data: { questionsAndAnswers },
  } = await getInterviewResult(firstQuestionIdAsNumber);

  const questionIdList = questionsAndAnswers.map(
    (questionAndAnswer) => questionAndAnswer.questionId,
  );

  const questionsInitialData: IGetQuestionById[] = await Promise.all(
    questionIdList.map((questionId) =>
      getQuestionById({ questionId, page: 1, size: 5 }),
    ),
  );

  return (
    <>
      {questionsAndAnswers.map(
        ({ questionContent, answerContent, questionId }) => (
          <div key={uuidv4()}>
            <div className="m-auto w-fit max-w-6xl">
              <div className="mb-5 aspect-video rounded bg-slate-50">영상</div>
              <div className="flex w-full justify-between">
                <TitleWidthModal
                  questionContent={questionContent}
                  questionInitialData={
                    questionsInitialData.find(
                      (questionData) => questionData.data.id === questionId,
                    )!
                  }
                  questionId={questionId}
                />
                <CheckBox checkId="test" />
              </div>
              <div className="max-w-6xl rounded-lg bg-[#F2F2F2] px-11 py-9">
                <p className="text-large ">{answerContent}</p>
              </div>
            </div>
            <Divider />
          </div>
        ),
      )}
    </>
  );
};

export default InterviewResultPage;
