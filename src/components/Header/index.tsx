import DividerHorizontal from '../dividerHorizontal';
import HamburgerMenu from './components/hamburgerMenu';
import MobileLinkButtons from './components/hamburgerMenu/components/mobileLinkButtons';
import MobileNavigation from './components/hamburgerMenu/components/mobileNavigation';
import LinkButtons from './components/linkButtons';
import Navigation from './components/navigation';
import Title from './components/title';

const Header = async () => {
  return (
    <header className="flex h-28 min-w-[32rem] flex-wrap items-center justify-between px-8 md:justify-around">
      <Title />
      <Navigation />
      <LinkButtons />
      <HamburgerMenu>
        <div className="absolute right-0 top-[7rem] z-10 flex flex-col border text-medium font-medium md:hidden">
          <MobileNavigation />
          <DividerHorizontal />
          <MobileLinkButtons />
        </div>
      </HamburgerMenu>
    </header>
  );
};

export default Header;
