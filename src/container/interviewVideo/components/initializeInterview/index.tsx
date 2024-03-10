'use client';

import { IProps } from './types';

const InitializeInterview = ({
  // interviewId,
  // interviewData,
  children,
}: IProps) => {
  // const { questionContent, questionCount, timer, questions, categories } =
  //   interviewData;
  // const { id, setInterview } = useInterview();
  // const { setQuestionContent } = useQuestionContent();

  // useEffect(() => {
  //   if (!id) {
  //     setInterview({
  //       id: interviewId,
  //       questionCount,
  //       limitTimer: timer,
  //       questions,
  //       categories,
  //     });
  //   }
  // }, [
  //   id,
  //   interviewId,
  //   setInterview,
  //   questionCount,
  //   timer,
  //   questions,
  //   categories,
  // ]);

  // useEffect(() => {
  //   if (questions.length === 0) {
  //     setQuestionContent(questionContent);
  //   }
  // }, [questions.length, setQuestionContent, questionContent]);

  return <>{children}</>;
};

export default InitializeInterview;
