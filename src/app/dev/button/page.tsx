'use client';

import Button from '@/components/button';

const ButtonDev = () => {
  return (
    <>
      <Button>김민수1</Button>
      <Button
        styleType={2}
        type="submit"
      >
        김민수2
      </Button>
      <Button styleType={3}>김민수3</Button>
      <Button styleType={4}>김민수4</Button>
    </>
  );
};

export default ButtonDev;
