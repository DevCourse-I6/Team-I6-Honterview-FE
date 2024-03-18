import type { Metadata } from 'next';

import { getInterviewInfo } from '@/libs/services/interview';

export const generateMetadata = async ({
  params,
}: {
  params: { interviewId: string };
}): Promise<Metadata> => {
  const { interviewId } = params;
  const { data } = await getInterviewInfo(interviewId);
  const { categoryNames, questionsAndAnswers } = data;
  const { questionContent } = questionsAndAnswers[0];

  return {
    title: '혼터뷰 - 채팅 면접 연습',
    description: `혼터뷰에서는 ${categoryNames.join(', ')} 카테고리의 첫 번째 질문인 '${questionContent}'을 시작으로 채팅 면접 연습을 제공합니다. 실제 면접 상황처럼 준비하며 자신감을 키우고, 면접 능력을 향상시켜 보세요.`,
    openGraph: {
      title: '혼터뷰 - 채팅 면접 연습',
      description: `혼터뷰에서는 ${categoryNames.join(', ')} 카테고리의 첫 번째 질문인 '${questionContent}'을 시작으로 채팅 면접 연습을 제공합니다. 실제 면접 상황처럼 준비하며 자신감을 키우고, 면접 능력을 향상시켜 보세요.`,
      url: `http://honterview.site/interview/video/${interviewId}`,
    },
    twitter: {
      title: '혼터뷰 - 채팅 면접 연습',
      description: `혼터뷰에서는 ${categoryNames.join(', ')} 카테고리의 첫 번째 질문인 '${questionContent}'을 시작으로 채팅 면접 연습을 제공합니다. 실제 면접 상황처럼 준비하며 자신감을 키우고, 면접 능력을 향상시켜 보세요.`,
    },
  };
};

const InterviewChatLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return <div className="wrap">{children}</div>;
};

export default InterviewChatLayout;
