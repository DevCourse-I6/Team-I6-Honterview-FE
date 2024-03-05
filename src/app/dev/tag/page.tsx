'use client';

import { XIcon } from '@/components/icon';
import Tag from '@/components/tag';

const TagDev = () => {
  return (
    <>
      <Tag>Test</Tag>
      <Tag>
        Test <XIcon className="h-[14px] w-[14px] stroke-white" />
      </Tag>
      <Tag>
        <XIcon className="h-[14px] w-[14px] stroke-black" /> Test
        <XIcon className="h-[14px] w-[14px] stroke-white" />
      </Tag>
    </>
  );
};

export default TagDev;
