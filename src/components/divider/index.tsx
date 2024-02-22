import { twMerge } from 'tailwind-merge';

import { DividerProps } from './type';

const Divider = ({ className }: DividerProps) => {
  const style = twMerge(
    `h-[0.05rem] border-t-0 bg-neutral-400 opacity-100 dark:opacity-50 ${className} `,
  );
  return <hr className={style} />;
};

export default Divider;
