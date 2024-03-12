import DividerHorizontal from '@/components/dividerHorizontal';
import DataSection from '@/container/mypage/components/dataSection';
import LogoutSection from '@/container/mypage/components/logoutSection';
import NavigationSection from '@/container/mypage/components/navigationSection';
import NickNameSection from '@/container/mypage/components/nickNameSection';

const MyPage = () => {
  return (
    <>
      <div className="wrap flex flex-col">
        <NickNameSection />
        <div className="flex h-full flex-1 flex-col">
          <NavigationSection />
          <DividerHorizontal />
          <DataSection />
          <div className="flex justify-center">
            <LogoutSection />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPage;
