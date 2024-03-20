'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { notify } from '@/components/toast';
import { postInterview } from '@/libs/actions/interview';
import { postTailQuestion } from '@/libs/actions/question';

import QuestionContent from './components/questionContent';
import QuestionInput from './components/questionInput';
import { IProps, IQuestionAndAnswer } from './type';

const QuestionChat = ({ interviewId, interviewData }: IProps) => {
  const [questionCount, setQuestionCount] = useState<number>(0);
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState<
    IQuestionAndAnswer[]
  >([]);
  const [reQuestionCount, setReQuestionCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (interviewData.status === 'COMPLETED') {
      notify('info', '이미 종료된 면접입니다');
      return router.push(`/interview/result/${interviewId}`);
    }

    setQuestionsAndAnswers(interviewData.questionsAndAnswers);
    setQuestionCount(interviewData.questionCount);
  }, [interviewData, interviewId, router]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 마지막 질문
        const lastQuestion =
          questionsAndAnswers.length > 0
            ? questionsAndAnswers[questionsAndAnswers.length - 1]
            : null;

        if (lastQuestion) {
          const question = lastQuestion.questionContent || '';
          const answer = lastQuestion.answerContent || '';

          // 꼬리질문
          if (
            lastQuestion.answerId !== null &&
            questionCount !== questionsAndAnswers.length - 1
          ) {
            if (questionCount === questionsAndAnswers.length) {
              return router.push(`/interview/result/${interviewId}`);
            }
            setIsLoading(true);
            const { data } = await postTailQuestion(
              interviewId,
              question,
              answer,
            );
            const { tailQuestionContent } = data;
            setQuestionsAndAnswers((prevState) => [
              ...prevState,
              {
                questionContent: tailQuestionContent,
                questionId: null,
                answerContent: null,
                answerId: null,
              },
            ]);

            setIsLoading(false);
          }

          // 답변
          if (
            lastQuestion.answerContent !== null &&
            lastQuestion.answerId === null
          ) {
            const { data } = await postInterview(interviewId, {
              questionContent: question,
              answerContent: answer,
              processingTime: 0,
            });
            const { answerId, questionId } = data;
            setQuestionsAndAnswers((prevState) => {
              const updatedLastItem = { ...lastQuestion, answerId, questionId };
              return [...prevState.slice(0, -1), updatedLastItem];
            });

            setReQuestionCount(0);
          }
        }
      } catch (error) {
        notify('error', '다시 시도해주세요');
      }
    };

    fetchData();
  }, [
    interviewId,
    questionCount,
    questionsAndAnswers,
    reQuestionCount,
    router,
  ]);

  return (
    <>
      <QuestionContent
        questionsAndAnswers={questionsAndAnswers}
        interviewId={interviewId}
        setQuestionsAndAnswers={setQuestionsAndAnswers}
        reQuestionCount={reQuestionCount}
        setReQuestionCount={setReQuestionCount}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
      <QuestionInput setQuestionsAndAnswers={setQuestionsAndAnswers} />
    </>
  );
};

export default QuestionChat;
