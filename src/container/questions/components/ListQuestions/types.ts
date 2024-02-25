export interface IProps {
  data: {
    content: string;
    name: string;
  }[];
  listSort: string;
  setListSort: (listSort: string) => void;
  handleTagClick: (tag: string) => void;
}
