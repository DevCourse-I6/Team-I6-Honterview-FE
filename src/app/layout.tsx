import MSWComponent from '@/mocks/MSWcomponent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

(async () => {
  if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
    const { initializeMocking } = await import('@/mocks');

    await initializeMocking();
  }
})();

const RootLayout = async ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="ko">
      <body>
        <MSWComponent />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
