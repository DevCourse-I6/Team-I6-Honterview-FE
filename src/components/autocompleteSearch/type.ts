export interface AutocompleteDataType {
  id: number;
  name: string;
}

export interface AutocompleteCreatedDataType {
  id: number | 'new';
  name: string;
}
export interface AutocompleteSearchProps {
  totalDatas: AutocompleteDataType[];
  onSelectItem: (value: AutocompleteCreatedDataType) => void;
  placeholder?: string;
  selectedList?: AutocompleteCreatedDataType[];
  canCreate?: boolean;
}
