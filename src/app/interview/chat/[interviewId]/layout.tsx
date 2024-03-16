import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '혼터뷰 - 채팅 면접 연습',
  description:
    '저희 혼터뷰 면접 연습 플랫폼에서는 실제 면접 상황을 체험하며, 자신감을 키우고, 면접 능력을 향상시킬 수 있습니다. 지금 바로 온라인으로 면접 연습을 시작해 보세요.',
};

const InterviewChatLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return <div className="wrap">{children}</div>;
};

export default InterviewChatLayout;
