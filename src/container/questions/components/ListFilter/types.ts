export interface IProps {
  setSelectedTags: (selectedTags: string[]) => void;
  handleTagClick: (tag: string) => void;
  selectedTags: string[];
}
