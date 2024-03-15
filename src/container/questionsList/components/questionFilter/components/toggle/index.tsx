import Button, { ButtonType } from '@/components/button';
import {
  ArrowDownSecondaryIcon,
  ArrowUpSecondaryIcon,
} from '@/components/icon';

import { ToggleProps } from '../../types';

const Toggle = ({ toggle, setToggle }: ToggleProps) => {
  return (
    <div className="absolute right-0 bg-gradient-to-r from-transparent via-white/50 to-white pl-5 ">
      <Button
        className="h-[4rem] flex-none rounded-[1rem] px-2 py-2 text-black"
        styleType={ButtonType.Type2}
        onClick={() => setToggle(!toggle)}
      >
        <span className="h-[24px] w-[24px]">
          {toggle ? <ArrowDownSecondaryIcon /> : <ArrowUpSecondaryIcon />}
        </span>
      </Button>
    </div>
  );
};

export default Toggle;
