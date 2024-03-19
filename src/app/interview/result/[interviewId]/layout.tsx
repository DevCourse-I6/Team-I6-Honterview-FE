import type { Metadata } from 'next';

import { getInterviewInfo } from '@/libs/services/interview';

export const generateMetadata = async ({
  params,
}: {
  params: { interviewId: string };
}): Promise<Metadata> => {
  const { interviewId } = params;
  const { data } = await getInterviewInfo(interviewId);
  const { questionCount, answerType, categoryNames, questionsAndAnswers } =
    data;
  const { questionContent } = questionsAndAnswers[0];
  const interviewType =
    answerType === 'TEXT' ? '채팅 면접 결과' : '화상 면접 결과';
  const title = `혼터뷰 - ${interviewType}`;
  const description = `혼터뷰에서는 ${categoryNames.join(
    ', ',
  )} 카테고리에 대한 면접 결과를 제공합니다. 첫 번째 질문은 '${questionContent}'였으며, 총 ${questionCount}개의 질문에 답변했습니다. ${interviewType}를 통해 얻은 면접 결과로 더 나은 준비를 해보세요.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `http://honterview.site/interview/result/${interviewId}`,
    },
    twitter: {
      title,
      description,
    },
  };
};

const InterviewResultLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return <div className="wrap m-auto my-9 max-w-[60rem] px-5">{children}</div>;
};

export default InterviewResultLayout;
