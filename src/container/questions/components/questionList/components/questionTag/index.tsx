import Button, { ButtonType } from '@/components/button';

import { QuestionTagProps } from '../../types';

const QuestionTag = ({ tag, handleTagClick }: QuestionTagProps) => {
  return (
    <Button
      className="mx-3 rounded-full border-none bg-[#e5e7eb] px-4 py-3 font-semibold text-black"
      styleType={ButtonType.Type2}
      onClick={() => handleTagClick(tag)}
    >
      {tag}
    </Button>
  );
};

export default QuestionTag;
