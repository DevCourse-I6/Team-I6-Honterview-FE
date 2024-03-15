import ContentSection from '@/container/mypage/components/contentSection';
import LogoutSection from '@/container/mypage/components/logoutSection';
import NickNameSection from '@/container/mypage/components/nickNameSection';

const MyPage = () => {
  return (
    <div className="wrap relative flex flex-col items-center pt-[1rem]">
      <NickNameSection />
      <div className="mb-[8rem] flex h-full flex-1 flex-col items-center">
        <ContentSection />
      </div>
      <div className="absolute bottom-[2rem] flex justify-center">
        <LogoutSection />
      </div>
    </div>
  );
};

export default MyPage;
