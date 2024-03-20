import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import Button from '@/components/button';
import Loading from '@/components/loading';
import { notify } from '@/components/toast';
import { rePostTailQuestion } from '@/libs/actions/question';

import { IProps } from './type';

const QuestionContent = ({
  questionsAndAnswers,
  interviewId,
  setQuestionsAndAnswers,
  reQuestionCount,
  setReQuestionCount,
  isLoading,
  setIsLoading,
}: IProps) => {
  const lastQuestion = questionsAndAnswers[questionsAndAnswers.length - 1];

  const handleTailContentChange = async () => {
    setIsLoading(true);

    if (questionsAndAnswers.length === 1) {
      return notify('warning', '첫 질문은 변경이 불가능 합니다.');
    }

    if (reQuestionCount >= 1) {
      return notify('warning', '질문 변경은 최대 1회 입니다.');
    }
    const { data } = await rePostTailQuestion(
      interviewId,
      lastQuestion.questionContent || '',
    );

    setQuestionsAndAnswers((prevState) => {
      const updatedLastItem = {
        ...lastQuestion,
        questionContent: data.tailQuestionContent,
      };
      return [...prevState.slice(0, -1), updatedLastItem];
    });

    setReQuestionCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="flex w-full flex-grow flex-col gap-4 overflow-scroll px-3">
      {questionsAndAnswers.map((item) => (
        <React.Fragment key={uuidv4()}>
          <div className="w-fit rounded-lg border bg-background-20 px-4 py-2 text-left text-[1.6rem]">
            <p>{item.questionContent}</p>
          </div>
          {item.answerId !== null && (
            <div className="w-fit self-end rounded-lg border bg-background-20 px-4 py-2 text-right text-[1.6rem]">
              <p>{item.answerContent}</p>
            </div>
          )}
        </React.Fragment>
      ))}

      {isLoading ? (
        <div className="w-[30px]">
          <Loading />
        </div>
      ) : (
        ''
      )}
      {lastQuestion && lastQuestion.answerId === null && (
        <Button
          onClick={handleTailContentChange}
          className="w-fit px-4 py-2"
        >
          현재 꼬리 질문 변경
        </Button>
      )}
    </div>
  );
};

export default QuestionContent;
