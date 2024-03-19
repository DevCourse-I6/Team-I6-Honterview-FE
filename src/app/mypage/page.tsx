import ContentSection from '@/container/mypage/components/contentSection';
import NickNameSection from '@/container/mypage/components/nickNameSection';

const MyPage = () => {
  return (
    <div className="wrap relative flex flex-col items-center gap-[0.5rem] pt-[2rem] tablet:pt-[4rem]">
      <NickNameSection />
      <div className="mb-[4rem] flex h-full flex-1 flex-col items-center">
        <ContentSection />
      </div>
    </div>
  );
};

export default MyPage;
