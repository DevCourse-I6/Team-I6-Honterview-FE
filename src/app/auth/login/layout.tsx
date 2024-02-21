import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '혼터뷰 - 로그인',
  description: '혼터뷰에 로그인하여 서비스를 이용하세요',
};

const AuthLoginLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return <>{children}</>;
};

export default AuthLoginLayout;
