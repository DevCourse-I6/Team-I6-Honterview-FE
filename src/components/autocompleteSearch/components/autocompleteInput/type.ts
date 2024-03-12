import { AutocompleteCreatedDataType, AutocompleteDataType } from '../../type';

export interface AutocompleteInputProps {
  totalDatas: AutocompleteDataType[];
  selectedList?: AutocompleteCreatedDataType[];
  placeholder?: string;
}
