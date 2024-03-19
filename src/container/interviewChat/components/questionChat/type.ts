export interface IProps {
  interviewId: number;
}

export interface IQuestionAndAnswer {
  questionId: number | null;
  questionContent: string | null;
  answerId: number | null;
  answerContent: string | null;
}
