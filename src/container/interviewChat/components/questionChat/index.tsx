'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { notify } from '@/components/toast';
import { postInterview } from '@/libs/actions/interview';
import { postTailQuestion } from '@/libs/actions/question';
import { getInterviewResult } from '@/libs/services/interview';

import QuestionContent from './components/questionContent';
import QuestionInput from './components/questionInput';
import { IProps, IQuestionAndAnswer } from './type';

const QuestionChat = ({ interviewId }: IProps) => {
  const [questionCount, setQuestionCount] = useState<number>(0);
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState<
    IQuestionAndAnswer[]
  >([]);
  const [reQuestionCount, setReQuestionCount] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 최초 값 저장
        if (questionCount === 0) {
          const { data } = await getInterviewResult(interviewId);
          if (data.status === 'COMPLETED') {
            notify('info', '이미 종료된 면접입니다');
            return router.push(`/interview/result/${interviewId}`);
          }
          setQuestionsAndAnswers(data.questionsAndAnswers);
          setQuestionCount(data.questionCount);
        }

        // 모든 질문에 대한 답변 완료 후 결과 페이지로 이동
        if (
          questionCount !== 0 &&
          questionCount === questionsAndAnswers.length - 1
        ) {
          return router.push(`/interview/result/${interviewId}`);
        }

        // 마지막 질문
        const lastQuestion =
          questionsAndAnswers.length > 0
            ? questionsAndAnswers[questionsAndAnswers.length - 1]
            : null;

        if (lastQuestion) {
          const maxQuestion =
            lastQuestion.questionContent?.substring(0, 99) || 'test';
          const maxAnswer =
            lastQuestion.answerContent?.substring(0, 99) || 'test';

          // 꼬리질문
          if (
            lastQuestion.answerId !== null &&
            questionCount !== questionsAndAnswers.length - 1
          ) {
            const { data } = await postTailQuestion(
              interviewId,
              maxQuestion,
              maxAnswer,
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
          }

          // 답변
          if (
            lastQuestion.answerContent !== null &&
            lastQuestion.answerId === null
          ) {
            const { data } = await postInterview(interviewId, {
              questionContent: maxQuestion,
              answerContent: maxAnswer,
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
  }, [interviewId, questionCount, questionsAndAnswers, router]);

  return (
    <>
      <QuestionContent
        questionsAndAnswers={questionsAndAnswers}
        interviewId={interviewId}
        setQuestionsAndAnswers={setQuestionsAndAnswers}
        reQuestionCount={reQuestionCount}
        setReQuestionCount={setReQuestionCount}
      />
      <QuestionInput setQuestionsAndAnswers={setQuestionsAndAnswers} />
    </>
  );
};

export default QuestionChat;
