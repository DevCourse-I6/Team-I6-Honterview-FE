import HamburgerMenu from './components/hamburgerMenu';
import LinkButtons from './components/linkButtons';
import Navigation from './components/navigation';
import Title from './components/title';

const Header = async () => {
  return (
    <header className="flex h-28 flex-wrap items-center justify-between px-8 md:justify-around">
      <Title />
      <Navigation />
      <LinkButtons />
      <HamburgerMenu />
    </header>
  );
};

export default Header;
