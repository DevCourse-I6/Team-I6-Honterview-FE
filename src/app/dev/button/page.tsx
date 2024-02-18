'use client';

import Button from '@/components/button';
import { ButtonType } from '@/components/button/types';

const ButtonDev = () => {
  return (
    <>
      <Button>김민수1</Button>
      <Button
        styleType={ButtonType.Type1}
        type="submit"
      >
        김민수2
      </Button>
      <Button styleType={ButtonType.Type2}>김민수3</Button>
      <Button styleType={ButtonType.Type3}>김민수4</Button>
    </>
  );
};

export default ButtonDev;
