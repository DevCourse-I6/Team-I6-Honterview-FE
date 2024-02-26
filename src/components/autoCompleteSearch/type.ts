export interface DataType {
  id: number;
  name: string;
}

export interface AutocompleteSearchProps {
  totalDatas: DataType[];
  selectedList: string[];
  canCreateItem?: boolean;
  limit?: number;
  onSelectItem: (value: string) => void;
}
