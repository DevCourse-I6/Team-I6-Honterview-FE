'use client';

import Input from '@/components/input';

const InputDev = () => {
  return (
    <>
      <Input>
        <Input.Text />
      </Input>
      <Input
        styleType={2}
        className="w-1/5"
      >
        <Input.Text />
      </Input>
      <Input styleType={3}>
        <Input.Text />
      </Input>
      <Input
        styleType={3}
        className="w-[200px]"
      >
        <Input.Text />
      </Input>
    </>
  );
};

export default InputDev;
