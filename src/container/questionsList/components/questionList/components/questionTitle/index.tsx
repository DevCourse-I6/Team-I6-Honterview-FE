import { QuestionTitleProps } from '../../types';

const QuestionTitle = ({ content }: QuestionTitleProps) => {
  return (
    <div className="mr-[3rem] flex-grow text-doubleLarge font-semibold">
      <div className="flex items-start">
        <span className="text-text-40">Q.</span>
        <span className="line-clamp-2 overflow-hidden text-ellipsis break-words px-3">
          {content}
        </span>{' '}
      </div>
    </div>
  );
};

export default QuestionTitle;
