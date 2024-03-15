import '@/styles/global.css';

import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ToastContainer } from 'react-toastify';

import { Footer, Header } from '@/components/layout';
import MswProvider from '@/mocks/mswProvider';
import ReactQueryProvider from '@/utils/ReactQueryProvider';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.METADATA_BASE!),
  title: '혼터뷰',
  description: `혼터뷰와 함께 AI 기반 면접 연습을 통해 면접 실력을 강화하세요. 실제 면접 상황처럼 준비하며 자신감을 키우고, 면접 능력을 향상시켜 보세요.`,
  icons: {
    icon: '/images/logo.png',
  },
  generator: 'Next.js',
  applicationName: '혼터뷰',
  keywords: [
    '인터뷰',
    '면접',
    '화상 면접',
    'AI 면접',
    '면접',
    '공유',
    '면접 녹화',
    '취업 준비',
    '취준생',
    '모의 면접',
  ],
  creator: '안정은 김민수 윤상민 지인혁 조은비 김별이',
  authors: [
    { name: '안정은', url: 'https://github.com/jxxxxe' },
    { name: '김민수', url: 'https://github.com/km6293' },
    { name: '윤상민', url: 'https://github.com/nimgnas' },
    { name: '지인혁', url: 'https://github.com/wldlsgur' },
    { name: '조은비', url: 'https://github.com/eunbc' },
    { name: '김별이', url: 'https://github.com/byulcode' },
  ],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: '혼터뷰 - 홈',
    description: `혼터뷰와 함께 AI 기반 면접 연습을 통해 면접 실력을 강화하세요. 실제 면접 상황처럼 준비하며 자신감을 키우고, 면접 능력을 향상시켜 보세요.`,
    url: `http://honterview.site`,
    siteName: '혼터뷰',
    images: [
      {
        url: '/images/logo.png',
        width: 800,
        height: 600,
        alt: '혼터뷰 로고',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '혼터뷰 - 홈',
    description: `혼터뷰와 함께 AI 기반 면접 연습을 통해 면접 실력을 강화하세요. 실제 면접 상황처럼 준비하며 자신감을 키우고, 면접 능력을 향상시켜 보세요.`,
    images: ['/images/logo.png'],
  },
};

const font = localFont({
  src: '../styles/fonts/PretendardVariable.woff2',
  display: 'swap',
});

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <ReactQueryProvider>
      <html
        lang="ko"
        className={font.className}
      >
        <body>
          <MswProvider>
            <ToastContainer />
            <Header />
            <main>{children}</main>
            <Footer />
          </MswProvider>
        </body>
      </html>
    </ReactQueryProvider>
  );
};

export default RootLayout;
