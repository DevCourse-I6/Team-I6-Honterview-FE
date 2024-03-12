import { v4 as uuidv4 } from 'uuid';

import ButtonWrapper from '@/container/interviewResult/components/ButtonWrapper';
import QuestionAndAnswer from '@/container/interviewResult/components/QuestionAndAnswer';
import { getInterviewResult } from '@/libs/services/interview';

import { IProps } from './types';

// TODO: sangmin // Title => Question 으로 이름 변경
// TODO: sangmin // 새로고침 메인으로 이동

const InterviewResultPage = async ({ params }: IProps) => {
  const { firstQuestionId } = params;
  const firstQuestionIdAsNumber = Number(firstQuestionId);

  const {
    data: { questionsAndAnswers, answerType },
  } = await getInterviewResult(firstQuestionIdAsNumber);

  return (
    <div className="m-auto flex max-w-7xl flex-col gap-10">
      {questionsAndAnswers.map((questionAndAnswerData) => (
        <QuestionAndAnswer
          key={uuidv4()}
          questionAndAnswerData={questionAndAnswerData}
          answerType={answerType}
        />
      ))}
      <div className="flex justify-center gap-20">
        <ButtonWrapper firstQuestionId={firstQuestionIdAsNumber} />
      </div>
    </div>
  );
};

export default InterviewResultPage;
