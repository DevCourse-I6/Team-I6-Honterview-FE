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
        <XIcon /> Test <XIcon />
      </Tag>
    </>
  );
};

export default TagDev;
