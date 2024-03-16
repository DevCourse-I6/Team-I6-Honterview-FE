import { HamburgerIcon } from '@/components/icon';

const HamburgerMenu = () => {
  return (
    <div className="block text-[3rem] md:hidden">
      <button type="button">
        <HamburgerIcon />
      </button>
    </div>
  );
};

export default HamburgerMenu;
