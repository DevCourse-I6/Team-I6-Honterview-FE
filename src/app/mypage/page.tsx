import ContentSection from '@/container/mypage/components/contentSection';
import LogoutSection from '@/container/mypage/components/logoutSection';
import NickNameSection from '@/container/mypage/components/nickNameSection';

const MyPage = () => {
  return (
    <div className="wrap flex flex-col items-center pt-[1rem]">
      <NickNameSection />
      <div className="flex h-full flex-1 flex-col items-center gap-[4rem]">
        <ContentSection />
        <div className="mb-[2rem] flex justify-center">
          <LogoutSection />
        </div>
      </div>
    </div>
  );
};

export default MyPage;
