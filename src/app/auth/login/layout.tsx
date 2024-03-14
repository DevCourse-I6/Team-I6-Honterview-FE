import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '혼터뷰 - 로그인',
  description: '혼터뷰에 로그인하여 더욱 더 다양한 서비스를 이용하세요',
  openGraph: {
    title: '혼터뷰 - 로그인',
    description: '혼터뷰에 로그인하여 더욱 더 다양한 서비스를 이용하세요',
    url: `http://honterview.site/auth/login`,
  },
  twitter: {
    title: '혼터뷰 - 로그인',
    description: '혼터뷰에 로그인하여 더욱 더 다양한 서비스를 이용하세요',
  },
};

const AuthLoginLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="wrap flex items-center justify-center">{children}</div>
  );
};

export default AuthLoginLayout;
