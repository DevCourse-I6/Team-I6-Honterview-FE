'use client';

import Input, { InputType } from '@/components/input';

const InputDev = () => {
  return (
    <>
      <Input>
        <Input.Text />
      </Input>
      <Input
        className="w-1/5"
        styleType={InputType.Type2}
      >
        <Input.Text />
      </Input>
      <Input styleType={InputType.Type3}>
        <Input.Text />
      </Input>
      <Input className="w-[200px]">
        <Input.Text />
      </Input>
    </>
  );
};

export default InputDev;
