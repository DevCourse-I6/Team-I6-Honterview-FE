import { RefObject } from 'react';

import { AutocompleteCreatedDataType, AutocompleteDataType } from '../type';

export interface AutocompleteContextProps {
  autocompleteRef: RefObject<HTMLDivElement> | null;
  autoItemRef: RefObject<HTMLButtonElement> | null;
  isListVisible: boolean;
  isCreateVisible: boolean;
  setIsCreateVisible: (visible: boolean) => void;
  setIsListVisible: (visible: boolean) => void;
  inputValue: string;
  setInputValue: (value: string) => void;
  autocompleteList: AutocompleteDataType[];
  setAutocompleteList: (datas: AutocompleteDataType[]) => void;
  keyboardIndex: number;
  setKeyboardIndex: (index: number) => void;
  handleItemClick: (value: AutocompleteCreatedDataType) => void;
}

export interface AutocompleteProviderProps extends React.PropsWithChildren {
  onSelectItem: (value: AutocompleteCreatedDataType) => void;
}
