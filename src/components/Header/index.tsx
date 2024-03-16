import LinkButtons from './components/linkButtons';
import Navigation from './components/navigation';
import Title from './components/title';

const Header = async () => {
  return (
    <header className="flex h-28 flex-wrap items-center justify-around">
      <Title />
      <Navigation />
      <LinkButtons />
    </header>
  );
};

export default Header;

// 로그인 페이지 접속 시 refresh 해주기
// 헤더 반응형
// 로그아웃
