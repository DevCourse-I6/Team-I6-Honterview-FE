import ContentSection from '@/container/mypage/components/contentSection';
import LogoutSection from '@/container/mypage/components/logoutSection';
import NickNameSection from '@/container/mypage/components/nickNameSection';

const MyPage = () => {
  return (
    <>
      <div className="wrap flex flex-col">
        <NickNameSection />
        <div className="flex h-full flex-1 flex-col">
          <ContentSection />
          <div className="flex justify-center">
            <LogoutSection />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPage;