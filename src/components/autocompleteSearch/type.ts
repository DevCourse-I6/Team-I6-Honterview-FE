export interface AutocompleteDataType {
  id: number | 'new';
  name: string;
}

export interface AutocompleteSearchProps {
  totalDatas: AutocompleteDataType[];
  selectedList?: AutocompleteDataType[];
  onSelectItem: (value: AutocompleteDataType) => void;
  canCreate?: boolean;
}
