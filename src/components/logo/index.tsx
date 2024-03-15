import Image from 'next/image';

import { IProps } from './types';

const Logo = ({ width, height, ...rest }: IProps) => {
  return (
    <Image
      quality={100}
      src="/images/logo.png"
      alt="혼터뷰 로고"
      width={width}
      height={height}
      {...rest}
    />
  );
};

export default Logo;
