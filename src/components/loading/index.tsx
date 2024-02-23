import { twMerge } from 'tailwind-merge';

import { SpinnerIcon } from '../icon';
import { LoadingProps } from './type';

const Loading = ({ className }: LoadingProps) => {
  const style = twMerge(
    `flex h-full w-full items-center justify-center ${className}`,
  );

  return (
    <div className={style}>
      <SpinnerIcon />
    </div>
  );
};

export default Loading;
