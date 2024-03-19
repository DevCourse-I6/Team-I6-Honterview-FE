import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '혼터뷰 - 마이 페이지',
  description:
    '북마크한 질문과 연습 기록을 확인하고, 혼터뷰에서의 나의 성장을 확인하세요',
  openGraph: {
    title: '혼터뷰 - 마이 페이지',
    description:
      '북마크한 질문과 연습 기록을 확인하고, 혼터뷰에서의 나의 성장을 확인하세요',
    url: `http://honterview.site/mypage`,
  },
  twitter: {
    title: '혼터뷰 - 마이 페이지',
    description:
      '북마크한 질문과 연습 기록을 확인하고, 혼터뷰에서의 나의 성장을 확인하세요',
  },
};

const MyPageLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return <>{children}</>;
};

export default MyPageLayout;
