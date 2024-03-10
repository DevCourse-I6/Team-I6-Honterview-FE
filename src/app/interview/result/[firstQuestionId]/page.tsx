import { v4 as uuidv4 } from 'uuid';

import ButtonWrapper from '@/container/interviewResult/components/ButtonWrapper';
import QuestionAndAnswer from '@/container/interviewResult/components/QuestionAndAnswer';
import { getInterviewResult } from '@/container/interviewResult/services/interviews';

import { IProps } from './types';

// TODO: 서버컴포넌트 api 로직 분리
// TODO: record, text 영상 처리
// TODO: video src 데이터 주입
// TODO: Title => Question 으로 이름 변경

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
