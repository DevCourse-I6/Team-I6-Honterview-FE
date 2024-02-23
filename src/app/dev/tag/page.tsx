'use client';

import { XIcon } from '@/components/icon';
import Tag from '@/components/tag';

const TagDev = () => {
  return (
    <>
      <Tag>Test</Tag>
      <Tag>
        Test <XIcon />
      </Tag>
      <Tag>
        <XIcon className="text-black" /> Test <XIcon className="text-white" />
      </Tag>
    </>
  );
};

export default TagDev;
