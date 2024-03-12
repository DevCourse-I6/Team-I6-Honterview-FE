import { ICategorie } from '@/types/questionsList/categories';

export interface IProps {
  setSelectedTags: (selectedTags: string[]) => void;
  handleTagClick: (tag: string) => void;
  selectedTags: string[];
  categories: ICategorie[];
}

export interface FilterInputProps {
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
  handleTagClick: (tag: string) => void;
  filteredData: {
    name: string;
    id: string;
  }[];
}

export interface ToggleProps {
  toggle: boolean;
  setToggle: (toggle: boolean) => void;
}

export interface UnSelectedTagsProps {
  filteredData: {
    name: string;
    id: string;
  }[];
  handleTagClick: (name: string) => void;
}

export interface SelectedTagsProps {
  selectedTags: string[];
  setSelectedTags: (selectedTags: string[]) => void;
  handleTagClick: (name: string) => void;
}
