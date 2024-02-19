'use client';

import { useState } from 'react';

import Select from '@/components/select';

const SelectDev = () => {
  const [value, setValue] = useState('김민수2');
  const data = [
    '김민수1',
    '김민수2',
    '김민수3',
    '김민수4',
    '김민수5',
    '김민수6',
  ];
  return (
    <Select
      options={data}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default SelectDev;
