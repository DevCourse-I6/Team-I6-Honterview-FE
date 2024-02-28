import { v4 as uuidv4 } from 'uuid';

import Button, { ButtonType } from '@/components/button';
import { Reset, XIcon } from '@/components/icon';

import { SelectedTagsProps } from '../../types';

const SelectedTags = ({
  selectedTags,
  setSelectedTags,
  handleTagClick,
}: SelectedTagsProps) => {
  const handleResetClick = () => {
    setSelectedTags([]);
  };
  return (
    <div className="flex h-[4rem] flex-wrap gap-4 py-4">
      {selectedTags.map((tag: string) => (
        <Button
          key={uuidv4()}
          styleType={ButtonType.Type2}
          className="flex gap-2 rounded-[1rem] px-2 py-2 text-primaries-primary"
        >
          {tag}
          <XIcon
            className=""
            onClick={() => handleTagClick(tag)}
          />
        </Button>
      ))}
      {selectedTags.length > 0 && (
        <div className="flex items-center">
          <Reset
            onClick={handleResetClick}
            className="cursor-pointer"
          />
        </div>
      )}
    </div>
  );
};

export default SelectedTags;
