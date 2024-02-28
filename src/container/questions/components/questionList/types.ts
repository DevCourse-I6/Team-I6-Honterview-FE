export interface IProps {
  handleTagClick: (tag: string) => void;
}

export interface QuestionTagProps {
  tag: string;
  handleTagClick: (tag: string) => void;
}

export interface QuestionTitleProps {
  content: string;
}
