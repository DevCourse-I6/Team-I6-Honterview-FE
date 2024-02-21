import { DividerProps } from './type';

const Divider = ({ className, ...props }: DividerProps) => {
  return (
    <hr
      className={`${className} h-[0.05rem] border-t-0 bg-neutral-400 opacity-100 dark:opacity-50`}
      {...props}
    />
  );
};

export default Divider;
