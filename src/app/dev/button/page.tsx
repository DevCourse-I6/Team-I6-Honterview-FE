'use client';

import Button, { ButtonType } from '@/components/button';

const ButtonDev = () => {
  return (
    <>
      <Button>김민수1</Button>
      <Button
        styleType={ButtonType.Type1}
        className="px-[10rem] py-[2rem]"
        type="submit"
      >
        김민수2
      </Button>
      <Button
        className="text-[3rem]"
        styleType={ButtonType.Type2}
      >
        김민수3
      </Button>
      <Button styleType={ButtonType.Type3}>김민수4</Button>
    </>
  );
};

export default ButtonDev;
