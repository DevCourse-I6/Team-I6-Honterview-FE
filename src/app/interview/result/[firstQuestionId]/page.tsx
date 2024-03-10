import { v4 as uuidv4 } from 'uuid';

import { TitleWidthModal } from '@/container/interviewResult';
import ButtonWrapper from '@/container/interviewResult/components/ButtonWrapper';
import CheckBoxWrapper from '@/container/interviewResult/components/CheckBoxWrapper';
import { getInterviewResult } from '@/container/interviewResult/services/interviews';
import { getQuestionById } from '@/container/questions/services';
import { IGetQuestionById } from '@/container/questions/types';

import { IProps } from './types';

// TODO: 서버컴포넌트 api 로직 분리

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
    <div className="m-auto flex max-w-7xl flex-col gap-10">
      {questionsAndAnswers.map(
        ({ questionContent, answerContent, questionId, answerId }) => (
          <div key={uuidv4()}>
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
              <CheckBoxWrapper answerId={answerId} />
            </div>
            <div className="rounded-lg bg-[#F2F2F2] px-11 py-9">
              <p className="text-large ">{answerContent}</p>
            </div>
          </div>
        ),
      )}
      <div className="flex justify-center gap-20">
        <ButtonWrapper firstQuestionId={firstQuestionIdAsNumber} />
      </div>
    </div>
  );
};

export default InterviewResultPage;
