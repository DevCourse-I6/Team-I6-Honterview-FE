export interface AutocompleteDataType {
  id: number;
  name: string;
}

export interface AutocompleteSearchProps {
  totalDatas: AutocompleteDataType[];
  selectedList?: AutocompleteDataType[];
  onSelectItem: (value: AutocompleteDataType) => void;
}
