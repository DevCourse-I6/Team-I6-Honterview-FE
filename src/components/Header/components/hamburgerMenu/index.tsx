'use client';

import { useState } from 'react';

import { HamburgerIcon } from '@/components/icon';

import { IProps } from './components/types';

const HamburgerMenu = ({ children }: IProps) => {
  const [active, setActive] = useState(false);

  const handleToggleActive = () => {
    setActive((prev) => !prev);
  };

  return (
    <>
      <div className="block text-[3rem] md:hidden">
        <button
          type="button"
          onClick={handleToggleActive}
          className="flex items-center justify-center"
        >
          <HamburgerIcon />
        </button>
      </div>
      {active && children}
    </>
  );
};

export default HamburgerMenu;
