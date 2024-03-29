import Button, { ButtonType } from '@/components/button';

import { UnSelectedTagsProps } from '../../types';

const UnSelectedTags = ({
  filteredData,
  handleTagClick,
}: UnSelectedTagsProps) => {
  return (
    <div className="contents gap-4">
      {filteredData.length === 0 && (
        <div className="flex h-[4rem] items-center justify-center py-2 text-[1.6rem] text-text-40">
          검색 결과가 없습니다
        </div>
      )}
      {filteredData.map((tag) => (
        <Button
          key={tag.id}
          className="h-[4rem] flex-none rounded-[1rem] border-text-40 px-2 py-2 text-black"
          styleType={ButtonType.Type2}
          onClick={() => handleTagClick(tag.name)}
        >
          {tag.name}
        </Button>
      ))}
    </div>
  );
};

export default UnSelectedTags;
