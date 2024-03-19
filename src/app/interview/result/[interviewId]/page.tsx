import { v4 as uuidv4 } from 'uuid';

import ButtonWrapper from '@/container/interviewResult/components/ButtonWrapper';
import QuestionAndAnswer from '@/container/interviewResult/components/QuestionAndAnswer';
import { getInterviewResult } from '@/libs/services/interview';

import { IProps } from './types';

const InterviewResultPage = async ({ params }: IProps) => {
  const { interviewId } = params;
  const interviewIdAsNumber = Number(interviewId);

  const {
    data: { questionsAndAnswers, answerType },
  } = await getInterviewResult(interviewIdAsNumber);

  return (
    <>
      <div className="mb-20 flex items-center gap-5">
        <h1 className=" text-tripleLarge font-semibold">면접 결과</h1>
      </div>
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
